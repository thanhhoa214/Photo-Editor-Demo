import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ key, icon, title, link }) => {
  return (
    <a
      key={key}
      href={link}
      className="btn btn-transparent btn-block text-left"
    >
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </a>
  );
};

export default SideBarItem;
