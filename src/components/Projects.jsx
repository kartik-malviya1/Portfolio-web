import { motion } from "framer-motion"
import { PROJECTS } from '../constants/index.js'
const Projects = () => {
  const container = (delay) => ({
    hidden: {x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay}
    }
  })
  return (
    <div className="border-b border-neutral-900 pb-4 mb-10 sm:place-items-center">
      <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}} 
        className="my-20 text-center mb-28 text-4xl">
        Projects
      </motion.h1>
        {PROJECTS.map((project,index)=>(
          <motion.div key={index}
            variants={container(0.5)}
              animate="visible" 
              whileInView={{opacity: 1, x: 0}}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}} 
            className='mb-8 flex flex-wrap justify-center lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} alt={project.title}
            width={150} 
            height={150}
            className='mb-6 rounded flex hover:shadow-lg hover:shadow-slate-600/50 hover:scale-95 hover:duration-200 hover:ease-in-out '
            />
             </div>
             <div className='w-full max-w-xl lg:w-3/4'>
             <a href={project.url}><h6 className='mb-2 font-semibold cursor-pointer hover:underline'>{project.title}</h6></a>
             <p className="mb-4 text-neutral-400">{project.description}</p>
             {project.technologies.map((tech, index)=>(
              <span key={index} 
              className=' cursor-default mr-2 rounded backdrop:blur-sm border-2 border-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
              ))}
             </div>
          </motion.div>
        ))}
    </div>
  )
}

export default Projects