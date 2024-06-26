import { FaLinkedin,FaInstagram,FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import KM_logo from '../assets/KM_logo.png'
const Navbar = () => {
  return (
    <nav className='justify-between items-center flex m-4 sticky backdrop-blur-[2px] z-[100] h-14 inset-x-0 top-0'>
      <div className='filter invert sepia saturapxte-100 hue-rotate-90 contrast-100 cursor-pointer'>
        <a href='/'><img src={KM_logo} alt="kartik malviya" className='w-14'/></a>
      </div>
      <div className='items-center px-2 sm:flex text-2xl gap-4 flex '> 
          <a href="http://www.linkedin.com/in/kartik-malviya-data-science" className='cursor-pointer text-gray-300/85 hover:text-white duration-200' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          <a href="http://www.github.com/kartik-malviya1" className='cursor-pointer text-gray-300/85 hover:text-white duration-200' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="http://www.instagram.com/kartik_malviya1" className='cursor-pointer text-gray-300/85 hover:text-white duration-200' target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          <a href="http://www.x.com/" className='cursor-pointer text-gray-300/85 hover:text-white duration-200 target="_blank" rel="noopener noreferrer"'><FaSquareXTwitter/></a>
      </div>
    </nav>
  )
}

export default Navbar