import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { setcomponentbutton } from '../redux/Slices/ComponentbuttonSlice';
import { setSearch } from '../redux/Slices/SearchSlice';
import { emptycart } from '../redux/Slices/CartSlice';

const SuccessPage = () => {
  const [loader, setLoader] = useState(true);
  const dispatch= useDispatch();
  
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      dispatch(setcomponentbutton("All"));
      dispatch(setSearch(""));
      dispatch(emptycart([]));
    }, 3000);
  }, []);

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      {loader ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <>
          <h2 className='text-gray-500 font-semibold text-2xl'>Order Successful....</h2>
          <p className='text-gray-500 text-2xl font-semibold'>Your Order has been Successfully Placed</p>
        </>
      )}
    </div>
  );
};

export default SuccessPage;
