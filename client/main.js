/*
this script listens to the following actions
b
a
start 
select
dpad up
dpad down 
dpad left
dpad right

*/

// change the ip to ther current network ip
ws = new WebSocket("ws://192.168.68.114:7072");

// declares all the button seems to break when not present
// the right 2 buttons
const ButtonA = document.getElementById("ButtonA");
const ButtonB = document.getElementById("ButtonB");

// the middle buttons
const ButtonStart = document.getElementById("ButtonStart");
const ButtonSelect = document.getElementById("ButtonSelect");

// dpad
const ButtonUp = document.getElementById("ButtonUp");
const ButtonDown = document.getElementById("ButtonDown");
const ButtonLeft = document.getElementById("ButtonLeft");
const ButtonRight = document.getElementById("ButtonRight");
const Button = document.querySelectorAll(".Button");
const ButtonPlayerSelector = document.getElementById("slider");

//variables
const player = parseInt(ButtonPlayerSelector.value + 1);

Button.forEach((button_data) => {
  button_data.addEventListener("click", (e) => {
    const wsData = {
      player: player,
      input: button_data.id,
    };
    ws.send(JSON.stringify(wsData));
  });
});
