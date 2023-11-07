import { useParams } from "react-router-dom";
import { dataLinks } from "../../data/data";
const MatterPort = () => {
  const { id } = useParams();
  const selectedItem = dataLinks.find((item) => {
    console.log(item);
    return item.id === item.id;
  });
  if (!selectedItem) {
    return <div> Item not found </div>;
  }
  console.log(selectedItem);
  console.log(id);
  const { name, imgUrl, link } = selectedItem;
  console.log(name);
  return (
    <div>
      <iframe
        title="Embedded Content"
        width="100%" // Set the width to 100% of the parent container
        height="600px" // Set the height to 500 pixels
        src={link} // URL of the content you want to embed
        allowFullScreen // Optional: Allow fullscreen mode
      ></iframe>
    </div>
  );
};

export default MatterPort;
