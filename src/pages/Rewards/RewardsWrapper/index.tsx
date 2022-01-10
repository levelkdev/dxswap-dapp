import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { SwapPoolTabs } from '../../../components/NavigationTabs'
import { PageWrapper } from '../../Pools/styleds'
import { Link } from 'react-router-dom'

import { TYPE } from '../../../theme'
import { Box, Flex, Text } from 'rebass'
import { RowBetween, RowFixed } from '../../../components/Row'
import { AutoColumn } from '../../../components/Column'
import { ReactComponent as ThreeBlurredCircles } from '../../../assets/svg/three-blurred-circles.svg'

import { ChevronDown } from 'react-feather'
import { useToken } from '../../../hooks/Tokens'
import { UndecoratedLink } from '../../../components/UndercoratedLink'
import DoubleCurrencyLogo from '../../../components/DoubleLogo'
import { PairState, usePair } from '../../../data/Reserves'

import PairSearchModal from '../../../components/SearchModal/PairSearchModal'
import { ButtonSecondary } from '../../../components/Button'
import { useLiquidityMiningFeatureFlag } from '../../../hooks/useLiquidityMiningFeatureFlag'

import { PairsFilterType } from '../../../components/Pool/ListFilter'
import Rewards from '..'
import { Pair } from '@swapr/sdk'
import { ResetFilterIcon, ResetFilterIconContainer } from '../../Pools'

const TitleRow = styled(RowBetween)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    flex-direction: column-reverse;
  `};
`

const PointableFlex = styled(Flex)`
  border: solid 1px ${props => props.theme.bg3};
  border-radius: 8px;
  height: 36px;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
`

const ResponsiveButtonSecondary = styled(ButtonSecondary)`
  width: fit-content;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

const ButtonRow = styled(RowFixed)`
  gap: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 8px;
  `};
`

export default function RewardsWrapper({
  match: {
    params: { currencyIdA, currencyIdB }
  }
}: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>) {
  const token0 = useToken(currencyIdA)
  const token1 = useToken(currencyIdB)
  console.log(token0, currencyIdA)
  const wrappedPair = usePair(token0 || undefined, token1 || undefined)
  const [aggregatedDataFilter, setAggregatedDataFilter] = useState(PairsFilterType.ALL)
  const [filterPair, setFilterPair] = useState<Pair | null>(wrappedPair[1])

  const liquidityMiningEnabled = useLiquidityMiningFeatureFlag()
  const [openPairsModal, setOpenPairsModal] = useState(false)

  const handleAllClick = useCallback(() => {
    setOpenPairsModal(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setAggregatedDataFilter(PairsFilterType.MY)
    setOpenPairsModal(false)
  }, [])

  const handlePairSelect = useCallback(pair => {
    setFilterPair(pair)
  }, [])
  const handleFilterTokenReset = useCallback(() => {
    setFilterPair(null)
  }, [])
  console.log(token0 !== undefined && token1 !== undefined ? wrappedPair[1] : undefined)
  console.log(wrappedPair)
  if (token0 && (wrappedPair[0] === PairState.NOT_EXISTS || wrappedPair[0] === PairState.INVALID))
    return <Redirect to="/rewards" />
  return (
    <>
      <PageWrapper>
        <SwapPoolTabs active={'pool'} />

        <AutoColumn gap="lg" justify="center">
          <AutoColumn gap="lg" style={{ width: '100%' }}>
            <TitleRow style={{ marginTop: '1rem' }} padding={'0'}>
              <Flex alignItems="center">
                <Box mr="8px">
                  <UndecoratedLink to="/pools">
                    <TYPE.mediumHeader fontWeight="400" fontSize="26px" lineHeight="32px" color="text4">
                      Rewards
                    </TYPE.mediumHeader>
                  </UndecoratedLink>
                </Box>
                <Box mr="8px">
                  <TYPE.mediumHeader fontWeight="400" fontSize="26px" lineHeight="32px" color="text4">
                    /
                  </TYPE.mediumHeader>
                </Box>
                {aggregatedDataFilter === PairsFilterType.MY ? (
                  <Box>
                    <TYPE.mediumHeader fontWeight="400" fontSize="26px" lineHeight="32px">
                      {aggregatedDataFilter.toUpperCase()}
                    </TYPE.mediumHeader>
                  </Box>
                ) : (
                  <PointableFlex onClick={handleAllClick}>
                    {!filterPair && (
                      <Box mr="6px" height="21px">
                        <ThreeBlurredCircles />
                      </Box>
                    )}
                    {filterPair && (
                      <Box mr="4px">
                        <DoubleCurrencyLogo
                          loading={!token0 || !token1}
                          currency0={token0 || undefined}
                          currency1={token1 || undefined}
                          size={20}
                        />
                      </Box>
                    )}
                    <Box mr="4px">
                      <Text fontWeight="600" fontSize="16px" lineHeight="20px">
                        {filterPair ? `${filterPair.token0.symbol}/${filterPair.token1.symbol}` : 'ALL'}
                      </Text>
                    </Box>
                    <Box>
                      <ChevronDown size={12} />
                    </Box>
                    {filterPair && (
                      <Box ml="6px">
                        <ResetFilterIconContainer onClick={handleFilterTokenReset}>
                          <ResetFilterIcon />
                        </ResetFilterIconContainer>
                      </Box>
                    )}
                  </PointableFlex>
                )}
              </Flex>
              <ButtonRow>
                {liquidityMiningEnabled && (
                  <ResponsiveButtonSecondary as={Link} padding="8px 14px" to="/liquidity-mining/create">
                    <Text fontWeight={700} fontSize={12} lineHeight="15px">
                      CREATE CAMPAIGN
                    </Text>
                  </ResponsiveButtonSecondary>
                )}
              </ButtonRow>
            </TitleRow>
          </AutoColumn>
        </AutoColumn>
        <Rewards
          pair={token0 !== undefined && token1 !== undefined ? wrappedPair[1] : undefined}
          dataFilter={aggregatedDataFilter}
          setDataFiler={setAggregatedDataFilter}
        />
      </PageWrapper>
      <PairSearchModal isOpen={openPairsModal} onDismiss={handleModalClose} onPairSelect={handlePairSelect} />
    </>
  )
}
