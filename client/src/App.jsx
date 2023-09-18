import { Route, Routes } from "react-router-dom";
import {
  MakeSqueeks,
  Navbar,
  Searchbar,
  Suggested,
  Favorites,
  Home,
  Profile,
  Thread,
  Message,
  Signup,
  Communities,
  Explore,
  Login,
  Notfound,
} from "./imports";
import Modal from "./components/Modal"
import { useSelector } from "react-redux";

const App = () => {
  const showReplyModal = useSelector((state) => state.modalState.replyModal);
  const squeek = useSelector((state) => state.modalState.squeek);


  return (
    <section className="flex relative"> 
      <Modal 
        squeek={squeek}
        isVisible={showReplyModal}
      >
      </Modal>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/message" element={<Message />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404-notfound" element={<Notfound />} />
        <Route path="/squeeks/:id" element={<Thread />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <section className="w-72 block bg-toothwhite h-screen p-5 pt-8 top-0 duration-300 border-l-4 border-cheeseyellow">
        <Searchbar />
      </section>
    </section>
  );
};

export default App;
