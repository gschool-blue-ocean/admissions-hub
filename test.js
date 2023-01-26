logs = [];

function editCode(str) {
  let logChange = `let breaker = 0; ` + str.replace(/console.log/g, 'logs.push');

  let whileFix = logChange.replace(
    /while.*({)/g,
    `$& if (breaker > 10000) {
    console.log('infinite loop error');
    return;
  }
  breaker++;`
  );

  let forFix = whileFix.replace(
    /for.*({)/g,
    `$& if (breaker > 10000) {
    console.log('infinite loop error');
    return;
  }
  breaker++;`
  );

  return forFix;
}

new Function(
  editCode(`let sum = 0; for(i=2;i<6;i++) {sum+=i;
console.log(sum)}`)
)();

console.log(logs);

// function testOutput() {
//   let breaker = 0;
//   while (true) {
//     if (breaker > 10000) {
//       console.log('infinite loop error');
//       return;
//     }
//     breaker++;
//   }
// }

// testOutput();
