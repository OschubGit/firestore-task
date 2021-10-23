import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Thumb from "./Thumb";

const MyDropzone = () => {
  const [image, setImage] = useState([]);
  const [preview, setPreview] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        console.log("cargando");
        const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  /* useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        reader.readAsDataURL(image);
      };
    } else {
      setPreview(null);
    }
  }, [image]); */

  return (
    <div className="container border" style={{ height: "50vh" }}>
      <div className="h-100 d-inline-block" {...getRootProps()}>
        <input
          {...getInputProps()}
          accept="image/*"
          multiple
          onChange={(event) => {
            const file = event.target.files;
            setImage(file);
            /* const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            } */
          }}
        />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className="row">
        {Array.from(image).map((i, index) => (
          <div className="col-md-3">
            {console.log(image)}
            <img src={i.name} width={800} height={600} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDropzone;
