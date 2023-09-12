import { useState, useEffect } from "react";

const Home = () => {

  const [squeeks, setSqueeks] = useState([]);

  useEffect(() => {
    console.log(`hello`)
  }, [])

  return (
    <section className="p-7 text-2xl font-semibold flex-1 h-screen">
      <h1>Home</h1>
    </section>
  );
};

export default Home;
