export default function handler(req, res) {
  let logs = [];
  try {
    logs = new Function(editCode(req.body.code))();
  } catch (err) {
    logs = [err + ''];
  }

  res.send(logs);
}

// Here is a function that alters the input code by changing all console logs and handles infinite loops.
function editCode(str) {
  // change console logs, and init breaker variable for checking loops
  let output = `let breaker = 0; logs=[];` + str.replace(/console.log/g, 'logs.push');

  //place check statement into while loops
  output = output.replace(
    /while.*({)/g,
    `$& if (breaker > 10000) {
      logs.push('infinite loop error');
    return logs;
  }
  breaker++;`
  );

  //place check statement into for loops
  output = output.replace(
    /for.*({)/g,
    `$& if (breaker > 10000) {
      logs.push('Error: 10,000 loops reached');
    return logs;
  }
  breaker++;`
  );

  return output + `\nreturn logs;`;
}
