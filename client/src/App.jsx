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
import { useSelector } from "react-redux";
import Modal from "./components/modals/Modal";
import ReplyModalDisplay from "./components/modals/ReplyModalDisplay";
import ReSqueekModalDisplay from "./components/modals/ReSqueekModalDisplay";
import EditProfile from "./components/EditProfile";

const App = () => {
  const showReplyModal = useSelector((state) => state.modalState.replyModal);
  const showReSqueekModal = useSelector(
    (state) => state.modalState.reSqueekModal
  );
  const squeek = useSelector((state) => state.modalState.squeek);

  return (
    <section className="flex relative">
      <Modal isVisible={showReplyModal}>
        <ReplyModalDisplay squeek={squeek} />
      </Modal>
      <Modal isVisible={showReSqueekModal}>
        <ReSqueekModalDisplay squeek={squeek} />
      </Modal>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/message" element={<Message />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/edit-profile/:userId" element={<EditProfile />} />
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
