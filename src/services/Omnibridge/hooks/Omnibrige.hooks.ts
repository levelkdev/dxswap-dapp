import { ChainId, Currency, Token } from '@swapr/sdk'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectBridgeTokens,
  selectSupportedLists,
  selectBridgeActiveTokens,
  selectBridgeCollectableTx,
  selectSupportedBridgesForUI,
  selectBridgeListsLoadingStatus,
  selectBridgeSupportedTokensOnChain
} from '../store/Omnibridge.selectors'
import { AppState } from '../../../state'
import { commonActions } from '../store/Common.reducer'
import { tryParseAmount } from '../../../state/swap/hooks'
import { omnibridgeUIActions } from '../store/UI.reducer'
import { useCurrencyBalances } from '../../../state/wallet/hooks'
import { NEVER_RELOAD, useSingleCallResult } from '../../../state/multicall/hooks'

import { useActiveWeb3React } from '../../../hooks'
import { useOmnibridge } from '../OmnibridgeProvider'
import { parseStringOrBytes32 } from '../../../hooks/Tokens'
import { useNativeCurrency } from '../../../hooks/useNativeCurrency'
import { useBytes32TokenContract, useTokenContract, useWrappingToken } from '../../../hooks/useContract'

import { isAddress } from '../../../utils'
import { currencyId } from '../../../utils/currencyId'

import { BridgeTxsFilter } from '../Omnibridge.types'
import { WrappedTokenInfo } from '../../../state/lists/wrapped-token-info'

export const useBridgeSupportedTokens = () => {
  const { chainId } = useActiveWeb3React()
  const tokens = useSelector((state: AppState) => selectBridgeSupportedTokensOnChain(state, chainId ?? 0))

  return tokens
}

export function useBridgeToken(tokenAddress?: string, chainId?: ChainId): Token | undefined | null {
  const { chainId: activeChainId } = useActiveWeb3React()
  const selectedChainId = chainId ?? activeChainId
  const allTokens = useSelector(selectBridgeTokens)
  const tokensOnChain = allTokens[selectedChainId ?? 0]

  const nativeCurrency = useNativeCurrency(selectedChainId)
  const nativeCurrencyWrapper = useWrappingToken(nativeCurrency, selectedChainId)

  const address = isAddress(tokenAddress)
  const token: Token | undefined = address ? tokensOnChain?.[address] : undefined

  const tokenContract = useTokenContract(address ? address : undefined, false)
  const tokenContractBytes32 = useBytes32TokenContract(address ? address : undefined, false)

  const tokenName = useSingleCallResult(token ? undefined : tokenContract, 'name', undefined, NEVER_RELOAD)
  const tokenNameBytes32 = useSingleCallResult(
    token ? undefined : tokenContractBytes32,
    'name',
    undefined,
    NEVER_RELOAD
  )
  const symbol = useSingleCallResult(token ? undefined : tokenContract, 'symbol', undefined, NEVER_RELOAD)
  const symbolBytes32 = useSingleCallResult(token ? undefined : tokenContractBytes32, 'symbol', undefined, NEVER_RELOAD)
  const decimals = useSingleCallResult(token ? undefined : tokenContract, 'decimals', undefined, NEVER_RELOAD)

  return useMemo(() => {
    if (!nativeCurrencyWrapper) return undefined
    if (nativeCurrencyWrapper.address === tokenAddress) return nativeCurrencyWrapper
    if (token) return token
    if (!chainId || !address) return undefined
    if (selectedChainId === activeChainId) {
      if (decimals.result) {
        return new Token(
          chainId,
          address,
          decimals.result[0],
          parseStringOrBytes32(symbol.result?.[0], symbolBytes32.result?.[0], 'UNKNOWN'),
          parseStringOrBytes32(tokenName.result?.[0], tokenNameBytes32.result?.[0], 'Unknown Token')
        )
      }
    }

    return undefined
  }, [
    activeChainId,
    address,
    chainId,
    decimals.result,
    nativeCurrencyWrapper,
    selectedChainId,
    symbol.result,
    symbolBytes32.result,
    token,
    tokenAddress,
    tokenName.result,
    tokenNameBytes32.result
  ])
}

