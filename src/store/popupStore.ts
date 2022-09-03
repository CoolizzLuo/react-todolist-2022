import create from 'zustand';

export interface IPopupStore {
  popup: null | string;
  openPopup: (message: string) => void;
  closePopup: () => void;
}

export const usePopupStore = create<IPopupStore>((set) => ({
  popup: null,
  openPopup: (message) => set({ popup: message }),
  closePopup: () => set({ popup: null }),
}));
