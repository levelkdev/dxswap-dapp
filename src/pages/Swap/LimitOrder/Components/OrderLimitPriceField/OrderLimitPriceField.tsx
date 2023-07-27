import { Currency, TokenAmount } from '@swapr/sdk'

import { parseUnits } from 'ethers/lib/utils'
import { useEffect, useState } from 'react'
import { RefreshCw } from 'react-feather'
import { useTranslation } from 'react-i18next'

import { Kind, LimitOrderBase } from '../../../../../services/LimitOrders'
import { InputGroup } from '../InputGroup'

import { MarketPriceButton } from './MarketPriceButton'
import {
  LimitLabel,
  MarketPriceDiff,
  SetToMarket,
  SwapTokenIconWrapper,
  SwapTokenWrapper,
  ToggleCurrencyButton,
} from './styles'

const invalidChars = ['-', '+', 'e']

const getBaseQuoteTokens = ({ kind, sellToken, buyToken }: { kind: Kind; sellToken: Currency; buyToken: Currency }) => {
  return kind === Kind.Sell
    ? { baseToken: sellToken, quoteToken: buyToken }
    : { baseToken: buyToken, quoteToken: sellToken }
}
const regex = /^(\d+\.\d{0,2})0*$/

// function formatNumber(number: string | number): string {
//   // Check if the input is a string
//   if (typeof number === 'string') {
//     number = parseFloat(number)
//   }

//   // Get the decimal part of the number
//   const decimals = number.toFixed(6)

//   // Check if the decimal part is all zeros
//   if (decimals.endsWith('0')) {
//     if (decimals.includes('.') && Number(decimals) > 0) {
//       const match = regex.test(decimals)
//       if (match) {
//         // @ts-ignore
//         return match[1]
//       } else {
//         return decimals
//       }
//       return decimals
//     }
//     return Math.floor(number).toString()
//   } else {
//     return decimals
//   }
// }

export interface OrderLimitPriceFieldProps {
  protocol: LimitOrderBase
  sellAmount: TokenAmount
  buyAmount: TokenAmount
  kind: Kind
  sellToken: Currency
  buyToken: Currency
  setSellAmount(t: TokenAmount): void
  setBuyAmount(t: TokenAmount): void
  setKind(t: Kind): void
}

