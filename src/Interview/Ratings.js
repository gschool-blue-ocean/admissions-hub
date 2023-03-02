import { ImStarFull } from "react-icons/im";
import { RxReset } from "react-icons/rx";
import styles from "../../styles/Interview.module.css";

export default function Ratings({
  problem1Rating,
  problem2Rating,
  problem3Rating,
  setProblem1Rating,
  setProblem2Rating,
  setProblem3Rating,
}) {
  let totalRating = problem1Rating + problem2Rating + problem3Rating;
  let radius = 54;
  let stroke = 8;
  let normalizedRadius = radius - stroke * 2;
  let circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    0 || circumference - (totalRating / 15) * circumference;

  return (
    <div className={styles.ratingsCard}>
      <span className={styles.ratingsTitle}>Rating:</span>
      <div className={styles.ratingsContent}>
        <div className={styles.ratingsLeft}>
          <div className={styles.ratingsRow}>
            <div className={styles.ratingsTitle}>Problem 1</div>
            <div className={styles.ratingsRow}>
              <div onClick={() => setProblem1Rating(0)}>
              <RxReset />
              </div>
              <div onClick={() => setProblem1Rating(1)}>
                {problem1Rating > 0 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem1Rating(2)}>
                {problem1Rating > 1 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem1Rating(3)}>
                {problem1Rating > 2 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div id="problem1Rating" onClick={() => setProblem1Rating(4)}>
                {problem1Rating > 3 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem1Rating(5)}>
                {problem1Rating > 4 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
            </div>
          </div>
          <div className={styles.ratingsRow}>
            <div className={styles.ratingsTitle}>Problem 2</div>
            <div className={styles.ratingsRow}>
            <div onClick={() => setProblem2Rating(0)}>
              <RxReset />
              </div>
              <div onClick={() => setProblem2Rating(1)}>
                {problem2Rating > 0 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem2Rating(2)}>
                {problem2Rating > 1 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div id="problem2Rating" onClick={() => setProblem2Rating(3)}>
                {problem2Rating > 2 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem2Rating(4)}>
                {problem2Rating > 3 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem2Rating(5)}>
                {problem2Rating > 4 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
            </div>
          </div>
          <div className={styles.ratingsRow}>
            <div className={styles.ratingsTitle}>Problem 3</div>
            <div className={styles.ratingsRow}>
            <div onClick={() => setProblem3Rating(0)}>
              <RxReset />
              </div>
              <div onClick={() => setProblem3Rating(1)}>
                {problem3Rating > 0 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem3Rating(2)}>
                {problem3Rating > 1 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem3Rating(3)}>
                {problem3Rating > 2 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div onClick={() => setProblem3Rating(4)}>
                {problem3Rating > 3 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
              <div id="problem3Rating" onClick={() => setProblem3Rating(5)}>
                {problem3Rating > 4 ? (
                  <ImStarFull style={{ color: "#EF6E47" }} />
                ) : (
                  <ImStarFull />
                )}
              </div>
            </div>
          </div>
        </div>
        <svg
          className={styles.ratingsRight}
          height={radius * 2}
          width={radius * 2}
        >
          <circle
            stroke="#ffd8a7"
            fill="none"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#EF6E47"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{
              strokeDashoffset,
              transition: "stroke-dashoffset 0.35s",
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <text
            x="50%"
            y="56%"
            textAnchor="middle"
            fill="#EF6E47"
            fontSize="23"
            fontFamily="League Spartan"
          >
            {((totalRating / 15) * 100).toFixed(0)}%
          </text>
        </svg>
      </div>
    </div>
  );
}


