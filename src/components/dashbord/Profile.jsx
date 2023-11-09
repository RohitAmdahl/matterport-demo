import React from "react";
import { dataLinks } from "../../data/data";

import PictureCard from "../../components/card/PictureCard";

const ProfilePage = () => {
  return (
    <>
      <div className=" container mx-auto max-w-5xl items-center  ">
        <div className="text-center lg:m-10 lg:pt-5 ">
          <h1 className="flex mt-5 pt-9 justify-center gap-1 text-center items-center text-2xl flex-wrap">
            Executive Briefing MatterPort
          </h1>
          <h2 className="text-2xl pt-5">Choose your location</h2>
        </div>
      </div>
      <div className=" flex flex-wrap justify-center items-center gap-4 lg:mt-5 p-5 ">
        {dataLinks.map((item) => {
          return (
            <div className="lg:mt-12 pt-4" key={item.id}>
              <PictureCard key={item.id} item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfilePage;
