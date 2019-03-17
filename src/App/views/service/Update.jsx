import React from "react";

export default (props) => {
  const { service } = props;
  
  return (
    <div>
      {service ? (
        <div></div>
      ) : (
        <div>Nothing to show.</div>
      )}
    </div>
  );
}