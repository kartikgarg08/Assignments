import './App.css';
import React, { useState } from "react";
import List from "./List";


function App() {
  const [item, setitem] = useState("");
  const [itemArray, setItemArray] = useState([]);
  const [btn, setbtn] = useState(false);
  const [vid, setvid] = useState(null);
  const setValue = (event) => {
    setitem(event.target.value);
  };

  const callTheValue = () => {
    if (item !== "") {
      setItemArray((old) => {
        return [...old, item];
      });
      setitem("");
    } else {
      alert("please enter the value ✔️");
    }
  };

  const deletee = (id) => {
    setItemArray((olditem) => {
      return olditem.filter((arrayelemet, index) => {
        return index !== id;
      });
    });
  };

  const editTask = (id) => {
    setbtn(true);
    setitem(itemArray[id]);

    setvid(id);
  };
  const editkrdo = () => {
    const newt = [...itemArray];
    newt[vid] = item;
    setItemArray(newt);
    setvid(null);
    setbtn(false);
  };
  const moveUp = (id) => {
    const newt = [...itemArray];
    let temp = newt[id];
    if (newt.length > 1 && id - 1 >= 0) {
      newt[id] = newt[id - 1];
      newt[id - 1] = temp;
    }
    setItemArray(newt);

    // console.log("move");
  };

  const moveDown = (id) => {
    const newt = [...itemArray];
    if (newt.length > 1 && id + 1 < newt.length) {
      let temp = newt[id];
      newt[id] = newt[id + 1];
      newt[id + 1] = temp;
    }
    setItemArray(newt);
  };

  return (
    <>

      <div className="App">
        <h1 className="header"> Todo List</h1>
        <div>
            <input type="text" className="search-input" placeholder="Enter The Value" onChange={setValue} value={item}/>
            {/* <button className="search-btn" onClick={editkrdo}><i className="fas fa-plus-circle"></i></button> */}
            {btn ? ( <button className="search-btn" onClick={editkrdo}><i className="fas fa-plus-circle"></i></button> )
                   : ( <button className="search-btn" onClick={callTheValue}><i className="fas fa-plus-circle"></i></button> )}
            
        </div>
        <div className="container">
          <ul>        
              {itemArray.map((value, index) => {
                return (
                      <List key={index} element={value} id={index} deletee={deletee} editTask={editTask} moveUp={moveUp} moveDown={moveDown}/>
                        );
                      })}
              
          </ul>
        </div>
      </div>
    </>
  );
}
export default App;