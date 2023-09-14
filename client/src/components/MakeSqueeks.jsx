import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const MakeSqueeks = ({ squeeks, setSqueeks }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [keystroke, setKeystroke] = useState();

  const postSqueek = async (input) => {
    try {
      const response = await fetch("/api/squeeks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${token}`,
        },
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSqueeks = async () => {
    try {
      const response = await fetch("/api/squeeks");
      const data = await response.json();
      await setSqueeks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    await postSqueek(squeekInput);
    setSqueekInput("");
    await getSqueeks();
  };

  const keyDownHandler = (e) => {
    setKeystroke(e.key)
  }

  const changeHandler = async (e) => {
     setCharacterCount(e.target.value.length)
     console.log(keystroke)
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
    {characterCount}
        <form onSubmit={formHandler} className="flex items-center">
          <textarea
            className="w-full h-20 p-2 inline outline-none resize-none mx-2 bg-toothwhite rounded-s "
            value={squeekInput}
            rows={5}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
            type="text"
            placeholder="What's going on?????"
          />
      <button 
        className="my-.5 mx-4 rounded-md py-2 px-4 relative duration-300 ml-2 bg-cheeseyellow text-earlgrey hover:bg-toothwhite hover:text-cheeseyellow border border-transparent hover:border-cheeseyellow font-bold"
      >Squeek</button>
        </form>  
    </section>
  );
};

export default MakeSqueeks;
