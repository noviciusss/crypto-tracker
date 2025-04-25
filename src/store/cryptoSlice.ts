import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoData } from '../components/types';

export interface CryptoState {
  assets: CryptoData[];
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  assets: [],
  loading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets: (state, action: PayloadAction<CryptoData[]>) => {
      state.assets = action.payload;
    },
    updateAsset: (state, action: PayloadAction<{ id: string; updates: Partial<CryptoData> }>) => {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...action.payload.updates };
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setAssets, updateAsset, setLoading, setError } = cryptoSlice.actions;
export default cryptoSlice.reducer; 