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
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/tokenSlice";
import { resetModal, setLoginModal } from "./redux/modalSlice";

const socket = io.connect("http://localhost:3002");

const App = () => {
  const token = useSelector((state) => state.userToken.token);
  const userID = useSelector((state) => state.userToken.id);
  const username = useSelector((state) => state.userToken.username);
  const showReplyModal = useSelector((state) => state.modalState.replyModal);
  const showLoginModal = useSelector((state) => state.modalState.loginModal);
  const showReSqueekModal = useSelector(
    (state) => state.modalState.reSqueekModal
  );
  const squeek = useSelector((state) => state.modalState.squeek);

  const dispatch = useDispatch();

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
        dispatch(setToken({ id: data.id, username: data.username, token }));
      } catch (err) {
        console.error(err);
      }
    };

    if (localStorage.getItem("logintoken")) {
      getUser(localStorage.getItem("logintoken"));
      socket.emit('newUser', { username, socketID: socket.id })
    }
  }, []);

  return (
    <section className="flex relative">
      {/* <button onClick={() => dispatch(setLoginModal())}>tester</button> */}
      <Modal isVisible={showReplyModal}>
        <ReplyModalDisplay squeek={squeek} />
      </Modal>
      <Modal isVisible={showReSqueekModal}>
        <ReSqueekModalDisplay squeek={squeek} />
      </Modal>
      <Modal isVisible={showLoginModal}>
        <p>You need to be logged in to do that!</p>
        <Link to='login'>Login</Link>
        <p>or</p>
        <Link to='signup' onClick={() => dispatch(resetModal())}>Sign Up!</Link>
      </Modal>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/message" element={<Message socket={socket} />} />
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
