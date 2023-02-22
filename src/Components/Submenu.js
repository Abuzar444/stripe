import { useGlobalContext } from "../Context";

import { useState, useEffect, useRef } from "react";

const Submenu = () => {
  const {
    subMenu,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current;
    const { centre, bottom } = location;
    submenu.style.left = `${centre}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, links, location]);
  return (
    <aside
      className={`${subMenu ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>

        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};
export default Submenu;