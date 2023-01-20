//set up a nodeVM sandbox
const { NodeVM } = require('vm2');
const vm = new NodeVM({
  eval: true,
  require: {
    external: true,
    root: './',
  },
});

let logs = vm.run(`
let numby = 1 + 2





console.log(numby)`);

console.log(logs);

let output = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {
    connection: 'keep-alive',
    'content-length': '2',
    'content-type': 'application/json; charset=utf-8',
    date: 'Fri, 20 Jan 2023 18:33:09 GMT',
    etag: '"bwc9mymkdm2"',
    'keep-alive': 'timeout=5',
    vary: 'Accept-Encoding',
  },
  config: {
    transitional: { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: null },
    headers: { Accept: 'application/json, text/plain, */*', 'Content-Type': 'application/json' },
    method: 'post',
    url: '/api/codeEval',
    data: '{"code":""}',
  },
  request: {},
};
