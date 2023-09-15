import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SqueekDisplay from "../components/SqueekDisplay";

const Thread = () => {
  const [squeek, setSqueek] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSqueekAndReplies = async() => {
      try {
        // const response = await fetch(`/api/squeeks/${id}`);
        console.log(id)

      } catch (err) {
        console.log(err)
      }

    }
    getSqueekAndReplies();
  }, []);

  return (
    // <section className="flex-col h-screen w-full overflow-auto overscroll-none">
    //   {squeeks ? (
    //     <SqueekDisplay key={i} squeek={squeek} />
    //   ) : (
    //     <h1>Loading ...</h1>
    //   )}
    // </section>
    <h1>thread</h1>
  );
};

export default Thread;
