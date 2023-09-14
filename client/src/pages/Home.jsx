import { useState, useEffect } from "react";
import SqueekDisplay from "../components/SqueekDisplay";
import MakeSqueeks from "../components/MakeSqueeks"

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
      <MakeSqueeks />
      {squeeks.map((squeek, i) => {
        return (
          <SqueekDisplay key={i} squeek={squeek} />
        );
      })}
    </section>
  );
};

export default Home;
