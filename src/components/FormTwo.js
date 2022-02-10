import React from "react";
import "./FormTwo.css";

const FormZero = () => {
  return (
    <>
      <div className="text-center">
        <h1 style={{ fontWeight: 900 }}>How are you planning to use Eden?</h1>
        <p style={{ textAlign: "center", color: "#636f89" }}>
          We'll stream your experience setup accordingly.
        </p>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
              <a
                href="..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="card" id="card-hover">
                  <div className="card-body">
                    <div>
                      <p style={{ float: "left" }}>
                        <i class="fas fa-user"></i>
                      </p>
                      <br />
                      <br />
                    </div>
                    <h5 className="card-title fw-bolder">For myself</h5>
                    <p className="card-text fs-6">
                      Write better.Think more. Stay organized.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a
                href="..."
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <div className="card" id="card-hover">
                  <div className="card-body">
                    <div>
                      <p style={{ float: "left" }}>
                        <i class="fa-solid fa-users"></i>
                      </p>
                      <br />
                      <br />
                    </div>
                    <h5 className="card-title fw-bolder">With my Team</h5>
                    <p className="card-text fs-6">
                      Wiki, docs, tasks & projects, all in one place.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormZero;
