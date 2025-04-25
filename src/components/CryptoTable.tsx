// components/CryptoTable.tsx
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CryptoData } from './types';
import { cryptoList } from './mock';
import { useState, useEffect } from 'react';

export default function CryptoTable() {
  const assets = useSelector((state: RootState) => state.crypto.assets);
  const [initialPrices, setInitialPrices] = useState<Record<string, number>>({});

  // Set initial prices when component mounts
  useEffect(() => {
    const prices: Record<string, number> = {};
    cryptoList.forEach(crypto => {
      prices[crypto.id] = crypto.price;
    });
    setInitialPrices(prices);
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-[1000px] w-full text-sm text-left border-collapse">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-2">#</th>
            <th className="p-2">Logo</th>
            <th className="p-2">Name</th>
            <th className="p-2">Symbol</th>
            <th className="p-2">Price</th>
            <th className="p-2">1h %</th>
            <th className="p-2">24h %</th>
            <th className="p-2">7d %</th>
            <th className="p-2">Market Cap</th>
            <th className="p-2">24h Volume</th>
            <th className="p-2">Circulating</th>
            <th className="p-2">Max Supply</th>
            <th className="p-2">7D Chart</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {assets.map((crypto: CryptoData, idx: number) => {
            const initialPrice = initialPrices[crypto.id] || crypto.price;
            const priceChange = ((crypto.price - initialPrice) / initialPrice) * 100;
            const priceColor = priceChange >= 0 ? "text-green-500" : "text-red-500";

            return (
              <tr key={crypto.id} className="border-b">
                <td className="p-2">{idx + 1}</td>
                <td className="p-2"><img src={crypto.logo} alt={crypto.symbol} className="w-6 h-6" /></td>
                <td className="p-2">{crypto.name}</td>
                <td className="p-2">{crypto.symbol}</td>
                <td className={`p-2 ${priceColor}`}>
                  ${crypto.price.toLocaleString()}
                  <span className="text-xs ml-1">
                    ({priceChange.toFixed(2)}%)
                  </span>
                </td>
                <td className={`p-2 ${crypto.percent_1h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {crypto.percent_1h.toFixed(2)}%
                </td>
                <td className={`p-2 ${crypto.percent_24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {crypto.percent_24h.toFixed(2)}%
                </td>
                <td className={`p-2 ${crypto.percent_7d >= 0 ? "text-green-500" : "text-red-500"}`}>
                  {crypto.percent_7d.toFixed(2)}%
                </td>
                <td className="p-2">{crypto.market_cap}</td>
                <td className="p-2">{crypto.volume_24h}</td>
                <td className="p-2">{crypto.circulating_supply}</td>
                <td className="p-2">{crypto.max_supply}</td>
                <td className="p-2"><img src={crypto.chart} alt="7D Chart" className="w-16 h-6" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
