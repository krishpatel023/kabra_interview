import Amazon from '../assets/icons/amazon.svg'
import Facebook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'

export default function Footer() {
  return (
    <>
    <div className='w-full min-h-[20rem] flex justify-center items-center py-12'>
      <div className='h-full w-[60%] flex flex-col justify-center gap-3 md:items-center md:text-center'>
        <h1 className='font-bold text-4xl'>LOGO</h1>
        <span className='max-w-[40rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur distinctio a cupiditate assumenda, sed odit dolore unde, magni similique dignissimos quia excepturi facere aut ipsum, quae dicta mollitia iusto?</span>
        <div className='flex  items-center gap-4'>
            <img src={Facebook} className='w-8 h-8' alt="" />
            <img src={Instagram} className='w-6 h-6' alt="" />
            <img src={Amazon} className='w-6 h-6' alt="" />
        </div>
      </div>
      <div className='h-full w-[10%] flex flex-col justify-center items-center gap-3 md:hidden'>
        <h1 className='font-normal text-xl underline'>About</h1>
        <span className='hover:text-accent-color cursor-pointer'>About Us</span>
        <span className='hover:text-accent-color cursor-pointer'>Our Team</span>
        <span className='hover:text-accent-color cursor-pointer'>Career</span>
      </div>
      <div className='h-full w-[10%] flex flex-col justify-center items-center gap-3 md:hidden'>
        <h1 className='font-normal text-xl underline'>Policy</h1>
        <span className='hover:text-accent-color cursor-pointer'>Privacy Poicy</span>
        <span className='hover:text-accent-color cursor-pointer'>Return Policy</span>
        <span className='hover:text-accent-color cursor-pointer'>Contact</span>
      </div>
    </div>
    <div className='w-full h-16 flex flex-col items-center gap-4'>
        <div className='min-h-[1px] bg-gray-400 w-[90%]'></div>
        <h1>© Copyright 2023. All rights reserved</h1>
    </div>
    </>
  )
}
