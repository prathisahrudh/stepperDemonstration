import React from "react";

const FormZero = () => {
  return (
    <>
      <div className="position-relative">
        <h1 style={{ fontWeight: 900 }}>Welcome! First things first...</h1>
        <p style={{ textAlign: "center", color: "#636f89" }}>
          You can always change them later
        </p>
        <div className="container">
          <p className="m-1 p-1">Full Name</p>
          <input
            type="text"
            className="form-control"
            style={{ width: "100%" }}
            placeholder="Steve Jobs"
          />
          <p className="m-1 p-1">Full Name</p>
          <input
            type="text"
            className="form-control"
            style={{ width: "100%" }}
            placeholder="Steve"
          />
        </div>
      </div>
    </>
  );
};

export default FormZero;
