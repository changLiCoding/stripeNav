import React, { useState, useContext} from 'react'
import sublinks from './data'


export const AppContext = React.createContext(); 

export const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const [location, setLocation] = useState({})

  const [page, setPage] = useState({page: '', links:[]})

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((sublink) => sublink.page === text);
    setPage(page);
    setLocation(coordinates)
    setIsSubMenuOpen(true);
  }
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  }


  return <AppContext.Provider value={{page, location, openSidebar, closeSidebar, openSubMenu, closeSubMenu, isSubMenuOpen, isSidebarOpen}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);