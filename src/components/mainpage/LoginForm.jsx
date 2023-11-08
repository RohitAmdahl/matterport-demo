import React from "react";
import { FaAws } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="max-w-5xl container mx-auto lg:mt-12">
      <div className="flex justify-center items-center flex-wrap gap-2 ">
        <span>
          <FaAws size={80} />
        </span>
        <h1 className="text-2xl text-center">Executive Briefing MatterPort</h1>
      </div>
      <h2 className="text-xl text-center">Choose a role</h2>
      <div className="flex flex-col justify-center items-center">
        <Link to="/dashboard" className="p-3">
          <span className="pt-4 cursor-pointer">
            <BiUserCircle
              size={60}
              className="hover:text-white hover:bg-blue-400 rounded-full"
            />
          </span>
        </Link>
        <div className="text-center p-1">
          <p>Visiter</p>
          <p>Guest Account</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
