const {KeyboardEncoder} = require('./utils')
const { createServer } = require('https');
const { readFileSync } = require('fs');
const { WebSocketServer } =  require('ws');

const server = createServer({
  cert: readFileSync('./certs/example.crt'),
  key: readFileSync('./certs/example.key'),
  port: 7072
});
const wss = new WebSocketServer({ server });


require("events").EventEmitter.defaultMaxListeners = 4;

wss.on("connection", (ws) => {
  // clients.set(ws);

  ws.on("message", (t) => {
    const data = JSON.parse(t)
    console.log(`player ${data.player} has pressed ${data.input}`)
    KeyboardEncoder(data) // makes the keyboard click
  });
  
  wss.on("close", () => {
    // clients.delete(wss);
  });
});

server.listen();

console.log('wss server started on port 7072')