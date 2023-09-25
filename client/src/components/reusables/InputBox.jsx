import { useState } from "react";

const InputBox = ({
  formHandler,
  squeekInput,
  setSqueekInput,
  characterCount,
  setCharacterCount,
  placeholder,
  action,
}) => {
  const [keystroke, setKeystroke] = useState();

  const keyDownHandler = (e) => {
    setKeystroke(e.key);
  };

  const changeHandler = async (e) => {
    setCharacterCount(e.target.value.length);
    if (keystroke === "Backspace") {
      return setSqueekInput(e.target.value);
    }
    if (e.target.value.length >= 140) {
      return setSqueekInput(squeekInput);
    }
    setSqueekInput(e.target.value);
  };

  return (
    <section className="flex flex-col my-2 mx-2 bg-comp shadow-md">
      <form onSubmit={formHandler} className="flex relative items-center">
        <textarea
          className="w-full h-20 p-2 inline outline-none resize-none mx-2 bg-comp rounded-s text-content"
          value={squeekInput}
          rows={5}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          type="text"
          placeholder={placeholder}
        />
        <section className="absolute bottom-0 right-11">
          <p className="text-xs text-content">{characterCount}/140</p>
        </section>
        <button className="my-.5 mx-4 rounded-md py-2 px-4 relative duration-300 ml-2 bg-accent-1 text-content hover:bg-accent-2 hover:text-accent-1 border border-transparent hover:border-accent-1 font-bold">
          {action}
        </button>
      </form>
    </section>
  );
};

export default InputBox;
