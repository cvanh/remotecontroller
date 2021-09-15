const robot = require("robotjs");


/**
 * makes the keypresses 
 * @param {object} data ws connection 
 */
// TODO please change this gore
// function KeyboardEncoder(data) {
//   // player 1
//   if (data.player == 1)
//     switch (data.input) {
//       // on input x from player x press button
//       case 'ButtonA':
//         console.log('q')
//         robot.keyTap('q')
//         break
//       case 'ButtonB':
//         console.log('w')
//         robot.keyTap('w')
//         break
//       case 'ButtonStart':
//         console.log('e')
//         robot.keyTap('e')
//         break
//       case 'ButtonSelect':
//         console.log('r')
//         robot.keyTap('r')
//         break
//       case 'ButtonUp':
//         console.log('t')
//         robot.keyTap('t')
//         break
//       case 'ButtonDown':
//         console.log('y')
//         robot.keyTap('y')
//         break
//       case 'ButtonLeft':
//         console.log('u')
//         robot.keyTap('u')
//         break
//       case 'ButtonRight':
//         console.log('i')
//         robot.keyTap('i')
//         break
//       default:
//         console.log('no valid input detected')
//     }

//       // player 2
//     if(data.player == 2)
//     switch (data.input) {
//       //player 1
//       case 'ButtonA':
//         console.log('o')
//         robot.keyTap('q')
//         break
//       case 'ButtonB':
//         console.log('p')
//         robot.keyTap('p')
//         break
//       case 'ButtonStart':
//         console.log('a')
//         robot.keyTap('a')
//         break
//       case 'ButtonSelect':
//         console.log('s')
//         robot.keyTap('s')
//         break
//       case 'ButtonUp':
//         console.log('d')
//         robot.keyTap('d')
//         break
//       case 'ButtonDown':
//         console.log('d')
//         robot.keyTap('d')
//         break
//       case 'ButtonLeft':
//         console.log('f')
//         robot.keyTap('f')
//         break
//       case 'ButtonRight':
//         console.log('g')
//         robot.keyTap('g')
//         break
//         default:
//         console.log('no valid input detected')
//     }

//     //player 3
//     if(data.player == 3)
//     switch (data.input) {
//       //player 1
//       case 'ButtonA':
//         console.log('h')
//         robot.keyTap('h')
//         break
//       case 'ButtonB':
//         console.log('j')
//         robot.keyTap('j')
//         break
//       case 'ButtonStart':
//         console.log('k')
//         robot.keyTap('k')
//         break
//       case 'ButtonSelect':
//         console.log('l')
//         robot.keyTap('l')
//         break
//       case 'ButtonUp':
//         console.log('z')
//         robot.keyTap('z')
//         break
//       case 'ButtonDown':
//         console.log('x')
//         robot.keyTap('x')
//         break
//       case 'ButtonLeft':
//         console.log('c')
//         robot.keyTap('c')
//         break
//       case 'ButtonRight':
//         console.log('v')
//         robot.keyTap('v')
//         break
//         default:
//         console.log('no valid input detected')
//     }

//     // player 4
//     if(data.player == 4)
//     switch (data.input) {
//       //player 1
//       case 'ButtonA':
//         console.log('b')
//         robot.keyTap('b')
//         break
//       case 'ButtonB':
//         console.log('n')
//         robot.keyTap('n')
//         break
//       case 'ButtonStart':
//         console.log('m')
//         robot.keyTap('m')
//         break
//       case 'ButtonSelect':
//         console.log('r')
//         robot.keyTap('1')
//         break
//       case 'ButtonUp':
//         console.log('t')
//         robot.keyTap('2')
//         break
//       case 'ButtonDown':
//         console.log('y')
//         robot.keyTap('3')
//         break
//       case 'ButtonLeft':
//         console.log('u')
//         robot.keyTap('4')
//         break
//       case 'ButtonRight':
//         console.log('i')
//         robot.keyTap('5')
//         break
//         default:
//         console.log('no valid input detected')
//     }

// }

const keyboardbindings = {
  1:{
    ButtonA: 'q',
    ButtonB: 'w',
    ButtonStart: 'e',
    ButtonSelect: 'r',
    ButtonUp: 'y',
    ButtonDown: 't',
    ButtonLeft: 'u',
    ButtonRight: 'i'
  },
  2:{
    ButtonA: 'o',
    ButtonB: 'p',
    ButtonStart: 'a',
    ButtonSelect: 's',
    ButtonUp: 'd',
    ButtonDown: 'f',
    ButtonLeft: 'g',
    ButtonRight: 'h'
  },
  3:{
    ButtonA: 'j',
    ButtonB: 'k',
    ButtonStart: 'l',
    ButtonSelect: 'z',
    ButtonUp: 'x',
    ButtonDown: 'c',
    ButtonLeft: 'v',
    ButtonRight: 'b'
  },
  4:{
    ButtonA: 'n',
    ButtonB: 'm',
    ButtonStart: '1',
    ButtonSelect: '2',
    ButtonUp: '3',
    ButtonDown: '4',
    ButtonLeft: '5',
    ButtonRight: '6'
  }
}

function KeyboardEncoder(data){
  const t = (keyboardbindings[data.player].) + data.input 
  console.log()
}



exports.KeyboardEncoder = KeyboardEncoder