import { RiHome7Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import "./index.css";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <aside>
      <div className="logo-info">
        <p>
          You <span className="primary">Connect</span>
        </p>
      </div>
      <div className="nav-links">
        <NavLink exact="true" to="/blog" activeclassname="active">
          <div className="nav-link ">
            <RiHome7Line className="nav-icon" />
            <p>Blogs</p>
          </div>
        </NavLink>

        <NavLink to={""} activeclassname="active">
          <div className="nav-link">
            <FaUsers className="nav-icon" />
            <p>Setting</p>
          </div>
        </NavLink>

        <div className="nav-link last-item">
          <MdOutlineLogout className="nav-icon" />
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default Index;
