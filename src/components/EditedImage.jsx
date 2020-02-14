import React from "react";

const EditedImage = ({ photo, margin, onClick }) => {
  return (
    <img
      {...photo}
      style={{ margin }}
      onClick={() => onClick({ src: photo.src })}
      alt="example"
    />
  );
};

export default EditedImage;
