import { useParams } from "react-router-dom";
import { dataLinks } from "../../data/data";
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
