import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SqueekDisplay from "../components/SqueekDisplay";
import MakeReply from "../components/MakeReply";

const Thread = () => {
  const token = useSelector((state) => state.userToken.token);
  const [squeek, setSqueek] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSqueekAndReplies = async () => {
      try {
        const response = await fetch(`/api/squeeks/${id}`);
        const data = await response.json();
        setSqueek(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSqueekAndReplies();
  }, [id]);

  return (
    <section className="flex-col h-screen w-full overflow-auto overscroll-none">
        {squeek ? <SqueekDisplay squeek={squeek} /> : <h1>Loading ...</h1>}
      <section className="bg-toothwhite mt-4 mx-10 pb-6 drop-shadow-md p-2 rounded-md">
        {token && squeek ? <MakeReply id={squeek.id} squeek={squeek} setSqueek={setSqueek} /> : null}
        {squeek ? (
          squeek.replies.map((reply) => {
            return (
              <section key={reply.id} className=" mx-14 p-4 justify-center my-1 rounded-md bg-toothwhite border-2 border-cheeseyellow">
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
                  <p className="whitespace-pre-line font-medium text-earlgrey">
                    {reply.text}
                  </p>
                </section>
                <section className="border-t-2 border-t-cheeseyellow"></section>
                <section className="text-xs text-earlgrey py-1">
                  <p>{squeek.dateTimeCreated}</p>
                </section>
              </section>
            );
          })
        ) : (
          <p>There aren't any replies yet</p>
        )}
      </section>
    </section>
  );
};

export default Thread;
