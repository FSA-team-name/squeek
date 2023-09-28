import { Link } from 'react-router-dom';
import logo from '../assets/mouse-logo.png';
import { useState } from 'react';
import control from '../assets/control.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/tokenSlice';


const Navbar = ({ user }) => {

  const [open, setOpen] = useState(true);
  const token = useSelector((state) => state.userToken.token);
  const username = useSelector((state) => state.userToken.username);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('logintoken');
    dispatch(setToken({token: null, id: null, username: null}));
  }
  return (
      <nav className={`${open ? 'w-72' : 'w-20'} bg-comp h-screen p-5 pt-8 sticky top-0 duration-300 border-r-4 border-accent-1`}>
          <img src={control} className={`absolute -right-3 top-9 w-7 border-accent-1 border-2 rounded-full ${!open && 'rotate-180'} block`} onClick={() => setOpen(!open)}/>
          <div className='flex gap-x-4 items-center'>
            <img src={logo} alt='Logo' className={`w-10 duration-500 ${open && 'rotate-[360deg]'}`}/>
            <h1 className={`text-content relative font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Squeek </h1>
          </div>
        <ul className='pt-6'>
          <li className={`text-content flex items-center gap-x-4 p-2 hover:bg-accent-2 rounded-md mt-2`}>
          <Link to="/">
            <i className='bi-house'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Home</h1>
          </Link>
          </li>
          <li className={`text-content flex items-center gap-x-4 p-2 hover:bg-accent-2 rounded-md mt-2`}>
          <Link to="/explore" >
            <i className='bi-search'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Explore</h1>
          </Link>
          </li>
          <li className={`text-content flex items-center gap-x-4 p-2 hover:bg-accent-2 rounded-md mt-2`}>
          <Link to="/chat">
            <i className='bi-chat-dots'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Messages</h1>
          </Link>
          </li>
          {token ? ( 
          <li className={`text-content flex items-center gap-x-4 p-2 hover:bg-accent-2 rounded-md mt-2`}>
          <Link to="/favorites">
            <i className='bi-bookmark'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Favorites</h1>
          </Link>
          </li>
          ): null}
          <li className={`text-content flex items-center gap-x-4 p-2 hover:bg-accent-2 rounded-md mt-2`}>
          <Link to="/communities">
            <i className='bi-people'></i>
            <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Communities</h1>
          </Link>
          </li>

          {
            token ? (
            <li>
              <Link to="/profile" className={`${open && 'p-2'} text-content flex items-center gap-x-4 hover:bg-accent-2 rounded-md mt-9`}>
                <img src={user.photo} className="block box-border h-10 w-10 border-2 border-accent-1 items-center rounded-full" alt='profile' />
                <section>
                  <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>{user.firstName}</h1>
                  <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>@{username}</h1>
                </section>
              </Link>
              <button type="button" onClick={logout} className={`${!open && 'scale-0'} rounded-full py-2 px-4 relative duration-300 ml-2 bg-accent-1 text-comp hover:bg-comp hover:text-accent-1 border border-transparent hover:border-accent-1 font-bold text-comp"`}>
                Sign Out
              </button>
            </li>
            ) : (
            <li className={`text-content flex items-center gap-x-4 p-2 hover:bg-accent-2 rounded-md mt-2`}>
              <Link to="/login">
                <i className='bi-person'></i>
                <h1 className={`${!open && 'scale-0'} relative duration-300 ml-2`}>Log In</h1>
              </Link>
            </li>
            )
          }
        </ul>
      </nav>
  )
}

export default Navbar;
