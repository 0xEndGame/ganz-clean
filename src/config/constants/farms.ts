import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WAIFU-USDT',
    lpAddresses: {
      250: '0xE80792d7c9C39fc8456ECE4294E990371756c4dC',
      97: '',
    },
    tokenSymbol: 'WAIFU',
    tokenAddresses: {
      250: '0xDBCB8249a5CF2B2CA9C241F76B14E44B7e5AeaD8',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'WAIFU-WFTM',
    lpAddresses: {
      250: '0x0E7cbfC07858a5501C2b3895F9cA42078433ac63',
      97: '',
    },
    tokenSymbol: 'WAIFU',
    tokenAddresses: {
      250: '0xDBCB8249a5CF2B2CA9C241F76B14E44B7e5AeaD8',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'WFTM-USDC',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
      97: '',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'WFTM-USDT',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '',
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  }
]

export default farms
