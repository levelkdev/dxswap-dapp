import React from 'react'
import { CurrencySearchContext } from '../CurrencySearch/CurrencySearch.context'
import { ManageListsContext, ListRowContext } from '../ManageLists/ManageLists.context'
import { CurrencySearchModalComponent } from './CurrencySearchModal.component'
import { CurrencySearchModalContext } from './CurrencySearchModal.context'
import { useCurrencySearchModalSwap } from './CurrencySearchModal.hooks'
import { CurrencySearchModalProps } from './CurrencySearchModal.types'

export const CurrencySearchModal = (props: CurrencySearchModalProps) => {
  const {
    currencySearchContext,
    listRowContext,
    manageListsContext,
    currencySearchModalContext
  } = useCurrencySearchModalSwap()

  return (
    <CurrencySearchModalContext.Provider value={currencySearchModalContext}>
      <CurrencySearchContext.Provider value={currencySearchContext}>
        <ManageListsContext.Provider value={manageListsContext}>
          <ListRowContext.Provider value={listRowContext}>
            <CurrencySearchModalComponent {...props} />
          </ListRowContext.Provider>
        </ManageListsContext.Provider>
      </CurrencySearchContext.Provider>
    </CurrencySearchModalContext.Provider>
  )
}
