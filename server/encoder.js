const robot = require('robotjs');

const posInputs = {
	'ButtonA': 'l',
    'ButtonB': 'k',
    'ButtonStart': 'enter',
    'ButtonSelect': 'space',
    'ButtonUp': 'w',
    'ButtonDown': 's',
    'ButtonLeft': 'a',
    'ButtonRight': 'd'
}

function encoder(data) {

	if (data.player == 1) {
		for (input in posInputs) {
			if (data.input == input) {
				console.log(`the player pressed ${posInputs[input]} which corresponds to ${input}`);
				robot.keyTap(posInputs[input]);
				break;
			}
		}
	}
}

exports.encoder = encoder