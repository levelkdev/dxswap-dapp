import { MenuBar } from '../../../pages/MenuBar'
import { SwapPage } from '../../../pages/SwapPage'
import { TokenMenu } from '../../../pages/TokenMenu'
import { TransactionHelper } from '../../../utils/TransactionHelper'
import { NetworkSwitcher } from '../../../pages/NetworkSwitcher'
import { MenuBar } from '../../../pages/MenuBar'

describe('Swap page smoke tests', () => {
  beforeEach(() => {
    SwapPage.visitSwapPage()
    TransactionHelper.waitForTokenLists()
  })
  it('Should display swap box with 2 inputs and 2 currency selectors [TC-20]', () => {
    SwapPage.getSwapBox().should('be.visible')
    SwapPage.getCurrencySelectors().should('have.length', 2)
    SwapPage.getToInput().should('be.visible')
    SwapPage.getFromInput().should('be.visible')
  })
  it('Should display token menu after clicking select token [TC-20]', () => {
    SwapPage.openTokenToSwapMenu()
    TokenMenu.getPicker().should('be.visible')
  })
  it('Should pick only eth as default from value [TC-20]', () => {
    SwapPage.getCurrencySelectors().first().should('contain.text', 'ETH')
    SwapPage.getCurrencySelectors().last().should('contain.text', 'select Token')
  })
  it('Should type in numbers into FROM input [TC-21]', () => {
    SwapPage.typeValueFrom('100.32')
    SwapPage.getFromInput().should('contain.value', '100.32')
  })
  it('Should not allow to type not numbers into FROM input [TC-22]', () => {
    SwapPage.typeValueFrom('!#$%^&*(*)_qewruip')
    SwapPage.getFromInput().should('have.value', '')
  })
  it('Should type in numbers into TO input [TC-23]', () => {
    SwapPage.typeValueTo('100.32')
    SwapPage.getToInput().should('contain.value', '100.32')
  })
  it('Should not allow to type not numbers into TO input [TC-24]', () => {
    SwapPage.typeValueTo('!#$%^&*(*)_qewruip')
    SwapPage.getToInput().should('have.value', '')
  })
  it('Should allow to select wrapped eth token as TO input [TC-25]', () => {
    SwapPage.openTokenToSwapMenu().chooseToken('weth')
    SwapPage.getCurrencySelectors().last().focus().should('contain.text', 'WETH')
  })
  it('Should allow to select wrapped eth token as FROM input [TC-26]', () => {
    SwapPage.getCurrencySelectors().first().click()
    TokenMenu.chooseToken('weth')
    SwapPage.getCurrencySelectors().first().focus().should('contain.text', 'WETH')
  })
  it('Should allow to select other token as TO input [TC-27]', () => {
    SwapPage.openTokenToSwapMenu().chooseToken('usdc')
    SwapPage.getCurrencySelectors().last().should('contain.text', 'USDC')
  })
  it('Should allow to select other token as FROM input [TC-28]', () => {
    SwapPage.getCurrencySelectors().first().click()
    TokenMenu.chooseToken('usdc')
    SwapPage.getCurrencySelectors().first().should('contain.text', 'USDC')
  })
  it('Should switch the currency selectors when choosing the same value [TC-29]', () => {
    cy.wait(1000)
    SwapPage.openTokenToSwapMenu().chooseToken('weth')
    SwapPage.getCurrencySelectors().first().click({ force: true })
    TokenMenu.chooseToken('weth')
    SwapPage.getCurrencySelectors().first().should('contain.text', 'WETH')
    SwapPage.getCurrencySelectors().last().should('contain.text', 'ETH')
  })
  it('Should switch token places when using switch button [TC-30]', () => {
    SwapPage.openTokenToSwapMenu().chooseToken('weth')
    SwapPage.switchTokens()
    SwapPage.getCurrencySelectors().first().should('contain.text', 'WETH')
    SwapPage.getCurrencySelectors().last().should('contain.text', 'ETH')
  })
  it('Should connect button which opens network switcher be displayed instead of confirm button [TC-31]', () => {
    SwapPage.getConfirmButton().should('be.visible').should('contain.text', 'Connect wallet')
    SwapPage.getConfirmButton().click({ force: true })
    SwapPage.getWalletConnectList().scrollIntoView().should('be.visible')
  })
  it('Should display connect button when transaction data is filled [TC-32]', () => {
    SwapPage.openTokenToSwapMenu().chooseToken('usdc')
    SwapPage.typeValueFrom('100')
    SwapPage.getConfirmButton().should('contain.text', 'Connect wallet')
    SwapPage.getConfirmButton().click({ force: true })

    SwapPage.getWalletConnectList().scrollIntoView().should('be.visible')
    MenuBar.getSwap().click()
  })
  // TODO Remove skip when bug #1099 is fixed
  it.skip('Should calculate output based on FROM and display it in TO section [TC-33]', () => {
    SwapPage.openTokenToSwapMenu().chooseToken('usdc')
    SwapPage.typeValueFrom('100')
    SwapPage.getToInput().should('not.have.value', undefined)
  })
  it.skip('Should calculate output based on TO and display it in FROM section [TC-34]', () => {
    SwapPage.openTokenToSwapMenu().chooseToken('usdc')
    SwapPage.typeValueTo('100')
    SwapPage.getFromInput().should('not.have.value', undefined)
  })
})
