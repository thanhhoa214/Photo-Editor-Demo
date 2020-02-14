import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideBarItem = ({ key, icon, title, link }) => {
  return (
    <Link
      key={key}
      to={link}
      className="btn btn-transparent btn-block text-left"
    >
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </Link>
  );
};

export default SideBarItem;
