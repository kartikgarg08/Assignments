import React from "react";
import "./App.css";

const List = (props) => {
    const colorclass = {
        '1': 'color1',
        2: 'color1',
        3: 'color1',
        4: 'color1',
        5: 'color1',
        6: 'color1',
        7: 'color1',
      };
    const getclass= (id)=>{
        id=id+1;
        id=id%7;
         if(id==1)
            return "list-item color1";
        if(id==2)
            return "list-item color2";
        if(id==3)
            return "list-item color3";
        if(id==4)
            return "list-item color4";
        if(id==5)
            return "list-item color5";
        if(id==6)
            return "list-item color6";
        if(id==0)
            return "list-item color7";

            
        
    }
  return (
      <>
        <li className={getclass(props.id)}> 
        <div className="item"> {props.element}</div>
        <div className="btns">
            <i onClick={() => { props.deletee(props.id); }} className=" icon t fas fa-trash-alt" ></i>
            <i className="icon" onClick={() => { props.editTask(props.id);  }} > 📝 </i>
            <i className="icon" onClick={() => { props.moveUp(props.id); }} > ⬆ </i>
            <i className="icon" onClick={() => { props.moveDown(props.id); }} > ⬇ </i>
        </div>
        {/* <span className="hel me-2">
            
           
        </span> */}
    </li>
      </>
    
  );
};

export default List;