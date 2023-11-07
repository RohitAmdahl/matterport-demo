import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Model from "./pages/Model";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LogIn />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/model" element={<Model />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
