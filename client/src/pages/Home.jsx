import { useState, useEffect } from "react";
import ReSqueek from "../components/ReSqueek";

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
    <section className="flex-col w-11/12">
      {squeeks.map((squeek) => {
        return (
            <section className="flex-auto flex-col my-4 mx-5 p-4 justify-center bg-toothwhite shadow-md rounded-s ">
              {/* name and pic and hr */}
              <section className="flex justify-between">
                <section className="flex justify-start py-1">
                  <h2 className="pr-1 font-bold text-earlgrey text-lg"> {squeek.author.firstName}</h2>
                  <h3 className="text-cheeseyellow font-small">@{squeek.author.username}</h3>
                </section>
                <section>
                  <p>2h</p>
                </section>
              </section>
              <section className="py-2">
                <p className="font-medium text-earlgrey">{squeek.text}</p>
              </section>
              <section className="text-xs text-earlgrey py-1">
                <p>{squeek.dateTimeCreated}</p>
              </section>
            </section>
        )
      })}
      </section>
      )
    }

export default Home;

            // <section>
            //   {squeek.reSqueekId ? (
            //     <ReSqueek squeekID={squeek.reSqueekId} />
            //   ) : null}
            // </section>