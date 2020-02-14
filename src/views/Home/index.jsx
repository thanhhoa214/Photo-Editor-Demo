import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { ToggleButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import FilerobotImageEditor from "filerobot-image-editor";
import SelectedImage from "../../components/SelectedImage";
import EditedImage from "../../components/EditedImage";
import darkTheme from "../../themes";

const photos = [
  {
    src: "https://picsum.photos/200/300",
    width: 200,
    height: 300
  },
  {
    src: "https://picsum.photos/800/300",
    width: 800,
    height: 300
  },
  {
    src: "https://picsum.photos/300/420",
    width: 300,
    height: 420
  },
  {
    src: "https://picsum.photos/300/400",
    width: 300,
    height: 400
  },
  {
    src: "https://picsum.photos/200/400",
    width: 200,
    height: 400
  },
  {
    src: "https://picsum.photos/200/300",
    width: 200,
    height: 300
  },
  {
    src: "https://picsum.photos/500/350",
    width: 500,
    height: 350
  },
  {
    src: "https://picsum.photos/500/350",
    width: 500,
    height: 350
  },
  {
    src: "https://picsum.photos/800/300",
    width: 800,
    height: 300
  }
];

function HomePage() {
  const [selectAll, setSelectAll] = useState(false);
  const [gridDirection, setGridDirection] = useState("column");
  const [galleryMode, setGalleryMode] = useState("select");
  const [showEditor, setShowEditor] = useState(false);
  const [showEditorSrc, setShowEditorSrc] = useState("");

  const updateSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const displayEditor = ({ src }) => {
    setShowEditor(true);
    setShowEditorSrc(src);
  };

  const updateGalleryDirection = value => {
    setGridDirection(value);
  };
  const updateGalleryMode = value => {
    setGalleryMode(value);
  };

  const selectedImageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll}
        key={key + index}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );

  const editedImageRenderer = ({ index, key, photo }) => {
    return (
      <EditedImage
        key={key + index}
        photo={photo}
        margin={"2px"}
        onClick={displayEditor}
      />
    );
  };

  const columns = containerWidth => {
    let columns = 1;
    if (containerWidth >= 500) columns = 2;
    if (containerWidth >= 900) columns = 3;
    if (containerWidth >= 1500) columns = 4;
    return columns;
  };

  return (
    <div>
      Grid Direction:
      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={"row"}
        onChange={updateGalleryDirection}
      >
        <ToggleButton variant="outline-primary" value={"row"}>
          Rows
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={"column"}>
          Columns
        </ToggleButton>
      </ToggleButtonGroup>
      Gallery Mode:
      <ToggleButtonGroup
        type="radio"
        name="options"
        defaultValue={galleryMode}
        onChange={updateGalleryMode}
      >
        <ToggleButton variant="outline-primary" value={"select"}>
          Select
        </ToggleButton>
        <ToggleButton variant="outline-primary" value={"edit"}>
          Edit
        </ToggleButton>
      </ToggleButtonGroup>
      {galleryMode === "select" ? (
        <p>
          <button onClick={updateSelectAll}>Select All</button>
        </p>
      ) : (
        ""
      )}
      <Gallery
        photos={photos}
        direction={gridDirection}
        columns={gridDirection === "column" ? columns : null}
        renderImage={
          galleryMode === "select" ? selectedImageRenderer : editedImageRenderer
        }
        onClick={
          galleryMode === "edit" ? value => console.log("click ", value) : null
        }
      />
      <FilerobotImageEditor
        style={{ width: "100% !important" }}
        show={showEditor}
        src={showEditorSrc}
        onClose={() => {
          setShowEditor(false);
        }}
        config={{ theme: darkTheme }}
      />
    </div>
  );
}

export default HomePage;
