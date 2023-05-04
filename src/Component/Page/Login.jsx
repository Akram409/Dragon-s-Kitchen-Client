import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import google from "/public/google.png";
import github from "/public/github.png";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import Spiner from "../Share/Spiner";

const Login = () => {
  const [show, setShow] = useState(false);
  const { user,setUser, logIn, handleGoogleLogin, handleGithHubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const from = location.state?.from?.pathname || "/";

  if (navigation.state === "loading") {
    return <Spiner />;
  }

  const handleGoogle = () =>{
    handleGoogleLogin()
    .then(result =>{
      const user = result.user
      toast.success("Login Successfull!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate(from, { replace: true });
      console.log(user)
    })
    .catch(error =>{
      toast.warning("Login Unccessfull!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setError(error.message)
      console.log(error.message)
    })
  }

  const handleGitHub = () =>{
    handleGithHubLogin()
    .then((result) => {
      const user = result.user
      toast.success("Login Successfull!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate(from, { replace: true });
      console.log(user);
    })
    .catch((error) => {
      toast.warning("Login Unccessfull!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setError(error.message);
      console.log(error);
    });
  }
  const handlelogInbtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate(from, { replace: true });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        toast.warning("Login Unccessfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setError("Email and Password Invalid!!");
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handlelogInbtn}>
      <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">
              Please Login Here !!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">{show ? "Hide" : "Show"}</span>
                    <div onClick={() => setShow(!show)}>
                      {show ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </div>
                  </label>
                </div>
                <label className="label">
                  <Link
                    to="/"
                    className="label-text-alt link link-hover hover:link-primary "
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div>
                <p className="text-error">{error}</p>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary text-white">Login</button>
              </div>
              <div>
                <p className="p-2">
                  <small>
                    New to Dragons Kitchen?{" "}
                    <Link className="link link-primary" to="/register">
                      Register here
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div
              onClick={handleGoogle}
              className="cursor-pointer flex items-center bg-white gap-3 px-4 py-2 text-black hover:animate-pulse"
            >
              <img src={google} alt="" />
              <h1>Continue with Google</h1>
            </div>
            <div
              onClick={handleGitHub}
              className="cursor-pointer flex items-center bg-white gap-3 px-4 py-2 text-black hover:animate-pulse"
            >
              <img src={github} alt="" />
              <h1>Continue with Github</h1>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
