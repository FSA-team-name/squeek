import { Route, Routes } from 'react-router-dom';
import { MakeSqueeks, Navbar, Searchbar, Suggested, Favorites, Home, Profile, Thread, Message, Signup, Communities, Explore, Login } from './imports';
import { useState } from 'react';

const App = () => {
  const [token, setToken] = useState('');
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />}/>
        <Route path='/message' element={<Message />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/communities' element={<Communities />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signup' element={<Signup setToken={setToken} />}/>
        <Route path='/login' element={<Login setToken={setToken} />}/>
      </Routes>
    </>
  )
}

export default App;
