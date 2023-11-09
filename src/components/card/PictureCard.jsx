import { Link } from "react-router-dom";

const PictureCard = ({ item }) => {
  const { id, imgUrl, name } = item;
  return (
    <>
      <Link to={`/model/${id}`}>
        <div className=" max-w-4xl container mx-auto items-center lg:m-5 md:m-4">
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
