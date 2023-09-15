import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <section className="flex-auto flex-col my-4 mx-5 p-4 justify-center bg-toothwhite shadow-md rounded-s ">
            {/* name and pic and hr */}
            <section className="flex justify-between items-center">
              <section className="flex justify-start py-1 items-center">
                <section className="flex box-border h-12 w-12 border-2 border-cheeseyellow items-center overflow-hidden rounded-full">
                  <img className="h-full" src={reSqueek.author.photo} />
                </section>
                <h2 className="px-2 font-bold text-earlgrey text-lg">
                  {reSqueek.author.firstName}
                </h2>
                <h3 className="text-cheeseyellow font-small">
                  @{reSqueek.author.username}
                </h3>
              </section>
              <section>
                <p>2h</p>
              </section>
            </section>
            <section className="py-2">
              <p className="font-medium text-earlgrey">{reSqueek.text}</p>
            </section>
            <section className="border-t-2 border-t-cheeseyellow"></section>
            <section className="text-xs text-earlgrey py-1">
              <p>{reSqueek.dateTimeCreated}</p>
            </section>
          </section>
        </Link>
      ) : null}
    </>
  );
};

export default ReSqueek;
