import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  let arr = [
    { content: "Learn React", status: false },
    { content: "Build a React app", status: false },
    { content: "Deploy the React app", status: false },
  ];
  const [list, setList] = useState(arr);
  return (
    <div>
      <h1>Parent Component</h1>
      <Child data={list} changeData={setList}/>
    </div>
  );
}

export default Parent;
