import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import google from "/public/google.png"
import github from "/public/github.png"
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createUser,handleGoogleLogin,handleGithHubLogin,updateUser} = useContext(AuthContext);
  const [error, setError] = useState("") ;

  const handleRegbtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (!/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password)) {
      setError("Password Validation not match!!");
      return;
    }
    else if (password.length < 6) {
        setError('password must be 6 characters or longer')
        return
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Register Successfull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        toast.warning("Register Unccessfull!", {
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
        console.log(error.message);
      });

      updateUser(name,photoUrl)
      .then((result) => {
        console.log("user name Updated")
      })
      .catch(error =>{
        setError(error.message)
        console.log(error.message)
      })
  };

  return (
    <form onSubmit={handleRegbtn}>
      <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Please Register Here !!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div>
                <p className='text-error'>{error}</p>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary text-white">Register</button>
              </div>
              <div>
              <p className="p-2">
                  <small>
                    Already have account? <Link className="link link-primary" to="/login">Login here</Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div onClick={handleGoogleLogin} className="cursor-pointer flex items-center bg-white gap-3 px-4 py-2 text-black hover:animate-pulse ">
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

export default Register;
