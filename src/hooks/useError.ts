import { usePopupStore } from '../store/popupStore';
import axios from 'axios';

type Props = { handleError: (file: any) => void };

const useError = (): Props => {
  const { openPopup, closePopup } = usePopupStore();

  const handleError = (error: any) => {
    closePopup();
    if (!axios.isAxiosError(error) || !error.response) {
      if (error.message) {
        openPopup(error.message);
        return;
      }
      openPopup('系統錯誤');
      return;
    }

    openPopup((error.response?.data as { error: string }).error);
  };

  return { handleError };
};

export default useError;
