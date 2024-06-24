import { PROJECTS } from '../constants/index.js'
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 mb-10">
      <h1 className="my-20 text-center text-4xl"></h1>
        {PROJECTS.map((project,index)=>(
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
            <img src={project.image} alt={project.title}
            width={150} 
            height={150}
            className='mb-6 rounded'
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
          </div>
        ))}
    </div>
  )
}

export default Projects