import { Route, Routes } from 'react-router-dom';
import { MakeSqueeks, Navbar, Searchbar, Suggested, Favorites, Home, Profile, Thread, Message, Signup, Communities, Explore } from './imports';

const App = () => {

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
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </>
  )
}

export default App;
