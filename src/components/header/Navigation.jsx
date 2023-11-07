import { Link } from "react-router-dom";
import Logo from "../../assets/MP-logoTM_V_lock-RGB_color-white.png";
Link;
const Navigation = () => {
  return (
    <div className="mx-auto container max-w-5xl  ">
      <Link to="/">
        <img
          src={Logo}
          alt="matterport logo"
          title="logo"
          className="max-w-size w-full mx-auto p-4 "
        />
      </Link>

      {/* <iframe
        src=" https://matterport.com/discover/space/AGkkqndDnZz "
        frameborder="0"
      ></iframe>

      // https://matterport.com/discover/space/T4YA5CDttFU 

      //https://matterport.com/discover/space/yLMJWAYZ98K 

       */}
    </div>
  );
};

export default Navigation;
