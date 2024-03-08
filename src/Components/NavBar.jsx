import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/Slices/SearchSlice';

const NavBar = () => {

    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
      });

      const dispatch=useDispatch();

  return (
    <div className='flex justify-between px-4 py-3 flex-col lg:flex-row' >
        <div>
            <h2 className='text-lg text-gray-500 font-bold'>{currentDate}</h2>
            <h2 className='text-xl font-bold'>Flavoro Foods</h2>
        </div>
        <div>
            <input onChange={(e)=> dispatch(setSearch(e.target.value)) } className='border outline-none p-2 w-full lg:w-[55vh] rounded-lg' type="text" placeholder='Search Here' autoComplete='off'/>
        </div>
    </div>
  )
}

export default NavBar
