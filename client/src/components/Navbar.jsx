import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
      <div id="navbar">
          <Link to="/" className="linkstyle">
            Home
          </Link>
          <Link to="/explore" className="linkstyle">
            Explore
          </Link>
          <Link to="/message" className="linkstyle">
            Messages
          </Link>
          <Link to="/favorites" className="linkstyle">
            Favorites
          </Link>
          <Link to="/communities" className="linkstyle">
            Communities
          </Link>
          <Link to="/Profile" className="linkstyle">
            Profile
          </Link>
          <Link to="/signup" className="linkstyle">
            Sign up
          </Link>
        </div>
    </>
  )
}

export default Navbar;
