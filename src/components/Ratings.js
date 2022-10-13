import React, { useEffect, useState } from "react";
import * as ImIcons from "react-icons/im";
import styles from "./AllRatings.module.css";
import { useRouter } from "next/router";
import { useAppContext } from "./GlobalContext";

const Ratings = ({
  setValue,
  setProblem1Rating,
  setProblem2Rating,
  setProblem3Rating,
}) => {
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

  const { info } = useAppContext();
  let { asPath } = useRouter();

  let rating1 = 0;
  let rating2 = 0;
  let rating3 = 0;

  if (problem1a === true) {
    rating1++;
  }
  if (problem1b === true) {
    rating1++;
  }
  if (problem1c === true) {
    rating1++;
  }
  if (problem1d === true) {
    rating1++;
  }
  if (problem2a === true) {
    rating2++;
  }
  if (problem2b === true) {
    rating2++;
  }
  if (problem2c === true) {
    rating2++;
  }
  if (problem2d === true) {
    rating2++;
  }
  if (problem3a === true) {
    rating3++;
  }
  if (problem3b === true) {
    rating3++;
  }
  if (problem3c === true) {
    rating3++;
  }
  if (problem3d === true) {
    rating3++;
  }

  let totalRating;

  if (asPath === asPath.match("/dashboard")?.input) {
    totalRating =
      info.problem_1_rating + info.problem_2_rating + info.problem_3_rating;
  } else {
    totalRating = rating1 + rating2 + rating3;
  }

  ///////////CIRCLE///////////////

  let radius = 54;
  let stroke = 8;
  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  if (asPath !== asPath.match("/dashboard")?.input) {
    useEffect(() => {
      setValue(totalRating);
      setProblem1Rating(rating1);
      setProblem2Rating(rating2);
      setProblem3Rating(rating3);
    }, [totalRating]);
  }
  const strokeDashoffset = circumference - (totalRating / 12) * circumference;

  ///////////CIRCLE///////////////

  return (
    <>
      {asPath === asPath.match("/dashboard")?.input ? (
        <div className={styles} style={{ marginTop: "-8px" }}>
          <span
            style={{
              fontSize: 12,
              fontFamily: "League Spartan",
              paddingLeft: 7,
              color: "#979797",
            }}
          >
            Rating
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "-15px",
                }}
              >
                <div style={{ paddingRight: 30, color: "#979797" }}>
                  Problem 1
                </div>
                <div style={{ display: "flex", marginTop: "-2px" }}>
                  <div>
                    {info.problem_1_rating > 0 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_1_rating > 1 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_1_rating > 2 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_1_rating > 3 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ paddingRight: 30, color: "#979797" }}>
                  Problem 2
                </div>
                <div style={{ display: "flex", marginTop: "-2px" }}>
                  <div>
                    {info.problem_2_rating > 0 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_2_rating > 1 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_2_rating > 2 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_2_rating > 3 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ paddingRight: 30, color: "#979797" }}>
                  Problem 3
                </div>
                <div style={{ display: "flex", marginTop: "-2px" }}>
                  <div>
                    {info.problem_3_rating > 0 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_3_rating > 1 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_3_rating > 2 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                  <div>
                    {info.problem_3_rating > 3 ? (
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                height={radius * 2}
                width={radius * 2}
                style={{ marginTop: "-15px" }}
              >
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
                  stroke="#DD8D43"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeDasharray={circumference + " " + circumference}
                  style={{
                    strokeDashoffset,
                    transition: "stroke-dashoffset 0.35s",
                  }}
                  stroke-width={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <text
                  x="50%"
                  y="56%"
                  text-anchor="middle"
                  fill="#DD8D43"
                  fontSize="23"
                  fontFamily="League Spartan"
                >
                  {((totalRating / 12) * 100).toFixed(0)}%
                </text>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles} style={{ marginTop: "-8px" }}>
          <span
            style={{
              fontSize: 12,
              fontFamily: "League Spartan",
              paddingLeft: 7,
              color: "#979797",
            }}
          >
            Rating
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontSize: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "-15px",
                }}
              >
                <div style={{ paddingRight: 30, color: "#979797" }}>
                  Problem 1
                </div>
                <div style={{ display: "flex", marginTop: "-2px" }}>
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ paddingRight: 30, color: "#979797" }}>
                  Problem 2
                </div>
                <div style={{ display: "flex", marginTop: "-2px" }}>
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div style={{ paddingRight: 30, color: "#979797" }}>
                  Problem 3
                </div>
                <div style={{ display: "flex", marginTop: "-2px" }}>
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
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
                      <ImIcons.ImStarFull style={{ color: "#DD8D43" }} />
                    ) : (
                      <ImIcons.ImStarFull className={styles.empty} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                height={radius * 2}
                width={radius * 2}
                style={{ marginTop: "-15px" }}
              >
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
                  stroke="#DD8D43"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeDasharray={circumference + " " + circumference}
                  style={{
                    strokeDashoffset,
                    transition: "stroke-dashoffset 0.35s",
                  }}
                  stroke-width={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <text
                  x="50%"
                  y="56%"
                  text-anchor="middle"
                  fill="#DD8D43"
                  fontSize="23"
                  fontFamily="League Spartan"
                >
                  {((totalRating / 12) * 100).toFixed(0)}%
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ratings;
