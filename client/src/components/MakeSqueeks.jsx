import { useState } from 'react'

const MakeSqueeks = () => {

  const [squeekInput, setSqueekInput] = useState('');

  const postSqueek = async (input) => {
    try {
      const response = await fetch('/api/squeeks', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk0NzEwNzE0fQ.ryh2oIMXmIZw9OmTeWYpriQsn-JNUar8BtKi3oxrvb8"
        },
        body: JSON.stringify({text: input})
      })
    } catch (err) {
      console.log(err)
    }
  }

  const formHandler = (e) => {
    e.preventDefault();
    postSqueek(squeekInput);
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
