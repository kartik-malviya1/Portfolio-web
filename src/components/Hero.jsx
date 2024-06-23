import Lottie from 'react-lottie';
import animationData from "../Lottie/Animation-Gray.json"
import { HERO_CONTENT } from '../constants/index.js'
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: {x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay}
  }
})
const container2 = (delay) => ({
  hidden: {x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay}
  }
})
export function Animation() {
  const defaultOptions = {
      onload: true,
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie  
       options={ defaultOptions }
        height={200}
        width={250}
      />
    </div>
  );
}
const Hero = () => {
  return (
    <div className=" border-b  border-neutral-900 lg:mb-35 pb-4 ">
      <div className="flex flex-wrap items-center justify-center ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-40 mb-28 gap-5	">
            <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className=" text-6xl tracking-tighter lg:mt-16
            lg:text-8xl">Kartik Malviya</motion.h1>
            <motion.span
             variants={container(0.5)}
             initial="hidden"
             animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent place-items-start mt-5">
              Full Stack Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2 max-w-xl py-6 text-start font-light tracking-tight'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
           <motion.div 
           variants={container2(0)}
           initial="hidden"
           animate="visible"
           className='flex rounded-xl px-36 place-self-center '>
            <Animation />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero