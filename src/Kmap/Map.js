import {MessageDialog} from './MessageDialog';

/**
 * The actual Karnaugh Map
 * @param main
 * @param element
 * @constructor
 */
export const Map = function(main, element) {
    this.main = main;
    this.element = element;
    this.selected = [];

    let topLeft, botRight, canvas;

    const initialize = () => {
        let table = document.createElement('table');
        table.classList.add('kmap-cl');
        element.appendChild(table);

        // Make a local copy of the labels, converting
	    // _1 to <sub>1</sub>
	    const labels = [];
	    for(const label of main.options.labels) {
			labels.push(label.replace(/_([a-zA-Z0-9])*/g, '<sub>$1</sub>'));
	    }

        var left, right, rest, colheads;
        if(+main.options.size === 2) {
            let A = labels[0];
	        let B = labels[1];
            left=B;
            right=A;
            rest = "<th>" + A + "'</th><th>" + A + "</th>";
            colheads = [B + "'", B];
        } else if(+main.options.size === 3) {
	        let A = labels[0];
	        let B = labels[1];
	        let C = labels[2];
            left=C;
            right=A + B;
            rest = "<th>" + A + "'" + B + "'</th><th>" + A + "'" + B +
                "</th><th>" + A + B + "</th><th>" + A  + B + "'</th>";
            colheads = [C + "'", C];
        } else {
	        let A = labels[0];
	        let B = labels[1];
	        let C = labels[2];
	        let D = labels[3];
            left=C + D;
            right=A + B;
            rest = "<th>" + A + "'" + B + "'</th><th>" + A + "'" + B + "</th><th>" +
                A + B + "</th><th>" + A + B + "'</th>";
            colheads = [C + "'" + D + "'", C + "'" + D, C + D, C + D + "'"];
        }

        /*
         * Top row first
         */
        let tr = document.createElement('tr');
        tr.innerHTML = '<th><div class="kmap-cl-left">' + left +
            '</div><div class="kmap-cl-line"></div><div class="kmap-cl-right">' + right + '</div></th>' +
            rest;
        table.appendChild(tr);

        /*
         * Rest of the table
         */
        let rows = +main.options.size === 4 ? 4 : 2;
        let cols = +main.options.size === 2 ? 2 : 4;


        for(let r=1; r<=rows; r++) {
        	tr = document.createElement('tr');
        	tr.innerHTML = '<th>' + colheads[r-1] + '</th>';

            for(let c=1; c<=cols; c++) {
                const td = make_cell(c, r);
                tr.appendChild(td);

                if(r === 1 && c === 1) {
                    topLeft = td;
                } else if(r === rows && c === cols) {
                    botRight = td;
                }
            }

            table.appendChild(tr);
        }

        canvas = document.createElement('canvas');
        canvas.setAttribute('width', '1000');
        canvas.setAttribute('height', '1000');
        this.canvas = canvas;

        element.appendChild(canvas);

        setTimeout(() => {
	        set_canvas();
        }, 0);


	    window.addEventListener('resize', set_canvas);
    }

    this.get_canvas = function() {
    	console.log(this);
        return this.canvas;
    }

    this.destroy = function() {
    	window.removeEventListener('resize', set_canvas);
    }

    function set_canvas() {
	    const tl = {left: topLeft.offsetLeft, top: topLeft.offsetTop};
	    const br = {left: botRight.offsetLeft, top: botRight.offsetTop};
	    canvas.style.top = tl.top + 'px';
	    canvas.style.left = tl.left + 'px';
	    canvas.style.width = (br.left - tl.left + botRight.offsetWidth) + 'px';
	    canvas.style.height = (br.top - tl.top + botRight.offsetHeight) + 'px';
    }

    const make_cell = (c, r) => {
    	let td = document.createElement('td');

        let minterm = to_minterm(c, r);
        let bit = '0';
        for(var i=0; i<main.options.minterms.length; i++) {
            if(minterm === +main.options.minterms[i]) {
                bit = '1';
                break;
            }
        }

        for(i=0; i<main.options.dontcare.length; i++) {
            if(minterm === +main.options.dontcare[i]) {
                bit = 'X';
                break;
            }
        }

        if(main.options.labelMinterms) {
            td.innerHTML = '<span class="minterm">m' + minterm + '</span>' + bit;
        } else {
            td.innerHTML = bit;
        }

        td.addEventListener('click', (event) => {
        	event.preventDefault();

            if(this.main.options.strict && bit === '0') {
                let html = '<p>You are only allowed to select cells that are either true ' +
                    'or set to don\'t care.</p><p>We are grouping minterms that all are true ' +
                    'so we can minimize the circuit. So, only true cells can be grouped.</p>';
                const dlg = new MessageDialog(main, "You can't do that", html);
                dlg.open();
                return;
            }

            if(td.classList.contains("kmap-cl-selected")) {
                td.classList.remove("kmap-cl-selected");
                let n = this.selected.indexOf(minterm);
                if(n > -1) {
                    this.selected.splice(n, 1);
                }
            } else {
                td.classList.add("kmap-cl-selected");
                if(!is_selected(minterm)) {
	                this.selected.push(minterm);
	                this.selected.sort(function(a, b) {
                        return a - b;
                    });
                }

            }
        });

        return td;
    }

	const to_minterm = (c, r) => {
		let map;

		if(+this.main.options.size === 2) {
			map = [[0, 2], [1, 3]];
		} else if(+this.main.options.size === 3) {
			map = [[0, 2, 6, 4], [1, 3, 7, 5]];
		} else {
			map = [[0, 4, 12, 8], [1, 5, 13, 9], [3, 7, 15, 11], [2, 6, 14, 10]];
		}

		return map[r-1][c-1];
	}

	const is_selected = (minterm) => {
		return this.selected.indexOf(minterm) > -1; //
	}

    this.clear = function() {
	    this.selected = [];
	    const tds = this.element.querySelectorAll('td');
	    for(let td of tds) {
	    	td.classList.remove('kmap-cl-selected');
	    }
    }

	initialize();
}
