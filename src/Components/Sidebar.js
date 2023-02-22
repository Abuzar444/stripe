import { useGlobalContext } from "../Context";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${sidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((list, index) => {
            const { page, links } = list;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((list, index) => {
                    const { label, icon, url } = list;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
