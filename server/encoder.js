const robot = require("robotjs");

const posInputs = {
  ButtonA: "l",
  ButtonB: "k",
  ButtonStart: "enter",
  ButtonSelect: "space",
  ButtonUp: "w",
  ButtonDown: "s",
  ButtonLeft: "a",
  ButtonRight: "d",
};

function encoder(data) {
  if (data && data.player) {
    console.log(`${data.player} pressed ${data.input}`);
  }
}

exports.encoder = encoder;
