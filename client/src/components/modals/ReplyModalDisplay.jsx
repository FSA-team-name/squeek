import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetModal } from "../../redux/modalSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import InputBox from "../reusables/InputBox";
import NoActionsSqueekDisplay from "../reusables/NoActionsSqueekDisplay";

const ReplyModalDisplay = ({ squeek }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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


  const formHandler = async (e) => {
    e.preventDefault();
    if (squeekInput.length === 0) {
      return
    }
    await postReply(squeekInput);
    setSqueekInput("");
    setCharacterCount(0);
    dispatch(resetModal());
    navigate(`/squeeks/${squeek.id}`)
  };


  return (
    <>
      <NoActionsSqueekDisplay squeek={squeek} />
      <InputBox 
        formHandler={formHandler} 
        squeekInput={squeekInput}
        setSqueekInput={setSqueekInput}
        characterCount={characterCount}
        setCharacterCount={setCharacterCount}
        placeholder='Nibble this Squeek'
        action='Nibble'
      />
    </>
  );
};

export default ReplyModalDisplay;
