import {Minterms} from "./Minterms";

/**
 * Handle simple expressions. Only works for sum of products
 * for now. Will consider fancier version later on.
 * @constructor
 */
export const Expression = function() {
    var that = this;

    var size = 4;

    this.minterms = new Minterms();

    this.labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

    /**
     * Set the size of the expression
     * @param sz Value 1-? number of terms
     */
    this.set_size = function(sz) {
        size = sz;
        this.minterms.size = sz;
        terms_init();
    }

    /**
     * Test that this expression is as good as some other expression.
     * @param other
     */
    this.as_good_as = function(other) {
        if(this.num_products() > other.num_products()) {
            return false;
        }

        if(this.num_terms() > other.num_terms()) {
            return false;
        }

        return true;
    }

    /*
     * Minterms
     */
    function generate_minterms() {
        that.minterms.clear();
        for(var i=0; i<Math.pow(2, size); i++) {
            terms_set(i);

            var resultS = false;

            for(var s in sop) {
                var prod = sop[s];
                var resultP = true;

                for(var p in prod) {
                    var t = prod[p];

                    if(t.not) {
                        resultP = resultP && !(t.term.value);
                    } else {
                        resultP = resultP && t.term.value;
                    }
                }

                resultS = resultS || resultP;
            }

            if(resultS) {
                that.minterms.add(i);
            }
        }
    }

    /**
     * Parse an expression in sum-of-products form only
     * @param str
     */

    var sop = [];

    this.parse = function(exp) {
        lex(exp);

        sop = [];

        var prod = [];

        if(token() === "0") {
            generate_minterms();
            return;
        }

        if(token() === "1") {
            this.minterms.clear();
            for(var i=0; i<Math.pow(2, size); i++) {
                this.minterms.add(i);
            }
            return;
        }

        while(true) {
            var ch = token();
            if(ch === null) {
                break;
            }

            if(ch === '+') {
                if(prod.length === 0) {
                    error("Syntax error");
                }

                sop.push(prod);
                prod = [];
                advance();
            } else {
                // Is it a term?
                var term = get_term(ch);
                if(term !== null) {
                    // We have a new term
                    // Have we already seen it?
                    for(var j in prod) {
                        if(term === prod[j].term) {
                            // Already seen this term
                            error("Not in correct sum of products form. " +
                                "Terms may only be used once per product.");
                        }
                    }

                    advance();
                    if(token() === "'") {
                        prod.push({term: term, not: true});
                        advance();
                    } else {
                        prod.push({term: term, not: false});
                    }

                } else {
                    error("Unexpected symbol.");
                }
            }
        }

        if(prod.length > 0) {
            sop.push(prod);
            prod = [];
        } else {
            error("Not in correct sum of products form. " +
                "Missing terms?");
        }

        generate_minterms();
    }

    this.num_products = function() {
        return sop.length;
    }

    this.num_terms = function() {
        var cnt = 0;
        for(var i in sop) {
            cnt += sop[i].length;
        }

        return cnt;
    }

    function error(msg) {
        throw "Expression parsing error [" + expressionLoc + "]: " + msg;
    }

    /*
     * Terms management
     */

    var terms = [];

    function terms_init() {
        terms = [];

        // Create the terms
        for(var i=0; i<size; i++) {
            var term = {
                literal: that.labels[i],
                value: false
            }

            terms.push(term);
        }

    }

    function get_term(ch) {

        for(var i in terms) {
            if(ch.toUpperCase() === terms[i].literal.toUpperCase()) {
                return terms[i];
            }
        }

        return null;
    }

    function terms_set(val) {
        for(var j=terms.length-1; j>=0; j--) {
            terms[j].value = (val & 1) == 1;
            val >>= 1;
        }
    }


    /*
     * Simple lexical analyzer
     */

    var expression;
    var expressionLoc;

    function lex(exp) {
        expression = exp;
        expressionLoc = 0;
    }

    function token() {
        while(expressionLoc < expression.length) {
            var ch = expression.charAt(expressionLoc);
            if(ch !== ' ') {
                // Is this a term?
                for(var i in terms) {
                    var maybe = expression.substr(expressionLoc, terms[i].literal.length);

                    if(maybe === terms[i].literal) {
                        return maybe;
                    }
                }

                return ch;
            }

            expressionLoc++;
        }

        return null;
    }

    function advance() {
        var t = token();
        if(t !== null) {
            expressionLoc += t.length;
        }
    }

    this.set_size(4);
}
