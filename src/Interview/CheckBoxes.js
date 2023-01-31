import styles from '../../styles/Interview.module.css';

export default function CheckBoxes(props) {
  function handleChange() {}
  let extraResources = 1;
  return (
    <div style={{ marginTop: '-15px' }}>
      <span
        style={{
          fontSize: 14,
          fontFamily: 'League Spartan',
          paddingLeft: 7,
          color: '#979797'
        }}
      >
        Suggested Study Material
      </span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.referenceGrid}>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setVariables(!variables);
                }}
                type="checkbox"
              ></input>
              <span
                style={{ paddingLeft: 5 }}
                className={styles.checkmark}
              ></span>
              Variables
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setArrays(!arrays);
                }}
                type="checkbox"
              ></input>
              <span
                style={{ paddingLeft: 5 }}
                className={styles.checkmark}
              ></span>
              Arrays & Objects
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setOperators(!operators);
                }}
                type="checkbox"
              ></input>
              <span
                style={{ paddingLeft: 5 }}
                className={styles.checkmark}
              ></span>
              Operators And Methods
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setConditionals(!conditionals);
                }}
                type="checkbox"
              ></input>
              <span
                style={{ paddingLeft: 5 }}
                className={styles.checkmark}
              ></span>
              Conditionals
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                className={styles.check}
                onClick={() => {
                  setLoops(!loops);
                }}
                type="checkbox"
              ></input>
              <span
                style={{ paddingLeft: 5 }}
                className={styles.checkmark}
              ></span>
              Loops
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setAccumulator(!accumulator);
                }}
                type="checkbox"
              ></input>
              <span
                style={{ paddingLeft: 10 }}
                className={styles.checkmark}
              ></span>
              Accumulator Pattern
            </label>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          className={styles.input}
          onChange={handleChange}
          value={extraResources}
          placeholder="Insert external link"
          type="text"
          style={{
            width: 400,
            height: 32,
            fontSize: 12,
            marginTop: 5,
            borderRadius: 5,
            border: 'none'
          }}
        ></input>
      </div>
    </div>
  );
}
