import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://spookyswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://spookyswap.finance/',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pool',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'AirDrop & Presale',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PreSale',
        href: '#',
      },
      {
        label: 'AirDrop',
        href: '#',
      },
    ],
  },
  {
    label: 'Price Charts & Docs',
    icon: 'MoreIcon',
    items: [
      {
        label: 'DexScreener',
        href: '#',
      },
      {
        label: 'Docs',
        href: '#',
      },
    ],
  },
]

export default config
