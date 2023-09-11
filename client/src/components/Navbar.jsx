import { Link } from 'react-router-dom';
import logo from '../assets/mouse-logo.png';
import { useState, useEffect } from 'react';
import control from '../assets/control.png';


const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
      <nav className={`${open ? 'w-72' : 'w-20'} bg-toothwhite h-screen p-5 pt-8 relative duration-300`}>
          <img src={control} className={`absolute -right-3 top-9 w-7 border-earlgrey border-2 rounded-full ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)}/>
          <div className='flex gap-x-4 items-center'>
            <img src={logo} alt='Logo' className={`w-10 duration-500 ${open && 'rotate-[360]'}`}/>
            <h1 className={`text-earlgrey relative font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Squeek </h1>
          </div>
        <ul className='pt-6'>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/">
            <i className='bi-house'></i>
            <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Home</span>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/explore" >
            <i className='bi-search'></i>
            <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Explore</span>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/message">
            <i className='bi-chat-dots relative w-4 h-2 text-lg align-middle'></i>
            <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Messages</span>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/favorites">
            <i className='bi-bookmark relative w-4 h-2 text-lg align-middle'></i>
            <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Favorites</span>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/communities">
            <i className='bi-people relative w-4 h-2 text-lg align-middle'></i>
            <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Communities</span>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-9`}>
            <Link to="/profile">
              <i className='bi-person relative w-4 h-2 text-lg align-middle'></i>
              <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Profile</span>
            </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
            <Link to="/signup">
              <i className='bi-person relative w-4 h-2 text-lg align-middle'></i>
              <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Sign Up</span>
            </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
            <Link to="/login">
              <i className='bi-person relative w-4 h-2 text-lg align-middle'></i>
              <span className={`${!open && 'hidden'} relative duration-200 ml-2`}>Log In</span>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;
