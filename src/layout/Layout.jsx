import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col   ">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
