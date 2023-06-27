import React from "react";

function Child({ data, changeData }) {
  function changeStatus(index) {
    let tempData = [...data];
    tempData[index].status=true;
    changeData(tempData);
  }
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {data.map((element, index) => (
          <li>
            {element.content}
            {!element.status ? (
              <button onClick={() => changeStatus(index)}>Complete</button>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
