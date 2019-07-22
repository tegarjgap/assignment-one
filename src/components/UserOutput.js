import React from "react";

export default function UserOutput(props) {
  const style = {
    color: 'whitesmoke',
    fontSize: '30px'
  }
  return (
    <div>
      <p style={style}>
        { props.username }
      </p>
    </div>
  );
}