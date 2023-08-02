import React from "react";

const MyParagraph = (props) => {
  console.log("My Paragraph running");
  return <p>{props.show ? "This is New" : ""}</p>;
};

export default MyParagraph;
