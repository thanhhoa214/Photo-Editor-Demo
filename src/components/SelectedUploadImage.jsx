import React, { useState, useEffect } from "react";
import {
  faCheck,
  faCircle,
  faImage,
  faPencilAlt,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mark = ({ index, size, marginSize, color, faIcon, onClick }) => (
  <div
    title="View image"
    onClick={onClick}
    style={{ position: "absolute", right: (size + marginSize) * index }}
  >
    <FontAwesomeIcon
      icon={faCircle}
      color="white"
      style={{
        position: "absolute",
        right: 0,
        fontSize: size
      }}
    />
    <FontAwesomeIcon
      icon={faCircle}
      color={color}
      style={{
        position: "absolute",
        top: size / 16,
        right: size / 16,
        fontSize: (size * 7) / 8
      }}
    />
    <FontAwesomeIcon
      icon={faIcon}
      color="white"
      style={{
        position: "absolute",
        top: size / 4,
        right: size / 4 + (index === 2 ? 1 : 0),
        fontSize: size / 2
      }}
    />
  </div>
);

const markInfoList = [
  {
    title: "View Image",
    color: "#007bff",
    faIcon: faImage,
    onClick: () => console.log("View Image")
  },
  {
    title: "Open Editor",
    color: "#ffc107",
    faIcon: faPencilAlt,
    onClick: () => console.log("Open Editor")
  },
  {
    title: "Delete from selected",
    color: "#dc3545",
    faIcon: faTrash,
    onClick: () => console.log("Delete from selected")
  },
  {
    title: "Add to cart",
    color: "#28a745",
    faIcon: faCheck,
    onClick: () => console.log("Add to cart")
  }
];

const Checkmark = ({ selected, size, marginSize }) => {
  return (
    <div
      style={
        selected
          ? { right: 4, top: 4, position: "absolute", zIndex: "1" }
          : { display: "none" }
      }
    >
      {markInfoList.map(({ title, color, faIcon, onClick }, index) => (
        <Mark
          index={index}
          title={title}
          size={size}
          marginSize={marginSize}
          color={color}
          faIcon={faIcon}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  borderRadius: 3,
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
  filter: "brightness(0.6)"
};
const cont = {
  backgroundColor: "transparent",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  display: "inline-flex"
};

const SelectedImage = ({ photo, margin, selected }) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div
      style={{
        margin,
        height: photo.height,
        width: photo.width,
        ...cont
      }}
      className={!isSelected ? "not-selected" : ""}
    >
      <Checkmark
        selected={isSelected ? true : false}
        size={30}
        marginSize={4}
      />
      <img
        alt={photo.title}
        style={
          isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        {...photo}
        onClick={handleOnClick}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default SelectedImage;
