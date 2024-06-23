import { motion } from "framer-motion"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"


const iconvars = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      easeInOut: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
const Technologies = () => {
  return (
    <div className="borber-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1}} 
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconvars(2.5)}
        initial= "initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-400"/>
        </motion.div>
        <motion.div
        variants={iconvars(3)}
        initial= "initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-6xl text-green-500"/>
        </motion.div>
        <motion.div
        variants={iconvars(5)}
        initial= "initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-6xl text-green-600"/>
        </motion.div>
        <motion.div 
        variants={iconvars(2)}
        initial= "initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-6xl text-stone-400"/>
        </motion.div>
        <motion.div 
        variants={iconvars(6)}
        initial= "initial"
        animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-6xl text-yellow-400"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies