import React, { useState } from "react";
import Editor from "@monaco-editor/react";
const Problems = ({
  problem1Notes,
  problem2Notes,
  problem3Notes,
  setProblem1Notes,
  setProblem2Notes,
  setProblem3Notes,
}) => {
  const [seeProblem1, setSeeProblem1] = useState(true);
  const [seeProblem2, setSeeProblem2] = useState(false);
  const [seeProblem3, setSeeProblem3] = useState(false);

  const handleProblem1NotesChange = (event) => {
    setProblem1Notes(event.target.value);
  };

  const handleProblem2NotesChange = (event) => {
    setProblem2Notes(event.target.value);
  };

  const handleProblem3NotesChange = (event) => {
    setProblem3Notes(event.target.value);
  };

  const problem1 = `function addPropertiesToObject(obj1, obj2) {
// Must combine all properties of obj1 to obj2
// Use Object.assign to combine obj1 to obj2.
Object.assign(obj2, obj1);
// Must return obj2
return obj2;
} `;

  const problem2 = `function createNewArray(arr, func) {
// create new array
//Create a new array with array and function
var newArr = Array.from(arr, func); 
//Return new array
return newArr;
}`;

  const problem3 = `function logger(func, str) {
// create new empty string
var newStr = '';
//For loop to go through each letter of the string
for (var i = 0; i < str.length;i++) {
//Put letters from function to the new string
newStr +=  func(str[i]) }
// return new string
return newStr;
}`;
  return (
    <div
      style={{
        fontSize: 13,
        borderTopLeftRadius: "10px 10px",
        borderTopRightRadius: "10px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#DCDCDC;",
        }}
      >
        {seeProblem1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 180,
              backgroundColor: "#FFE8D3",
              borderTop: "1px solid #DD8D43",
              borderLeft: "1px solid #DD8D43",
              borderRight: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
            }}
            onClick={() => {
              if (seeProblem1 === false) {
                setSeeProblem1(!seeProblem1);
                setSeeProblem2(false);
                setSeeProblem3(false);
              }
            }}
          >
            Problem 1
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 180,
              backgroundColor: "#FFE8D3",
              border: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
            }}
            onClick={() => {
              if (seeProblem1 === false) {
                setSeeProblem1(!seeProblem1);
                setSeeProblem2(false);
                setSeeProblem3(false);
              }
            }}
          >
            Problem 1
          </div>
        )}

        {seeProblem2 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 180,
              backgroundColor: "#FFE8D3",
              borderTop: "1px solid #DD8D43",
              borderLeft: "1px solid #DD8D43",
              borderRight: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
            }}
            onClick={() => {
              if (seeProblem2 === false) {
                setSeeProblem2(!seeProblem2);
                setSeeProblem1(false);
                setSeeProblem3(false);
              }
            }}
          >
            Problem 2
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 180,
              backgroundColor: "#FFE8D3",
              border: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
            }}
            onClick={() => {
              if (seeProblem2 === false) {
                setSeeProblem2(!seeProblem2);
                setSeeProblem1(false);
                setSeeProblem3(false);
              }
            }}
          >
            Problem 2
          </div>
        )}

        {seeProblem3 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 180,
              backgroundColor: "#FFE8D3",
              borderTop: "1px solid #DD8D43",
              borderLeft: "1px solid #DD8D43",
              borderRight: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
            }}
            onClick={() => {
              if (seeProblem3 === false) {
                setSeeProblem3(!seeProblem3);
                setSeeProblem1(false);
                setSeeProblem2(false);
              }
            }}
          >
            Problem 3
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 180,
              backgroundColor: "#FFE8D3",
              border: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
            }}
            onClick={() => {
              if (seeProblem3 === false) {
                setSeeProblem3(!seeProblem3);
                setSeeProblem1(false);
                setSeeProblem2(false);
              }
            }}
          >
            Problem 3
          </div>
        )}
      </div>
      {seeProblem1 ? (
        <div
          style={{
            backgroundColor: "#FFE8D3",
            borderLeft: "1px solid #DD8D43",
            borderRight: "1px solid #DD8D43",
            borderBottom: "1px solid #DD8D43",
            padding: 10,
          }}
        >
          <div style={{ paddingBottom: 10 }}>
            <strong>Question 1:</strong> Working with Strings and Functions
            Complete the logger function that takes in a function and a string
            and returns the result of calling the function on each letter in the
            string
          </div>
          <Editor
            height="150px"
            width="520px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={problem1}
          />
          <div style={{ paddingTop: 20 }}>
            <strong>Notes:</strong>
          </div>
          <textarea
            value={problem1Notes}
            onChange={handleProblem1NotesChange}
            style={{ width: 515, height: 100, paddingTop: 10, resize: "none" }}
          ></textarea>
        </div>
      ) : null}
      {seeProblem2 ? (
        <div
          style={{
            backgroundColor: "#FFE8D3",
            borderLeft: "1px solid #DD8D43",
            borderRight: "1px solid #DD8D43",
            borderBottom: "1px solid #DD8D43",
            padding: 10,
          }}
        >
          <div style={{ paddingBottom: 10 }}>
            <strong>Question 2:</strong> Working with Arrays and Functions
            Complete the createNewArray function that takes in an array and
            another function, then returns a new array containing the results of
            calling the input function on each element in the array.
          </div>
          <Editor
            height="150px"
            width="520px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={problem2}
          />
          <div style={{ paddingTop: 20 }}>
            <strong>Notes:</strong>
          </div>
          <textarea
            value={problem2Notes}
            onChange={handleProblem2NotesChange}
            style={{ width: 515, height: 100, resize: "none" }}
          ></textarea>
        </div>
      ) : null}
      {seeProblem3 ? (
        <div
          style={{
            backgroundColor: "#FFE8D3",
            borderLeft: "1px solid #DD8D43",
            borderRight: "1px solid #DD8D43",
            borderBottom: "1px solid #DD8D43",
            padding: 10,
          }}
        >
          <div style={{ paddingBottom: 10 }}>
            <strong>Question 3:</strong> Working with Objects Given two objects
            as parameters "obj1" and "obj2", complete the addPropertiesToObject
            function that adds all properties of the first object to the second
            object and returns the second object.
          </div>
          <Editor
            height="150px"
            width="520px"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={problem3}
          />
          <div style={{ paddingTop: 20 }}>
            <strong>Notes:</strong>
          </div>
          <textarea
            value={problem3Notes}
            onChange={handleProblem3NotesChange}
            style={{ width: 515, height: 100, resize: "none" }}
          ></textarea>
        </div>
      ) : null}
    </div>
  );
};

export default Problems;
