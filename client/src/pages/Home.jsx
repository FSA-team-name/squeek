import { useState, useEffect } from "react";
import SqueekDisplay from "../components/SqueekDisplay";

const Home = () => {
  const [squeeks, setSqueeks] = useState([]);

  useEffect(() => {
    const getSqueeks = async () => {
      try {
        const response = await fetch("/api/squeeks");
        const data = await response.json();
        setSqueeks(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSqueeks();
  }, []);

  return (
    <section className="flex-col w-full">
      {squeeks.map((squeek, i) => {
        return (
          <SqueekDisplay squeek={squeek} i={i}/>   
        );
      })}
    </section>
  );
};

export default Home;
