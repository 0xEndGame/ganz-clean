import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BANHMI-WFTM',
    lpAddresses: {
      250: '0x1A07372a4B17040BDeeCD416249C1171974199da',
      97: '',
    },
    tokenSymbol: 'BANHMI',
    tokenAddresses: {
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 1,
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
    pid: 2,
    risk: 3,
    lpSymbol: 'WFTM-DAI',
    lpAddresses: {
      250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
      97: '',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      250: '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'BOO-WFTM',
    lpAddresses: {
      250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
      97: '',
    },
    tokenSymbol: 'BOO',
    tokenAddresses: {
      250: '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 4,
    risk: 4,
    lpSymbol: 'WBTC-WFTM',
    lpAddresses: {
      250: '0xFdb9Ab8B9513Ad9E419Cf19530feE49d412C3Ee3',
      97: '',
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  }
]

export default farms