export const useBridgeCurrency = (currencyId: string | undefined, chainId: ChainId): Currency | null | undefined => {
  const nativeCurrency = useNativeCurrency(chainId)
  const isNativeCurrency = currencyId?.toUpperCase() === nativeCurrency.symbol
  const token = useBridgeToken(isNativeCurrency ? undefined : currencyId, chainId)

  return isNativeCurrency ? nativeCurrency : token
}

export const useBridgeTokenInfo = (currency?: Currency, chainId?: ChainId): WrappedTokenInfo | undefined => {
  const { chainId: activeChainId } = useActiveWeb3React()
  const allTokens = useSelector(selectBridgeTokens)

  const selectedChainId = chainId || activeChainId

  const retVal = useMemo(() => {
    if (!currency || !(currency instanceof Token) || !selectedChainId) return undefined
    return allTokens[selectedChainId][currency.address] as WrappedTokenInfo
  }, [allTokens, currency, selectedChainId])

  return retVal
}

export const useBridgeActiveTokenMap = () => {
  const tokenMap = useSelector(selectBridgeActiveTokens)

  return tokenMap
}

export const useBridgeSupportedLists = () => {
  const supportedLists = useSelector(selectSupportedLists)

  return supportedLists
}

export const useBridgeListsLoadingStatus = () => {
  const isLoading = useSelector(selectBridgeListsLoadingStatus)

  return isLoading
}

export const useActiveListsHandlers = () => {
  const dispatch = useDispatch()
  const activeLists = useSelector((state: AppState) => state.omnibridge.common.activeLists)

  return {
    activateList: useCallback((listId: string) => dispatch(commonActions.activateLists([listId])), [dispatch]),
    deactivateList: useCallback((listId: string) => dispatch(commonActions.deactivateLists([listId])), [dispatch]),
    isListActive: useCallback((listId: string) => activeLists.includes(listId), [activeLists])
  }
}

export const useBridgeFetchDynamicLists = () => {
  const omnibridge = useOmnibridge()
  const { from, to } = useSelector((state: AppState) => state.omnibridge.UI)

  useEffect(() => {
    if (from.chainId && to.chainId) {
      omnibridge.fetchDynamicLists()
    }
  }, [from.chainId, omnibridge, to.chainId])
}

export const useShowAvailableBridges = () => {
  const showAvailableBridges = useSelector((state: AppState) => state.omnibridge.UI.showAvailableBridges)

  return showAvailableBridges
}

export const useAvailableBridges = () => {
  const availableBridges = useSelector(selectSupportedBridgesForUI)

  return availableBridges.filter(bridge => bridge.status !== 'failed')
}

export const useActiveBridge = () => {
  const activeBridge = useSelector((state: AppState) => state.omnibridge.common.activeBridge)

  return activeBridge
}

