import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatBody = ({ messages, typingStatus, lastMessageRef }) => {
  const token = useSelector((state) => state.userToken.token);
  const userID = useSelector((state) => state.userToken.id);
  const username = useSelector((state) => state.userToken.username);
  const navigate = useNavigate();

  return (
    <>
      <header className="chat__mainHeader">
        <p>Firstname Lastname</p>
        <p>@username</p>
      </header>

      <div className="message__container">
        {messages.map((message) => 
          message.name === username ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;