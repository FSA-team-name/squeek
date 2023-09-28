import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setToken, setUser } from "../redux/tokenSlice";
import logo from '../assets/mouse-logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const loginUser = async (e) => {
      try {
        e.preventDefault();
        const response = await fetch('/auth/login', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
    
        if (response.ok) {
          const data = await response.json();
          if (data.token) {
            dispatch(setToken(data));
            localStorage.setItem('logintoken', data.token);
            navigate("/")
          } else {
            setError("Invalid username or password");
          }
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setError("An error occurred");
      }
    };
    
  return (
    <>
      <section className="bg-comp flex flex-col items-center justify-center min-h-screen w-full">
  <div className="w-full flex flex-col items-center">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-content">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
          Squeek    
      </a>
      <div className="w-full bg-comp rounded-lg shadow border-2 border-accent-1 md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-content md:text-2xl">
                  Sign in to your account
              </h1>
              {error && (
                <div className="text-red-500">{error}</div>
              )}
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={loginUser}>
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="JohnSmith123" required="" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-content">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-content hover:underline">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-accent-1 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p className="text-sm font-light text-content">
                      Don’t have an account yet? 
                      <Link to="/signup" className="font-medium text-content hover:underline"> Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login;
