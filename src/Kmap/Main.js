import {Work} from './Work';
import {Generator} from './Generator';
import {Solution} from "./Solution";
import {Manual} from "./Manual";

/**
 * Main window management object
 * @param kmap Kmap object (parent)
 * @param element The DOM element to use
 * @constructor
 */
export const Main = function(kmap, element) {
    this.options = kmap.options;

    // Ensure empty and add the kmap-cl class
    element.innerHTML = '';
    element.classList.add('kmap-cl');

    this.element = element;

    this.work = null;
    this.generator = null;
    this.solution = null;
    this.manual = null;

    this.initialize = () => {
        if(this.options.generator) {
            this.generator = new Generator(this, element);
        }

        if(this.options.manual) {
        	this.manual = new Manual(this, element);
        }

        if(this.options.map) {
	        this.work = new Work(this, element);
        }

        if(this.options.solution) {
	        this.solution = new Solution(this, element);
        }

	    // Generate initial minterms
	    if(this.generator !== null) {
		    if(this.options.minterms.length === 0) {
			    this.generator.generate();
		    } else {
			    this.generator.set(this.config.minterms);
		    }
	    }
    }

	this.newMinterms = function(minterms) {
		if(this.solution !== null) {
			this.solution.clear();
		}

		this.options.minterms = minterms.minterms.slice();
		this.options.dontcare = minterms.dontcare.slice();

		if(this.work !== null) {
			this.work.render();
		}
	}


	this.newSize = function(size) {
		this.options.size = size;
		if(this.generator !== null) {
			this.generator.generate();
		}
	}

    this.initialize();
}