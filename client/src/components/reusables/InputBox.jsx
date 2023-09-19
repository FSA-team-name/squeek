import { useState } from 'react';

const InputBox = ({ formHandler, squeekInput, setSqueekInput, placeholder, action }) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [keystroke, setKeystroke] = useState();

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
            placeholder={placeholder}
          />
      <section className="absolute bottom-0 right-11">
       <p className="text-xs text-mickeygrey">{characterCount}/140</p>

      </section>
      <button 
        className="my-.5 mx-4 rounded-md py-2 px-4 relative duration-300 ml-2 bg-cheeseyellow text-earlgrey hover:bg-earlgrey hover:text-cheeseyellow border border-transparent hover:border-cheeseyellow font-bold"
      >{action}</button>
        </form>  
    </section>
  )
}

export default InputBox