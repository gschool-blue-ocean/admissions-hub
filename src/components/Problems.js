import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import Style from "./Problems.module.css";
import Image from "next/image";

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
  const [copied, setCopied] = useState(false);

  // let [markdownText, setMarkDownText] = useState("");
  // let [markdownText2, setMarkDownText2] = useState("");
  // let [markdownText3, setMarkDownText3] = useState("");
  let [renderedHTML, setRenderedHTML] = useState("");
  let [renderedHTML2, setRenderedHTML2] = useState("");
  let [renderedHTML3, setRenderedHTML3] = useState("");
  let [showNotes, setShowNotes] = useState(true);

  function handleTextInput(e) {
    setProblem1Notes(e.target.value);

    let md = new MarkdownIt();

    let renderedHTML = md.render(e.target.value);

    setRenderedHTML(renderedHTML);
  }

  function handleTextInput2(e) {
    setProblem2Notes(e.target.value);

    let md2 = new MarkdownIt();

    let renderedHTML2 = md2.render(e.target.value);

    setRenderedHTML2(renderedHTML2);
  }

  function handleTextInput3(e) {
    setProblem3Notes(e.target.value);

    let md3 = new MarkdownIt();

    let renderedHTML3 = md3.render(e.target.value);

    setRenderedHTML3(renderedHTML3);
  }

  function handleFocus1() {
    showNotes = true;
    setShowNotes(showNotes);
  }

  function handleFocus2() {
    showNotes = false;
    setShowNotes(showNotes);
  }

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
        fontSize: 12,
        borderTopLeftRadius: "10px 10px",
        borderTopRightRadius: "10px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {seeProblem1 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: 220,
              backgroundColor: "#FFE8D3",
              borderTop: "1px solid #DD8D43",
              borderLeft: "1px solid #DD8D43",
              borderRight: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
              transition: ".35s",
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
              width: 140,
              backgroundColor: "#FFE8D3",
              border: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
              transition: ".35s",
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
              width: 220,
              backgroundColor: "#FFE8D3",
              borderTop: "1px solid #DD8D43",
              borderLeft: "1px solid #DD8D43",
              borderRight: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
              transition: ".35s",
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
              width: 140,
              backgroundColor: "#FFE8D3",
              border: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
              transition: ".35s",
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
              width: 220,
              backgroundColor: "#FFE8D3",
              borderTop: "1px solid #DD8D43",
              borderLeft: "1px solid #DD8D43",
              borderRight: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
              transition: ".35s",
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
              width: 140,
              backgroundColor: "#FFE8D3",
              border: "1px solid #DD8D43",
              borderTopLeftRadius: "10px 10px",
              borderTopRightRadius: "10px 10px",
              paddingBottom: 5,
              paddingTop: 5,
              transition: ".35s",
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
            string.
          </div>
          <pre
            style={{
              display: "block",
              fontFamily: "monospace",
              whiteSpace: "pre",
              margin: "1em 0px",
            }}
          >
            <code
              style={{
                backgroundColor: "#eee",
                border: "1px solid #999",
                display: "block",
                padding: "20px",
              }}
            >
              {problem1}
              <br></br>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                {copied
                  ? setTimeout(() => {
                      setCopied(!copied);
                    }, 1000) && (
                      <span
                        style={{
                          display: "flex",
                          background: "black",
                          color: "white",
                          width: 50,
                          justifyContent: "center",
                          borderRadius: 5,
                          opacity: 0.5,
                        }}
                      >
                        Copied!
                      </span>
                    )
                  : null}
                <div style={{ paddingRight: 15 }}>
                  <Image
                    onClick={() => {
                      navigator.clipboard.writeText(problem1);
                      setCopied(!copied);
                    }}
                    src={"/images/copy.svg"}
                    alt="/"
                    objectFit="contain"
                    objectPosition="bottom center"
                    width={16}
                    height={17}
                  />
                </div>
              </div>
            </code>
          </pre>
          <div>
            <strong>Notes:</strong>
          </div>
          {showNotes ? (
            <textarea
              rows={20}
              value={problem1Notes}
              onChange={handleTextInput}
              onBlur={handleFocus2}
              autoFocus
              style={{
                width: 378,
                height: 150,
                resize: "none",
                scrollbarColor: "#ffe8d3 #dd8d43",
              }}
            ></textarea>
          ) : (
            <div
              style={{
                width: "auto",
                height: 150,
                scrollbarColor: "#ffe8d3 #dd8d43",
              }}
              dangerouslySetInnerHTML={{ __html: renderedHTML }}
              className={Style.ProblemsOneMarkdown}
              onClick={handleFocus1}
            ></div>
          )}
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
          <pre
            style={{
              display: "block",
              fontFamily: "monospace",
              whiteSpace: "pre",
              margin: "1em 0px",
            }}
          >
            <code
              style={{
                backgroundColor: "#eee",
                border: "1px solid #999",
                display: "block",
                padding: "20px",
              }}
            >
              {problem2}
              <br></br>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                {copied
                  ? setTimeout(() => {
                      setCopied(!copied);
                    }, 1000) && (
                      <span
                        style={{
                          display: "flex",
                          background: "black",
                          color: "white",
                          width: 50,
                          justifyContent: "center",
                          borderRadius: 5,
                          opacity: 0.5,
                        }}
                      >
                        Copied!
                      </span>
                    )
                  : null}
                <div style={{ paddingRight: 15 }}>
                  <Image
                    onClick={() => {
                      navigator.clipboard.writeText(problem2);
                      setCopied(!copied);
                    }}
                    src={"/images/copy.svg"}
                    alt="/"
                    objectFit="contain"
                    objectPosition="bottom center"
                    width={16}
                    height={17}
                  />
                </div>
              </div>
            </code>
          </pre>
          <div>
            <strong>Notes:</strong>
          </div>
          {showNotes ? (
            <textarea
              rows={20}
              value={problem2Notes}
              onChange={handleTextInput2}
              onBlur={handleFocus2}
              autoFocus
              style={{ width: 378, height: 150, resize: "none" }}
            ></textarea>
          ) : (
            <div
              style={{ width: "auto", height: 150 }}
              dangerouslySetInnerHTML={{ __html: renderedHTML2 }}
              className={Style.ProblemsOneMarkdown}
              onClick={handleFocus1}
            ></div>
          )}
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
          <pre
            style={{
              display: "block",
              fontFamily: "monospace",
              whiteSpace: "pre",
              margin: "1em 0px",
            }}
          >
            <code
              style={{
                backgroundColor: "#eee",
                border: "1px solid #999",
                display: "block",
                padding: "20px",
              }}
            >
              {problem3}
              <br></br>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                {copied
                  ? setTimeout(() => {
                      setCopied(!copied);
                    }, 1000) && (
                      <span
                        style={{
                          display: "flex",
                          background: "black",
                          color: "white",
                          width: 50,
                          justifyContent: "center",
                          borderRadius: 5,
                          opacity: 0.5,
                        }}
                      >
                        Copied!
                      </span>
                    )
                  : null}
                <div style={{ paddingRight: 15 }}>
                  <Image
                    onClick={() => {
                      navigator.clipboard.writeText(problem3);
                      setCopied(!copied);
                    }}
                    src={"/images/copy.svg"}
                    alt="/"
                    objectFit="contain"
                    objectPosition="bottom center"
                    width={16}
                    height={17}
                  />
                </div>
              </div>
            </code>
          </pre>
          <div>
            <strong>Notes:</strong>
          </div>
          {showNotes ? (
            <textarea
              rows={20}
              value={problem3Notes}
              onChange={handleTextInput3}
              onBlur={handleFocus2}
              autoFocus
              style={{ width: 378, height: 150, resize: "none" }}
            ></textarea>
          ) : (
            <div
              style={{ width: "auto", height: 150 }}
              dangerouslySetInnerHTML={{ __html: renderedHTML3 }}
              className={Style.ProblemsOneMarkdown}
              onClick={handleFocus1}
            ></div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Problems;
