import { useState, useEffect } from "react";
import SqueekDisplay from "../components/reusables/SqueekDisplay";
import MakeSqueeks from "../components/MakeSqueeks";
import Modal from "../components/modals/Modal";
import { useSelector } from "react-redux";

const Home = () => {
  const [squeeks, setSqueeks] = useState([]);
  const token = useSelector((state) => state.userToken.token);

  useEffect(() => {
    const getSqueeks = async () => {
      try {
        const response = await fetch("/api/squeeks", {
          headers: {
            authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setSqueeks(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSqueeks();
  }, []);

  return (
    <>
      <section className="flex-col h-screen w-full overflow-auto overscroll-none">
        {token ? (
          <MakeSqueeks squeeks={squeeks} setSqueeks={setSqueeks} />
        ) : null}
        {squeeks ? (
          squeeks.map((squeek, i) => {
            return <SqueekDisplay key={i} squeek={squeek} />;
          })
        ) : (
          <h1>Loading ...</h1>
        )}
      </section>
    </>
  );
};

export default Home;
