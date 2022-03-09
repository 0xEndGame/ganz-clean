import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WAIFU-fUSDT',
    lpAddresses: {
      250: '0xE80792d7c9C39fc8456ECE4294E990371756c4dC',
      97: '',
    },
    tokenSymbol: 'WAIFU',
    tokenAddresses: {
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
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
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
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
    pid: 4,
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
    pid: 5,
    risk: 1,
    lpSymbol: 'WETH-WFTM',
    lpAddresses: {
      250: '0xf0702249f4d3a25cd3ded7859a165693685ab577',
      97: '',
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      250: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 6,
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
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WAIFU',
    lpAddresses: {
      250: '0xE80792d7c9C39fc8456ECE4294E990371756c4dC',
      97: '', // COAL-USDT LP
    },
    tokenSymbol: 'WAIFU',
    tokenAddresses: {
      250: '0xa99a2A440494299476f4ceB1696433c66c0d7358',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'usdc',
    lpAddresses: {
      250: '0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c',
      97: '', // FTM-USDC
    },
    tokenSymbol: 'usdc',
    tokenAddresses: {
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'FFF',
    lpAddresses: {
      250: '0x549d44C9C76EdE84D4022554552470B83C097AfF',
      97: '', // FTM-USDC
    },
    tokenSymbol: 'FFF',
    tokenAddresses: {
      250: '0x63F601bD749314ad1A2DAD9fbd487488FfF70D6C',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
  {
    pid: 10,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WFTM',
    lpAddresses: {
      250: '0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410',
      97: '', // FTM-USDT
    },
    tokenSymbol: 'WFTM',
    tokenAddresses: {
      250: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 11,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    lpAddresses: {
      250: '0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3',
      97: '', // FTM-WBTC LP
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      250: '0x321162Cd933E2Be498Cd2267a90534A804051b11',
      97: '',
    },
    quoteTokenSymbol: QuoteToken.WFTM,
    quoteTokenAdresses: contracts.wftm,
  },
]

export default farms
