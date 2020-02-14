import React, { useRef, useState } from "react";
import FileDrop from "react-file-drop";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
// import ImageViewer from "../../components/ImageViewer";
import Gallery from "react-photo-gallery";
import SelectedImage from "../../components/SelectedImage";

const selectedImageRenderer = ({ index, left, top, key, photo }) => (
  <SelectedImage
    selected={false}
    key={key + index}
    margin={"2px"}
    index={index}
    photo={photo}
    left={left}
    top={top}
  />
);
const getImage = file =>
  new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.name = file.name;
        image.onload = () => {
          resolve({
            src: image.src,
            name: image.name,
            width: image.width,
            height: image.height
          });
        };
      };
      reader.readAsDataURL(file);
    }
  });

const ReactFileDropDemo = () => {
  const fileUpload = useRef(null);
  const [currentImages, setCurrentImages] = useState([]);

  const pushCurrentImages = files => {
    const fileArray = Array.from(files);
    if (files != null) {
      let isError = false;
      fileArray.forEach(async file => {
        if (file.type.match(/image\/.+/)) {
          if (!currentImages.some(image => image.name === file.name)) {
            const image = await getImage(file);
            setCurrentImages(pre => [...pre, image]);
          }
        }
        if (isError) {
          alert("File is not a valid image.");
        }
      });
    }
  };

  // useEffect(() => {
  //   return () => {};
  // }, [currentImages]);

  return (
    <section className="container d-flex flex-column">
      <div
        id="react-file-drop-demo"
        className="file-drop mb-3"
        onClick={() => {
          fileUpload.current.click();
        }}
      >
        <FileDrop onDrop={pushCurrentImages}>
          <FontAwesomeIcon icon={faCloudUploadAlt} size="6x" />
          <span>Drag and drop a file here or click</span>
        </FileDrop>
        <input
          type="file"
          name="file-upload"
          ref={fileUpload}
          onChange={event => {
            const files = event.target.files;
            pushCurrentImages(files, event);
          }}
          multiple
          accept="image/*"
          hidden
        />
      </div>
      <div>
        {/* <ImageViewer images={currentImages}/> */}
        <Gallery
          photos={currentImages}
          direction={"row"}
          renderImage={selectedImageRenderer}
        />
      </div>
    </section>
  );
};

export default ReactFileDropDemo;
