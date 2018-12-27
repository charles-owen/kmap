/**
 * A single group
 * @param groups Kmap.Group object
 * @param list List to add this item to
 * @param selected Minterms that are selected
 * @param color Color to draw item
 * @constructor
 */
export const Group = function(groups, list, selected, color) {
    var that = this;

    this.groups = groups;
    this.selected = selected;
    this.color = color;
    if(list === null) {
        return;
    }

    var lst = '';
    var first = true;
    for(var i=0; i<selected.length; i++) {
        if(!first) {
            lst += ',';
        } else {
            first = false;
        }

        if(i === 8) {
            lst += '<br/>';
        }

        lst += selected[i];
    }

	// var div = $('<div class="group">' + lst + '</div>');
    let div = document.createElement('div');
    div.classList.add('group');
    div.innerHTML = lst;

	// var span = $('<span></span>');
	// div.append(span);
	let span = document.createElement('span');
	div.appendChild(span);

	// var a = $('<a href="javascript:;"></a>');
	// span.append(a);
	let a = document.createElement('a');
	span.appendChild(a);

    list.appendChild(div);

    a.addEventListener('click', (event) => {
    	event.preventDefault();

    	list.removeChild(div);
    	groups.remove(this);
    });

	div.style.backgroundColor = color;
   // div.css("background-color", color);
}

