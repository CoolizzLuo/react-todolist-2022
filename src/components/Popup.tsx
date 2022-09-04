import React, { useRef, useEffect } from 'react';
import { usePopupStore } from '../store/popupStore';

interface PopupProps {}

const Popup = (props: PopupProps) => {
  const { popup, closePopup } = usePopupStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) {
        return;
      }
      closePopup();
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, []);

  if (!popup) return <></>;

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#333A] z-50'>
      <div className='flex justify-center items-center h-full'>
        <div
          ref={ref}
          className='relative w-[350px]  md:w-[450px] h-[200px] bg-[#eee] rounded-2xl flex justify-center items-center font-bold'
        >
          <p className=' text-xl text-[#e94a4a]'>{popup}</p>
          <button className='absolute bottom-2 py-2 px-4 text-white bg-[#1385dc] rounded-lg ' onClick={closePopup}>
            OKay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
