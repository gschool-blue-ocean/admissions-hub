import { useState, useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css';


function ExportModal({ setShowExportModal, students }) {
    const [csv, setCsv] = useState(false)
    useEffect(()=> genCSV(), [])
    function genCSV() {
        let file = "";
        ////"Borrowed Code"/////
        // Loop the array of objects
        let keysAmount = Object.keys(students[0]).length;
        let keysCounter = 0;
        // If this is the first row, generate the headings
       
          // Loop each property of the object
          for (let key in students[0]) {
            // This is to not add a comma at the last cell
            // The '\r\n' adds a new line
            file += key + (keysCounter + 1 < keysAmount ? ',' : '\r\n');
            keysCounter++;
          }
          keysCounter = 0;
        for (let row = 0; row < students.length; row++) {
            for (let key in students[row]) {
              file += students[row][key] + (keysCounter + 1 < keysAmount ? ',' : '\r\n');
              keysCounter++;
            }
          keysCounter = 0;
        }setCsv(file)}
    
  return (
    <>
        <div className={styles.newStudentShadow}>
          <div className={styles.newStudentCard}>
            <div style={{ fontSize: '1.5rem' }}>Export CSV</div>
            <div className={styles.spacedButtons}>
              <div
                className={styles.launchButton}
                onClick={() => {
                  genCSV()
                  console.log('Email CSV');
                  
                }}
                
              >
                Email CSV
              </div>
              <a href={"data:text/plain;charset=utf-8," + encodeURIComponent(csv)} download="studentinfo.csv" className={styles.export}>
              <div
                className={styles.launchButton}
                onClick={() => {
                  // Place your download CSV logic here
                  console.log('Download CSV');
                }}
              >
                Download CSV
              </div>
              </a>
            </div>
            <div
              className={styles.launchButton}
              onClick={() => setShowExportModal(false)}
              style={{ marginTop: '1rem' }}
            >
              Close Form
            </div>
          </div>
        </div>
    </>
  );
}

export default ExportModal;


