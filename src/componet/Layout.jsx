import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import ModeContext from "../context/Mode_context";

export const Layout = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   const handleDarkMode = () => {
  //     setIsDarkMode(!isDarkMode);
  //   };
  

  const { isDarkMode, handleDarkMode } = useContext(ModeContext); // used to reduce props drilling
  return (
    <div className="navbar">
      <nav className= "nav-dark" >
        <h1>TODO</h1>
        <div>
          <Link to="/Home">Home</Link>|<Link to="/about">About</Link>|{" "}
          <Link to="/allToDo">All Todos</Link>|{" "}
        </div>

        <div onClick={handleDarkMode}>
          {!isDarkMode ? (
            <IoSunnyOutline color="white" size={30} />
          ) : (
            <FaMoon color="white" size={30} />
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
