import styles from '../../styles/Dashboard.module.css';
import { useEffect, useState } from 'react';

export default function DashTop(props) {
  const [passingqtr, setPassingqtr] = useState(0);
  const [totalqtr, setTotalqtr] = useState(0);
  const [passingyr, setPassingyr] = useState(0);
  const [totalyr, setTotalyr] = useState(0);

  function calcCircles() {
    setPassingqtr(0);
    setTotalqtr(0);
    setPassingyr(0);
    setTotalyr(0);
    props.interviews.forEach((el) => {
      if (Date.now() - new Date(el.date) < 7889400000) {
        if (el.state === 'pass') {
          setPassingqtr((prev) => prev + 1);
          setTotalqtr((prev) => prev + 1);
        } else if (el.state === 'fail') {
          setTotalqtr((prev) => prev + 1);
        }
      }
      if (Date.now() - new Date(el.date) < 31557600000) {
        if (el.state === 'pass') {
          setPassingyr((prev) => prev + 1);
          setTotalyr((prev) => prev + 1);
        } else if (el.state === 'fail') {
          setTotalyr((prev) => prev + 1);
        }
      }
    });
  }

  useEffect(() => {
    calcCircles();
  }, [props.interviews]);

  function Circle(props) {
    let radius = 92;
    let stroke = 15;
    let value = props.passing;
    let total = props.total;
    let type = props.type;
    let normalizedRadius = radius - stroke * 2;
    let circumference = normalizedRadius * 2 * Math.PI;

    let strokeDashoffset;
    circumference - (value / total) * circumference
      ? (strokeDashoffset = circumference - (value / total) * circumference)
      : 0;

    return (
      <div className={styles.interviewStatCard}>
        <span className={styles.interviewStatText}>{type ? 'Within Last 3 Months' : 'Within Last Year'}</span>
        <div>
          <svg
            height={radius * 2}
            width={radius * 2}
          >
            <circle
              stroke={type ? '#babcf5' : '#ffd8a7'}
              fill="none"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke={type ? '#0D0F4A' : '#EF6E47'}
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + ' ' + circumference}
              style={{
                strokeDashoffset,
                transition: 'stroke-dashoffset 0.5s',
                transformOrigin: '50% 50%'
              }}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              fill={type ? '#0D0F4A' : '#EF6E47'}
              strokeWidth="1px"
              fontSize={36}
              fontFamily={'League Spartan'}
              fontWeight={300}
              id="percentPassed"
            >
              {((value / total) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
        <span style={{ fontSize: '1.5rem' }}>
          Passing/Total: {value}/{total}
        </span>
      </div>
    );
  }

  return (
    <div className={styles.dashTop}>
      <Circle
        type={true}
        passing={passingqtr}
        total={totalqtr}
      />
      <Circle
        type={false}
        passing={passingyr}
        total={totalyr}
      />
    </div>
  );
}
