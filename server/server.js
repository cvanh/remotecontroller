const {KeyboardEncoder} = require('./utils')
const { createServer } = require('https');
const { readFileSync } = require('fs');
const { WebSocketServer } =  require('ws');

const server = createServer({
  cert: readFileSync('./certs/example.crt'),
  key: readFileSync('./certs/example.key')
});
const wss = new WebSocketServer({ server });


require("events").EventEmitter.defaultMaxListeners = 4;

wss.on("connection", (ws) => {
  ws.on("message", (t) => {
    const data = JSON.parse(t)
    console.log(`player ${data.player} has pressed ${data.input}`)
    KeyboardEncoder(data) // makes the keyboard click
  });
});

server.listen(7072);

console.log('wss server started on port 7072')