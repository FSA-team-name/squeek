import { useEffect, useState } from "react";
import SqueekDisplay from "../components/reusables/SqueekDisplay";
import { useSelector } from "react-redux";


const Favorites = () => {
  const [activeTab, setActiveTab] = useState("Liked"); 
  const [title, setTitle] = useState("Liked"); 
  const [favorites, setFavorites] = useState();
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
      <div>
        <h1>liked</h1>
        <h1>liked</h1>
        <h1>liked</h1>
        <h1>liked</h1>
        <h1>liked</h1>
        <h1>liked</h1>
        <h1>liked</h1>
        <h1>liked</h1>
      </div>
    ),
    Favorites: (
     favorites ? favorites.map((favs, i) => {
        return (<SqueekDisplay key={i} squeek={favs.squeek}/>) 
      }) : null
    ),
    Dislikes: (
      <div>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
        <h1>dislikes</h1>
      </div>
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
          tabContent[activeTab]
        )}</div>
      </div>
    </div>
  );
};

export default Favorites;
