import { useState } from "react";
import { useSelector } from 'react-redux';

const MakeSqueeks = ({ squeeks, setSqueeks }) => {
  const token = useSelector((state) => state.userToken.token);
  const [squeekInput, setSqueekInput] = useState("");
  const [test, setTest] = useState();

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

  return (
    <section>
      <form onSubmit={formHandler}>
        <input
          value={squeekInput}
          onChange={(e) => setSqueekInput(e.target.value)}
          type="text"
          placeholder="What's going on?????"
        />
        <button>Squeek</button>
      </form>
    </section>
  );
};

export default MakeSqueeks;
