import { AppDispatch } from '../store/store';
import { updateAsset } from '../store/cryptoSlice';

export class WebSocketService {
  private dispatch: AppDispatch;
  private interval: NodeJS.Timeout | null = null;

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch;
  }

  start() {
    this.interval = setInterval(() => {
      this.simulatePriceUpdate();
    }, 2000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  private simulatePriceUpdate() {
    const randomChange = (base: number) => {
      const change = (Math.random() - 0.5) * 0.02; // ±2% change
      return base * (1 + change);
    };

    const randomPercent = () => {
      return (Math.random() - 0.5) * 5; // ±5% change
    };

    const randomVolume = (base: string) => {
      const value = parseFloat(base.replace(/[^0-9.]/g, ''));
      const change = (Math.random() - 0.5) * 0.01; // ±10% change
      return `$${(value * (1 + change)).toFixed(1)}B`;
    };

    // Update all cryptocurrencies
    const cryptoIds = ["1", "2", "3", "4", "5", "6"];
    const basePrices = [64000, 3500.42, 1.00, 0.52, 350.75, 95.42];
    const baseVolumes = ["45B", "18.2B", "45.8B", "1.2B", "1.5B", "2.8B"];

    cryptoIds.forEach((id, index) => {
      const updates = {
        price: randomChange(basePrices[index]),
        percent_1h: randomPercent(),
        percent_24h: randomPercent(),
        percent_7d: randomPercent(),
        volume_24h: randomVolume(baseVolumes[index]),
      };

      this.dispatch(updateAsset({ id, updates }));
    });
  }
} 