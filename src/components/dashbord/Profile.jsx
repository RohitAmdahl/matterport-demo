import React from "react";
import { dataLinks } from "../../data/data";
// import { FaAws } from "react-icons/fa";
import PictureCard from "../../components/card/PictureCard";
import { FaAws } from "react-icons/fa";
const ProfilePage = () => {
  return (
    <>
      {/* container max-w-5xl items-center gap-2 p-2 flex-col text-center */}
      <div className=" container mx-auto max-w-5xl items-center  ">
        <div className="text-center lg:m-10 lg:pt-5 ">
          <h1 className="flex justify-center gap-1 text-center items-center text-2xl flex-wrap">
            <span>
              <FaAws size={80} />
            </span>
            Executive Briefing MatterPort
          </h1>
          <h2 className="text-2xl">Choose your location</h2>
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
