import React from "react";
import checkLogo from "../check.png";

const FormThree = () => {
  return (
    <>
      <div className="position-relative">
        <div className="container mb-5">
          <div className="img-fluid text-center">
            <img src={checkLogo} alt="Check Mark" width="100" height="100" />
          </div>
        </div>
        <h1 style={{ fontWeight: 900 }} className="text-center">
          Congratulations, Eren!
        </h1>
        <p style={{ textAlign: "center", color: "#636f89" }}>
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
    </>
  );
};

export default FormThree;
