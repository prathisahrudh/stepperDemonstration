import { useState } from "react";
import Stepper from "react-stepper-horizontal";

// Inputs
import FormZero from "./components/FormZero";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";

function App() {
  // State for Active Tile in
  const [activeNumber, setActiveNumber] = useState(0);
  // Static Data
  const arrayButtonData = [
    "Create Workspace",
    "Create Workspace",
    "Create Workspace",
    "Launch Eden",
  ];
  const allComponents = [<FormZero />, <FormOne />, <FormTwo />, <FormThree />];

  const addOneToActiveNumber = () => {
    if (activeNumber !== 3) {
      setActiveNumber((x) => x + 1);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="position-absolute top-0 start-50 translate-middle-x mt-4 fw-bolder">
          Eden
        </h1>
        <div className="mt-5 pt-5">
          <Stepper
            steps={[{ title: "" }, { title: "" }, { title: "" }, { title: "" }]}
            completeColor="#664de5"
            activeStep={activeNumber}
            activeColor="#664de5"
            circleFontSize="8"
            completeBarColor="#7a64e8"
          />
        </div>
        <div className="container">
          <div className="position-fixed top-50 start-50 translate-middle">
            {allComponents[activeNumber]}
            <br />
            <div class="text-center">
              <button
                style={{ width: "80%" }}
                className="text-center btn btn-primary"
                onClick={addOneToActiveNumber}
              >
                {arrayButtonData[activeNumber]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
