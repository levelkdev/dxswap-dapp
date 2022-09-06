import { ChainId } from '@swapr/sdk'

import ArbitrumLogo from '../../assets/images/arbitrum-one-logo.svg'
import EthereumLogo from '../../assets/images/ethereum-logo.svg'
import GnosisLogo from '../../assets/images/gnosis-chain-logo.svg'
import OptimismLogo from '../../assets/images/optimism-logo.svg'
import PolygonMaticLogo from '../../assets/images/polygon-matic-logo.svg'
import { NetworkOptionsPreset, NetworkSwitcherTags } from './NetworkSwitcher.types'

export const networkOptionsPreset: NetworkOptionsPreset[] = [
  // no tag - mainnets
  {
    chainId: ChainId.MAINNET,
    name: 'Ethereum',
    logoSrc: EthereumLogo,
    color: '#627EEA',
  },
  {
    chainId: ChainId.ARBITRUM_ONE,
    name: 'Arbitrum one',
    logoSrc: ArbitrumLogo,
    color: '#2C374B',
  },
  {
    chainId: ChainId.POLYGON,
    name: 'Polygon',
    logoSrc: PolygonMaticLogo,
    color: '#8361DE',
  },
  {
    chainId: ChainId.OPTIMISM_MAINNET,
    name: 'Optimism',
    logoSrc: OptimismLogo,
    color: '#ff0420',
  },

  // TESTNETS
  {
    chainId: ChainId.RINKEBY,
    name: 'Rinkeby',
    logoSrc: EthereumLogo,
    color: '#443780',
    tag: NetworkSwitcherTags.TESTNETS,
  },
  {
    chainId: ChainId.GOERLI,
    name: 'Görli',
    logoSrc: EthereumLogo,
    color: '#443780',
    tag: NetworkSwitcherTags.TESTNETS,
  },
  {
    chainId: ChainId.ARBITRUM_RINKEBY,
    name: 'A. Rinkeby',
    logoSrc: ArbitrumLogo,
    color: '#b1a5e6',
    tag: NetworkSwitcherTags.TESTNETS,
  },
  {
    chainId: ChainId.ARBITRUM_GOERLI,
    name: 'A. Görli',
    logoSrc: ArbitrumLogo,
    color: '#b1a5e6',
    tag: NetworkSwitcherTags.TESTNETS,
  },
  {
    chainId: ChainId.XDAI,
    name: 'Gnosis Chain',
    logoSrc: GnosisLogo,
    color: '#49A9A7',
  },
  {
    chainId: ChainId.OPTIMISM_GOERLI,
    name: 'Optimism Görli',
    logoSrc: OptimismLogo,
    color: '#ff0420',
    tag: NetworkSwitcherTags.TESTNETS,
  },
]
