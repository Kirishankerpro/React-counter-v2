import "../assets/style/Main.css";
import { useState } from "react";
import Counter from "../components/Counter";

const Main = () => {
  const [tab, setTab] = useState([]);

  return (
    <div className="main">
      <div className="addcounter">
        {tab.length <= 2 ? (
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
          <button className="buttonout">test</button>
        )}
      </div>

      <div className="addcounterelements">
        <Counter />
        {tab.map((elements, index) => {
          return (
            <div key={index}>
              <Counter />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
