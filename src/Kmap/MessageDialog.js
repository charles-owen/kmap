/**
 * The standard Message dialog box.
 *
 * Pretty minimalist dialog box
 *
 * @param main The Main object
 * @param title Title for the dialog box
 * @param body Body HTML to put in the dialog box
 * @constructor
 */
export const MessageDialog = function(main, title, body) {
    let div = null;

    this.open = function() {
        // The top level dialog element
        div = document.createElement('div');
        div.classList.add('kmap-cl-dlg');
        main.element.appendChild(div);

        // The mask
        let mask = document.createElement('div');
        div.appendChild(mask);

        // The dialog box itself
        let dlg = document.createElement('div');
        div.appendChild(dlg);

        // Title bar
        let tb = document.createElement('div');
        dlg.appendChild(tb);
        tb.innerText = title;

        // Body
        let db = document.createElement('div');
        dlg.appendChild(db);
	    db.innerHTML = body;

	    // Controls
        let controls = document.createElement('div');
        dlg.appendChild(controls);

        let ok = document.createElement('button');
        controls.appendChild(ok);
        ok.innerText = 'Ok';

        ok.addEventListener('click', (event) => {
           event.preventDefault();
           if(div !== null) {
	           main.element.removeChild(div);
	           div = null;
           }

        });
    }
}
