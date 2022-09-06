import create from 'zustand';

export interface ILoadingStore {
  loading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
}

export const useLoadingStore = create<ILoadingStore>((set, get) => ({
  loading: false,
  openLoading: () => set({ loading: true }),
  closeLoading: () => set({ loading: false }),
}));

export default useLoadingStore;
