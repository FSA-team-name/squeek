import { Link } from 'react-router-dom';
import logo from '../assets/mouse-logo.png';


const Navbar = () => {

  return (
      <nav className='absolute top-0 bottom-0  h-full left-0 bg-[#FFFFFF] overflow-hidden'>
        <ul>
          <li>
          <Link to="/" className='relative text-earlgrey table w-32 p-4'>
            <img src={logo} alt='Logo' className='w-10 align-middle flex logo'/>
          </Link>
          </li>
          <li>
          <Link to="/" className='relative text-earlgrey table w-32 p-4'>
            <i className='bi-house relative w-4 h-2 top-2 text-lg align-middle'></i>
            <span className='relative top-2 ml-2'>Home</span>
          </Link>
          </li>
          <li>
          <Link to="/explore" className='relative text-earlgrey table w-32 p-4'>
            <i className='bi-search relative w-4 h-2 top-2 text-lg align-middle'></i>
            <span className='relative top-2 ml-2'>Explore</span>
          </Link>
          </li>
          <li>
          <Link to="/message" className='relative text-earlgrey table w-32 p-4 hover:bg-[#eee]'>
            <i className='bi-chat-dots relative w-4 h-2 top-2 text-lg align-middle'></i>
            <span className='relative top-2 ml-2'>Messages</span>
          </Link>
          </li>
          <li>
          <Link to="/favorites" className='relative text-earlgrey table w-32 p-4 hover:bg-[#eee]'>
            <i className='bi-bookmark relative w-4 h-2 top-2 text-lg align-middle'></i>
            <span className='relative top-2 ml-2'>Favorites</span>
          </Link>
          </li>
          <li>
          <Link to="/communities" className='relative text-earlgrey table w-32 p-4 hover:bg-[#eee]'>
            <i className='bi-people relative w-4 h-2 top-2 text-lg align-middle'></i>
            <span className='relative top-2 ml-2'>Communities</span>
          </Link>
          </li>
          <li>
            <Link to="/profile" className='absolute text-earlgrey table w-32 p-4 hover:bg-[#eee] bottom-0'>
              <i className='bi-person relative w-4 h-2 top-2 text-lg align-middle'></i>
              <span className='relative top-2 ml-2'>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/signup" className="linkstyle">
            Sign up
            </Link>
          </li>
          <li>
            <Link to="/login" className="linkstyle">
            Login
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;
