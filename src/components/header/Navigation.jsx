import { Link } from "react-router-dom";
import Logo from "../../assets/MP-logoTM_V_lock-RGB_color-white.png";
Link;
const Navigation = () => {
  return (
    <div className="mx-auto container max-w-5xl m-5 ">
      <Link to="/">
        <img
          src={Logo}
          alt="matterport logo"
          title="logo"
          className="max-w-size w-full mx-auto p-4 "
        />
      </Link>
    </div>
  );
};

export default Navigation;
