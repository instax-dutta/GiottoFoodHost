import CarouselDemo from '@/components/Carousel'
import CartModal from '@/components/CartModal'
import Collections from '@/components/Collections'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import React, { useState } from 'react'

const Home = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
    <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
    {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    <CarouselDemo/>
    <Container/>
    <Collections/>
    <Partners/>
    <Footer/>
    </>
  )
}

export default Home