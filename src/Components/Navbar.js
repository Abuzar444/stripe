import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
const Navbar = () => {
  const { openSidebar, opensubMenu, closesubMenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const centre = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    opensubMenu(page, { centre, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closesubMenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li className="link-btn">
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            company
          </button>
          <li className="link-btn"></li>
        </ul>
        <button className="btn signin-btn"> Sign in</button>
      </div>
    </nav>
  );
};
export default Navbar;
