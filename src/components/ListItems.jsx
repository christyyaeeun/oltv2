import React from "react";

const ListItems = props => (
  <div className="card">
    <ul>
      {props.items.map((item, index) => {
        return (
          <div className="card">

          <li key={index}>
            {" "}
            {item}
            <button onClick={props.delete(item)}>Delete</button>
          </li>
          </div>
        );
      })}
    </ul>
  </div>
);
export default ListItems;
