import React, { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center mt-10 text-2xl ">
      This Is Home User Email:{" "}
      <span className="text-pink-600 font-bold">
        {user?.email && user.email}
      </span>
    </div>
  );
};

export default Home;
