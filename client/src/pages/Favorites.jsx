import { useState } from "react";

const Favorites = () => {
  const [activeTab, setActiveTab] = useState("Liked"); 
  const [title, setTitle] = useState("Liked"); 

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
    Saved: (
      <div>
        <h1>saved</h1>
        <h1>saved</h1>
        <h1>saved</h1>
        <h1>saved</h1>
      </div>
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
    "My List": (
      <div>
        <h1>List of stuff</h1>
        <h1>List of stuff</h1>
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
        <div className="p-4">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default Favorites;