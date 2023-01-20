//set up a nodeVM sandbox
const { NodeVM } = require('vm2');
const vm = new NodeVM({
  eval: true,
  require: {
    external: true,
    root: './',
  },
});

export default function handler(req, res) {
  //set store for console.log
  let logs = [];
  // console.log(req.body.code);
  //overwrite console.log behavior to output to custom stdout
  console.log = function (d) {
    logs.push(JSON.stringify(d));
  };
  //run code supplied by req
  try {
    vm.run(req.body.code);
  } catch (err) {
    console.log('error');
  }

  res.send(logs);
}
