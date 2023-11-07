import { useParams } from "react-router-dom";
import { dataLinks } from "../../data/data";
const MatterPort = () => {
  const { id } = useParams();
  const selectedItem = dataLinks.find((item) => {
    return item.id === item.id;
  });
  if (!selectedItem) {
    return <div> Item not found </div>;
  }

  const { link } = selectedItem;

  return (
    <div>
      <iframe
        title="Embedded Content"
        width="100%"
        height="600px"
        src={link}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MatterPort;
