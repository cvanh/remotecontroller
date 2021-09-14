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

ws = new WebSocket('ws://localhost:7072');

// the right 2 buttons
const ButtonA = document.getElementById('ButtonA')
const ButtonB = document.getElementById('ButtonB')

// the middle buttons
const ButtonStart = document.getElementById('ButtonStart');
const ButtonSelect = document.getElementById('ButtonSelect');

// dpad 
const ButtonUp = document.getElementById('ButtonUp');
const ButtonDown = document.getElementById('ButtonDown');
const ButtonLeft = document.getElementById('ButtonLeft');
const ButtonRight = document.getElementById('ButtonRight');
const Button = document.querySelectorAll(".Button");
const player = 3

for (let i = 0; i < Button.length; i++) {
    Button[i].addEventListener("mousedown", (e) => {
        console.log(Button[i].id)

        const WsData = {
            "player": player,
            "input": Button[i].id
        }
        console.log(WsData)
        ws.send(JSON.stringify(WsData))
    });
};