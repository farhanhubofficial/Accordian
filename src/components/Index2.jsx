import React, { useState } from "react";
import Data from "./Data";

function Index2() {
  const [selected, setSelected] = useState(null);
  const [enablemulti, setEnablemulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingle(getId) {
    setSelected(getId === selected ? null : getId);
  }
  function handleMulti(getId) {
    let cpyMultiple = [...multiple];
    const findIndexOfcurrent = cpyMultiple.indexOf(getId);
     console.log(findIndexOfcurrent);
    if (findIndexOfcurrent === -1) cpyMultiple.push(getId);
    else cpyMultiple.splice(findIndexOfcurrent, 1);
    setMultiple(cpyMultiple)
  }
  console.log(selected, multiple);


  return (
    <div className="accordian">
      <button onClick={() => setEnablemulti(!enablemulti)}>
        enable multiple selection
      </button>
      {Data.map((dataItem) => (
        <div
          onClick={
            enablemulti
              ? () => handleMulti(dataItem.id)
              : () => handleSingle(dataItem.id)
          }
        >
          <h3>{dataItem.question}</h3>
          <span>
            <p>quiz:{dataItem.id}</p>
          </span>
          {
            enablemulti && multiple.indexOf(dataItem.id)!== -1 ? <div>{dataItem.answer}</div>: selected=== dataItem.id &&  <div>{dataItem.answer}</div>
          } 
        
        
        </div>
      ))}
    </div>
  );
}

export default Index2;
