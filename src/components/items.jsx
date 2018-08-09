import React from "react";

const Message = props => {
  return props.items.map((val, i) => {
    return (
      <li key={i} className="list-group-item">
        {val}
        <i
          onClick={() => props.onDelete(val)}
          className="far fa-times-circle"
        />
      </li>
    );
  });
};

export default Message;
