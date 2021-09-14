const robot = require("robotjs");


// TODO please change this gore
function KeyboardEncoder(data) {
  if (data.player == 1)
    switch (data.input) {
      //player 1
      case 'ButtonA':
        console.log('q')
        //robot.keyTap('q')
        break
      case 'ButtonB':
        console.log('w')
        //robot.keyTap('w')
        break
      case 'ButtonStart':
        console.log('e')
        // robot.keyTap('e')
        break
      case 'ButtonSelect':
        console.log('r')
        // robot.keyTap('r')
        break
      case 'ButtonUp':
        console.log('t')
        // robot.keyTap('t')
        break
      case 'ButtonDown':
        console.log('y')
        // robot.keyTap('y')
        break
      case 'ButtonLeft':
        console.log('u')
        // robot.keyTap('u')
        break
      case 'ButtonRight':
        console.log('i')
        //robot.keyTap('i')
        break
      default:
        console.log('no valid input detected')
    }

    if(data.player == 2)
    switch (data.input) {
      //player 1
      case 'ButtonA':
        console.log('o')
        //robot.keyTap('q')
        break
      case 'ButtonB':
        console.log('p')
        //robot.keyTap('p')
        break
      case 'ButtonStart':
        console.log('a')
        // robot.keyTap('a')
        break
      case 'ButtonSelect':
        console.log('s')
        // robot.keyTap('s')
        break
      case 'ButtonUp':
        console.log('d')
        // robot.keyTap('d')
        break
      case 'ButtonDown':
        console.log('d')
        // robot.keyTap('d')
        break
      case 'ButtonLeft':
        console.log('f')
        // robot.keyTap('f')
        break
      case 'ButtonRight':
        console.log('g')
        //robot.keyTap('g')
        break
        default:
        console.log('no valid input detected')
    }


    if(data.player == 3)
    switch (data.input) {
      //player 1
      case 'ButtonA':
        console.log('h')
        //robot.keyTap('h')
        break
      case 'ButtonB':
        console.log('j')
        //robot.keyTap('j')
        break
      case 'ButtonStart':
        console.log('k')
        // robot.keyTap('k')
        break
      case 'ButtonSelect':
        console.log('l')
        // robot.keyTap('l')
        break
      case 'ButtonUp':
        console.log('z')
        // robot.keyTap('z')
        break
      case 'ButtonDown':
        console.log('x')
        // robot.keyTap('x')
        break
      case 'ButtonLeft':
        console.log('c')
        // robot.keyTap('c')
        break
      case 'ButtonRight':
        console.log('v')
        //robot.keyTap('v')
        break
        default:
        console.log('no valid input detected')
    }


    if(data.player == 4)
    switch (data.input) {
      //player 1
      case 'ButtonA':
        console.log('b')
        //robot.keyTap('b')
        break
      case 'ButtonB':
        console.log('n')
        //robot.keyTap('n')
        break
      case 'ButtonStart':
        console.log('m')
        // robot.keyTap('m')
        break
      case 'ButtonSelect':
        console.log('r')
        // robot.keyTap('1')
        break
      case 'ButtonUp':
        console.log('t')
        // robot.keyTap('2')
        break
      case 'ButtonDown':
        console.log('y')
        // robot.keyTap('3')
        break
      case 'ButtonLeft':
        console.log('u')
        // robot.keyTap('4')
        break
      case 'ButtonRight':
        console.log('i')
        //robot.keyTap('5')
        break
        default:
        console.log('no valid input detected')
    }

}

exports.KeyboardEncoder = KeyboardEncoder