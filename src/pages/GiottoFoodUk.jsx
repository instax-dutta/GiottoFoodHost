import Brands from '@/components/Brands';
import CartModal from '@/components/CartModal';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'

const GiottoFoodUk = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
    <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
        <Brands/>
    </>
  )
}

export default GiottoFoodUk