import { MdDashboardCustomize } from "react-icons/md";
import {
  IoIosNotificationsOutline,
  IoIosSearch,
  IoMdArrowDropdown,
  IoMdMenu,
} from "react-icons/io";
import "./index.css";

const Index = () => {
  return (
    <nav>
      <div className="nav-left">
        <IoMdMenu className="icon" />
        <div className="search">
          <IoIosSearch className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="nav-right">
        <MdDashboardCustomize className="icon" />
        <IoIosNotificationsOutline className="icon" />
        <div className="userInfo">
          <p>Ernie</p>
          <IoMdArrowDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Index;
