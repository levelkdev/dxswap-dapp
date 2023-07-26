import { Currency, TokenAmount } from '@swapr/sdk'

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
import { computeNewAmount } from './utils'

const invalidChars = ['-', '+', 'e']

const getBaseQuoteTokens = ({
  sellAmount,
  buyAmount,
  kind,
  sellToken,
  buyToken,
}: {
  sellAmount: TokenAmount
  buyAmount: TokenAmount
  kind: Kind
  sellToken: Currency
  buyToken: Currency
}) => {
  return kind === Kind.Sell
    ? { baseTokenAmount: sellAmount, baseToken: sellToken, quoteTokenAmount: buyAmount, quoteToken: buyToken }
    : { baseTokenAmount: buyAmount, baseToken: buyToken, quoteTokenAmount: sellAmount, quoteToken: sellToken }
}

export interface OrderLimitPriceFieldProps {
  protocol: LimitOrderBase
  sellAmount: TokenAmount
  buyAmount: TokenAmount
  kind: Kind
  limitOrder?: any
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
  limitOrder = {},
  sellToken,
  buyToken,
  setSellAmount,
  setBuyAmount,
  setKind,
}: OrderLimitPriceFieldProps) {
  const { t } = useTranslation('swap')

  const [{ baseToken, quoteToken }, setBaseQuoteTokens] = useState(
    getBaseQuoteTokens({ sellAmount, buyAmount, kind, sellToken, buyToken })
  )

  useEffect(() => {
    setBaseQuoteTokens(getBaseQuoteTokens({ sellAmount, buyAmount, kind, sellToken, buyToken }))
  }, [sellToken, buyToken, sellAmount, buyAmount, kind])

  const inputGroupLabel = `${kind} 1 ${baseToken?.symbol} at`
  const toggleCurrencyButtonLabel = `${quoteToken?.symbol}`

  const [formattedLimitPrice, setFormattedLimitPrice] = useState(protocol.limitPrice)
  const [inputLimitPrice, setInputLimitPrice] = useState(formattedLimitPrice)

  useEffect(() => {
    setInputLimitPrice(protocol.limitPrice)
  }, [protocol.limitPrice])
  // const { marketPriceDiffPercentage, isDiffPositive } = calculateMarketPriceDiffPercentage(
  //   kind ?? Kind.Sell,
  //   marketPrices,
  //   formattedLimitPrice.toString()
  // )

  // const showPercentage =
  //   Number(marketPriceDiffPercentage.toFixed(1)) !== 0 && Number(marketPriceDiffPercentage) !== -100

  // useEffect(() => {
  //   setInputLimitPrice(formattedLimitPrice)
  // }, [formattedLimitPrice])
  // const limitPrice = protocol.getTokenLimitPrices()
  // useEffect(() => {
  //   setFormattedLimitPrice(limitPrice)
  //   if (!inputFocus) {
  //     setInputLimitPrice(limitPrice)
  //   }
  // }, [inputFocus, limitPrice])

  /**
   * Handle the limit price input change. Compute the buy amount and update the state.
   */
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event => {
    protocol.onUserUpadtedLimitPrice(true)

    // Parse the limit price
    const nextLimitPriceFormatted = event.target.value // When the limit price is empty, set the limit price to 0
    if (nextLimitPriceFormatted.split('.').length > 2) {
      event.preventDefault()
      return
    }
    if (nextLimitPriceFormatted === '' || nextLimitPriceFormatted === '0.') {
      setInputLimitPrice(nextLimitPriceFormatted)
    } else if (nextLimitPriceFormatted === '.') {
      setInputLimitPrice('0.')
      setFormattedLimitPrice('0')
      return
    } else {
      const nextLimitPriceFloat = parseFloat(nextLimitPriceFormatted ?? 0)
      if (nextLimitPriceFloat < 0 || isNaN(nextLimitPriceFloat)) {
        setInputLimitPrice('0')
        setFormattedLimitPrice('0')
        return
      }
      setInputLimitPrice(nextLimitPriceFormatted)
      setFormattedLimitPrice(nextLimitPriceFormatted)
      protocol.onLimitPriceChange(nextLimitPriceFormatted)
      protocol.onUserUpadtedLimitPrice(true)

      const { newBuyTokenAmount, newSellTokenAmount } = computeNewAmount(
        buyAmount,
        sellAmount,
        nextLimitPriceFloat,
        limitOrder.kind
      )

      if (kind === Kind.Sell) {
        setBuyAmount(newBuyTokenAmount)
        protocol.onBuyAmountChange(newBuyTokenAmount)
      } else {
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
    const limitPrice = protocol.getTokenLimitPrices()
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
              setInputLimitPrice(formattedLimitPrice)
              setFormattedLimitPrice(formattedLimitPrice)
            }
          }}
          value={inputLimitPrice}
          onChange={onChangeHandler}
        />
        <InputGroup.ButtonAddonsWrapper>
          <ToggleCurrencyButton onClick={() => setKind(kind === Kind.Sell ? Kind.Buy : Kind.Sell)}>
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
