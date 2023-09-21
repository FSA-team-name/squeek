import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SqueekDisplay from "../components/reusables/SqueekDisplay";
import MakeReply from "../components/MakeReply";
import ReplyDisplay from "../components/reusables/ReplyDisplay";

const Thread = () => {
  const token = useSelector((state) => state.userToken.token);
  const [squeek, setSqueek] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSqueekAndReplies = async () => {
      try {
        const response = await fetch(`/api/squeeks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setSqueek(data);
      } catch (err) {
        console.log(err);
      }
    };
    getSqueekAndReplies();
    console.log(squeek)
  }, [id]);

  return (
    <section className="flex-col h-screen w-full overflow-auto overscroll-none">
        {squeek ? <SqueekDisplay squeek={squeek} /> : <h1>Loading ...</h1>}
      <section className="bg-toothwhite mt-4 mx-10 pb-6 drop-shadow-md p-2 rounded-md">
        {token && squeek ? <MakeReply id={squeek.id} squeek={squeek} setSqueek={setSqueek} /> : null}
        {squeek ? (
          squeek.replies.map((reply) => {
            return (
              <ReplyDisplay key={reply.id} reply={reply}/>
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
