// imports
const WebSocket = require("ws");
const { encoder } = require("./encoder");

// server configuration
const port = 7072;

const wss = new WebSocket.Server({
  port: port,
});

// wss listener
require("events").EventEmitter.defaultMaxListeners = 4;

wss.on("connection", (ws) => {
  console.log(ws)
  ws.on("message", (t) => {
    const data = JSON.parse(t);
    // console.log(`player ${data.player} has pressed ${data.input}`);
    encoder(data);
  });
});

console.log(`wss server started on port: ${port}`);
