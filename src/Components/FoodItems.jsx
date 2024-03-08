import React from 'react'
import { FaStar } from "react-icons/fa";
import FoodData from '../FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';
const FoodItems = () => {
   
const handletoast=(name)=> toast.success(`${name} added to the Cart`);
const dispatch= useDispatch();
const handleaddtocart=(item)=>{
  dispatch(addToCart({id: item.id,img:item.img, name:item.name, price:item.price, desc: item.desc, rating:item.rating, qnty:1}));
  handletoast(item.name)
}
let category= useSelector((state)=>state.componentButton.componentbutton)
let search= useSelector((state)=>state.search.search)
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div className='flex flex-wrap justify-center sm:items-center flex-col lg:flex-row lg:justify-start'>
      {FoodData.map((item) => (
        (category === 'All' || category === item.category) && (
         (item.name.toLowerCase().includes(search.toLowerCase())) ?   <div key={item.id} className='mx-5 mb-5 flex font-bold flex-col w-[250px] rounded-lg p-5 gap-2 bg-white '>
         <img src={item.img} alt="" className='h-[130px] w-auto hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
         <div className='flex justify-between text-sm'>
           <h2>{item.name}</h2>
           <span className='text-green-500'>₹{item.price}</span>
         </div>
         <p className='text-sm '>{item.desc.slice(0, 50)}...</p>
         <div className='flex justify-between text-sm'>
           <span className='flex justify-center items-center gap-1'><FaStar className='text-yellow-400' /> {item.rating}</span>
           <button onClick={() => handleaddtocart(item)} className='px-2 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 '>Add to Cart</button>
         </div>
       </div> : ""
        )
      ))}
    </div>
  </>
  )

}

export default FoodItems
