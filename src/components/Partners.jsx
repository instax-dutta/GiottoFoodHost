import React from 'react'
import img1 from "../images/dante.png"
import img2 from "../images/4CB8jIP.jpg"

const Partners = () => {
  return (
    <>
        <div className="bg-slate-200 px-8 py-3 my-2">
            <h2 className='text-5xl font-bold text-center md:text-left'>Our Partners:</h2>
            <div className='py-4 flex items-center flex-col md:flex-row gap-10 md:gap-0 md:justify-around'>
                <div><img src={img1} alt="" /></div>
                <div><img className='mix-blend-color-burn' src={img2} alt="" /></div>
            </div>
        </div>
    </>
  )
}

export default Partners