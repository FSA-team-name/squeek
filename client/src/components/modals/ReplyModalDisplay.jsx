import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ReplyModalDisplay = ({ squeek }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [keystroke, setKeystroke] = useState();

  const postReply = async (input) => {
    try {
      const response = await fetch(`/api/squeeks/${squeek.id}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${token}`,
        },
        body: JSON.stringify({ text: input }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const keyDownHandler = (e) => {
    setKeystroke(e.key)
  }

  const formHandler = async (e) => {
    e.preventDefault();
    if (squeekInput.length === 0) {
      return
    }
    await postReply(squeekInput);
    setSqueekInput("");
    setCharacterCount(0)
  };

  const changeHandler = async (e) => {
     setCharacterCount(e.target.value.length)
     if (keystroke === 'Backspace') {
      return setSqueekInput(e.target.value)
     }
     if (e.target.value.length >= 140) {
       return setSqueekInput(squeekInput);
     }
     setSqueekInput(e.target.value)
  }

  return (
    <>
    <section className="flex-auto flex-col my-4 mx-2 p-4 justify-center border-2 border-cheeseyellow bg-toothwhite shadow-md rounded-s ">
        {/* name and pic and hr */}
        <section className="flex justify-between items-center">
          <section className="flex justify-start py-1 items-center">
            <section className="flex box-border h-12 w-12 border-2 border-cheeseyellow items-center overflow-hidden rounded-full">
              <img className="h-full" src={squeek.author.photo} />
            </section>
            <section className="flex ml-2 bg-cheeseyellow rounded-s-sm">
              <h2 className="px-1 font-bold text-earlgrey text-lg">
                {squeek.author.firstName}
              </h2>
            </section>
            <section className="flex px-1 bg-earlgrey rounded-e-sm">
              <h3 className="text-cheeseyellow text-sm p-1">
                @{squeek.author.username}
              </h3>
            </section>
          </section>
          {/* <section>
          <p>2h</p>
        </section> */}
        </section>
          <section className="py-2">
            <p className="whitespace-pre-line font-medium text-earlgrey">
              {squeek.text}
            </p>
          </section>
        <section className="border-t-2 border-t-cheeseyellow"></section>
        <section className="text-xs text-earlgrey py-1">
          <p>{squeek.dateTimeCreated}</p>
        </section>
      </section>
    <section className="flex flex-col my-2 mx-2 bg-toothwhite shadow-md"> 
        <form onSubmit={formHandler} className="flex relative items-center">
          <textarea
            className="w-full h-20 p-2 inline outline-none resize-none mx-2 bg-toothwhite rounded-s "
            value={squeekInput}
            rows={5}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
            type="text"
            placeholder="Reply to this squeek"
          />
      <section className="absolute bottom-0 right-11">
       <p className="text-xs text-mickeygrey">{characterCount}/140</p>

      </section>
      <button 
        className="my-.5 mx-4 rounded-md py-2 px-4 relative duration-300 ml-2 bg-cheeseyellow text-earlgrey hover:bg-earlgrey hover:text-cheeseyellow border border-transparent hover:border-cheeseyellow font-bold"
      >Nibble</button>
        </form>  
    </section>
    </>
  );
};

export default ReplyModalDisplay;
