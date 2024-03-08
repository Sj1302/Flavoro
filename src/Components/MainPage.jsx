import React from 'react'
import NavBar from './NavBar'
import ComponentButtons from './ComponentButtons'
import FoodItems from './FoodItems'
import Cart from './Cart'

const MainPage = () => {
  return (
    <div>
        <NavBar/>
        <ComponentButtons/>
        <FoodItems/>
        <Cart/>
    </div>
  )
}

export default MainPage
