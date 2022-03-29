import { TokenInfo } from '@uniswap/token-lists'

type SocketTokenMap = {
  [key: string]: TokenInfo[]
}

export const SOCKET_TOKENS: SocketTokenMap = {
  '1-100': [
    {
      decimals: 18,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/dai.svg',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      chainId: 1
    },
    {
      decimals: 6,
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdc.svg',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      chainId: 1
    },
    {
      decimals: 6,
      name: 'USD Coin',
      symbol: 'USDC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdc.svg',
      address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
      chainId: 100
    },
    {
      decimals: 6,
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdt.svg',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      chainId: 1
    },
    {
      decimals: 6,
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdt.svg',
      address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
      chainId: 100
    },
    {
      decimals: 8,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/wbtc.svg',
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      chainId: 1
    },
    {
      decimals: 8,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/wbtc.svg',
      address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
      chainId: 100
    },
    {
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/weth.svg',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/weth.svg',
      address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
      chainId: 100
    },
    {
      decimals: 18,
      name: 'Matic Token',
      symbol: 'MATIC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/matic.svg',
      address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Matic Token',
      symbol: 'MATIC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/matic.svg',
      address: '0x7122d7661c4564b7c6cd4878b06766489a6028a2',
      chainId: 100
    }
  ],
  '1-42161': [
    {
      decimals: 18,
      name: 'Premia',
      symbol: 'PREMIA',
      logoURI: 'https://assets.coingecko.com/coins/images/1104/thumb/power-ledger.png?1547035082',
      address: '0x51fC0f6660482Ea73330E414eFd7808811a57Fa2',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Premia',
      symbol: 'PREMIA',
      logoURI: 'https://assets.coingecko.com/coins/images/1104/thumb/power-ledger.png?1547035082',
      address: '0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Rai Reflex Index',
      symbol: 'RAI',
      logoURI: 'https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334',
      address: '0xaeF5bbcbFa438519a5ea80B4c7181B4E78d419f2',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Rai Reflex Index',
      symbol: 'RAI',
      logoURI: 'https://assets.coingecko.com/coins/images/14004/thumb/RAI-logo-coin.png?1613592334',
      address: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Dopex Rebate Token',
      symbol: 'RDPX',
      logoURI: 'https://assets.coingecko.com/coins/images/16659/thumb/rDPX_200x200_Coingecko.png?1624614475',
      address: '0x32Eb7902D4134bf98A28b963D26de779AF92A212',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Dopex Rebate Token',
      symbol: 'RDPX',
      logoURI: 'https://assets.coingecko.com/coins/images/16659/thumb/rDPX_200x200_Coingecko.png?1624614475',
      address: '0x0ff5a8451a839f5f0bb3562689d9a44089738d11',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Perpetual',
      symbol: 'PERP',
      logoURI: 'https://assets.coingecko.com/coins/images/18111/thumb/Doge.png?1630696110',
      address: '0x753D224bCf9AAFaCD81558c32341416df61D3DAC',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Perpetual',
      symbol: 'PERP',
      logoURI: 'https://assets.coingecko.com/coins/images/18111/thumb/Doge.png?1630696110',
      address: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Octo.fi',
      symbol: 'OCTO',
      logoURI: 'https://assets.coingecko.com/coins/images/18740/thumb/swapr.jpg?1633516501',
      address: '0x52f5d9B3a2bB89D3aEC5829A3415c21115aCD633',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Octo.fi',
      symbol: 'OCTO',
      logoURI: 'https://assets.coingecko.com/coins/images/18740/thumb/swapr.jpg?1633516501',
      address: '0x7240ac91f01233baaf8b064248e80feaa5912ba3',
      chainId: 1
    },
    {
      decimals: 9,
      name: 'Olympus',
      symbol: 'OHM',
      logoURI: 'https://assets.coingecko.com/coins/images/14483/thumb/token_OHM_%281%29.png?1628311611',
      address: '0x6E6a3D8F1AfFAc703B1aEF1F43B8D2321bE40043',
      chainId: 42161
    },
    {
      decimals: 9,
      name: 'Olympus',
      symbol: 'OHM',
      logoURI: 'https://assets.coingecko.com/coins/images/14483/thumb/token_OHM_%281%29.png?1628311611',
      address: '0x383518188c0c6d7730d91b2c03a03c837814a899',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'PickleToken',
      symbol: 'PICKLE',
      logoURI: 'https://assets.coingecko.com/coins/images/12435/thumb/pickle_finance_logo.jpg?1599817746',
      address: '0x965772e0E9c84b6f359c8597C891108DcF1c5B1A',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'PickleToken',
      symbol: 'PICKLE',
      logoURI: 'https://assets.coingecko.com/coins/images/12435/thumb/pickle_finance_logo.jpg?1599817746',
      address: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Rari Governance Token',
      symbol: 'RGT',
      logoURI: 'https://assets.coingecko.com/coins/images/12508/thumb/dht.png?1600752201',
      address: '0xef888bcA6AB6B1d26dbeC977C455388ecd794794',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Rari Governance Token',
      symbol: 'RGT',
      logoURI: 'https://assets.coingecko.com/coins/images/12508/thumb/dht.png?1600752201',
      address: '0xd291e7a03283640fdc51b121ac401383a46cc623',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Aluna',
      symbol: 'ALN',
      logoURI: 'https://assets.coingecko.com/coins/images/14089/thumb/xToken.png?1614226407',
      address: '0x9b3fa2A7C3EB36d048A5d38d81E7fAFC6bc47B25',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Aluna',
      symbol: 'ALN',
      logoURI: 'https://assets.coingecko.com/coins/images/14089/thumb/xToken.png?1614226407',
      address: '0x8185bc4757572da2a610f887561c32298f1a5748',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'BAC',
      symbol: 'BAC',
      logoURI: 'https://assets.coingecko.com/coins/images/13246/thumb/BAC.png?1613231642',
      address: '0x6F67043201C903bbCBC129750CB3b328Dd56a0a5',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'BAC',
      symbol: 'BAC',
      logoURI: 'https://assets.coingecko.com/coins/images/13246/thumb/BAC.png?1613231642',
      address: '0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Badger',
      symbol: 'BADGER',
      logoURI: 'https://assets.coingecko.com/coins/images/13287/thumb/badger_dao_logo.jpg?1607054976',
      address: '0xBfa641051Ba0a0Ad1b0AcF549a89536A0D76472E',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Badger',
      symbol: 'BADGER',
      logoURI: 'https://assets.coingecko.com/coins/images/13287/thumb/badger_dao_logo.jpg?1607054976',
      address: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Balancer',
      symbol: 'BAL',
      logoURI: 'https://assets.coingecko.com/coins/images/3697/thumb/btuprotocol.jpeg?1549597021',
      address: '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Balancer',
      symbol: 'BAL',
      logoURI: 'https://assets.coingecko.com/coins/images/3697/thumb/btuprotocol.jpeg?1549597021',
      address: '0xba100000625a3754423978a60c9317c58a424e3d',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'BarkCoin',
      symbol: 'BARK',
      address: '0xBbFbde08Bf1BE235a3Fa97d6A27fFfA19Ac4a8a8',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'BarkCoin',
      symbol: 'BARK',
      address: '0x5bd7ef7113a32b56127ac32272609c42c97849ff',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'GoBlank Token',
      symbol: 'BLANK',
      logoURI: 'https://assets.coingecko.com/coins/images/14209/thumb/blank.png?1614940842',
      address: '0xA5eC9d64b64b8B9E94FEaA7538c084b38117E7Ba',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'GoBlank Token',
      symbol: 'BLANK',
      logoURI: 'https://assets.coingecko.com/coins/images/14209/thumb/blank.png?1614940842',
      address: '0x41a3dba3d677e573636ba691a70ff2d606c29666',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'BarnBridge Governance Token',
      symbol: 'BOND',
      logoURI: 'https://cryptologos.cc/logos/barnbridge-bond-logo.png',
      address: '0x0D81E50bC677fa67341c44D7eaA9228DEE64A4e1',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'BarnBridge Governance Token',
      symbol: 'BOND',
      logoURI: 'https://cryptologos.cc/logos/barnbridge-bond-logo.png',
      address: '0x0391d2021f89dc339f60fff84546ea23e337750f',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Boost',
      symbol: 'BOOST',
      logoURI: 'https://assets.coingecko.com/coins/images/17657/thumb/02FjG1Og.png?1628757020',
      address: '0xd44e8F8768D4ed25119921a53802D8758A5b20dD',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Boost',
      symbol: 'BOOST',
      logoURI: 'https://assets.coingecko.com/coins/images/17657/thumb/02FjG1Og.png?1628757020',
      address: '0x4e0fca55a6c3a94720ded91153a27f60e26b9aa8',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'BTU Protocol',
      symbol: 'BTU',
      logoURI: 'https://assets.coingecko.com/coins/images/15985/thumb/ATA.jpg?1622535745',
      address: '0xBA9a5Dd807c9F072850bE15a52dF3408BA25Fd18',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'BTU Protocol',
      symbol: 'BTU',
      logoURI: 'https://assets.coingecko.com/coins/images/15985/thumb/ATA.jpg?1622535745',
      address: '0xb683d83a532e2cb7dfa5275eed3698436371cc9f',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Plenny',
      symbol: 'PL2',
      address: '0x3642c0680329ae3e103E2B5AB29DDfed4d43CBE5',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Plenny',
      symbol: 'PL2',
      address: '0x3642c0680329ae3e103e2b5ab29ddfed4d43cbe5',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Cap',
      symbol: 'CAP',
      logoURI: 'https://assets.coingecko.com/coins/images/11775/thumb/CAP.png?1594083244',
      address: '0x031d35296154279DC1984dCD93E392b1f946737b',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Cap',
      symbol: 'CAP',
      logoURI: 'https://assets.coingecko.com/coins/images/11775/thumb/CAP.png?1594083244',
      address: '0x43044f861ec040db59a7e324c40507addb673142',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'CelerToken',
      symbol: 'CELR',
      logoURI: 'https://assets.coingecko.com/coins/images/4379/thumb/Celr.png?1554705437',
      address: '0x3a8B787f78D775AECFEEa15706D4221B40F345AB',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'CelerToken',
      symbol: 'CELR',
      logoURI: 'https://assets.coingecko.com/coins/images/4379/thumb/Celr.png?1554705437',
      address: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Cryption Network Token',
      symbol: 'CNT',
      logoURI: 'https://assets.coingecko.com/coins/images/16171/thumb/Cryption_Logo_Gradient_White_Text.png?1623191284',
      address: '0x989D099d29F62b839C8CbD41c82c6554a5515752',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Cryption Network Token',
      symbol: 'CNT',
      logoURI: 'https://assets.coingecko.com/coins/images/16171/thumb/Cryption_Logo_Gradient_White_Text.png?1623191284',
      address: '0x429876c4a6f89fb470e92456b8313879df98b63c',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Compound',
      symbol: 'COMP',
      logoURI:
        'https://assets.coingecko.com/coins/images/12381/thumb/60d18e06844a844ad75901a9_mark_only_03.png?1628674771',
      address: '0x354A6dA3fcde098F8389cad84b0182725c6C91dE',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Compound',
      symbol: 'COMP',
      logoURI:
        'https://assets.coingecko.com/coins/images/12381/thumb/60d18e06844a844ad75901a9_mark_only_03.png?1628674771',
      address: '0xc00e94cb662c3520282e6f5717214004a7f26888',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'COTI Token',
      symbol: 'COTI',
      logoURI: 'https://assets.coingecko.com/coins/images/18410/thumb/paribus.PNG?1631828570',
      address: '0x6FE14d3CC2f7bDdffBa5CdB3BBE7467dd81ea101',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'COTI Token',
      symbol: 'COTI',
      logoURI: 'https://assets.coingecko.com/coins/images/18410/thumb/paribus.PNG?1631828570',
      address: '0xddb3422497e61e13543bea06989c0789117555c5',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Cream',
      symbol: 'CREAM',
      logoURI: 'https://cryptologos.cc/logos/cream-finance-cream-logo.png',
      address: '0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Cream',
      symbol: 'CREAM',
      logoURI: 'https://cryptologos.cc/logos/cream-finance-cream-logo.png',
      address: '0x2ba592f78db6436527729929aaf6c908497cb200',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Curve DAO Token',
      symbol: 'CRV',
      address: '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Curve DAO Token',
      symbol: 'CRV',
      address: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI: 'https://assets.coingecko.com/coins/images/1842/thumb/Smart_MFG_Cropped_Logo.png?1621422155',
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI: 'https://assets.coingecko.com/coins/images/1842/thumb/Smart_MFG_Cropped_Logo.png?1621422155',
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'DEFI Top 5 Tokens Index',
      symbol: 'DEFI5',
      logoURI: 'https://assets.coingecko.com/coins/images/13875/thumb/GOVI.png?1612451531',
      address: '0xdeBa25AF35e4097146d7629055E0EC3C71706324',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'DEFI Top 5 Tokens Index',
      symbol: 'DEFI5',
      logoURI: 'https://assets.coingecko.com/coins/images/13875/thumb/GOVI.png?1612451531',
      address: '0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'DEGEN Index',
      symbol: 'DEGEN',
      logoURI: 'https://assets.coingecko.com/coins/images/14143/thumb/alpha_logo.png?1614651244',
      address: '0xAE6e3540E97b0b9EA8797B157B510e133afb6282',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'DEGEN Index',
      symbol: 'DEGEN',
      logoURI: 'https://assets.coingecko.com/coins/images/14143/thumb/alpha_logo.png?1614651244',
      address: '0x126c121f99e1e211df2e5f8de2d96fa36647c855',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'dForce',
      symbol: 'DF',
      logoURI: 'https://assets.coingecko.com/coins/images/9709/thumb/xlGxxIjI_400x400.jpg?1571006794',
      address: '0xaE6aab43C4f3E0cea4Ab83752C278f8dEbabA689',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'dForce',
      symbol: 'DF',
      logoURI: 'https://assets.coingecko.com/coins/images/9709/thumb/xlGxxIjI_400x400.jpg?1571006794',
      address: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'DFYN Token',
      symbol: 'DFYN',
      logoURI: 'https://assets.coingecko.com/coins/images/14570/thumb/ZqsF51Re_400x400.png?1617082206',
      address: '0x1D54Aa7E322e02A0453c0F2fA21505cE7F2E9E93',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'DFYN Token',
      symbol: 'DFYN',
      logoURI: 'https://assets.coingecko.com/coins/images/14570/thumb/ZqsF51Re_400x400.png?1617082206',
      address: '0x9695e0114e12c0d3a3636fab5a18e6b737529023',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'dHedge DAO Token',
      symbol: 'DHT',
      logoURI: 'https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG?1617487954',
      address: '0x8038F3C971414FD1FC220bA727F2D4A0fC98cb65',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'dHedge DAO Token',
      symbol: 'DHT',
      logoURI: 'https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG?1617487954',
      address: '0xca1207647ff814039530d7d35df0e1dd2e91fa84',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'DODO bird',
      symbol: 'DODO',
      logoURI: 'https://assets.coingecko.com/coins/images/12651/thumb/dodo_logo.png?1601433025',
      address: '0x69Eb4FA4a2fbd498C257C57Ea8b7655a2559A581',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'DODO bird',
      symbol: 'DODO',
      logoURI: 'https://assets.coingecko.com/coins/images/12651/thumb/dodo_logo.png?1601433025',
      address: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'The Doge NFT',
      symbol: 'DOG',
      logoURI: 'https://assets.coingecko.com/coins/images/4454/thumb/0xbtc.png?1561603765',
      address: '0x4425742F1EC8D98779690b5A3A6276Db85Ddc01A',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'The Doge NFT',
      symbol: 'DOG',
      logoURI: 'https://assets.coingecko.com/coins/images/4454/thumb/0xbtc.png?1561603765',
      address: '0xbaac2b4491727d78d2b78815144570b9f2fe8899',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Dopex Governance Token',
      symbol: 'DPX',
      logoURI: 'https://assets.coingecko.com/coins/images/16754/thumb/RNBW-256x256.png?1624927932',
      address: '0x6C2C06790b3E3E3c38e12Ee22F8183b37a13EE55',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Dopex Governance Token',
      symbol: 'DPX',
      logoURI: 'https://assets.coingecko.com/coins/images/16754/thumb/RNBW-256x256.png?1624927932',
      address: '0xeec2be5c91ae7f8a338e1e5f3b5de49d07afdc81',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Digital Standard Unit',
      symbol: 'DSU',
      logoURI: 'https://assets.coingecko.com/coins/images/17482/thumb/photo_2021-08-03_09-24-16.png?1627953917',
      address: '0xE212f5E733257ed5628a2FeBcEdBc9222e535F51',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Digital Standard Unit',
      symbol: 'DSU',
      logoURI: 'https://assets.coingecko.com/coins/images/17482/thumb/photo_2021-08-03_09-24-16.png?1627953917',
      address: '0x605d26fbd5be761089281d5cec2ce86eea667109',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'DeversiFi Token',
      symbol: 'DVF',
      logoURI: 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png',
      address: '0xA7Aa2921618e3D63dA433829d448b58C9445A4c3',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'DeversiFi Token',
      symbol: 'DVF',
      logoURI: 'https://cryptologos.cc/logos/curve-dao-token-crv-logo.png',
      address: '0xdddddd4301a082e62e84e43f474f044423921918',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'DXdao',
      symbol: 'DXD',
      logoURI: 'https://assets.coingecko.com/coins/images/8835/thumb/Wirex.jpg?1561970529',
      address: '0xC3Ae0333F0F34aa734D5493276223d95B8F9Cb37',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'DXdao',
      symbol: 'DXD',
      logoURI: 'https://assets.coingecko.com/coins/images/8835/thumb/Wirex.jpg?1561970529',
      address: '0xa1d65e8fb6e87b60feccbc582f7f97804b725521',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Empty Set Share',
      symbol: 'ESS',
      logoURI: 'https://assets.coingecko.com/coins/images/17481/thumb/photo_2021-08-03_03-26-29.png?1627953584',
      address: '0xCE32aA8d60807182c0003Ef9cc1976Fa10E5d312',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Empty Set Share',
      symbol: 'ESS',
      logoURI: 'https://assets.coingecko.com/coins/images/17481/thumb/photo_2021-08-03_03-26-29.png?1627953584',
      address: '0x24ae124c4cc33d6791f8e8b63520ed7107ac8b3e',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'dForce EUR',
      symbol: 'EUX',
      logoURI: 'https://etherscan.io/token/images/dforceeur_32.png',
      address: '0x969131D8ddC06C2Be11a13e6E7fACF22CF57d95e',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'dForce EUR',
      symbol: 'EUX',
      logoURI: 'https://etherscan.io/token/images/dforceeur_32.png',
      address: '0xb986f3a2d91d3704dc974a24fb735dcc5e3c1e70',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Flux',
      symbol: 'FLUX',
      logoURI: 'https://assets.coingecko.com/coins/images/11756/thumb/fluxres.png?1593748917',
      address: '0xF80D589b3Dbe130c270a69F1a69D050f268786Df',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Flux',
      symbol: 'FLUX',
      logoURI: 'https://assets.coingecko.com/coins/images/11756/thumb/fluxres.png?1593748917',
      address: '0x469eda64aed3a3ad6f868c44564291aa415cb1d9',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Flux Protocol',
      symbol: 'FLUX',
      logoURI: 'https://assets.coingecko.com/coins/images/12594/thumb/octofi-256x256-radius-22percent.png?1610679969',
      address: '0x2338a5d62E9A766289934e8d2e83a443e8065b83',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Flux Protocol',
      symbol: 'FLUX',
      logoURI: 'https://assets.coingecko.com/coins/images/12594/thumb/octofi-256x256-radius-22percent.png?1610679969',
      address: '0x7645ddfeeceda57e41f92679c4acd83c56a81d14',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'The Force Token',
      symbol: 'FOR',
      logoURI: 'https://assets.coingecko.com/coins/images/8242/thumb/for.png?1606195375',
      address: '0x3816e40c1eB106c8fb7c05f901cfD58C7292D051',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'The Force Token',
      symbol: 'FOR',
      logoURI: 'https://assets.coingecko.com/coins/images/8242/thumb/for.png?1606195375',
      address: '0x1fcdce58959f536621d76f5b7ffb955baa5a672f',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Futureswap Token',
      symbol: 'FST',
      logoURI: 'https://assets.coingecko.com/coins/images/14520/thumb/futureswap_logo.png?1634122916',
      address: '0x488cc08935458403a0458e45E20c0159c8AB2c92',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Futureswap Token',
      symbol: 'FST',
      logoURI: 'https://assets.coingecko.com/coins/images/14520/thumb/futureswap_logo.png?1634122916',
      address: '0x0e192d382a36de7011f795acc4391cd302003606',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Fuse Token',
      symbol: 'FUSE',
      logoURI: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
      address: '0xBDeF0E9ef12E689F366fe494A7A7D0dad25D9286',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Fuse Token',
      symbol: 'FUSE',
      logoURI: 'https://assets.coingecko.com/coins/images/11939/thumb/shiba.png?1622619446',
      address: '0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'GMX',
      symbol: 'GMX',
      address: '0x590020B1005b8b25f1a2C82c5f743c540dcfa24d',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'GMX',
      symbol: 'GMX',
      address: '0xbc30049adc73de06d7a98a5189203aac66b2c830',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Gnosis Token',
      symbol: 'GNO',
      logoURI: 'https://assets.coingecko.com/coins/images/13177/thumb/kun_logo.png?1605923919',
      address: '0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Gnosis Token',
      symbol: 'GNO',
      logoURI: 'https://assets.coingecko.com/coins/images/13177/thumb/kun_logo.png?1605923919',
      address: '0x6810e776880c02933d47db1b9fc05908e5386b96',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'GOVI',
      symbol: 'GOVI',
      address: '0x07E49d5dE43DDA6162Fa28D24d5935C151875283',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'GOVI',
      symbol: 'GOVI',
      address: '0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Graph Token',
      symbol: 'GRT',
      logoURI: 'https://assets.coingecko.com/coins/images/20167/thumb/dHealth_Network_Icon_200w.png?1636601369',
      address: '0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Graph Token',
      symbol: 'GRT',
      logoURI: 'https://assets.coingecko.com/coins/images/20167/thumb/dHealth_Network_Icon_200w.png?1636601369',
      address: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Impermax',
      symbol: 'IMX',
      logoURI: 'https://cryptologos.cc/logos/zel-flux-logo.png',
      address: '0x9c67eE39e3C4954396b9142010653F17257dd39C',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Impermax',
      symbol: 'IMX',
      logoURI: 'https://cryptologos.cc/logos/zel-flux-logo.png',
      address: '0x7b35ce522cb72e4077baeb96cb923a5529764a00',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'QIAN governance token',
      symbol: 'KUN',
      logoURI:
        'https://assets.coingecko.com/coins/images/11560/thumb/Dev_Protocol__CoinGecko_Logo___Jan.18.2021_.png?1611021474',
      address: '0x04cb2d263a7489f02d813eaaB9Ba1bb8466347F2',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'QIAN governance token',
      symbol: 'KUN',
      logoURI:
        'https://assets.coingecko.com/coins/images/11560/thumb/Dev_Protocol__CoinGecko_Logo___Jan.18.2021_.png?1611021474',
      address: '0x65d9bc970aa9b2413027fa339f7f179b3f3f2604',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Land',
      symbol: 'LAND',
      logoURI: 'https://etherscan.io/token/images/farmland_32.png',
      address: '0x3CD1833Ce959E087D0eF0Cb45ed06BffE60F23Ba',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Land',
      symbol: 'LAND',
      logoURI: 'https://etherscan.io/token/images/farmland_32.png',
      address: '0x3258cd8134b6b28e814772dd91d5ecceea512818',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'ChainLink Token',
      symbol: 'LINK',
      logoURI: 'https://assets.coingecko.com/coins/images/1532/thumb/Symbol-RigoblockRGB.png?1547035682',
      address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'ChainLink Token',
      symbol: 'LINK',
      logoURI: 'https://assets.coingecko.com/coins/images/1532/thumb/Symbol-RigoblockRGB.png?1547035682',
      address: '0x514910771af9ca656af840dff83e8264ecf986ca',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'LoopringCoin V2',
      symbol: 'LRC',
      logoURI: 'https://cryptologos.cc/logos/balancer-bal-logo.png',
      address: '0x46d0cE7de6247b0A95f67b43B589b4041BaE7fbE',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'LoopringCoin V2',
      symbol: 'LRC',
      logoURI: 'https://cryptologos.cc/logos/balancer-bal-logo.png',
      address: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'MAGIC',
      symbol: 'MAGIC',
      logoURI: 'https://assets.coingecko.com/coins/images/18623/thumb/Magic.png?1635755672',
      address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'MAGIC',
      symbol: 'MAGIC',
      logoURI: 'https://assets.coingecko.com/coins/images/18623/thumb/Magic.png?1635755672',
      address: '0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'My Alpha Leaderboard',
      symbol: 'MAL',
      address: '0xAA086809EFA469631DD90D8C6cB267bAb107E958',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'My Alpha Leaderboard',
      symbol: 'MAL',
      address: '0x6619078bdd8324e01e9a8d4b3d761b050e5ecf06',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'MATH Token',
      symbol: 'MATH',
      logoURI: 'https://assets.coingecko.com/coins/images/11335/thumb/2020-05-19-token-200.png?1589940590',
      address: '0x99F40b01BA9C469193B360f72740E416B17Ac332',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'MATH Token',
      symbol: 'MATH',
      logoURI: 'https://assets.coingecko.com/coins/images/11335/thumb/2020-05-19-token-200.png?1589940590',
      address: '0x08d967bb0134f2d07f7cfb6e246680c53927dd30',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Antimatter.Finance Governance Token',
      symbol: 'MATTER',
      logoURI: 'https://assets.coingecko.com/coins/images/10347/thumb/vUXKHEe.png?1601523640',
      address: '0xaaA62D9584Cbe8e4D68A43ec91BfF4fF1fAdB202',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Antimatter.Finance Governance Token',
      symbol: 'MATTER',
      logoURI: 'https://assets.coingecko.com/coins/images/10347/thumb/vUXKHEe.png?1601523640',
      address: '0x9b99cca871be05119b2012fd4474731dd653febe',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'MCDEX Token',
      symbol: 'MCB',
      logoURI: 'https://assets.coingecko.com/coins/images/11796/thumb/mcb.png?1594355515',
      address: '0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'MCDEX Token',
      symbol: 'MCB',
      logoURI: 'https://assets.coingecko.com/coins/images/11796/thumb/mcb.png?1594355515',
      address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Maker',
      symbol: 'MKR',
      logoURI: 'https://assets.coingecko.com/coins/images/18271/thumb/tracer_logo.png?1631176676',
      address: '0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Maker',
      symbol: 'MKR',
      logoURI: 'https://assets.coingecko.com/coins/images/18271/thumb/tracer_logo.png?1631176676',
      address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Meta',
      symbol: 'MTA',
      logoURI: 'https://assets.coingecko.com/coins/images/11846/thumb/mStable.png?1594950533',
      address: '0x5298Ee77A8f9E226898403eBAC33e68a62F770A0',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Meta',
      symbol: 'MTA',
      logoURI: 'https://assets.coingecko.com/coins/images/11846/thumb/mStable.png?1594950533',
      address: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Indexed',
      symbol: 'NDX',
      logoURI:
        'https://assets.coingecko.com/coins/images/2707/thumb/UnibrightLogo_colorful_500x500_preview.png?1547036916',
      address: '0xB965029343D55189c25a7f3e0c9394DC0F5D41b1',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Indexed',
      symbol: 'NDX',
      logoURI:
        'https://assets.coingecko.com/coins/images/2707/thumb/UnibrightLogo_colorful_500x500_preview.png?1547036916',
      address: '0x86772b1409b61c639eaac9ba0acfbb6e238e5f83',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'New era',
      symbol: 'NEC',
      address: '0xd67D9F7E018B4e7613b0251BBe3Ba3988Baf7C16',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'New era',
      symbol: 'NEC',
      address: '0x1353a77abd236207d0588bcbbb52bc3087f85351',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Feisty Doge NFT',
      symbol: 'NFD',
      logoURI: 'https://assets.coingecko.com/coins/images/18533/thumb/handle.fiFOREXLogoDark200x200.png?1632755675',
      address: '0xc9c2B86CD4cdbAB70cd65D22EB044574c3539F6c',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Feisty Doge NFT',
      symbol: 'NFD',
      logoURI: 'https://assets.coingecko.com/coins/images/18533/thumb/handle.fiFOREXLogoDark200x200.png?1632755675',
      address: '0xdfdb7f72c1f195c5951a234e8db9806eb0635346',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Route',
      symbol: 'ROUTE',
      logoURI: 'https://assets.coingecko.com/coins/images/13709/thumb/route_token_200x200-19.png?1611057698',
      address: '0x5298060A95205BE6Dd4aBc21910A4bB23D6DCD8b',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Route',
      symbol: 'ROUTE',
      logoURI: 'https://assets.coingecko.com/coins/images/13709/thumb/route_token_200x200-19.png?1611057698',
      address: '0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'SakeToken',
      symbol: 'SAKE',
      logoURI: 'https://assets.coingecko.com/coins/images/12428/thumb/sake.png?1599777402',
      address: '0x552E4e96A0Ce6D36d161b63984848c8dAC471ea2',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'SakeToken',
      symbol: 'SAKE',
      logoURI: 'https://assets.coingecko.com/coins/images/12428/thumb/sake.png?1599777402',
      address: '0x066798d9ef0833ccc719076dab77199ecbd178b0',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'OVR',
      symbol: 'OVR',
      logoURI: 'https://assets.coingecko.com/coins/images/13429/thumb/ovr_logo.png?1608518911',
      address: '0x55704A0e9E2eb59E176C5b69655DbD3DCDCFc0F0',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'OVR',
      symbol: 'OVR',
      logoURI: 'https://assets.coingecko.com/coins/images/13429/thumb/ovr_logo.png?1608518911',
      address: '0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Stake DAO Token',
      symbol: 'SDT',
      logoURI: 'https://assets.coingecko.com/coins/images/2091/thumb/xaya_logo-1.png?1547036406',
      address: '0x7bA4a00d54A07461D9DB2aEF539e91409943AdC9',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Stake DAO Token',
      symbol: 'SDT',
      logoURI: 'https://assets.coingecko.com/coins/images/2091/thumb/xaya_logo-1.png?1547036406',
      address: '0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Sperax',
      symbol: 'SPA',
      address: '0x5575552988A3A80504bBaeB1311674fCFd40aD4B',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Sperax',
      symbol: 'SPA',
      address: '0x2a95fe4c7e64e09856989f9ea0b57b9ab5f770cb',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Strips Token',
      symbol: 'STRP',
      logoURI: 'https://assets.coingecko.com/coins/images/15368/thumb/SgqhfWz4_400x400_%281%29.jpg?1620666919',
      address: '0x326c33FD1113c1F29B35B4407F3d6312a8518431',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Strips Token',
      symbol: 'STRP',
      logoURI: 'https://assets.coingecko.com/coins/images/15368/thumb/SgqhfWz4_400x400_%281%29.jpg?1620666919',
      address: '0x97872eafd79940c7b24f7bcc1eadb1457347adc9',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'SushiToken',
      symbol: 'SUSHI',
      logoURI: 'https://assets.coingecko.com/coins/images/662/thumb/logo_square_simple_300px.png?1609402668',
      address: '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'SushiToken',
      symbol: 'SUSHI',
      logoURI: 'https://assets.coingecko.com/coins/images/662/thumb/logo_square_simple_300px.png?1609402668',
      address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Swapr',
      symbol: 'SWPR',
      logoURI: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
      address: '0xdE903E2712288A1dA82942DDdF2c20529565aC30',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Swapr',
      symbol: 'SWPR',
      logoURI: 'https://cryptologos.cc/logos/sushiswap-sushi-logo.png',
      address: '0x6cacdb97e3fc8136805a9e7c342d866ab77d0957',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Taekwondo Access Credit',
      symbol: 'TAC',
      logoURI: 'https://etherscan.io/token/images/tkdcoop_32.png',
      address: '0xFa51B42d4C9EA35F1758828226AaEdBeC50DD54E',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Taekwondo Access Credit',
      symbol: 'TAC',
      logoURI: 'https://etherscan.io/token/images/tkdcoop_32.png',
      address: '0xdeeb6091a5adc78fa0332bee5a38a8908b6b566e',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Spell Token',
      symbol: 'SPELL',
      logoURI: 'https://assets.coingecko.com/coins/images/15861/thumb/abracadabra-3.png?1622544862',
      address: '0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Spell Token',
      symbol: 'SPELL',
      logoURI: 'https://assets.coingecko.com/coins/images/15861/thumb/abracadabra-3.png?1622544862',
      address: '0x090185f2135308bad17527004364ebcc2d37e5f6',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'TrueUSD',
      symbol: 'TUSD',
      logoURI: 'https://images.prismic.io/tusd-homepage/fb4d581a-95ed-404c-b9de-7ab1365c1386_%E5%9B%BE%E5%B1%82+1.png',
      address: '0x4D15a3A2286D883AF0AA1B3f21367843FAc63E07',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'TrueUSD',
      symbol: 'TUSD',
      logoURI: 'https://images.prismic.io/tusd-homepage/fb4d581a-95ed-404c-b9de-7ab1365c1386_%E5%9B%BE%E5%B1%82+1.png',
      address: '0x0000000000085d4780b73119b644ae5ecd22b376',
      chainId: 1
    },
    {
      decimals: 8,
      name: 'UniBright',
      symbol: 'UBT',
      logoURI: 'https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110',
      address: '0x2aD62674A64E698C24831Faf824973C360430140',
      chainId: 42161
    },
    {
      decimals: 8,
      name: 'UniBright',
      symbol: 'UBT',
      logoURI: 'https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110',
      address: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Unlock Discount Token',
      symbol: 'UDT',
      logoURI: 'https://assets.coingecko.com/coins/images/13546/thumb/indexed-light.74bb5471.png?1609712728',
      address: '0xd5d3aA404D7562d09a848F96a8a8d5D65977bF90',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Unlock Discount Token',
      symbol: 'UDT',
      logoURI: 'https://assets.coingecko.com/coins/images/13546/thumb/indexed-light.74bb5471.png?1609712728',
      address: '0x90de74265a416e1393a450752175aed98fe11517',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Uniswap',
      symbol: 'UNI',
      logoURI: 'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604',
      address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Uniswap',
      symbol: 'UNI',
      logoURI: 'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604',
      address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      chainId: 1
    },
    {
      decimals: 6,
      name: 'USD Coin (Arb1)',
      symbol: 'USDC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdc.svg',
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      chainId: 42161
    },
    {
      decimals: 6,
      name: 'USD Coin (Arb1)',
      symbol: 'USDC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdc.svg',
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      chainId: 1
    },
    {
      decimals: 6,
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI: 'https://assets.coingecko.com/coins/images/18381/thumb/integral.jpeg?1631714531',
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      chainId: 42161
    },
    {
      decimals: 6,
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI: 'https://assets.coingecko.com/coins/images/18381/thumb/integral.jpeg?1631714531',
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'SUM',
      symbol: 'SUM',
      logoURI: 'https://assets.coingecko.com/coins/images/17586/thumb/sunswap.PNG?1628570741',
      address: '0x20f9628a485ebCc566622314f6e07E7Ee61fF332',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'SUM',
      symbol: 'SUM',
      logoURI: 'https://assets.coingecko.com/coins/images/17586/thumb/sunswap.PNG?1628570741',
      address: '0x043c308bb8a5ae96d0093444be7f56459f1340b1',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'dForce USD',
      symbol: 'USX',
      address: '0xcd14C3A2ba27819B352aae73414A26e2b366dC50',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'dForce USD',
      symbol: 'USX',
      address: '0x0a5e677a6a24b2f1a2bf4f3bffc443231d2fdec8',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Validator',
      symbol: 'VALX',
      logoURI: 'https://etherscan.io/token/images/validator_32.png',
      address: '0x8d1c89DcF613e3e709AfE9Abecae591D0e2B64Ca',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Validator',
      symbol: 'VALX',
      logoURI: 'https://etherscan.io/token/images/validator_32.png',
      address: '0x27c4af9a860c4cadc358005f8b48140b2e434a7b',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'VISOR',
      symbol: 'VISR',
      logoURI: 'https://assets.coingecko.com/coins/images/4302/thumb/zippie.jpg?1547039665',
      address: '0x995C235521820f2637303Ca1970c7c044583df44',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'VISOR',
      symbol: 'VISR',
      logoURI: 'https://assets.coingecko.com/coins/images/4302/thumb/zippie.jpg?1547039665',
      address: '0xf938424f7210f31df2aee3011291b658f872e91e',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Vox.Finance',
      symbol: 'VOX',
      logoURI: 'https://assets.coingecko.com/coins/images/12880/thumb/BSensIa.png?1603261093',
      address: '0x2eD14d1788dfB780fD216706096AeD018514ECcd',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Vox.Finance',
      symbol: 'VOX',
      logoURI: 'https://assets.coingecko.com/coins/images/12880/thumb/BSensIa.png?1603261093',
      address: '0x12d102f06da35cc0111eb58017fd2cd28537d0e1',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Unity Network',
      symbol: 'UNT',
      logoURI: 'https://assets.coingecko.com/coins/images/13422/thumb/frax_logo.png?1608476506',
      address: '0x250F471385894fc81183a99d6fDe8CE9C5B142d6',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Unity Network',
      symbol: 'UNT',
      logoURI: 'https://assets.coingecko.com/coins/images/13422/thumb/frax_logo.png?1608476506',
      address: '0x8d610e20481f4c4f3acb87bba9c46bef7795fdfe',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Auctus Token',
      symbol: 'AUC',
      logoURI: 'https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1592625425',
      address: '0xea986d33eF8a20A96120ecc44dBdD49830192043',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Auctus Token',
      symbol: 'AUC',
      logoURI: 'https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1592625425',
      address: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
      chainId: 1
    },
    {
      decimals: 8,
      name: '0xBitcoin Token',
      symbol: '0xBTC',
      logoURI: 'https://assets.coingecko.com/coins/images/20764/thumb/reth.png?1637652366',
      address: '0x7cb16cb78ea464aD35c8a50ABF95dff3c9e09d5d',
      chainId: 42161
    },
    {
      decimals: 8,
      name: '0xBitcoin Token',
      symbol: '0xBTC',
      logoURI: 'https://assets.coingecko.com/coins/images/20764/thumb/reth.png?1637652366',
      address: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Agave',
      symbol: 'AGVE',
      address: '0x03b95f1C84Af0607afd5dD87ca1FDE7572aa827F',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Agave',
      symbol: 'AGVE',
      address: '0x0b006e475620af076915257c6a9e40635abdbbad',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Alchemy',
      symbol: 'ALCH',
      logoURI: 'https://assets.coingecko.com/coins/images/14719/thumb/sbEW5W8.png?1617939648',
      address: '0x0e15258734300290a651FdBAe8dEb039a8E7a2FA',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Alchemy',
      symbol: 'ALCH',
      logoURI: 'https://assets.coingecko.com/coins/images/14719/thumb/sbEW5W8.png?1617939648',
      address: '0x0000a1c00009a619684135b824ba02f7fbf3a572',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Tracer',
      symbol: 'TCR',
      logoURI:
        'https://assets.coingecko.com/coins/images/18327/thumb/Logo-Strips-200-x-200px---without-words.png?1631543556',
      address: '0xA72159FC390f0E3C6D415e658264c7c4051E9b87',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Tracer',
      symbol: 'TCR',
      logoURI:
        'https://assets.coingecko.com/coins/images/18327/thumb/Logo-Strips-200-x-200px---without-words.png?1631543556',
      address: '0x9c4a4204b79dd291d6b6571c5be8bbcd0622f050',
      chainId: 1
    },
    {
      decimals: 8,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI: 'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744',
      address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      chainId: 42161
    },
    {
      decimals: 8,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI: 'https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png?1548822744',
      address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      chainId: 1
    },
    {
      decimals: 8,
      name: 'Wrapped CHI',
      symbol: 'WCHI',
      logoURI: 'https://assets.coingecko.com/coins/images/12348/thumb/fry-icon.png?1614064283',
      address: '0xA64eCCe74F8CdB7a940766B71f1b108BAC69851a',
      chainId: 42161
    },
    {
      decimals: 8,
      name: 'Wrapped CHI',
      symbol: 'WCHI',
      logoURI: 'https://assets.coingecko.com/coins/images/12348/thumb/fry-icon.png?1614064283',
      address: '0x6dc02164d75651758ac74435806093e421b64605',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://assets.coingecko.com/coins/images/14114/thumb/Alchemix_USD.png?1614410406',
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://assets.coingecko.com/coins/images/14114/thumb/Alchemix_USD.png?1614410406',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Wootrade Network',
      symbol: 'WOO',
      logoURI: 'https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg?1603670367',
      address: '0xcAFcD85D8ca7Ad1e1C6F82F651fA15E33AEfD07b',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Wootrade Network',
      symbol: 'WOO',
      logoURI: 'https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg?1603670367',
      address: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'xToken',
      symbol: 'XTK',
      logoURI: 'https://assets.coingecko.com/coins/images/15126/thumb/Copy_of_200px.png?1619761475',
      address: '0xF0A5717Ec0883eE56438932b0fe4A20822735fBa',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'xToken',
      symbol: 'XTK',
      logoURI: 'https://assets.coingecko.com/coins/images/15126/thumb/Copy_of_200px.png?1619761475',
      address: '0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'yearn.finance',
      symbol: 'YFI',
      logoURI: 'https://cryptologos.cc/logos/yearn-finance-yfi-logo.png',
      address: '0x82e3A8F066a6989666b031d916c43672085b1582',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'yearn.finance',
      symbol: 'YFI',
      logoURI: 'https://cryptologos.cc/logos/yearn-finance-yfi-logo.png',
      address: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Zippie',
      symbol: 'ZIPT',
      logoURI: 'https://assets.coingecko.com/coins/images/17834/thumb/doge-fractionalized.png?1629390495',
      address: '0x0F61B24272AF65EACF6adFe507028957698e032F',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Zippie',
      symbol: 'ZIPT',
      logoURI: 'https://assets.coingecko.com/coins/images/17834/thumb/doge-fractionalized.png?1629390495',
      address: '0xedd7c94fd7b4971b916d15067bc454b9e1bad980',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Interest-Bearing Bitcoin',
      symbol: 'ibBTC',
      logoURI: 'https://assets.coingecko.com/coins/images/15500/thumb/ibbtc.png?1621077589',
      address: '0x9Ab3FD50FcAe73A1AEDa959468FD0D662c881b42',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Interest-Bearing Bitcoin',
      symbol: 'ibBTC',
      logoURI: 'https://assets.coingecko.com/coins/images/15500/thumb/ibbtc.png?1621077589',
      address: '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'KAKI USDC',
      symbol: 'kUSDC',
      address: '0x4f947b40BEEB9D8130437781a560E5c7D089730f',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'KAKI USDC',
      symbol: 'kUSDC',
      address: '0xa124ff1e97e7f3e4a796f6a2d3bf5d0e2d41973d',
      chainId: 1
    },
    {
      decimals: 18,
      name: 'Synth sUSD',
      symbol: 'sUSD',
      logoURI: 'https://assets.coingecko.com/coins/images/5010/thumb/YAIS3fUh.png?1626267646',
      address: '0xA970AF1a584579B618be4d69aD6F73459D112F95',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Synth sUSD',
      symbol: 'sUSD',
      logoURI: 'https://assets.coingecko.com/coins/images/5010/thumb/YAIS3fUh.png?1626267646',
      address: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
      chainId: 1
    }
  ],
  '100-42161': [
    {
      decimals: 18,
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/dai.svg',
      address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
      chainId: 42161
    },
    {
      decimals: 6,
      name: 'USD Coin Arb1',
      symbol: 'USDC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdc.svg',
      address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
      chainId: 100
    },
    {
      decimals: 6,
      name: 'USD Coin Arb1',
      symbol: 'USDC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdc.svg',
      address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
      chainId: 42161
    },
    {
      decimals: 6,
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdt.svg',
      address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
      chainId: 100
    },
    {
      decimals: 6,
      name: 'Tether USD',
      symbol: 'USDT',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/usdt.svg',
      address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
      chainId: 42161
    },
    {
      decimals: 8,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/wbtc.svg',
      address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
      chainId: 100
    },
    {
      decimals: 8,
      name: 'Wrapped BTC',
      symbol: 'WBTC',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/wbtc.svg',
      address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
      chainId: 42161
    },
    {
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/weth.svg',
      address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
      chainId: 100
    },
    {
      decimals: 18,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      logoURI: 'https://maticnetwork.github.io/polygon-token-assets/assets/weth.svg',
      address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      chainId: 42161
    }
  ]
}
