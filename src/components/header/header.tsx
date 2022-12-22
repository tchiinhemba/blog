import {
  FiGithub,
  BsMedium,
  FaLinkedinIn,
  AiOutlineSearch,
  CiCompass1,
} from "react-icons/all";
import "./main.scss";

export function Header() {
  return (
    <header className="header_container">
      <div className="container">
        <div className="menu_side">
          <div className="logo">
            <span className="logo_icon">
              <CiCompass1 />
            </span>
            <span className="logo_text">Atlas</span>
          </div>
          <div className="nav_container">
            <ul className="element_list">
              <li>Categories</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="social_side">
          <div className="search_container">
            <span className="">
              <AiOutlineSearch />
            </span>
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="social_icons-container">
            <ul className="icons_list">
              <li>
                <FiGithub />
              </li>
              <li>
                <BsMedium />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
