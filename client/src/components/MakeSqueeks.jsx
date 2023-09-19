import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import InputBox from "./reusables/InputBox";

const MakeSqueeks = ({ squeeks, setSqueeks }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

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
    if (squeekInput.length === 0) {
      return
    }
    await postSqueek(squeekInput);
    setSqueekInput("");
    setCharacterCount(0)
    await getSqueeks();
  };

  return (
    <InputBox
          formHandler={formHandler}
          squeekInput={squeekInput}
          setSqueekInput={setSqueekInput}
          characterCount={characterCount}
          setCharacterCount={setCharacterCount}
          placeholder="Squeek up!"
          action="Squeek"
        />
  );
};

export default MakeSqueeks;
