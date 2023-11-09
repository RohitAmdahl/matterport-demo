import { useParams } from "react-router-dom";
import { dataLinks } from "../../data/data";
import { BsGraphUpArrow } from "react-icons/bs";
const MatterPort = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const selectedItem = dataLinks.find((item) => {
    return item.id === id;
  });

  if (!dataLinks === id) {
    return <div> Item not found </div>;
  }

  const { link } = selectedItem;

  return (
    <>
      <div>
        <iframe
          title="Embedded Content"
          width="100%"
          height="600px"
          src={link}
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex justify-center items-center pt-10 cursor-pointer">
        <span>
          <BsGraphUpArrow size={25} className="font-bold" />
        </span>
      </div>
    </>
  );
};

export default MatterPort;
