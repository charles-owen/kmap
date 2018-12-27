import {Minterms} from "../Logic/Minterms";

/**
 * This object manages the practice generator section.
 * @param main
 * @param element
 * @constructor
 */
export const Generator = function(main, element) {
    var that = this;

    this.main = main;

    this.minterms = new Minterms();

    let mintermsSpan;

	if(main.options.fixed) {
        // var div = '<div class="generator-fixed"><p>Minterms: ' +
        //     '<span class="minterms"></span></p></div>';
        // $(element).html(div);
    } else {
	    const div = document.createElement('div');
	    div.classList.add('kmap-cl-generator');
	    element.appendChild(div);

        // Heading
        const h3 = document.createElement('h3');
        h3.innerText = 'Minterm Generator';
        div.appendChild(h3);

        const form = document.createElement('form');
        div.appendChild(form);

        const p = document.createElement('p');
        p.innerText = 'Size: ';
        div.appendChild(p);

        const select = document.createElement('select');
        p.appendChild(select);

        let options1 = '';
        let options2 = '';
        for(let s=2; s<=4; s++) {
            if(s === +main.options.size) {
                if(main.options.gendontcare) {
                    options1 += '<option value="' + s + '">' + s + '</option>';
                    options2 += '<option value="' + s + 'd" selected>' + s + " w/don't cares</option>";
                } else {
                    options1 += '<option value="' + s + '" selected>' + s + '</option>';
                    options2 += '<option value="' + s + 'd">' + s + " w/don't cares</option>";
                }

             } else {
                options1 += '<option value="' + s + '">' + s + '</option>';
                options2 += '<option value="' + s + 'd">' + s + " <span>w/don't cares</span></option>";
            }
        }

        select.innerHTML = options1 + options2;

        p.appendChild(document.createTextNode(' '));

        const button = document.createElement('button');
        button.innerText = 'Generate';
        p.appendChild(button);

		p.appendChild(document.createTextNode(' '));

        mintermsSpan = document.createElement('span');
        // minterms.classList.add('minterms');
        p.appendChild(mintermsSpan);

        button.addEventListener('click', (event) => {
            event.preventDefault();
            this.generate();
        })

        select.addEventListener('change', (event) => {
            event.preventDefault();
            let val = select.value;
            var newSize = parseInt(val);
            main.options.gendontcare = val.match(/d$/) !== null;
            main.newSize(newSize);
        })
    }

	/**
	 * Generate a new set of minterms with optional don't cares
	 */
    this.generate = function() {
	    this.minterms.size = this.main.options.size;
	    if(this.main.options.gendontcare) {
		    var dcMax = 8;
		    switch(this.main.options.size) {
			    case 2:
				    dcMax = 2;
				    break;

			    case 3:
				    dcMax = 4;
				    break;
		    }
		    this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.main.options.size)-1,
			    0.2, 1, dcMax);

		    mintermsSpan.innerHTML = this.minterms.list(true) +
			    "<br>X=" + this.minterms.list_dontcare(true);

		    this.main.newMinterms(this.minterms);
	    } else {
		    this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.main.options.size)-1);

		    mintermsSpan.innerHTML = this.minterms.list(true);
		    this.main.newMinterms(this.minterms);
	    }
    }


	this.set = function(minterms, dontcare) {
		this.minterms.set_from(minterms, dontcare);
		if(this.minterms.dontcare.length > 0) {
			mintermsSpan.innerHTML = this.minterms.list(true) + "<br>X=" + this.minterms.list_dontcare(true);
		} else {
			mintermsSpan.innerHTML = this.minterms.list(true);
		}

		main.newMinterms(this.minterms);
	}
}

