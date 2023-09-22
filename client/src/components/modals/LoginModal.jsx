import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { resetModal } from "../../redux/modalSlice";

const LoginModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>You need to be logged in to do that!</p>
      <Link to="login">Login</Link>
      <p>or</p>
      <Link to="signup" onClick={() => dispatch(resetModal())}>
        Sign Up!
      </Link>
    </>
  );
};

export default LoginModal;
