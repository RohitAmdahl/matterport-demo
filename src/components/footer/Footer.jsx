import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container p-4 mx-auto max-w-md flex flex-col justify-center items-center">
      <p> &copy; Hundred solution AS.</p>
      <p> Created by: Rohit Kumar Amdahl {year}</p>
    </div>
  );
};

export default Footer;
