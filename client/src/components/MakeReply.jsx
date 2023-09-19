import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import InputBox from "./reusables/InputBox";

const MakeReply = ({ squeek, setSqueek, id }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

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

  return (
    <InputBox
    formHandler={formHandler}
    squeekInput={squeekInput}
    setSqueekInput={setSqueekInput}
    characterCount={characterCount}
    setCharacterCount={setCharacterCount}
    placeholder="Nibble on this Squeek"
    action="Nibble"
  />
  );
};

export default MakeReply;