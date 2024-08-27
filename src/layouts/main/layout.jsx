import "./index.css";
import Header from "../../components/header/index";
import Sidebar from "../../components/sidebar/index";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="grid-container">
      <Sidebar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
