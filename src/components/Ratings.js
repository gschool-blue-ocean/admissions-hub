import React, { useEffect, useState } from "react";
import * as ImIcons from "react-icons/im";

const Ratings = ({ value, setValue }) => {
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

  let rating = 0;

  if (problem1a === true) {
    rating++;
  }
  if (problem1b === true) {
    rating++;
  }
  if (problem1c === true) {
    rating++;
  }
  if (problem1d === true) {
    rating++;
  }
  if (problem2a === true) {
    rating++;
  }
  if (problem2b === true) {
    rating++;
  }
  if (problem2c === true) {
    rating++;
  }
  if (problem2d === true) {
    rating++;
  }
  if (problem3a === true) {
    rating++;
  }
  if (problem3b === true) {
    rating++;
  }
  if (problem3c === true) {
    rating++;
  }
  if (problem3d === true) {
    rating++;
  }

  ///////////CIRCLE///////////////

  let radius = 70;
  let stroke = 10;
  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    setValue(rating);
  }, [rating]);
  const strokeDashoffset = circumference - (rating / 12) * circumference;

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
              <div
                onClick={() => {
                  setProblem1a(!problem1a);
                  if (problem1b) {
                    setProblem1b(!problem1b);
                  }
                  if (problem1c) {
                    setProblem1c(!problem1c);
                  }
                  if (problem1d) {
                    setProblem1d(!problem1d);
                  }
                }}
              >
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
                  if (problem1c) {
                    setProblem1c(!problem1c);
                  }
                  if (problem1d) {
                    setProblem1d(!problem1d);
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
                  if (problem1d) {
                    setProblem1d(!problem1d);
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
              <div
                onClick={() => {
                  setProblem2a(!problem2a);
                  if (problem2b) {
                    setProblem2b(!problem2b);
                  }
                  if (problem2c) {
                    setProblem2c(!problem2c);
                  }
                  if (problem2d) {
                    setProblem2d(!problem2d);
                  }
                }}
              >
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
                  if (problem2c) {
                    setProblem2c(!problem2c);
                  }
                  if (problem2d) {
                    setProblem2d(!problem2d);
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
                  if (problem2d) {
                    setProblem2d(!problem2d);
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
              <div
                onClick={() => {
                  setProblem3a(!problem3a);
                  if (problem3b) {
                    setProblem3b(!problem3b);
                  }
                  if (problem3c) {
                    setProblem3c(!problem3c);
                  }
                  if (problem3d) {
                    setProblem3d(!problem3d);
                  }
                }}
              >
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
                  if (problem3c) {
                    setProblem3c(!problem3c);
                  }
                  if (problem3d) {
                    setProblem3d(!problem3d);
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
                  if (problem3d) {
                    setProblem3d(!problem3d);
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
              stroke="#ffd8a7"
              fill="none"
              strokeWidth={stroke}
              stroke-width={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
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
            />
            <text
              x="50%"
              y="58%"
              text-anchor="middle"
              stroke="orange"
              strokeWidth="1px"
            >
              {((rating / 12) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
