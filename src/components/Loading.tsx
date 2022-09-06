import ClipLoader from 'react-spinners/ClipLoader';
import useLoadingStore from '../store/loadingStore';

const Loading = () => {
  const { loading } = useLoadingStore();
  return (
    <>
      {loading && (
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#333A] z-50'>
          <div className='flex justify-center items-center h-full'>
            <ClipLoader />
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
