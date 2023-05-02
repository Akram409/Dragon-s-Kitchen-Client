import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from "react-router-dom";
import google from "/public/google.png"
import github from "/public/github.png"

const Login = () => {
    const { logIn , handleGoogleLogin,handleGithHubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handlelogInbtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");


    logIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
    return (
        <form onSubmit={handlelogInbtn}>
        <div className="hero ">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Please Login Here !!</h1>
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
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <Link to="/" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div>
                  <p>{error}</p>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary text-white">Login</button>
                </div>
                <div>
                <p className="p-2">
                    <small>
                      New to Dragons Kitchen? <Link className="link link-primary" to="/register">Register here</Link>
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className='flex gap-2 items-center'>
            <div onClick={handleGoogleLogin} className="cursor-pointer flex items-center bg-white gap-3 px-4 py-2 text-black hover:animate-pulse">
                <img src={google} alt="" />
                <h1>Continue with Google</h1>
            </div>
            <div onClick={handleGithHubLogin} className="cursor-pointer flex items-center bg-white gap-3 px-4 py-2 text-black hover:animate-pulse">
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