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
    Object.entries(posInputs).forEach((input) => {
      if (input.includes(data.input)) {
        robot.keyTap(input[1]);
      }
    });
  }
}

exports.encoder = encoder;
