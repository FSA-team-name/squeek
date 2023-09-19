import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoActionsSqueekDisplay from "./NoActionsSqueekDisplay";

const ReSqueek = ({ squeekID }) => {
  const [reSqueek, setReSqueek] = useState();

  useEffect(() => {
    const getSqueeks = async () => {
      try {
        const response = await fetch(`/api/squeeks/resqueek/${squeekID}`);
        const data = await response.json();
        setReSqueek(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSqueeks();
  }, []);

  const squeekURL = `/squeeks/${squeekID}`;

  return (
    <>
      {reSqueek ? (
        <Link to={squeekURL}>
          <NoActionsSqueekDisplay squeek={reSqueek}/>
        </Link>
      ) : null}
    </>
  );
};

export default ReSqueek;
