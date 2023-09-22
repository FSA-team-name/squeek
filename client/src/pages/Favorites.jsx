import { useEffect, useState } from "react";
import SqueekDisplay from "../components/reusables/SqueekDisplay";
import { useSelector } from "react-redux";


const Favorites = () => {
  const [activeTab, setActiveTab] = useState("Liked"); 
  const [title, setTitle] = useState("Liked"); 
  const [favorites, setFavorites] = useState();
  const [liked, setLiked] = useState([]);
  const [disliked, setDisliked] = useState([]);

  const token = useSelector((state) => state.userToken.token);


  useEffect(() => {
    const fetchFavs = async () => {
      const response = await fetch('/api/favorites/myFavorites', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      setFavorites(data);
    }
    fetchFavs();
  }, [token]);


  useEffect(() => {
    const fetchReactions = async () => {
      const response = await fetch('/api/reactions/likes', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      setLiked(data)
    }
    fetchReactions();
  }, [token]);

  useEffect(() => {
    const fetchReactions = async () => {
      const response = await fetch('/api/reactions/dislikes', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const data = await response.json();
      setDisliked(data)
    }
    fetchReactions();
  }, [token]);

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab("Liked");
      setTitle("Liked"); 
    } else {
      setActiveTab(tab);
      setTitle(tab); 
    }
  };
  const tabContent = {
    Liked: (
      liked.map((myLikes, i) => {
        return (<SqueekDisplay key={i} squeek={myLikes.squeek}/>) 
      })
    ),
    Favorites: (
     favorites ? favorites.map((favs, i) => {
        return (<SqueekDisplay key={i} squeek={favs.squeek}/>) 
      }) : null
    ),
    Disliked: (
      disliked.map((myDislikes, i) => {
        return (<SqueekDisplay key={i} squeek={myDislikes.squeek}/>) 
      })
    ),
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-semibold mb-4 text-center">{title}</h1>
      <div className="bg-white shadow-md rounded-lg border-2 border-cheeseyellow p-4">
        <div className="flex">
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`flex-grow p-4 ${
                activeTab === tab
                  ? "shadow-lg"
                  : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4">
        {activeTab === "Favorites" && favorites.length === 0 ? (
          <p>Nothing in favorites yet</p>
        ) : (
          activeTab === "Liked" && liked.length === 0 ? (
            <p>No liked Squeeks yet</p>
          ) : (
            activeTab === "Disliked" && disliked.length === 0 ? (
              <p>No disliked Squeeks yet</p>
            ) : (
              tabContent[activeTab]
            )
          )
        )}</div>
      </div>
    </div>
  );
};

export default Favorites;
