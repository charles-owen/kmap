import {Map} from './Map';
import {Groups} from './Groups';

/**
 * The work area is the Karnaugh map and the groupings controls.
 * @param main
 * @param element
 * @constructor
 */
export const Work = function(main, element) {

	this.map = null;
	this.groups = null;

	let div, left, right;

	this.initialize = function() {
		if(main.options.mapHeading) {
			let h3 = document.createElement('h3');
			element.appendChild(h3);

			let checkBox = document.createElement('input');
			checkBox.setAttribute('type', 'checkbox');
			checkBox.setAttribute('checked', 'true');
			h3.appendChild(checkBox);

			h3.appendChild(document.createTextNode(' Karnaugh Map'));

			checkBox.addEventListener('change', (event) => {
				event.preventDefault();

				if(checkBox.checked) {
					div.style.display = 'table';
				} else {
					div.style.display = 'none';
				}
			})
		}

		// Create the main div that contains the work area
		div = document.createElement('div');
		div.classList.add('kmap-cl-work');
		element.appendChild(div);
		this.div = div;

		this.render();
	}



	this.render = function() {
		div.innerHTML = '';

		left = document.createElement('div');
		div.appendChild(left);

		right = document.createElement('div');
		div.appendChild(right);

		//
		// Add the Kmap
		//
		if(this.map !== null) {
			this.map.destroy();
		}

		this.map = new Map(main, right);

		//
		// Add the groups
		//
		this.groups = new Groups(main, left);
	}

	this.initialize();

}