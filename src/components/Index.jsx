import React, { useState } from "react";
import Data from "./Data";
import "./styles.css";

function index() {
  const [selected, setSelected] = useState(null);
  const [enableMultiselection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handlesingleSelection(getId) {
    setSelected(getId === selected ? null : getId);
  }
  function handlemultiselection(getId) {
    let cpymultiple = [...multiple];
    const findIndexofCurrentId = cpymultiple.indexOf(getId);
    console.log(findIndexofCurrentId);
    if (findIndexofCurrentId === -1) cpymultiple.push(getId);
    else cpymultiple.splice(findIndexofCurrentId, 1);
    setMultiple(cpymultiple);
  }
  console.log(selected, multiple);

  return(

  <div className="wrapper">
      <button onClick={() => setEnableMultiselection(!enableMultiselection)} className={enableMultiselection ? "clas1" : "class2"}>
        Enable multi-selection
      </button>
      <div className="accordian">
        {Data.length > 0 ? (
          Data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
   
                  enableMultiselection
                    ? () => handlemultiselection(dataItem.id)
                    : () => handlesingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiselection && multiple.indexOf(dataItem.id) !== -1 ? <dv className="content">{dataItem.answer}</dv> : selected=== dataItem.id && <div className="content">{dataItem.answer}</div>
              }
           
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
export default index;
