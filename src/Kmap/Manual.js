/**
 * Manual entry of minterms and don't cares support
 * @param main Main object
 * @param element Element we are adding this component to
 * @constructor
 */
export const Manual = function(main, element) {
    var that = this;

    const labels = main.options.labels;

    let manualMinterms, manualDontCares, manualVariables;

    const initialize = () => {
        const div = document.createElement('div');
        div.classList.add('kmap-cl-manual');
        element.appendChild(div);

        const h3 = document.createElement('h3');
        h3.innerHTML = 'Manual Entry';
        div.appendChild(h3);

	    // var form = '<form><div class="left">' +
		//     '<p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>' +
		//     '<p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>' +
		//     '<p><button>Take</button></p>' +
		//     '</div><div class="right">' +
		//     '<p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
		//     labels + '" spellcheck="false"></p>' +
		//     '</div></form>';

        const form = document.createElement('form');
        div.appendChild(form);

        //
        // Left div
        //

        const left = document.createElement('div');
        form.appendChild(left);

	    // <p><label for="manual-minterms">Minterms: </label><br><input type="text" id="manual-minterms" spellcheck="false"></p>
        let p = document.createElement('p');
        left.appendChild(p);

        let label = document.createElement('label');
        p.appendChild(label);

        label.innerText = 'Minterms: ';
        label.appendChild(document.createElement('br'));

        manualMinterms = document.createElement('input');
        manualMinterms.setAttribute('type', 'text');
        manualMinterms.setAttribute('spellcheck', 'false');
        label.appendChild(manualMinterms);

        // <p><label for="manual-dontcares">Don\'t cares: </label><br><input type="text" id="manual-dontcares" spellcheck="false"></p>
	    p = document.createElement('p');
	    left.appendChild(p);

	    label = document.createElement('label');
	    p.appendChild(label);

	    label.innerText = 'Don\'t cares: ';
	    label.appendChild(document.createElement('br'));

	    manualDontCares = document.createElement('input');
	    manualDontCares.setAttribute('type', 'text');
	    manualDontCares.setAttribute('spellcheck', 'false');
	    label.appendChild(manualDontCares);

	    // <p><button>Take</button></p>
	    p = document.createElement('p');
	    left.appendChild(p);

        const take = document.createElement('button');
        p.appendChild(take);
        take.innerText = 'Take';

        //
        // Right div
        //

        const right = document.createElement('div');
        form.appendChild(right);

        // <p><label for="manual-variables">Labels: </label><br><input type="text" id="manual-variables" value="' +
	    // labels + '" spellcheck="false"></p>
	    p = document.createElement('p');
	    right.appendChild(p);

	    label = document.createElement('label');
	    p.appendChild(label);

	    label.innerText = 'Labels: ';
	    label.appendChild(document.createElement('br'));

	    manualVariables = document.createElement('input');
	    manualVariables.setAttribute('type', 'text');
	    manualVariables.setAttribute('spellcheck', 'false');
	    label.appendChild(manualVariables);
	    manualVariables.value = labels;

	    take.addEventListener('click', (event) => {
		    event.preventDefault();
		    const mintermslist = parse(manualMinterms.value);
		    const dontcarelist = parse(manualDontCares.value);

		    // Get the labels, stripping any HTML tags just in case
		    const labels = manualVariables.value.replace(/(<([^>]+)>)/ig,"");

		    main.options.labels = labels.split(",");
		    main.set(mintermslist, dontcarelist);
        });
    }

	function parse(input) {
		var reM = /m/g;
		var re = /[, ]+/g;
		var items = input.replace(reM, '').split(re);
		var ret = [];
		items.forEach(function(item) {
			if(item !==  "") {
				ret.push(parseInt(item));
			}
		});

		return ret;
	}

    initialize();
}
