import { useDispatch } from "react-redux";
import { resetModal } from "../../redux/modalSlice";

const Modal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  const dispatch = useDispatch();

  const handleClose = (e) => {
    const targetCheck = e.target.id === 'wrapper';
    if (e.target.id === 'wrapper') dispatch(resetModal());
  }

  return (
    <section 
      id="wrapper"
      className="fixed inset-0 backdrop-blur-sm flex justify-center z-10"
      onClick={handleClose}
    >
      <section 
        id="wrapper"
        className="flex flex-col w-1/2 my-20"
      >
        <button 
          onClick={() => dispatch(resetModal())}
          className="text-earlgrey text-xl place-self-end"
        >X</button>
        <section className="bg-cheeseyellow p-2 rounded-sm">{children}</section>
      </section>
    </section>
  );
};

export default Modal;
