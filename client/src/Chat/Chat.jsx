import Users from './Users';
import ChatWindow from './ChatWindow';

const Chat = ({ width }) => {

  if (width > 620) {
    return (
      <section className='w-full grid grid-cols-3'>
        <Users width={ width } />
        <ChatWindow />
      </section>
      
    )
  } else if (width <= 620) {
    return (
      <Users />
    )
  } else {
    return (
      <h1>Error loading chat messages. Please try again</h1>
    )
  }
}

export default Chat