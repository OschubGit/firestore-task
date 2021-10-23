import React, { useState, useEffect } from "react";

const Thumb = ({ name, touched, errors, ...props }) => {
  const { width, height, url } = props;
  const [thumb, setThumb] = useState(undefined);
  const [file, setFile] = useState(props.file);

  useEffect(() => {
    if (!props.file) {
      return;
    }

    setFile(props.file);

    let reader = new FileReader();

    reader.onloadend = () => {
      setThumb(reader.result);
    };

    reader.readAsDataURL(props.file);
  }, [props.file]);

  return (
    <img
      width={`${width}px`}
      height={`${height}px`}
      src={
        !thumb ? url || `https://placehold.jp/${width}x${height}.png` : thumb
      }
      alt={file && file.name}
      className="img-thumbnail"
      style={{
        border: touched[name] && errors[name] && "1px solid red",
      }}
    />
  );
};

export default Thumb;
