import { useState, useEffect } from "react";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const input = (searchInput);
  }, [searchInput]);

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form>
      <input
        type="search"
        placeholder="Explore"
        value={searchInput}
        onChange={searchHandler}
      />
      <button>Search</button>
    </form>
  );
};

export default Searchbar;
