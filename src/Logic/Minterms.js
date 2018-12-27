/**
 * Object that represents a list of minterms and can generate random lists
 * @constructor
 */
export const Minterms = function() {
    this.size = 4;
    this.minterms = []; // List of numbers
    this.dontcare = []; // List of don't cares

    /**
     * Generate random minterms and optionally dontcares
     * @param oneChance probability a minterm will be true
     * If omitted, the probability is 0.5
     * @param dcChance probablity a minterm will a dontcare
     * If omitted, the probability is 0
     */
    this.generate = function(oneChance, dcChance) {
        if(oneChance === undefined) {
            oneChance = 0.5;
        }
        if(dcChance === undefined) {
            dcChance = 0;
        }

        this.dontcare = [];
        this.minterms = [];

        var num = Math.pow(2, this.size);
        for(var i=0; i<num; i++) {
            var rnd = Math.random();
            if(rnd <= oneChance) {
                this.minterms.push(i);
            } else if(rnd > (1 - dcChance)) {
                this.dontcare.push(i);
            }
        }
    }

    /**
     * Generate random minterms and optionally dontcares
     * @param oneChance probability a minterm will be true
     * If omitted, the probability is 0.5
     * @param oneMin Minimum acceptable number of minterms
     * @param oneMax Maximum acceptable number of minterms
     * @param dcChance probablity a minterm will a dontcare
     * If omitted, the probability is 0
     * @param dcMin Minimum acceptable number of don't cares
     * @param dxMax Maximum acceptable number of don't cares
     */
    this.generate_bounded = function(oneChance, oneMin, oneMax, dcChance, dcMin, dcMax) {
        if(dcMin === undefined) {
            dcMin = 0;
        }
        if(dcMax === undefined) {
            dcMax = Math.pow(2, this.size);
        }

        for(var i=0; i<1000; i++) {
            this.generate(oneChance, dcChance);
            if(this.minterms.length >= oneMin &&
                    this.minterms.length <= oneMax &&
                    this.dontcare.length >= dcMin &&
                    this.dontcare.length <= dcMax) {
                return;
            }
        }
    }

    /**
     * Set the minterms list. This will accept any number of function arguments.
     */
    this.set = function() {
        this.minterms = [];
        for(var i=0; i<arguments.length; i++) {
            this.minterms.push(arguments[i]);
        }
        this.minterms.sort(function(a, b) {return a-b;});
    }

    /**
     * Set from a list of minterms as an array
     * @param minterms Minterms array. The array is copied.
     * @param dontcare Optional don't care array
     */
    this.set_from = function(minterms, dontcare) {
        this.minterms = minterms.slice();
        this.minterms.sort(function(a, b) {return a-b;});

        if(dontcare !== null) {
            this.dontcare = dontcare.slice();
            this.dontcare.sort(function(a, b) {return a-b;});
        } else {
            this.dontcare = [];
        }
    }

    /**
     * Determine if two minterm lists are the same.
     * @param other Other Minterms object
     */
    this.equal = function(other) {
        var otherMinterms;

        if(other instanceof Logic.Minterms) {
            otherMinterms = other.minterms;
        } else {
            otherMinterms = other;
        }

        if(otherMinterms.length !== this.minterms.length) {
            return false;
        }

        for(var i=0; i<otherMinterms.length; i++) {
            if (otherMinterms[i] != this.minterms[i]) {
                return false;
            }
        }

        return true;
    }

    this.clear = function() {
        this.minterms = [];
    }

    this.add = function(minterm) {
        for(var i in this.minterms) {
            if(this.minterms[i] == minterm) {
                return;
            }
        }

        this.minterms.push(minterm);
        this.minterms.sort(function(a, b) {return a-b;});
    }

    this.list = function(withBreak) {
        var first = true;
        var ret = '';
        var cr = false;
        for(var i in this.minterms) {
                if(first) {
                    first = false;
                } else {
                    ret += ', ';
                }

                if(withBreak === true && !cr && ret.length > 40) {
                    cr = true;
                    ret += '<br>';
                }

                ret += 'm' + this.minterms[i];
        }

        return ret;
    }

    this.list_dontcare = function(withBreak) {
        var first = true;
        var ret = '';
        var cr = false;
        for(var i in this.dontcare) {
            if(first) {
                first = false;
            } else {
                ret += ', ';
            }

            if(withBreak === true && !cr && ret.length > 40) {
                cr = true;
                ret += '<br>';
            }

            ret += 'm' + this.dontcare[i];
        }

        return ret;
    }
}
