import {Expression} from "../Logic/Expression";
import {QuineMcCluskeySolver} from "../Logic/QuineMcCluskeySolver";

/**
 * Practice page solution form
 * @param main Main object
 * @param element Parent element
 * @constructor
 */
export const Solution = function(main, element) {
    var that = this;

    this.main = main;

    // The various section elements
    let div, expressionInput, result;

    const initialize = () => {
        div = document.createElement('div');
        div.classList.add('kmap-cl-solution');
        element.append(div);

        let h3 = document.createElement('h3');
        h3.innerText = 'Solution';
        div.appendChild(h3);

        let form = document.createElement('form');
        div.appendChild(form);

	    // '<p><label>Enter Expression<br><input type="text" spellcheck="false" class="expression"></label></p>'
	    let p = document.createElement('p');
	    form.appendChild(p);

	    let label = document.createElement('label');
	    p.appendChild(label);
	    label.innerText = 'Enter Expression';
	    label.appendChild(document.createElement('br'));

	    expressionInput = document.createElement('input');
	    expressionInput.setAttribute('type', 'text');
	    expressionInput.setAttribute('spellcheck', 'false');
	    label.appendChild(expressionInput);

	    // '<p><button class="check">Check</button><a class="clear" href="javascript:;"></a>';
        p = document.createElement('p');
        form.appendChild(p);

        let check = document.createElement('button');
        check.classList.add('check');
        check.innerText = 'Check';
        p.appendChild(check);

        check.addEventListener('click', (event) => {
           event.preventDefault();
           this.check();
        });

        // Clear button (input)
	    p.appendChild(document.createTextNode(' '));

	    let clear = document.createElement('a');
	    clear.classList.add('clear');
	    p.appendChild(clear);

	    clear.addEventListener('click', (event) => {
	        event.preventDefault();
	        this.clear();
        });

	    // Optional solve button
	    if(main.options.solve) {
		    p.appendChild(document.createTextNode(' '));

		    let solve = document.createElement('button');
		    solve.classList.add('kmap-cl-solve');
		    solve.innerHTML = 'Solve';
		    p.appendChild(solve);

		    solve.addEventListener('click', (event) => {
		    	event.preventDefault();
		    	this.solve();
		    })
	    }

	    // Results div
        result = document.createElement('div');
        div.appendChild(result);
    }

    this.clear = function() {
	    expressionInput.value = '';
	    result.innerHTML = '';
    }

    this.check = function() {
	    var mt = '';
	    var first=true;
	    for(let i in main.options.minterms) {
		    if(first) {
			    mt += ",";
		    } else {
			    first = false;
		    }

		    mt += main.options.minterms[i];
	    }

	    result.innerHTML = '';

	    var expression = new Expression();
	    expression.labels = main.options.labels;
	    expression.set_size(main.options.size);

	    let str = expressionInput.value;

	    if(main.options.expressionSel !== null) {
		    const elements = document.querySelectorAll(main.options.expressionSel);
		    for(let element of elements) {
			    element.value = str.replace(/(<([^>]+)>)/ig,"");
		    }
	    }

	    try {
		    expression.parse(str);
	    } catch(msg) {
		    fail('<p>Your expression failed to parse and must not be ' +
			    'in the correct form.</p>' +
			    '<p>' + msg + '</p>');
		    return;
	    }


	    // Is this result minimal?
	    var qm = new QuineMcCluskeySolver();
	    qm.labels = main.options.labels;

	    qm.init(main.options.size);
	    for(var i in main.options.minterms) {
		    qm.set(main.options.minterms[i], true);
	    }
	    for(i in main.options.dontcare) {
		    qm.set(main.options.dontcare[i], undefined);
	    }
	    qm.compute();

	    var qmExpression = new Expression();
	    qmExpression.labels = main.options.labels;
	    qmExpression.set_size(main.options.size);

	    qmExpression.parse(qm.expression());

	    var valid = true;

	    //
	    // Test that every minterm supplied is either
	    // a valid minterm or a don't care
	    //
	    for(var i in expression.minterms.minterms) {
		    var m = expression.minterms.minterms[i];
		    var inlist = false;
		    for(var j in main.options.minterms) {
			    if(main.options.minterms[j] == m) {
				    inlist = true;
				    break;
			    }
		    }

		    for(j  in main.options.dontcare) {
			    if(main.options.dontcare[j] == m) {
				    inlist = true;
				    break;
			    }
		    }

		    if(!inlist) {
			    // If we got to here, this term is extraneous!
			    valid = false;
			    break;
		    }
	    }

	    //
	    // Test that every minterm required is in the supplied list
	    //
	    for(i in main.options.minterms) {
		    m = main.options.minterms[i];
		    inlist = false;
		    for(var j in expression.minterms.minterms) {
			    if(expression.minterms.minterms[j] == m) {
				    inlist = true;
				    break;
			    }
		    }

		    if(!inlist) {
			    // If we got to here, this term is extraneous!
			    valid = false;
			    break;
		    }
	    }

	    if(!valid) {
		    if(main.options.verbose) {
			    var html = '<p>Your expression is not a valid solution for this ' +
				    'set of minterms. The minterms for your expression have been ' +
				    'computed as: </p>';

			    if(expression.minterms.minterms.length > 0) {
				    html += '<p class="center small">' + expression.minterms.list() + '</p>';
			    } else {
				    html += '<p class="center small">none</p>';
			    }
		    } else {
			    var html = '<p>Your expression is not a valid solution for this ' +
				    'set of minterms.</p>';
		    }

		    fail(html);
		    return;
	    }

	    if(!expression.as_good_as(qmExpression)) {
		    if(main.options.verbose) {
			    fail('<p>Your expression is not minimal. A minimal solution ' +
				    'for this problem is:</p>' +
				    '<p class="small">' + qm.expression() + '</p>');
		    } else {
			    fail('<p>Your expression is not minimal.</p>');
		    }

		    return;
	    }

	    //
	    // Success
	    //

	    result.innerHTML = '<p>Your expression is correct and minimal.</p>';

	    if(main.options.resultSel !== null) {
	    	const elements = document.querySelectorAll(main.options.resultSel);
	    	for(let element of elements) {
	    		element.value = main.options.success;
		    }
	    }
    }

    this.solve = function() {
	    const qm = this.minimumExpression();
	    result.innerHTML = '<p class="center">' + qm.expression() + "</p>";

	    main.work.map.clear();

	    var groups = main.work.groups;
	    groups.clear();

	    var terms = qm.expression().split('+');
	    var exp = new Expression();
	    exp.labels = main.options.labels;
	    exp.set_size(main.options.size);
	    for(var i=0; i<terms.length; i++) {
		    var term = terms[i];
		    exp.parse(term);
		    groups.add_group(exp.minterms.minterms);
	    }

	    groups.drawGroups();
    }

	const fail = (msg) => {
		result.innerHTML = msg;

		if(main.options.resultSel !== null) {
			const elements = document.querySelectorAll(main.options.resultSel);
			for(let element of elements) {
				element.value = 'fail';
			}
		}
	}


	this.minimumExpression = function() {
		// Is this result minimal?
		var qm = new QuineMcCluskeySolver();
		qm.labels = this.main.options.labels;

		qm.init(this.main.options.size);
		for(var i in this.main.options.minterms) {
			qm.set(this.main.options.minterms[i], true);
		}
		for(i in this.main.options.dontcare) {
			qm.set(this.main.options.dontcare[i], undefined);
		}
		qm.compute();
		return qm;
	}

    initialize();
}

