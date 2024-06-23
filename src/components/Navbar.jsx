import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import KM_logo from '../assets/KM_logo.png'

const Navbar = () => {
  return (
    <nav className="items-center mb-20 flex gap-[1200px] sm:justify-between py-1 fixed backdrop-blur-[1px]">
      <div className="flex font-semibold items-center">
        <a href='/'>
        <img src={ KM_logo } alt="logo"  className='mx-2 w-14 filter invert sepia saturapxte-100 hue-rotate-90 contrast-100 cursor-pointer hover:filter-slate-700' /></a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/kartik-malviya-ab205025a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='cursor-pointer hover:text-gray-400 ease-in-out duration-200' />
        </a>
        <a href="https://github.com/kartik-malviya1" target="_blank" rel="noopener noreferrer">
          <FaGithub className='cursor-pointer hover:text-gray-400 duration-200 ease-in-out'/>
        </a>
        <a href="https://www.instagram.com/kartik_malviya1/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='cursor-pointer hover:text-gray-400 duration-200 ease-in-out'/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className='cursor-pointer hover:text-gray-400 ease-in-out duration-200'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
