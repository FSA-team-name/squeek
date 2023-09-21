import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChatBar from '../components/ChatBar';
import ChatBody from '../components/ChatBody';
import ChatFooter from '../components/ChatFooter';

const Message = ({ socket }) => {
  const token = useSelector((state) => state.userToken.token);
  const userID = useSelector((state) => state.userToken.id);
  const username = useSelector((state) => state.userToken.username);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  )
}

export default Message;
