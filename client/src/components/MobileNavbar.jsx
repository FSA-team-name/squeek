import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/mouse-logo.png';

const MobileNavbar = ({ user }) => {

  const token = useSelector((state) => state.userToken.token);

  return (
    <nav className='bg-bkg border-t-2 w-full fixed bottom-0 border-accent-1'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 flex-col'>
        <ul className='flex items-center gap-[11vw] px-8'>
          <li>
          <Link to='/'><i className='bi-house text-accent-1'></i></Link>
          </li>
          <li>
          <Link to='/explore'><i className='bi-search text-accent-1'></i></Link>
          </li>
          <li>
            <Link to='/message'><i className='bi-chat-dots text-accent-1'></i></Link>
          </li>
          {
            token &&
            <li>
              <Link to='/favorites'><i className='bi-bookmark text-accent-1'></i></Link>
            </li>
          }
          <li>
            <Link to='/communities'><i className='bi-people text-accent-1'></i></Link>
          </li>
          <li>
            {
              token ? (
                <Link to='/profile'><img src={user.photo} alt='profile' className="flex box-border h-9 w-9 border-2 border-accent-1 items-center overflow-hidden rounded-full" /></Link>
              ) : (
                <Link to='/login'><i className='bi-person text-accent-1'></i></Link>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MobileNavbar