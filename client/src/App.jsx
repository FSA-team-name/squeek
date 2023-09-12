import { Route, Routes } from 'react-router-dom';
import { MakeSqueeks, Navbar, Searchbar, Suggested, Favorites, Home, Profile, Thread, Message, Signup, Communities, Explore, Login } from './imports';

const App = () => {

  return (
    <body className='flex'>
      <Navbar />
      <section className='absolute top-0 bottom-0  h-full right-0 bg-[#FFFFFF] overflow-hidden'>
        <Searchbar />
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
      </Routes>
    </body>
  )
}

export default App;
