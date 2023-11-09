import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container p-4 mx-auto max-w-md flex flex-col justify-center items-center mt-11">
      <div className="mt-5 pt-5">
        <p className="text-md">
          &copy; Hundred solution AS, All rights reserved.
        </p>
        <p className="text-md"> Created by: Rohit Kumar Amdahl {year}</p>
      </div>
    </div>
  );
};

export default Footer;
