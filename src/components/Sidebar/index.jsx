import React from "react";
import BurgerMenu from "react-burger-menu";
import "./style.css";
import SideBarItem from "./SidebarItem";
import {
  faHome,
  faPhotoVideo,
  faCog,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    icon: faHome,
    title: "Home",
    link: "/"
  },
  {
    icon: faPhotoVideo,
    title: "Photo Editor",
    link: "/editor"
  },
  {
    icon: faCog,
    title: "Customize",
    link: "/customize"
  },
  {
    icon: faShoppingCart,
    title: "Checkout",
    link: "/checkout"
  }
];

const Menu = BurgerMenu["elastic"];

const SideBar = ({ children }) => {
  return (
    <div id="outer-container" style={{ height: "100%" }}>
      <Menu
        id={"elastic"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
      >
        {items.map((item, index) => (
          <SideBarItem key={index} {...item} />
        ))}
      </Menu>
      <main id="page-wrap">{children}</main>
    </div>
  );
};

export default SideBar;
