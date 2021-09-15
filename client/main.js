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
ws = new WebSocket('ws://192.168.2.33:7072');

// declares all the button seems to break when not present
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

const ButtonPlayerSelector = document.getElementById('slider')

// add a event listner to all the elements with the class button and on click on such element make it send data
for (let i = 0; i < Button.length; i++) {
    Button[i].addEventListener("mousedown", (e) => {
        console.log(parseInt(ButtonPlayerSelector.value) + 1)
        const WsData = {
            "player": parseInt(ButtonPlayerSelector.value) + 1,
            "input": Button[i].id
        }
        // console.log(JSON.stringify(WsData))
        ws.send(JSON.stringify(WsData))
    });
};