Group.prototype.draw = function(ctx, wid, hit, insetDepth) {
    var inset = 15;
    var spacing = 10;

    var cols, rows, mapR, mapC, max;
    switch(this.groups.main.options.size) {
        case 2:
            cols = 2;
            rows = 2;
            mapR = [0, 1, 0, 1];
            mapC = [0, 0, 1, 1];
            max = 4;
            break;

        case 3:
            cols = 4;
            rows = 2;
            mapR = [0, 1, 0, 1, 0, 1, 0, 1];
            mapC = [0, 0, 1, 1, 3, 3, 2, 2];
            max = 8;
            break;

        case 4:
            cols = 4;
            rows = 4;
            mapR = [0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2, 0, 1, 3, 2];
            mapC = [0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2];
            max = 16;
            break;
    }

    var cnt = this.selected.length;
    if(cnt == max) {
        // We are wrapping the whole thing
        this.drawGroup(ctx, 0, 0, wid, hit, inset + spacing * insetDepth);
        return;
    }

    if(cnt == 1) {
        var c1 = mapC[this.selected[0]];
        var r1 = mapR[this.selected[0]];
        this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows,
            wid / cols, hit / rows, inset + spacing * insetDepth);

    } else if(cnt == 2) {
        var c1 = mapC[this.selected[0]];
        var r1 = mapR[this.selected[0]];
        var c2 = mapC[this.selected[1]];
        var r2 = mapR[this.selected[1]];

        if(r1 == r2) {
            // Horizontal
            if(c2 < c1) {
                var t = c1; c1 = c2; c2 = t;
            }

            if((c2 - c1) > 1) {
                // Not adjacent!
                this.drawGroup(ctx, c2 * wid / cols, r1 * hit / rows,
                    wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
                this.drawGroup(ctx, (c1 - 1) * wid / cols, r1 * hit / rows,
                    wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
            } else {
                this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows,
                    wid * 2 / cols, hit / rows, inset + spacing * insetDepth);
            }
        } else {
            // Vertical
            if(r2 < r1) {
                var t = r1; r1 = r2; r2 = t;
            }

            if((r2 - r1) > 1) {
                // Not adjacent
                this.drawGroup(ctx, c1 * wid / cols, r2 * hit / rows,
                    wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
                this.drawGroup(ctx, c1 * wid / cols, (r1-1) * hit / rows,
                    wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
            } else {
                this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows,
                    wid / cols, hit * 2 / rows, inset + spacing * insetDepth);
            }
        }

    } else if(cnt == 4) {
        var c1 = mapC[this.selected[0]];
        var r1 = mapR[this.selected[0]];
        var c2 = mapC[this.selected[1]];
        var r2 = mapR[this.selected[1]];
        var c3 = mapC[this.selected[2]];
        var r3 = mapR[this.selected[2]];
        var c4 = mapC[this.selected[3]];
        var r4 = mapR[this.selected[3]];
        
        // Are all in same row?
        if(r1 == r2 && r2 == r3 && r3 == r4) {
            // Size 4 cover in the same row
            this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows,
                wid * 4 / cols, hit / rows, inset + spacing * insetDepth);
        } else if(c1 == c2 && c2 == c3 && c3 == c4) {
            // Size 4 cover in the same column
            this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows,
                wid / cols, hit * 4 / rows, inset + spacing * insetDepth);
        } else {
            // This must be square
            var wid4 = wid * 2 / cols;
            var hit4 = hit * 2 / rows;

            if(c1 == 0 && c2 == 0 && c3 == 3 && c4 == 3) {
                // This is a left/right side split
                if(r1 == 0 && r2 == 3 && r3 == 0 && r4 == 3) {
                    // Four corner split
                    this.drawGroup(ctx, (-1) * wid / cols, (-1) * hit / rows,
                        wid4, hit4, inset + spacing * insetDepth);
                    this.drawGroup(ctx, (-1) * wid / cols, (3) * hit / rows,
                        wid4, hit4, inset + spacing * insetDepth);
                    this.drawGroup(ctx, (3) * wid / cols, (-1) * hit / rows,
                        wid4, hit4, inset + spacing * insetDepth);
                    this.drawGroup(ctx, (3) * wid / cols, (3) * hit / rows,
                        wid4, hit4, inset + spacing * insetDepth);
                } else {
                    if(r1 > r2) {
                        var t = r1; r1 = r2; r2 = t;
                    }

                    this.drawGroup(ctx, (-1) * wid / cols, r1 * hit / rows,
                        wid4, hit4, inset + spacing * insetDepth);
                    this.drawGroup(ctx, (3) * wid / cols, r1 * hit / rows,
                        wid4, hit4, inset + spacing * insetDepth);
                }
            } else if(r1 == 0 && r2 == 3) {
                if(c1 > c3) {
                    var t = c1; c1 = c3; c3 = t;
                }
                // This is a top-bottom split
                this.drawGroup(ctx, c1 * wid / cols, (-1) * hit / rows,
                    wid4, hit4, inset + spacing * insetDepth);
                this.drawGroup(ctx, c1 * wid / cols, (3) * hit / rows,
                    wid4, hit4, inset + spacing * insetDepth);
            } else {
                // Simple square!
                if(c1 > c3) {
                    var t = c1; c1 = c3; c3 = t;
                }
                if(r1 > r2) {
                    var t = r1; r1 = r2; r2 = t;
                }

                this.drawGroup(ctx, c1 * wid / cols, r1 * hit / rows,
                    wid4, hit4, inset + spacing * insetDepth);
            }


        }
    } else if(cnt == 8) {
        var c1 = mapC[this.selected[0]];
        var r1 = mapR[this.selected[0]];
        var c2 = mapC[this.selected[1]];
        var r2 = mapR[this.selected[1]];
        var c3 = mapC[this.selected[2]];
        var r3 = mapR[this.selected[2]];
        var c4 = mapC[this.selected[3]];
        var r4 = mapR[this.selected[3]];
        var c5 = mapC[this.selected[4]];
        var r5 = mapR[this.selected[4]];

        if(c1 == c2 && c2 == c3 && c3 == c4) {
            var wid8 = wid * 2 / cols;
            var hit8 = hit * 4 / rows;

            // Vertical layout
            if(c1 == 0 && c5 == 3) {
                // Left/right split
                this.drawGroup(ctx, (-1) * wid / cols, (0) * hit / rows,
                    wid8, hit8, inset + spacing * insetDepth);
                this.drawGroup(ctx, (3) * wid / cols, (0) * hit / rows,
                    wid8, hit8, inset + spacing * insetDepth);
            } else {
                if(c1 > c5) {
                    c1 = c5;
                }

                this.drawGroup(ctx, c1 * wid / cols, (0) * hit / rows,
                    wid8, hit8, inset + spacing * insetDepth);
            }
        } else {
            //Horizontal layout
            var wid8 = wid * 4 / cols;
            var hit8 = hit * 2 / rows;

            if((r2 - r1) > 1) {
                // Split
                this.drawGroup(ctx, 0 * wid / cols, (-1) * hit / rows,
                    wid8, hit8, inset + spacing * insetDepth);
                this.drawGroup(ctx, 0 * wid / cols, (3) * hit / rows,
                    wid8, hit8, inset + spacing * insetDepth);
            } else {
                if(r1 > r2) {
                    r1 = r2;
                }

                this.drawGroup(ctx, 0 * wid / cols, (r1) * hit / rows,
                    wid8, hit8, inset + spacing * insetDepth);
            }
        }
    }
}

Group.prototype.drawGroup = function(ctx, x1, y1, wid, hit, inset) {
    var x = x1 + inset;
    var y = y1 + inset;
    var width = wid - inset * 2 - 1;
    var height = hit - inset * 2 - 1;
    var radius = 30;
    ctx.lineWidth = 7;
    ctx.strokeStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(x,y+radius);
    ctx.lineTo(x,y+height-radius);
    ctx.arcTo(x,y+height,x+radius,y+height,radius);
    ctx.lineTo(x+width-radius,y+height);
    ctx.arcTo(x+width,y+height,x+width,y+height-radius,radius);
    ctx.lineTo(x+width,y+radius);
    ctx.arcTo(x+width,y,x+width-radius,y,radius);
    ctx.lineTo(x+radius,y);
    ctx.arcTo(x,y,x,y+radius,radius);
    ctx.stroke();
}