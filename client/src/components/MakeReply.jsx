import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const MakeReply = ({ squeek, setSqueek, id }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [keystroke, setKeystroke] = useState();

  const postReply = async (input) => {
    try {
      const response = await fetch(`/api/squeeks/${id}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${token}`,
        },
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const getSqueek = async () => {
    try {
      const response = await fetch(`/api/squeeks/${id}`);
      const data = await response.json();
      await setSqueek(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (squeekInput.length === 0) {
      return
    }
    await postReply(squeekInput);
    setSqueekInput("");
    setCharacterCount(0)
    await getSqueek();
  };

  const keyDownHandler = (e) => {
    setKeystroke(e.key)
  }

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
  );
};

export default MakeReply;