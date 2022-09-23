import dynamic from "next/dynamic";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDBThemeContext } from "../../../contexts/dbThemeContext";
import { links } from "./Sidebar.config";

// imported nav link dynamically to fix server side crush
const NavLink = dynamic(() => import("../../../components/common/NavLink"), {
  ssr: false,
});

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useDBThemeContext();

  const handleCloseSideBar = () => {
    if (typeof screenSize === "number") {
      if (activeMenu !== undefined && screenSize <= 900) {
        setActiveMenu(false);
      }
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <button onClick={handleCloseSideBar}>
              <h1 className="text-2xl mt-5">BlogoSphere</h1>
            </button>

            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    href={link.path}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    activeLinkStyle={activeLink}
                    normalLinkStyle={normalLink}
                    backgroundColor={currentColor}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
