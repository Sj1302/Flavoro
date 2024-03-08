import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart, updateQuantity } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {
  const dispatch= useDispatch();


  const handleminusclick=(item)=>{
    if(item.qnty>1){
      dispatch(updateQuantity({id: item.id,img:item.img, name:item.name, price:item.price, desc: item.desc, rating:item.rating, qnty: item.qnty - 1 }))
    }
  else{
    dispatch(deleteFromCart(item))
  }

  }
  return (
    <div  className='flex bg-white text-sm rounded-s-sm  rounded-lg p-2 my-3 shadow-lg'>
      <div>
        <img className='w-[50px]' src={item.img} alt="" />
      </div>
 
    <div className='flex '> 
     <div className='flex flex-col text-xs font-semibold pl-2 min-w-[160px] max-w-[160px]'>
        <h3>{item.name}</h3>
        <h3 className='text-green-500'>₹{item.price}</h3>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center w-[35px] '>
       
        <button onClick={()=>{ 
          dispatch(deleteFromCart(item))
          toast(`${item.name} Removed!...`, {icon:"🖐"})
        }} className='px-1 hover:bg-red-600 hover:text-white'><MdDelete /></button>
       
        <div className='flex gap-2 '> 
            <button onClick={()=>handleminusclick(item)} className='border px-1 hover:bg-green-500 hover:text-white rounded-md'>-</button>
            <span>{item.qnty}</span>
            <button onClick={()=> dispatch(addToCart(item))} className='border px-1  hover:bg-green-500 hover:text-white rounded-md'>+</button>
        </div>
     
     </div>
    </div>
    </div>
  )
}

export default CartItem