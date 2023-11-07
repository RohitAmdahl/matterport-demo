import { FaAws } from "react-icons/fa";
import { Link } from "react-router-dom";

const PictureCard = ({ item }) => {
  const { id, imgUrl, name, link } = item;
  return (
    <>
      <Link to={`/model/${id}`}>
        <div className="m-5 max-w-4xl container mx-auto items-center">
          <div>
            <img src={imgUrl} alt="model image" className=" rounded-lg" />
          </div>
          <div>
            <p className="p-2 text-xl"> {name} </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PictureCard;
