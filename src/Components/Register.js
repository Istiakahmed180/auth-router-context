import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Register = () => {
  const { createUser, googleLoginWithUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlGoogleSignIn = () => {
    googleLoginWithUser()
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-2">Register Now</h1>
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
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
                placeholder="Enter Your Email"
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
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label flex justify-center">
                <Link to="/login" className="label-text-alt link link-hover">
                  <span className="hover:text-blue-600">
                    Already, have an account?
                  </span>
                </Link>
              </label>
            </div>
            <div type="submit" className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <button onClick={handlGoogleSignIn} className="btn btn-success ">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
