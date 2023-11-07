import React from "react";
import { dataLinks } from "../../data/data";
// import { FaAws } from "react-icons/fa";
import PictureCard from "../../components/card/PictureCard";
import { FaAws } from "react-icons/fa";
const ProfilePage = () => {
  return (
    <>
      <div className="max-w-5xl container mx-auto pt-5 m-10">
        <div className="flex justify-center items-center gap-2 ">
          <span>
            <FaAws size={80} />
          </span>
          <h1 className="text-2xl text-center">
            Executive Briefing MatterPort
          </h1>
        </div>
        <div className="text-center">
          <h2>Choose your location</h2>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-4 lg:mt-5 p-5 ">
        {dataLinks.map((item) => {
          return (
            <div className="lg:mt-12" key={item.id}>
              <PictureCard key={item.id} item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfilePage;
