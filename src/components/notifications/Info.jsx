import React from "react";

const Info = ({ text }) => {
  const [close, setClose] = React.useState(false);

  const handleClose = () => {
    setClose(true);
  };
  return (
    <>
      {close === false && (
        <div className="notification is-info">
          <button onClick={handleClose} className="delete" />
          {text}
        </div>
      )}
    </>
  );
};

export default Info;
