const WebSocket = require("ws");
const robot = require("robotjs");
const {
  stringify
} = require("querystring");

const wss = new WebSocket.Server({
  port: 7072,
});

require("events").EventEmitter.defaultMaxListeners = 4;

function KeyboardEncoder(data) {
  switch (data.input || data.player) {
    //player 1
    case 'ButtonA' | 1:
      console.log('q')
      //robot.keyTap('q')
      break
    case 'ButtonB' | 1:
      console.log('w')
      //robot.keyTap('w')
      break
    case 'ButtonStart' | 1:
      console.log('e')
      // robot.keyTap('e')
      break
    case 'ButtonSelect' | 1:
      console.log('r')
      // robot.keyTap('r')
      break
    case 'ButtonUp' | 1:
      console.log('t')
      // robot.keyTap('t')
      break
    case 'ButtonDown' | 1:
      console.log('y')
      // robot.keyTap('y')
      break
    case 'ButtonLeft' | 1:
      console.log('u')
      // robot.keyTap('u')
      break
    case 'ButtonRight' | 1:
      console.log('i')
      //robot.keyTap('i')
      break

      // player 2
    case 'ButtonA' || 2:
      console.log('o')
      //robot.keyTap('o')
      break
    case 'ButtonB' || 2:
      console.log('p')
      //robot.keyTap('p')
      break
    case 'ButtonStart' || 2:
      console.log('a')
      //robot.keyTap('a')
      break
    case 'ButtonSelect' || 2:
      console.log('s')
      //robot.keyTap('s')
      break
    case 'ButtonUp' || 2:
      console.log('d')
      //robot.keyTap('d')
      break
    case 'ButtonDown' || 2:
      console.log('f')
      //robot.keyTap('f')
      break
    case 'ButtonLeft' || 2:
      console.log('g')
      //robot.keyTap('g')
      break
    case 'ButtonRight' || 2:
      console.log('h')
      //robot.keyTap('h')
      break

      //player 3
    case 'ButtonA' || 3:
      console.log('j')
      //robot.keyTap('j')
      break
    case 'ButtonB' || 3:
      console.log('k')
      //robot.keyTap('k')
      break
    case 'ButtonStart' || 3:
      console.log('l')
      //robot.keyTap('l')
      break
    case 'ButtonSelect' || 3:
      console.log('z')
      //robot.keyTap('z')
      break
    case 'ButtonUp' || 3:
      console.log('x')
      //robot.keyTap('x')
      break
    case 'ButtonDown' || 3:
      console.log('c')
      //robot.keyTap('c')
      break
    case 'ButtonLeft' || 3:
      console.log('v')
      //robot.keyTap('v')
      break
    case 'ButtonRight' || 3:
      console.log('b')
      //robot.keyTap('b')
      break

      //player 4
    case 'ButtonA' || 4:
      console.log('n')
      //robot.keyTap('n')
      break
    case 'ButtonB' || 4:
      console.log('m')
      //robot.keyTap('m')
      break
    case 'ButtonStart' || 4:
      console.log('1')
      //robot.keyTap('1')
      break
    case 'ButtonSelect' || 4:
      console.log('2')
      //robot.keyTap('2')
      break
    case 'ButtonUp' || 4:
      console.log('3')
      //robot.keyTap('3')
      break
    case 'ButtonDown' || 4:
      console.log('4')
      //robot.keyTap('4')
      break
    case 'ButtonLeft' || 4:
      console.log('5')
      //robot.keyTap('5')
      break
    case 'ButtonRight' || 4:
      console.log('6')
      //robot.keyTap('6')
      break
    default:
      console.log('no valid input detected')
  }

}


const clients = new Map();

wss.on("connection", (ws) => {
  console.log('user has been connected')
  // TODO add player number check
  ws.on("message", (t) => {
    const data = JSON.parse(t)
    console.log(`${data.input} has been pressed`)
    KeyboardEncoder(data)
  });
  ws.on("close", () => {
    clients.delete(wss);
  });
});

console.log('wss server started on port 7072')