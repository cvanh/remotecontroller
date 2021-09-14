const WebSocket = require("ws");
const robot = require("robotjs");

const wss = new WebSocket.Server({
  port: 7072,
});

require("events").EventEmitter.defaultMaxListeners = 15;

const clients = new Map();

wss.on("connection", (ws) => {
  console.log('user has been connected')
  clients.set(ws);
  ws.on("message", (t) => {
    const data = JSON.parse(t)
    console.log(`${data.input} has been pressed`)
    robot.typeString(data.input); // type the input

  });
  ws.on("close", () => {
    clients.delete(wss);
  });
});

console.log('wss server started on port 7072')

