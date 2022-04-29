import "../assets/style/Main.css";
import { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const [addcounter, setaddcounter] = useState(0);

  return (
    <div className="main">
      <div className="addcounter">
        {" "}
        <button onClick={() => {}}> Add Counter </button>{" "}
      </div>
      <div className="all">
        <div>
          {/* condition moins */}
          {counter <= 0 ? (
            <button className="minus-none">
              <i class="fa-solid fa-minus"></i>
            </button>
          ) : (
            <button
              className="minus"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              <i class="fa-solid fa-minus"></i>{" "}
            </button>
          )}
          <span className="result"> {counter} </span> {/* compteur */}
          {/* condition plus  */}
          {counter >= 10 ? (
            <button className="minus-none">
              <i class="fa-solid fa-plus"></i>
            </button>
          ) : (
            <button
              className="plus"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <i class="fa-solid fa-plus"></i>{" "}
            </button>
          )}
        </div>
      </div>
      <div className="secondbox">
        {counter === 0 ? (
          <div className="">
            <button className="resetonzero">Reset</button>
          </div>
        ) : (
          <button
            className="reset"
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
