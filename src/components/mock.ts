// components/CryptoTable.tsx
import { CryptoData } from './types';

export const cryptoList: CryptoData[] = [
    { 
        id: "1",
        logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025",
        name: "Bitcoin",
        symbol: "BTC",
        price: 64000,
        percent_1h: 0.2,
        percent_24h: -1.5,
        percent_7d: 3.4,
        market_cap: "1.2T",
        volume_24h: "45B",
        circulating_supply: "19.5M",
        max_supply: "21M",
        chart: "https://www.coingecko.com/coins/1/sparkline.svg"
      },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    price: 3500.42,
    percent_1h: 1.2,
    percent_24h: 3.5,
    percent_7d: 8.2,
    market_cap: "$420.5B",
    volume_24h: "$18.2B",
    circulating_supply: "120.2M ETH",
    max_supply: "∞",
    chart: "https://www.coingecko.com/coins/279/sparkline.svg"
  },
  {
    id: "3",
    name: "Tether",
    symbol: "USDT",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=025",
    price: 1.00,
    percent_1h: 0.0,
    percent_24h: 0.0,
    percent_7d: 0.0,
    market_cap: "$83.2B",
    volume_24h: "$45.8B",
    circulating_supply: "83.2B USDT",
    max_supply: "∞",
    chart: "https://www.coingecko.com/coins/325/sparkline.svg"
  },
  {
    id: "4",
    name: "XRP",
    symbol: "XRP",
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025",
    price: 0.52,
    percent_1h: 0.8,
    percent_24h: 2.1,
    percent_7d: 5.4,
    market_cap: "$28.1B",
    volume_24h: "$1.2B",
    circulating_supply: "54.0B XRP",
    max_supply: "100.0B XRP",
    chart: "https://www.coingecko.com/coins/44/sparkline.svg"
  },
  {
    id: "5",
    name: "BNB",
    symbol: "BNB",
    logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=025",
    price: 350.75,
    percent_1h: 0.5,
    percent_24h: 1.8,
    percent_7d: 4.2,
    market_cap: "$53.8B",
    volume_24h: "$1.5B",
    circulating_supply: "153.4M BNB",
    max_supply: "200.0M BNB",
    chart: "https://www.coingecko.com/coins/1839/sparkline.svg"
  },
  {
    id: "6",
    name: "Solana",
    symbol: "SOL",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025",
    price: 95.42,
    percent_1h: 2.1,
    percent_24h: 5.8,
    percent_7d: 12.4,
    market_cap: "$41.2B",
    volume_24h: "$2.8B",
    circulating_supply: "432.0M SOL",
    max_supply: "∞",
    chart: "https://www.coingecko.com/coins/4128/sparkline.svg"
  }
];
