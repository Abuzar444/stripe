import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [subMenu, setsubMenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  const opensubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text.toLowerCase());
    setPage(page);
    setLocation(coordinates);
    setsubMenu(true);
  };
  const closesubMenu = () => {
    setsubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebar,
        subMenu,
        location,
        page,
        openSidebar,
        closeSidebar,
        opensubMenu,
        closesubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