export function useBridgeActionHandlers(): {
  onCurrencySelection: (currency: Currency | string) => void
  onUserInput: (typedValue: string) => void
  onFromNetworkChange: (chainId: ChainId) => void
  onToNetworkChange: (chainId: ChainId) => void
  onSwapBridgeNetworks: () => void
} {
  const dispatch = useDispatch()

  const fromChainId = useSelector((state: AppState) => state.omnibridge.UI.from.chainId)
  const toChainId = useSelector((state: AppState) => state.omnibridge.UI.to.chainId)

  const onFromNetworkChange = useCallback(
    (chainId: ChainId) => {
      if (chainId === toChainId) {
        dispatch(omnibridgeUIActions.swapBridgeChains())
        return
      }
      dispatch(omnibridgeUIActions.setFrom({ chainId }))
    },
    [dispatch, toChainId]
  )

  const onToNetworkChange = useCallback(
    (chainId: ChainId) => {
      if (chainId === fromChainId) {
        dispatch(omnibridgeUIActions.swapBridgeChains())
        return
      }
      dispatch(omnibridgeUIActions.setTo({ chainId }))
    },
    [dispatch, fromChainId]
  )

  const onSwapBridgeNetworks = useCallback(() => {
    dispatch(omnibridgeUIActions.swapBridgeChains())
  }, [dispatch])

  const onCurrencySelection = useCallback(
    (currency: Currency | string) => {
      dispatch(
        omnibridgeUIActions.setFrom({
          address: currency instanceof Currency ? currencyId(currency) : currency,
          decimals: currency instanceof Currency ? currency.decimals : undefined,
          name: currency instanceof Currency ? currency.name : '',
          symbol: currency instanceof Currency ? currency.symbol : ''
        })
      )
      // dispatch(omnibridgeUIActions.setTo({ address: currency instanceof Currency ? currencyId(currency) : currency }))
    },
    [dispatch]
  )

  const onUserInput = useCallback(
    (typedValue: string) => {
      dispatch(omnibridgeUIActions.setFrom({ value: typedValue }))
      // dispatch(omnibridgeUIActions.setTo({ value: '' }))
      dispatch(commonActions.setActiveBridge(undefined))
    },
    [dispatch]
  )

  return {
    onCurrencySelection,
    onUserInput,
    onFromNetworkChange,
    onToNetworkChange,
    onSwapBridgeNetworks
  }
}

export const useBridgeInfo = () => {
  const { account, chainId } = useActiveWeb3React()

  const fromNetwork = useSelector((state: AppState) => state.omnibridge.UI.from)
  const toChainId = useSelector((state: AppState) => state.omnibridge.UI.to.chainId)

  const { address: currencyId, value: typedValue, chainId: fromChainId } = fromNetwork

  const bridgeCurrency = useBridgeCurrency(currencyId, fromChainId)

  const parsedAmount = useMemo(() => tryParseAmount(typedValue, bridgeCurrency ?? undefined, chainId), [
    bridgeCurrency,
    chainId,
    typedValue
  ])

  const [currencyBalance] = useCurrencyBalances(account ?? undefined, [bridgeCurrency ?? undefined])

  const isBalanceSufficient = useMemo(
    () => currencyBalance && parsedAmount && currencyBalance.greaterThan(parsedAmount),
    [currencyBalance, parsedAmount]
  )

  return {
    isBalanceSufficient,
    currencyId,
    bridgeCurrency,
    currencyBalance,
    parsedAmount,
    typedValue,
    fromChainId,
    toChainId
  }
}

export const useBridgeTxsFilter = () => {
  const dispatch = useDispatch()
  const setFilter = (filter: BridgeTxsFilter) => {
    dispatch(omnibridgeUIActions.setBridgeTxsFilter(filter))
  }

  return setFilter
}

export const useBridgeCollectHandlers = () => {
  const dispatch = useDispatch()
  const { account } = useActiveWeb3React()
  const collectableTx = useSelector((state: AppState) => selectBridgeCollectableTx(state, account ?? undefined))

  const [collecting, setCollecting] = useState(false)

  const setCollectableTx = useCallback(
    (txHash: string | null) => {
      dispatch(omnibridgeUIActions.setCollectableTx(txHash))
    },
    [dispatch]
  )

  const collectableCurrency = useBridgeToken(collectableTx?.assetAddressL1, collectableTx?.fromChainId ?? 0)
  const nativeCurrency = useNativeCurrency(collectableTx?.fromChainId)

  return {
    collecting,
    setCollecting,
    collectableTx,
    setCollectableTx,
    collectableCurrency: collectableCurrency ?? nativeCurrency
  }
}
