import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChatBody = ({ messages }) => {
  const token = useSelector((state) => state.userToken.token);
  const userID = useSelector((state) => state.userToken.id);
  const username = useSelector((state) => state.userToken.username);
  const navigate = useNavigate();

  console.log(messages)
  // const handleLeaveChat = () => {
  //   localStorage.removeItem('userName');
  //   navigate('/');
  //   window.location.reload();
  // };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" 
        // onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) => 
          message.name === username ? (
            <div className="message__chats" key={message.id}>
              {console.log(true)}
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
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;