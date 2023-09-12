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
            <img src={logo} alt='Logo' className={`w-10 duration-500 ${open && 'rotate-[360deg]'}`}/>
            <h1 className={`text-earlgrey relative font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Squeek </h1>
          </div>
        <ul className='pt-6'>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/">
            <i className='bi-house'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Home</h1>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/explore" >
            <i className='bi-search'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Explore</h1>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/message">
            <i className='bi-chat-dots'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Messages</h1>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/favorites">
            <i className='bi-bookmark'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Favorites</h1>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
          <Link to="/communities">
            <i className='bi-people'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Communities</h1>
          </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-9`}>
            <Link to="/profile">
              <i className='bi-person'></i>
              <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Profile</h1>
            </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
            <Link to="/signup">
              <i className='bi-person'></i>
              <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Sign Up</h1>
            </Link>
          </li>
          <li className={`text-earlgrey flex items-center gap-x-4 p-2 hover:bg-mickeygrey rounded-md mt-2`}>
            <Link to="/login">
              <i className='bi-person'></i>
              <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Log In</h1>
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
