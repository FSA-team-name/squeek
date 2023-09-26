import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "../components/EditProfile";
import SqueekDisplay from '../components/reusables/SqueekDisplay'
import { Link, useNavigate } from "react-router-dom";
import ReplyDisplay from "../components/reusables/ReplyDisplay";
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/tokenSlice';

const Profile = () => {
  const [user, setUser] = useState();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [displaySqueeks, setDisplaySqueeks] = useState(true); 
  const [displayNibbles, setDisplayNibbles] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const token = useSelector((state) => state.userToken.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const userProfile = async () => {
      try {
        const response = await fetch("/api/users/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          console.error("Error fetching user data");
        }
      } catch (err) {
        console.error("Error fetching user data");
      }
    };
    userProfile();
  }, [token]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);
  
  const logout = () => {
    localStorage.removeItem('logintoken');
    dispatch(setToken({token: null, id: null, username: null}));
    navigate('/');
  }

  const updateUserProfile = (updatedUserData) => {
    setUser(updatedUserData);
    setIsEditingProfile(false);
    navigate("/profile");
  };

  const handleSqueeksClick = () => {
    setDisplaySqueeks(true);
    setDisplayNibbles(false);
  };
 
  const handleNibblesClick = () => {
    setDisplaySqueeks(false);
    setDisplayNibbles(true);
  };

  if(!token){
    navigate("/");
  }

  return (
    <div className="bg-bkg w-full">
      <main className="container mx-auto mt-6 p-4">
        {user ? (
          <div className="bg-comp rounded-lg shadow-md border-2 border-accent-1">
            {
              width <= 620 && (
                <button type="button" onClick={logout} className={`${!open && 'scale-0'} rounded-full py-2 px-4 relative duration-300 ml-2 bg-accent-1 text-white hover:bg-comp border border-transparent font-bold float-right`}>
                  Sign Out
                </button>
              )
            }
            <div className="w-full bg-cover bg-no-repeat bg-center" style={{ height: '200px' }}>
              <img className="opacity-0 w-full h-full" src="https://www.pinclipart.com/picdir/middle/3-34092_easter-egg-clip-art-easter-egg-transparent-png.png" alt="" />
            </div>

            <div className="p-4">
              <div className="relative flex w-full">
                <div className="flex flex-1">
                  <div style={{ marginTop: '-6rem' }} className="border border-accent-1 p-2 rounded-full">
                    <div style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative avatar">
                      <img style={{ height: '9rem', width: '9rem' }} className="md rounded-full relative" src={user.photo} alt="" />
                      <div className="absolute"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col text-right">
                <Link
                  to={`/edit-profile/${user.id}`}
                  className="w-full text-content bg-accent-1 hover:bg-comp  hover:border-accent-1 hover:text-accent-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Edit Profile
                </Link>
                </div>
              </div>

              <div className="bg-innercomp p-3 rounded-lg">
                <div>
                  <h2 className="text-xl leading-6 font-bold text-content">{user.firstName} {user.lastName}</h2>
                  <p className="text-sm leading-5 font-medium text-content">@{user.username}</p>
                </div>

                <div className="mt-3">
                  <p className="text-content leading-tight mb-2">{user.bio}</p>
                </div>
                <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                  <div className="text-center pr-3">
                    <span className="font-bold text-content">520</span>
                    <span className="text-content"> Following</span>
                  </div>
                  <div className="text-center px-3">
                    <span className="font-bold text-content">23.4m </span>
                    <span className="text-content"> Followers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between p-4">
              <button
                onClick={handleSqueeksClick}
                className="text-blue-500 hover:underline"
              >
                Squeeks
              </button>
              <button
                onClick={handleNibblesClick}
                className="text-blue-500 hover:underline"
              >
                Nibbles
              </button>
            </div>
            <hr className="border-b-2 border-gray-800" />

            <section className="mt-4">
              <div className="bg-innercomp p-4 rounded-lg shadow-lg">
                <div className="bg-comp rounded-lg shadow-md p-4">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                      </div>
                      <p className="text-gray-800 dark:text-gray-200">
                      </p>
                      {displaySqueeks && user.squeeks ? (
                        user.squeeks.map((squeek, i) => (
                          <SqueekDisplay key={i} squeek={squeek}/>
                        ))
                      ) : (
                        ""
                      )}

                      {displayNibbles && user.replies ? (
                        user.replies.map((reply, i) => (
                          <ReplyDisplay key={i} reply={reply} />  
                        ))
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        {isEditingProfile && (
          <EditProfile updateUserProfile={updateUserProfile} />
        )}
      </main>
    </div>
  );
};

export default Profile;