export function OrderLimitPriceField({
  protocol,
  sellAmount,
  buyAmount,
  kind,
  sellToken,
  buyToken,
  setSellAmount,
  setBuyAmount,
  setKind,
}: OrderLimitPriceFieldProps) {
  const { t } = useTranslation('swap')

  const { baseToken, quoteToken } = getBaseQuoteTokens({ kind, sellToken, buyToken })

  const inputGroupLabel = `${kind} 1 ${baseToken?.symbol} at`
  const toggleCurrencyButtonLabel = `${quoteToken?.symbol}`

  useEffect(() => {
    const limitPrice = protocol.getLimitPrice()
    setInputLimitPrice(Number(limitPrice).toString())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [protocol.limitPrice])

  // const [formattedLimitPrice, setFormattedLimitPrice] = useState(protocol.limitPrice)
  const [inputLimitPrice, setInputLimitPrice] = useState(protocol.limitPrice)

  // const { marketPriceDiffPercentage, isDiffPositive } = calculateMarketPriceDiffPercentage(
  //   kind ?? Kind.Sell,
  //   marketPrices,
  //   formattedLimitPrice.toString()
  // )

  // const showPercentage =
  //   Number(marketPriceDiffPercentage.toFixed(1)) !== 0 && Number(marketPriceDiffPercentage) !== -100

  /**
   * Handle the limit price input change. Compute the buy amount and update the state.
   */
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    const nextLimitPriceFormatted = event.target.value // When the limit price is empty, set the limit price to 0
    if (nextLimitPriceFormatted.split('.').length > 2) {
      event.preventDefault()
      return
    }
    if (nextLimitPriceFormatted === '' || nextLimitPriceFormatted === '0.') {
      setInputLimitPrice(nextLimitPriceFormatted)
    } else if (nextLimitPriceFormatted === '.') {
      setInputLimitPrice('0.')
      protocol.onLimitPriceChange('0')
      return
    } else {
      const nextLimitPriceFloat = parseFloat(nextLimitPriceFormatted ?? 0)
      if (nextLimitPriceFloat < 0 || isNaN(nextLimitPriceFloat)) {
        setInputLimitPrice('0')
        protocol.onLimitPriceChange('0')
        return
      }

      setInputLimitPrice(nextLimitPriceFormatted)

      protocol.onLimitPriceChange(nextLimitPriceFormatted)
      protocol.onUserUpadtedLimitPrice(true)

      if (protocol.kind === Kind.Sell) {
        protocol.quoteBuyAmount = new TokenAmount(
          protocol.buyToken,
          parseUnits(nextLimitPriceFormatted, protocol.buyToken.decimals).toString()
        )
        protocol.quoteSellAmount = new TokenAmount(
          protocol.sellToken,
          parseUnits('1', protocol.sellToken.decimals).toString()
        )
      } else {
        protocol.quoteBuyAmount = new TokenAmount(
          protocol.buyToken,
          parseUnits('1', protocol.buyToken.decimals).toString()
        )
        protocol.quoteSellAmount = new TokenAmount(
          protocol.sellToken,
          parseUnits(nextLimitPriceFormatted, protocol.sellToken.decimals).toString()
        )
      }
      const limitPrice = protocol.getLimitPrice()
      protocol.onLimitPriceChange(limitPrice)

      if (kind === Kind.Sell) {
        const buyAmount = parseFloat(protocol.sellAmount.toExact()) * parseFloat(limitPrice)

        const newBuyTokenAmount = new TokenAmount(
          protocol.buyToken,
          parseUnits(buyAmount.toFixed(6), protocol.buyToken.decimals).toString()
        )
        setBuyAmount(newBuyTokenAmount)
        protocol.onBuyAmountChange(newBuyTokenAmount)
      } else {
        const sellAmount = parseFloat(protocol.buyAmount.toExact()) * parseFloat(limitPrice)

        const newSellTokenAmount = new TokenAmount(
          protocol.sellToken,
          parseUnits(sellAmount.toFixed(6), protocol.sellToken.decimals).toString()
        )

        setSellAmount(newSellTokenAmount)
        protocol.onSellAmountChange(newSellTokenAmount)
      }
    }
  }

  const onClickGetMarketPrice = async () => {
    protocol.onUserUpadtedLimitPrice(false)

    await protocol.getQuote()
    if (kind === Kind.Sell) {
      setBuyAmount(protocol.buyAmount)
    } else {
      setSellAmount(protocol.sellAmount)
    }
    const limitPrice = protocol.getLimitPrice()
    protocol.onLimitPriceChange(limitPrice)
    setInputLimitPrice(limitPrice)
  }

  // TODO: fix it
  const showPercentage = false
  const marketPriceDiffPercentage = 0
  const isDiffPositive = false

  return (
    <InputGroup>
      <LimitLabel htmlFor="limitPrice">
        <span>
          {inputGroupLabel}
          {showPercentage && (
            <MarketPriceDiff isPositive={isDiffPositive}> ({marketPriceDiffPercentage.toFixed(2)}%)</MarketPriceDiff>
          )}
        </span>
        {!protocol.userUpdatedLimitPrice && buyAmount?.currency && sellAmount?.currency ? (
          <MarketPriceButton key={`${buyToken.symbol}-${sellToken.symbol}`} />
        ) : (
          <SetToMarket onClick={onClickGetMarketPrice}>{t('limitOrder.getMarketPrice')}</SetToMarket>
        )}
      </LimitLabel>
      <InputGroup.InnerWrapper>
        <InputGroup.Input
          id="limitPrice"
          type="number"
          onKeyDown={e => {
            if (invalidChars.includes(e.key)) {
              e.preventDefault()
            }
          }}
          onBlur={e => {
            if (e.target.value.trim() === '' || e.target.value === '0' || e.target.value === '0.') {
              setInputLimitPrice(protocol.limitPrice)
            }
          }}
          value={inputLimitPrice}
          onChange={onChangeHandler}
        />
        <InputGroup.ButtonAddonsWrapper>
          <ToggleCurrencyButton
            onClick={() => {
              const newKind = kind === Kind.Sell ? Kind.Buy : Kind.Sell
              setKind(newKind)
              protocol.onKindChange(newKind)

              const limitPrice = protocol.getLimitPrice()
              setInputLimitPrice(limitPrice)
            }}
          >
            <SwapTokenWrapper>
              {toggleCurrencyButtonLabel}
              <SwapTokenIconWrapper>
                <RefreshCw size={13} />
              </SwapTokenIconWrapper>
            </SwapTokenWrapper>
          </ToggleCurrencyButton>
        </InputGroup.ButtonAddonsWrapper>
      </InputGroup.InnerWrapper>
    </InputGroup>
  )
}
