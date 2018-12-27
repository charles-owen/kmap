import {Options} from './Options';
import {Ready} from './Utility/Ready';
import {Main} from './Main';

/**
 * Create an instance of Kmap Karnaugh Map.
 * @constructor
 */
export const Kmap = function(sel, options) {
	//
	// Master set of the version
	//
	let PACKAGE = require('../../package.json');
	this.version = PACKAGE.version;

	// The Options object that manages user options
	this.options = new Options(options);

	// A collection of Main objects.
	const mains = [];

	this.start = () => {
		Ready.go(() => {
			this.startNow();
		});
	}

	/**
	 * Start Kmap running now. Does not wait for document ready.
	 */
	this.startNow = () => {
		if(sel instanceof Element) {
			const main = new Main(this, sel);
			mains.push(main);
		} else {
			const elements = document.querySelectorAll(sel);
			for(let i=0; i<elements.length; i++) {
				const element = elements[i];
				const main = new Main(this, element);
				mains.push(main);
			}
		}

		if(mains.length === 1) {
			return mains[0];
		}

		return null;
	}
}
