import "../assets/style/Main.css";
import { useState } from "react";
import Counter from "../components/Counter";

const Main = () => {
  const [tab, setTab] = useState([]);

  return (
    <div className="main">
      {tab.map((elements5) => {
        console.log(elements5);
      })}
      <div className="addcounter">
        {tab.length < 2 ? (
          <button
            onClick={() => {
              const newTab = [...tab];

              newTab.push(0);

              setTab(newTab);

              console.log(tab);
            }}
          >
            Add Counter
          </button>
        ) : (
          <button className="buttonout"></button>
        )}
      </div>

      <div className="addcounterelements">
        <Counter />
        {tab.map((elements, index) => {
          return <div key={index}>{elements <= 3 && <Counter />}</div>;
        })}
      </div>
    </div>
  );
};

export default Main;
