const WebSocket = require("ws");
const {KeyboardEncoder} = require('./utils')

const wss = new WebSocket.Server({
  port: 7072,
});

require("events").EventEmitter.defaultMaxListeners = 4;

wss.on("connection", (ws) => {
  ws.on("message", (t) => {
    const data = JSON.parse(t)
    console.log(`player ${data.player} has pressed ${data.input}`)
    KeyboardEncoder(data)
  });
});

console.log('wss server started on port 7072')