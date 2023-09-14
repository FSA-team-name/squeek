import { useState } from 'react'

const MakeSqueeks = () => {

  const [squeekInput, setSqueekInput] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log(squeekInput)
  }
  
  return (
    <section>
      <form onSubmit={formHandler}>
        <input
          value={squeekInput} 
          onChange={(e) => setSqueekInput(e.target.value)}
          type='text' 
          placeholder="What's going on?????"/>
        <button>Squeek</button>
      </form>
    </section>
  )
}

export default MakeSqueeks;
