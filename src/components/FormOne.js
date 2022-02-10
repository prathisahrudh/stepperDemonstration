import React from "react";

const FormZero = () => {
  return (
    <>
      <div className="position-relative">
        <h1 style={{ fontWeight: 900 }}>
          Lets set up a home for all your work
        </h1>
        <p style={{ textAlign: "center", color: "#636f89" }}>
          You can always create another workspace later
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
      {/* <div className="position-fixed top-50 start-50 translate-middle">
        <button
          style={{ width: "80%" }}
          className="text-center btn btn-primary"
        >
          Create Workspace
        </button>
      </div> */}
    </>
  );
};

export default FormZero;
