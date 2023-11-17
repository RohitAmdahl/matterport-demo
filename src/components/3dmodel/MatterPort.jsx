import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataLinks } from "../../data/data";
import { BsGraphUpArrow } from "react-icons/bs";

const MatterPort = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const selectedItem = dataLinks.find((item) => item.id === id);

  if (!selectedItem) {
    return <div> Item not found </div>;
  }

  const { link } = selectedItem;

  const [isDashboardClicked, setDashboardClicked] = useState(false);

  const handleDashboardClick = () => {
    setDashboardClicked(!isDashboardClicked);
  };

  return (
    <>
      <div className="lg:flex flea-wrap">
        <div className={isDashboardClicked ? " mx-auto " : "w-full "}>
          <iframe
            title="Embedded Content"
            width="100%"
            height="600px"
            src={link}
            allowFullScreen
          ></iframe>
        </div>
        {isDashboardClicked && (
          <div className=" container mx-auto m-5 ">
            <table className="w-full">
              <thead className="w-full ">
                <tr className="w-full ">
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Cloudiness</th>
                  <th className="py-2 px-4 border-b">Condition_des</th>
                  <th className="py-2 px-4 border-b">Humidity</th>
                  <th className="py-2 px-4 border-b">Pressure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">51</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">48</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">31</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">61</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">41</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">47</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">61</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">41</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">47</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">47</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">61</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">41</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2023-11-08 19:00:00 0</td>
                  <td className="py-2 px-4 border-b">0</td>
                  <td className="py-2 px-4 border-b">clear sky</td>
                  <td className="py-2 px-4 border-b">47</td>
                  <td className="py-2 px-4 border-b">1024</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center pt-10 cursor-pointer">
        <span
          className="flex flex-wrap justify-center items-center gap-3 bg-blue-400 p-3 text-neutral-950 font-bold rounded-lg cursor-pointer"
          onClick={handleDashboardClick}
        >
          <BsGraphUpArrow size={25} className="font-bold" />
          <p>Dashboard</p>
        </span>
      </div>
    </>
  );
};

export default MatterPort;
