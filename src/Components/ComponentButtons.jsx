import React, { useEffect, useState } from 'react'
import FoodData from '../FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setcomponentbutton } from '../redux/Slices/ComponentbuttonSlice'

const ComponentButtons = () => {
const [categories,setCategories]= useState([])
const dispatch=useDispatch();

const getCategories = () => {
  const categorySet = new Set();
  FoodData.map((item)=>{
    categorySet.add(item.category);
  })
  setCategories(Array.from(categorySet));
}
const category= useSelector((state)=>state.componentButton.componentbutton)
useEffect(()=>{
  getCategories();
},[])

  return (
    <div className='flex mx-5 my-4 flex-col' >
      <span className='font-bold text-lg'>Find the Best Food.....</span>
      <div className='flex gap-3'>
      <button onClick={()=>dispatch(setcomponentbutton("All"))} className={ `  p-2 bg-gray-200 font-semibold rounded-lg border-none outline-none hover:bg-green-500 hover:text-white  ${category==="All" && "bg-green-500 text-white" } `}>All</button>
          {categories.map((item)=> <button onClick={()=>dispatch(setcomponentbutton(item))} className={ ` p-2 bg-gray-200 font-semibold rounded-lg border-none outline-none hover:bg-green-500 hover:text-white  ${category===item && "bg-green-500 text-white" } `}>{item}</button>
       )}
        
      </div>
    </div>
  ) 
}

export default ComponentButtons
