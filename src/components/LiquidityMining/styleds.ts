import styled from 'styled-components'
import { DarkCard } from '../Card'

export const Card = styled(DarkCard)`
  width: 100%;
`
export const SmoothGradientCard = styled(Card)<{
  selectable?: boolean
  active?: boolean
  width?: string
  height?: string
  background?: string
}>`
  color: ${props => (props.active ? props.theme.text3 : props.theme.text5)};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-image: unset;
  text-align: center;
  justify-content: end;
  background-image: unset;
  opacity: ${props => (!props.selectable || props.active ? '1' : '0.4')};

  cursor: pointer;
  ::before {
    border-color: ${props => !props.active && 'rgba(70, 67, 102, 1)'};
    border-style: solid;
    border-width: 1px;
    border-image-source: ${props =>
      props.active && 'linear-gradient(114.28deg, rgba(36, 23, 137, 0.2) 0%, #282167 91.9%)'};

    backdrop-filter: blur(20px);

    background: ${props =>
      props.background
        ? props.background
        : props.active
        ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(114.19deg, rgba(90, 12, 255, 0.8) -9%, rgba(17, 8, 35, 0) 113.1%)'
        : 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(114.19deg, rgba(90, 12, 255, 0.1) -9%, rgba(17, 8, 35, 0) 113.1%) '};
  }

  display: flex;
  align-items: center;
  ${props => props.theme.mediaWidth.upToExtraSmall`
    width: 100%;
  `}
`

export const Divider = styled.div`
  height: 100%;
  width: 1px;
  background: ${props => props.theme.bg5};
`
export const HorizontalDivider = styled.div`
position: relative;
top:13px
  height: 1px;
  width: 37.5px;
  margin: 0 18px;
  background: ${props => props.theme.bg5};
`
