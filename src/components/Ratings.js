import React, { useState } from "react";
import * as ImIcons from "react-icons/im";

const Ratings = () => {
  const [problem1a, setProblem1a] = useState(false);
  const [problem1b, setProblem1b] = useState(false);
  const [problem1c, setProblem1c] = useState(false);
  const [problem1d, setProblem1d] = useState(false);

  const [problem2a, setProblem2a] = useState(false);
  const [problem2b, setProblem2b] = useState(false);
  const [problem2c, setProblem2c] = useState(false);
  const [problem2d, setProblem2d] = useState(false);

  const [problem3a, setProblem3a] = useState(false);
  const [problem3b, setProblem3b] = useState(false);
  const [problem3c, setProblem3c] = useState(false);
  const [problem3d, setProblem3d] = useState(false);

  let value = 0;

  if (problem1a === true) {
    value++;
  }
  if (problem1b === true) {
    value++;
  }
  if (problem1c === true) {
    value++;
  }
  if (problem1d === true) {
    value++;
  }
  if (problem2a === true) {
    value++;
  }
  if (problem2b === true) {
    value++;
  }
  if (problem2c === true) {
    value++;
  }
  if (problem2d === true) {
    value++;
  }
  if (problem3a === true) {
    value++;
  }
  if (problem3b === true) {
    value++;
  }
  if (problem3c === true) {
    value++;
  }
  if (problem3d === true) {
    value++;
  }

  ///////////CIRCLE///////////////

  let radius = 70;
  let stroke = 10;
  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (value / 12) * circumference;

  ///////////CIRCLE///////////////

  return (
    <div>
      <span style={{ fontSize: 15 }}>Rating</span>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ paddingRight: 30 }}>Problem 1</div>
            <div style={{ display: "flex" }}>
              <div onClick={() => setProblem1a(!problem1a)}>
                {problem1a ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem1a) {
                    setProblem1a(!problem1a);
                  }
                  setProblem1b(!problem1b);
                }}
              >
                {problem1b ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem1a) {
                    setProblem1a(!problem1a);
                  }
                  if (!problem1b) {
                    setProblem1b(!problem1b);
                  }
                  setProblem1c(!problem1c);
                }}
              >
                {problem1c ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem1a) {
                    setProblem1a(!problem1a);
                  }
                  if (!problem1b) {
                    setProblem1b(!problem1b);
                  }
                  if (!problem1c) {
                    setProblem1c(!problem1c);
                  }
                  setProblem1d(!problem1d);
                }}
              >
                {problem1d ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ paddingRight: 30 }}>Problem 2</div>
            <div style={{ display: "flex" }}>
              <div onClick={() => setProblem2a(!problem2a)}>
                {problem2a ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem2a) {
                    setProblem2a(!problem2a);
                  }
                  setProblem2b(!problem2b);
                }}
              >
                {problem2b ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem2a) {
                    setProblem2a(!problem2a);
                  }
                  if (!problem2b) {
                    setProblem2b(!problem2b);
                  }
                  setProblem2c(!problem2c);
                }}
              >
                {problem2c ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem2a) {
                    setProblem2a(!problem2a);
                  }
                  if (!problem2b) {
                    setProblem2b(!problem2b);
                  }
                  if (!problem2c) {
                    setProblem2c(!problem2c);
                  }
                  setProblem2d(!problem2d);
                }}
              >
                {problem2d ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ paddingRight: 30 }}>Problem 3</div>
            <div style={{ display: "flex" }}>
              <div onClick={() => setProblem3a(!problem3a)}>
                {problem3a ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem3a) {
                    setProblem3a(!problem3a);
                  }
                  setProblem3b(!problem3b);
                }}
              >
                {problem3b ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem3a) {
                    setProblem3a(!problem3a);
                  }
                  if (!problem3b) {
                    setProblem3b(!problem3b);
                  }
                  setProblem3c(!problem3c);
                }}
              >
                {problem3c ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
              <div
                onClick={() => {
                  if (!problem3a) {
                    setProblem3a(!problem3a);
                  }
                  if (!problem3b) {
                    setProblem3b(!problem3b);
                  }
                  if (!problem3c) {
                    setProblem3c(!problem3c);
                  }
                  setProblem3d(!problem3d);
                }}
              >
                {problem3d ? (
                  <ImIcons.ImStarFull style={{ color: "orange" }} />
                ) : (
                  <ImIcons.ImStarEmpty />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="orange"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.35s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
              stroke-width={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            ></circle>
            <text
              x="50%"
              y="55%"
              text-anchor="middle"
              stroke="orange"
              strokeWidth="1px"
            >
              {((value / 12) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Ratings;

{
  /* <meter
        style={{ width: 530 }}
        min="0"
        low="4"
        optimum="10"
        high="9"
        max="12"
        value={value}
      ></meter> */
}
