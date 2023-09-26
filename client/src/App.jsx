import { Route, Routes, Link } from "react-router-dom";
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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "./components/modals/Modal";
import ReplyModalDisplay from "./components/modals/ReplyModalDisplay";
import ReSqueekModalDisplay from "./components/modals/ReSqueekModalDisplay";
import EditProfile from "./components/EditProfile";
import LoginModal from "./components/modals/LoginModal";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/tokenSlice";
import { resetModal } from "./redux/modalSlice";
import MobileNavbar from './components/MobileNavbar';
import socket from "./socket";
import MobileHeading from "./components/MobileHeading";
import UsersProfile from "./components/UsersProfile";

const App = () => {
  const token = useSelector((state) => state.userToken.token);
  const userID = useSelector((state) => state.userToken.id);
  const username = useSelector((state) => state.userToken.username);
  const showReplyModal = useSelector((state) => state.modalState.replyModal);
  const showLoginModal = useSelector((state) => state.modalState.loginModal);
  const showReSqueekModal = useSelector((state) => state.modalState.reSqueekModal);
  const squeek = useSelector((state) => state.modalState.squeek);

  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState();

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    const getUser = async (token) => {
      try {
        const response = await fetch("/api/users/me", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUser(data);
        dispatch(setToken({ id: data.id, username: data.username, token }));
        socket.emit("newUser", {
          username: data.username,
          socketID: socket.id,
        });
      } catch (err) {
        console.error(err);
      }
    };

    if (token) {
      getUser(token);
    } else if (localStorage.getItem("logintoken")) {
      getUser(localStorage.getItem("logintoken"));
    }
  }, []);

  return (
    <section className="block sm:flex relative bg-bkg">
      <Modal isVisible={showReplyModal}>
        {token ? <ReplyModalDisplay squeek={squeek} /> : <LoginModal />}
      </Modal>
      <Modal isVisible={showReSqueekModal}>
        {token ? <ReSqueekModalDisplay squeek={squeek} /> : <LoginModal />}
      </Modal>
      <Modal isVisible={showLoginModal}>
        <LoginModal />
      </Modal>
      {
        width > 620 ? 
        <Navbar user={user} /> :
        <MobileHeading />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/message" element={<Message socket={socket} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/edit-profile/:userId" element={<EditProfile />} />
        <Route path="/users/:username" element={<UsersProfile />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/404-notfound" element={<Notfound />} />
        <Route path="/squeeks/:id" element={<Thread />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <section className="w-72 bg-comp h-screen p-5 pt-8 top-0 duration-300 border-l-4 border-accent1 hidden sm:block">
      </section>
      {
        width <= 620 && 
        <MobileNavbar user={user} />
      }
    </section>
  );
};

export default App;
