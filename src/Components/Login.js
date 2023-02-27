import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";

const Login = () => {
  const { signInUser, googleLoginWithUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
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
          <h1 className="text-5xl font-bold mb-2">Login Now</h1>
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label flex justify-center ">
                <Link
                  to="/register"
                  className="label-text-alt link link-hover "
                >
                  <span className="hover:text-blue-600">
                    You have no account, register now?
                  </span>
                </Link>
              </label>
            </div>
            <div type="submit" className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button onClick={handleGoogleSignIn} className="btn btn-success ">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
