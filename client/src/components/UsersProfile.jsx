import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SqueekDisplay from "../components/reusables/SqueekDisplay";
import ReplyDisplay from "../components/reusables/ReplyDisplay";

const UsersProfile = () => {
  const [user, setUser] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [displaySqueeks, setDisplaySqueeks] = useState(true);
  const [displayNibbles, setDisplayNibbles] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    const userProfile = async (username) => {
      try {
        const response = await fetch(`/api/users/${username}`);
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
    userProfile(username);
  }, [username]);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleSqueeksClick = () => {
    setDisplaySqueeks(true);
    setDisplayNibbles(false);
  };

  const handleNibblesClick = () => {
    setDisplaySqueeks(false);
    setDisplayNibbles(true);
  };

  return (
    <>
      <div className="bg-comp rounded-lg shadow-md border-2 border-accent-1 w-full">
        <div
          className="w-full bg-cover bg-no-repeat bg-center"
          style={{ height: "200px" }}
        >
          <img
            className="opacity-0 w-full h-full"
            src={user.photo}
          />
        </div>

        <div className="p-4">
          <div className="relative flex w-full">
            <div className="flex flex-1">
              <div
                style={{ marginTop: "-6rem" }}
                className="border border-accent-1 p-2 rounded-full"
              >
                <div
                  style={{ height: "9rem", width: "9rem" }}
                  className="md rounded-full relative avatar"
                >
                  <img
                    style={{ height: "9rem", width: "9rem" }}
                    className="md rounded-full relative"
                    src={user.photo}
                  />
                  <div className="absolute"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-right">
              <button
                onClick={handleFollowClick}
                className={`w-full text-content bg-accent-1 hover:bg-comp hover:border-accent-1 hover:text-accent-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  isFollowing ? "bg-followed" : ""
                }`}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
            </div>
          </div>

          <div className="bg-innercomp p-3 rounded-lg">
            <div>
              <h2 className="text-xl leading-6 font-bold text-content">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm leading-5 font-medium text-content">
                @{user.username}
              </p>
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
                <span className="font-bold text-content">23.4m</span>
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

        <div>
          {displaySqueeks && user.squeeks
            ? user.squeeks.map((squeek, i) => (
                <SqueekDisplay key={i} squeek={squeek} />
              ))
            : ""}

          {displayNibbles && user.replies
            ? user.replies.map((reply, i) => (
                <ReplyDisplay key={i} reply={reply} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};



export default UsersProfile;