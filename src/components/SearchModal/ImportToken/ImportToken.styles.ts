import styled from 'styled-components'

import { ButtonError } from '../../Button'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.bg1And2};
`

export const BottomSectionContainer = styled.div`
  background-color: ${({ theme }) => theme.bg1};
  padding: 20px;
`

export const SpacedButtonError = styled(ButtonError)`
  margin-top: 24px;
`
