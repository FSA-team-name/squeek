import { Route, Routes, Link } from 'react-router-dom';
import { MakeSqueeks, Navbar, Searchbar, Suggested, Favorites, Home, Profile, Thread, Message } from './imports';
import Communities from './pages/Communities';
import Explore from './pages/Explore';

const App = () => {

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
        </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />}/>
        <Route path='/message' element={<Message />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/communities' element={<Communities />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </>
  )
}

export default App;
