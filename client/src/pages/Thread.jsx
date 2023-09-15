import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SqueekDisplay from "../components/SqueekDisplay";

const Thread = () => {
  const [squeek, setSqueek] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSqueekAndReplies = async() => {
      try {
        const response = await fetch(`/api/squeeks/${id}`);
        const data = await response.json();
        setSqueek(data);
        console.log(data)
      } catch (err) {
        console.log(err)
      }

    }
    getSqueekAndReplies();
  }, []);

  return (
    <section className="flex-col h-screen w-full overflow-auto overscroll-none">
      {squeek ? (
        <SqueekDisplay squeek={squeek} />
      ) : (
        <h1>Loading ...</h1>
      )}
    {squeek.replies.map(reply => {
      return (
        <section className="my-2 mx-2 p-2 justify-center bg-toothwhite shadow-sm rounded-s ">
          {/* name and pic and hr */}
          <section className="flex justify-between items-center">
            <section className="flex justify-start py-1 items-center">
              <section className="flex box-border h-12 w-12 border-2 border-cheeseyellow items-center overflow-hidden rounded-full">
                <img className="h-full" src={reply.author.photo} />
              </section>
              <h2 className="px-2 font-bold text-earlgrey text-lg">
                {reply.author.firstName}
              </h2>
              <h3 className="text-cheeseyellow font-small">
                @{reply.author.username}
              </h3>
            </section>
            <section>
              <p>2h</p>
            </section>
          </section>
          <section className="py-2">
            <p className="whitespace-pre-line font-medium text-earlgrey">{reply.text}</p>
          </section>
          <section className="border-t-2 border-t-cheeseyellow"></section>
          <section className="text-xs text-earlgrey py-1">
            <p>{squeek.dateTimeCreated}</p>
          </section>
        </section>
      )
    })}
    </section>
  );
};

export default Thread;
