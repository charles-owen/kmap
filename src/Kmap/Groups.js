import {MessageDialog} from './MessageDialog';
import {Group} from "./Group";

/**
 * The groups area of the editor
 */

export const Groups = function(main, sel) {
	var that = this;

	this.main = main;

	let list;

	const initialize = () => {
		let button = document.createElement('button');
		sel.appendChild(button);
		button.innerText = 'Cover';

		list = document.createElement('div');
		list.classList.add('list');
		sel.appendChild(list);

		this.groups = [];
		this.colorN = 0;

		button.addEventListener('click', (event) => {
			console.log(main);
		    event.preventDefault();

			let selected = main.work.map.selected;
            
			if(main.options.strict) {
				// Determine how many common bits there are
				let and1 = Math.pow(2, main.options.size) - 1;
				let and2 = and1;

				for(let i=0; i<selected.length; i++) {
					let sel = selected[i];
					and1 &= sel;
					and2 &= ~sel;
				}

				let or = and1 | and2;
				let bits = 0;
				let size = main.options.size;

				for(let i=0; i<size; i++) {
					if((or & 1) === 1) {
						bits++;
					}

					or >>= 1;
				}

				// Test for valid
				var valid = true;
				switch(selected.length) {
					case 1:
						break;

					case 2:
						valid = bits == size - 1;
						break;

					case 4:
						valid = bits == size - 2;
						break;

					case 8:
						valid = bits == size - 3;
						break;

					case 16:
						break;

					default:
						let html = '<p>Grouping must be of some power of two minterms.</p><p>The only ' +
							'groupings possible are 1, 2, 4, 8, or 16, depending on the size of the ' +
							'Karnaugh map.</p>';
						let dlg = new MessageDialog(main, "You can't do that", html);
						dlg.open();
						return;
				}

				if(!valid) {
					let html = '<p>Your minterm grouping is invalid.</p><p>Groupings must be such ' +
						'that there are bits in common. This means the groupings must be a rectangle ' +
						'on the Karnaugh map. This can be a 1 by 4 rectangle or a 2 by 2 rectangle for ' +
						'a grouping of 4, for example. Note that the map does <em>wrap around</em> at' +
						' the edges, so the right side is adjacent to the left side, for example.</p>';
					let dlg = new MessageDialog(main, "You can't do that", html);
					dlg.open();
					return;
				}

				//
				// Ensure this group does not already exist
				//
				for(let i=0; i<that.groups.length && valid; i++) {
					if(that.groups[i].selected.length === selected.length) {
						let ok = false;
						for(let j=0; j<that.groups[i].selected.length; j++) {
							if(that.groups[i].selected[j] !== selected[j]) {
								ok = true;
								break;
							}
						}

						if(!ok) {
							valid = false;
							let html = '<p>This cover already exists.</p>';
							let dlg = new MessageDialog(main, "You can't do that", html);
							dlg.open();
							return;
						}
					}
				}
			}

			this.add_group(selected);
			this.drawGroups();

			main.work.map.clear();
        })
    }

	/**
	 * Add a new group (cover)
	 * @param minterms Array of minterms in the group
	 */
	this.add_group = function(minterms) {
		let group = new Group(this, list, minterms, this.colors[this.colorN]);
		this.colorN = (this.colorN + 1) % this.colors.length;
		this.groups.push(group);
	}

	/**
	 * Draw all of the groups on the canvas
	 */
	this.drawGroups = function() {
		console.log(main);
		const canvas = main.work.map.get_canvas();
		console.log(canvas);
		var ctx = canvas.getContext("2d");

		var wid = canvas.width;
		var hit = canvas.height;

		ctx.clearRect(0, 0, wid, hit);

		var size = main.options.size;
		var counter = [];
		for(var i=0; i<Math.pow(2, size);  i++) {
			counter.push(0);
		}

		for(var i=0; i<this.groups.length; i++) {
			var group = this.groups[i];

			var max = 1;
			for(var j=0; j<group.selected.length; j++) {
				counter[group.selected[j]]++;
				if(counter[group.selected[j]] > max) {
					max = counter[group.selected[j]];
				}

			}
			group.draw(ctx, wid, hit, max);
		}

	}

	this.clear = function() {
		list.innerHTML = '';
		this.colorN = 0;
		this.groups = [];
		this.drawGroups();
	}

	this.remove = function(group) {
		for(let i=0; i<this.groups.length; i++) {
			if(this.groups[i] === group) {
				this.groups.splice(i, 1);
			}
		}

		this.drawGroups();
	}

	initialize();

    /*
     '<button>Group</button>' +
     '            <div class="list">' +
     '            <div class="group">' +
     '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
     '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
     '            </div>' +
     '            <div class="group">' +
     '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
     '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
     '            </div>' +
     '            <div class="group">' +
     '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
     '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
     '            </div>' +
     '            <div class="group">' +
     '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
     '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span> ' +
     '           </div>' +
     '            <div class="group">' +
     '            0,1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15' +
     '        <span><a href="javascript:;"></a><img src="images/x.png"></a></span>' +
     '            </div>' +
     '            </div>' +

     */
}

Groups.prototype.colors = ["#0000FF", "#808088", "#FF8800", "#008080", "#BDB76B",
    "#800000", "#00FF88", "#778899", "#FFA500", "#9ACD32", "#4682B4"];





