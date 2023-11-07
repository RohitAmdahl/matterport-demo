import React from "react";
import { dataLinks } from "../../data/data";
console.log(dataLinks);
const ProfilePage = () => {
  return dataLinks.map((item) => {
    return (
      <div className=" flex justify-center gap-4 items-center ">
        <iframe src={item.link} frameborder="0"></iframe>
      </div>
    );
  });
};

export default ProfilePage;
