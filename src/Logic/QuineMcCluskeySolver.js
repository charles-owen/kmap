import {QuineMcCluskeyDataCtrl} from "./qmc";

/**
 * Solver for circuit minimization based on Quine McCluskey algorithm.
 * This uses the implemention in qmc.js, but adapts the interface
 * to match the variable names I use.
 * @constructor
 */
export const QuineMcCluskeySolver = function() {

    this.qm = new QuineMcCluskeyDataCtrl();

    this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

    this.init = function(numVars) {
        this.qm.init(numVars);

        this.clear();
    }

    this.clear = function() {
        var size = Math.pow(2, this.qm.noOfVars);
        this.qm.allowDontCare = true;
        for(var i=0; i<size; i++) {
            this.qm.setFuncData(i, 0);
        }
    }

    /**
     * Set a minterm
     * @param minterm Minterm number
     * @param value true, false, or undefined for dontcare
     */
    this.set = function(minterm, value) {
        if(value === true) {
            this.qm.setFuncData(minterm, 1);
        } else if(value === undefined) {
            this.qm.setFuncData(minterm, 2);
        } else {
            this.qm.setFuncData(minterm, 0);
        }
    }

    this.compute = function() {
        this.qm.compute();
    }

    this.num_terms = function() {
        return this.qm.minimalTermPrims.length;
    }

    this.expression = function() {
        var qm = this.qm;

        var exp = "";
        var first = true;

        if(qm.minimalTermPrims.length === 0) {
            return "0";
        }

        if(qm.minimalTermPrims.length === 1 &&
            qm.minimalTermPrims[0].termString === '1') {
            return "1";
        }

        // Loop over the results
        for(var i=0; i<qm.minimalTermPrims.length; i++) {
            if(!first) {
                exp += "+";
            } else {
                first = false;
            }

            //
            // Find smallest prime implicant.
            // This is probably not strictly necessary
            // but I don't trust the method they use
            // that stops on the first iteration of a
            // for/in loop.
            //
            first = true;
            var minterm;

            var primTerm = qm.minimalTermPrims[i];
            for (var imp in primTerm.implicant.imp) {
                if(first) {
                    minterm = imp;
                    first = false;
                } else {
                    if(imp < minterm) {
                        minterm = imp;
                    }
                }
            }

            // minterm is a minterm that is needed
            // except that some bits can be masked off

            // I count backwards, since I prefer
            // the most significant value to be A
            // to match the course materials.
            var one = 1 << (qm.noOfVars - 1);

            // If a bit is set in primTerm.implicant.bitMask,
            // that term is not needed.
            var needed = (~primTerm.implicant.bitMask);

            var term = '';
            for (var v = qm.noOfVars-1; v >= 0 ; v--) {
                var v1 = qm.noOfVars - v - 1;
                if ((needed & one) === one) {
                    if ((minterm & one) === one) {
                        term += this.labels[v1];
                    } else {
                        term += this.labels[v1] + "'";
                    }
                }
                one = one >> 1;
            }

            exp += term;
        }

        return exp;
    }

}
