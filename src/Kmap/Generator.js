import {Minterms} from "../Logic/Minterms";

/**
 * This object manages the practice generator section.
 * @param main
 * @param element
 * @constructor
 */
export const Generator = function(main, element) {

	let mintermsSpan;

	const options = main.options;

	const initialize = () => {
		const div = document.createElement('div');
		div.classList.add('kmap-cl-generator');
		element.appendChild(div);

		// Heading
		const h3 = document.createElement('h3');
		h3.innerText = options.fixed ? 'Minterms' : 'Minterm Generator';
		div.appendChild(h3);

		const form = document.createElement('form');
		div.appendChild(form);

		const p = document.createElement('p');
		p.innerText = 'Size: ';
		div.appendChild(p);

		if(options.fixed) {
			p.appendChild(document.createTextNode('' + options.size + ' Minterms: '));

		} else {
			//
			// The size select control
			//
			const select = document.createElement('select');
			p.appendChild(select);

			let options1 = '';
			let options2 = '';
			for(let s=2; s<=4; s++) {
				if(s === +main.options.size) {
					if(main.options.genDontCare) {
						options1 += '<option value="' + s + '">' + s + '</option>';
						if(main.options.genDontCareOption) {
							options2 += '<option value="' + s + 'd" selected>' + s + " w/don't cares</option>";
						}
					} else {
						options1 += '<option value="' + s + '" selected>' + s + '</option>';
						if(main.options.genDontCareOption) {
							options2 += '<option value="' + s + 'd">' + s + " w/don't cares</option>";
						}
					}

				} else {
					options1 += '<option value="' + s + '">' + s + '</option>';
					if(main.options.genDontCareOption) {
						options2 += '<option value="' + s + 'd">' + s + " <span>w/don't cares</span></option>";
					}
				}
			}

			select.innerHTML = options1 + options2;

			select.addEventListener('change', (event) => {
				event.preventDefault();
				let val = select.value;
				var newSize = parseInt(val);
				main.options.genDontCare = val.match(/d$/) !== null;
				main.newSize(newSize);
			})

			//
			// The Generate button
			//
			p.appendChild(document.createTextNode(' '));

			const button = document.createElement('button');
			button.innerText = 'Generate';
			p.appendChild(button);

			p.appendChild(document.createTextNode(' '));

			button.addEventListener('click', (event) => {
				event.preventDefault();
				main.generate();
			})
		}

		mintermsSpan = document.createElement('span');
		p.appendChild(mintermsSpan);

		this.refresh();
	}

	this.refresh = function() {
    	if(main.minterms.dontcare.length > 0) {
		    mintermsSpan.innerHTML = main.minterms.list(true) +
		     	"<br>X=" + main.minterms.list_dontcare(true);
	    } else {
		    mintermsSpan.innerHTML = main.minterms.list(true);
	    }
	}

	initialize();

	// /**
	//  * Generate a new set of minterms with optional don't cares
	//  */
    // this.generate = function() {
	//     this.minterms.size = main.options.size;
	//     if(main.options.genDontCare) {
	// 	    var dcMax = 8;
	// 	    switch(main.options.size) {
	// 		    case 2:
	// 			    dcMax = 2;
	// 			    break;
	//
	// 		    case 3:
	// 			    dcMax = 4;
	// 			    break;
	// 	    }
	// 	    this.minterms.generate_bounded(0.5, 1, Math.pow(2, main.options.size)-1,
	// 		    0.2, 1, dcMax);
	//
	// 	    mintermsSpan.innerHTML = this.minterms.list(true) +
	// 		    "<br>X=" + this.minterms.list_dontcare(true);
	//
	// 	    main.newMinterms(this.minterms);
	//     } else {
	// 	    this.minterms.generate_bounded(0.5, 1, Math.pow(2, main.options.size)-1);
	//
	// 	    mintermsSpan.innerHTML = this.minterms.list(true);
	// 	    main.newMinterms(this.minterms);
	//     }
    // }


}

