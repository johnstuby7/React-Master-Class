import React from "react";

const DemoOutput = (props) => {
  return <p>{props.show ? "This is New" : ""}</p>;
};

// This is one way to help prevent unnecessary re-evaluations
// React.mom should look at a component as a argument, look at the props, compare the previous with new values of props, and only
// if a change has occured, then the demoOutput will be run, otherwise it will be skipped
// props.show === props.previous.show
export default React.memo(DemoOutput);
