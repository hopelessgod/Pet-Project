import React from 'react'
import styles from '../style'
import {discount, robot, reactlogo, tailwindlogo} from '../assets'
import Gradient from './Gradient'
import Lottie from "lottie-react";
import { burningpc } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-12 sm:px-16 px-6`}>
        <h1 className={` text-white font-poppins text-[62px]`}>Welcome to my site!</h1>
        <br className='sm:block hidden' /> {" "}
        <div className="flex flex-row justify-between items-center w-full">
          <span className={` text-white font-poppins text-[60px]`}>I'm Andrei Grigoriev, <Gradient gradient="from-amber-400 via-rose-500 to-fuchsia-500">new</Gradient>🐝 in Front-end world.</span>
        </div>
        <div>
          <h1 className='font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[50px] leading-[75px] w-full'>About me:</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>I am a passionate front-end developer with a strong focus on React and Tailwind<img src={reactlogo} className='inline-block px-2 w-[52px] h-[32px]'/><img src={tailwindlogo} className='inline-block px-2 w-[52px] h-[32px]'/></p>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative xl:pl-10 pl-0`}>
          <Lottie animationData={burningpc} className="w-[600px] h-[600px] relative z-[5]" />
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-30 bottom-30 blue__gradient" />
          {/* gradient end */}
      </div>
      </section>
  )
}

export default Hero