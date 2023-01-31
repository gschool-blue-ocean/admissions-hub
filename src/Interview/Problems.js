import { useState } from 'react';
import styles from '../../styles/Interview.module.css';
import Image from 'next/image';

export default function Problems({
  problem1Notes,
  problem2Notes,
  problem3Notes,
  setProblem1Notes,
  setProblem2Notes,
  setProblem3Notes
}) {
  const [pNum, setPNum] = useState(0);

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
    <div className={styles.problems}>
      <div className={styles.problemTabsRow}>
        <div
          className={styles.problemTab}
          style={pNum !== 0 ? { width: '40%', fontSize: '1rem', borderBottom: '1px solid #ef6e47' } : null}
          onClick={() => setPNum(0)}
        >
          Problem 1
        </div>
        <div
          className={styles.problemTab}
          style={pNum !== 1 ? { width: '40%', fontSize: '1rem', borderBottom: '1px solid #ef6e47' } : null}
          onClick={() => setPNum(1)}
        >
          Problem 2
        </div>
        <div
          className={styles.problemTab}
          style={pNum !== 2 ? { width: '40%', fontSize: '1rem', borderBottom: '1px solid #ef6e47' } : null}
          onClick={() => setPNum(2)}
        >
          Problem 3
        </div>
      </div>
      {pNum == 0 ? (
        <div className={styles.problemCard}>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Question 1:</span> Working with Strings and Functions Complete the
            logger function that takes in a function and a string and returns the result of calling the function on each
            letter in the string.
          </div>
          <pre className={styles.codeExample}>{problem1}</pre>
          <div
            style={{
              fontFamily: 'League Spartan',
              marginTop: '-15px',
              paddingLeft: 2,
              color: '#979797',
              fontSize: '14px'
            }}
          >
            Notes:
          </div>

          <textarea
            rows={20}
            value={problem1Notes}
            onChange={(e) => setProblem1Notes(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#ffe8d3',
              outline: 'none',
              border: 'none',
              height: 175,
              resize: 'none',
              scrollbarColor: '#ffe8d3 #EF6E47'
            }}
          ></textarea>
        </div>
      ) : null}
      {pNum == 1 ? (
        <div className={styles.problemCard}>
          <div style={{ padding: '0px 5px 2px', color: 'black' }}>
            <span style={{ fontFamily: 'League Spartan', color: '#979797' }}>Question 2:</span> Working with Arrays and
            Functions Complete the createNewArray function that takes in an array and another function, then returns a
            new array containing the results of calling the input function on each element in the array.
          </div>
          <pre
            style={{
              display: 'block',
              fontFamily: 'monospace',
              whiteSpace: 'pre'
            }}
          >
            <code
              style={{
                color: '#EF6E47',
                backgroundColor: '#FFFAF5',
                display: 'block',
                paddingLeft: '5px'
              }}
            >
              {problem2}
              <br></br>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'flex-end',
                  alignItems: 'flex-end'
                }}
              >
                <div style={{ paddingRight: 5, marginTop: '-15px' }}>
                  <Image
                    onClick={() => {
                      navigator.clipboard.writeText(problem2);
                      setCopied(!copied);
                    }}
                    src={'/images/copy.svg'}
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
          <div
            style={{
              fontFamily: 'League Spartan',
              marginTop: '-15px',
              paddingLeft: 2,
              color: '#979797'
            }}
          >
            Notes:
          </div>

          <textarea
            rows={20}
            value={problem2Notes}
            onChange={(e) => setProblem2Notes(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#ffe8d3',
              outline: 'none',
              border: 'none',
              height: 175,
              resize: 'none',
              scrollbarColor: '#ffe8d3 #EF6E47'
            }}
          ></textarea>
        </div>
      ) : null}
      {pNum == 2 ? (
        <div className={styles.problemCard}>
          <div style={{ padding: '0px 5px 2px', color: 'black' }}>
            <span style={{ fontFamily: 'League Spartan', color: '#979797' }}>Question 3:</span> Working with Objects
            Given two objects as parameters "obj1" and "obj2", complete the addPropertiesToObject function that adds all
            properties of the first object to the second object and returns the second object.
          </div>
          <pre
            style={{
              display: 'block',
              fontFamily: 'monospace',
              whiteSpace: 'pre'
            }}
          >
            <code
              style={{
                color: '#EF6E47',
                backgroundColor: '#FFFAF5',
                display: 'block',
                paddingLeft: '5px'
              }}
            >
              {problem3}
              <br></br>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'flex-end',
                  alignItems: 'flex-end'
                }}
              >
                <div style={{ paddingRight: 5, marginTop: '-15px' }}>
                  <Image
                    onClick={() => {
                      navigator.clipboard.writeText(problem3);
                      setCopied(!copied);
                    }}
                    src={'/images/copy.svg'}
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
          <div
            style={{
              fontFamily: 'League Spartan',
              marginTop: '-15px',
              paddingLeft: 2,
              color: '#979797'
            }}
          >
            Notes:
          </div>
          <textarea
            rows={20}
            value={problem3Notes}
            onChange={(e) => setProblem3Notes(e.target.value)}
            style={{
              width: '100%',
              backgroundColor: '#ffe8d3',
              outline: 'none',
              border: 'none',
              height: 175,
              resize: 'none',
              scrollbarColor: '#ffe8d3 #EF6E47'
            }}
          ></textarea>
        </div>
      ) : null}
    </div>
  );
}
