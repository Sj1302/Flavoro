import React, { useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [activeCart, setActiveCart] = useState(false);

  const totalitems= cartItems.reduce((total, item) => total + item.qnty, 0)
  const totalprice= cartItems.reduce((total, item) => total + item.qnty * item.price, 0).toFixed(2)
  const navigate= useNavigate(); 

  const handleCheckout=()=>{
    if (cartItems.length===0){
      toast("Your cart is empty! Please add some items to proceed.")
      return;
    }else{navigate('/Success')  }
    };
  return (
    <>
    <div className={`fixed right-0 top-0 w-full lg:w-[50vh] bg-white h-full px-4 py-3 ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`}>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-bold text-gray-500'>My Orders</h2>
        <IoIosCloseCircle onClick={() => setActiveCart(!activeCart)} className='text-2xl cursor-pointer bg-white hover:bg-red-400 hover:text-white' />
      </div>

      {cartItems.length>0 ? cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      )): <h2 className='text-center text-gray-500 font-bold my-4'>No Items in the Cart...</h2>}

      <div className='absolute bottom-0 mb-3'>
        <h2 className='text-gray-600 font-semibold'>Items: {totalitems}</h2>
        <h2 className='text-gray-600 font-semibold'>
          Total Amount: ₹{totalprice}
        </h2>
        <button onClick={handleCheckout} className='bg-green-500 p-3 text-white rounded-lg w-full lg:w-[45vh] text-xs hover:bg-green-600 font-bold'>
          Checkout
        </button>
      </div>
      
    </div>
    <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className={ `rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 cursor-pointer right-4 hover:bg-green-500 hover:text-white ${cartItems.length>0 && "animate-bounce delay-500 transition-all"}`}/>
    </>
  );
};

export default Cart;
