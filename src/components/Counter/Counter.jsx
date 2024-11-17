import React from 'react'
import image1 from '../../assets/cicon.png'
import image2 from '../../assets/cicon1.png'
import image3 from '../../assets/cicon2.png'
import image4 from '../../assets/cicon3.png'
import image5 from '../../assets/cicon4.png'

const Counter = () => {
  return (
    <div className="bg-[#fff7e6]">
      <div className='max-w-[1320px] mx-auto pb-[160px]'>
        <div className=" flex justify-between ">


        <div className=" font-primary-font">
        <div className="">
          <img className=' pl-7' src={image1} alt="" />
        </div>
       <div className="w-[121px]">
       <p className='text-[#F95C19] pl-[20px] font-extrabold text-[39px] text-center'>26+</p>
       <p className='text-[#464558] text-center font-bold text-[20px]'>Awards  won</p>
       </div>
        </div>


        <div className=" font-primary-font">
        <div className="">
          <img className=' pl-7' src={image2} alt="" />
        </div>
       <div className="w-[121px]">
       <p className='text-[#F95C19] pl-[20px] font-extrabold text-[39px] text-center'>26+</p>
       <p className='text-[#464558] text-center font-bold text-[20px]'>Awards  won</p>
       </div>
        </div>


        <div className=" font-primary-font">
        <div className="">
          <img className=' pl-7' src={image3} alt="" />
        </div>
       <div className="w-[121px]">
       <p className='text-[#F95C19] pl-[20px] font-extrabold text-[39px] text-center'>26+</p>
       <p className='text-[#464558] text-center font-bold text-[20px]'>Awards  won</p>
       </div>
        </div>


        <div className=" font-primary-font">
        <div className="">
          <img className=' pl-7' src={image4} alt="" />
        </div>
       <div className="w-[121px]">
       <p className='text-[#F95C19] pl-[20px] font-extrabold text-[39px] text-center'>26+</p>
       <p className='text-[#464558] text-center font-bold text-[20px]'>Awards  won</p>
       </div>
        </div>

        <div className=" font-primary-font">
        <div className="">
          <img className=' pl-7' src={image5} alt="" />
        </div>
       <div className="w-[121px]">
       <p className='text-[#F95C19] pl-[20px] font-extrabold text-[39px] text-center'>26+</p>
       <p className='text-[#464558] text-center font-bold text-[20px]'>Awards  won</p>
       </div>
        </div>

        </div>

    </div>
    </div>
  )
}

export default Counter