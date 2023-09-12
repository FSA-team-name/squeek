import { Route, Routes } from 'react-router-dom';
import { MakeSqueeks, Navbar, Searchbar, Suggested, Favorites, Home, Profile, Thread, Message, Signup, Communities, Explore, Login, Notfound } from './imports';

const App = () => {

  return (
    <section className='flex'>
      <Navbar />
      <section className='absolute top-0 bottom-0  h-full right-0 bg-[#FFFFFF] overflow-hidden'>
        {/* <Searchbar /> */}
      </section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />}/>
        <Route path='/message' element={<Message />}/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/communities' element={<Communities />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/404-notfound' element={<Notfound />} />
        <Route path='/thread' element={<Thread />} />
      </Routes>
    </section>
  )
}

export default App;
