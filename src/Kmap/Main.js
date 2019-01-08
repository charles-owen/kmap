import {Work} from './Work';
import {Generator} from './Generator';
import {Solution} from "./Solution";
import {Manual} from "./Manual";
import {Minterms} from "../Logic/Minterms";

/**
 * Main window management object
 * @param kmap Kmap object (parent)
 * @param element The DOM element to use
 * @constructor
 */
export const Main = function(kmap, element) {
    this.options = kmap.options;
    this.element = element;

    // Ensure empty and add the kmap-cl class
    element.innerHTML = '';
    element.classList.add('kmap-cl');

    // The current minterms
	this.minterms = new Minterms();

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
	    if(this.options.minterms.length === 0) {
		    this.generate();
	    } else {
		    this.set(this.options.minterms, this.options.dontcare);
	    }
    }

	/**
	 * Generate a new set of minterms with optional don't cares
	 */
	this.generate = function() {
		this.minterms.size = this.options.size;
		if(this.options.genDontCare) {
			var dcMax = 8;
			switch(this.options.size) {
				case 2:
					dcMax = 2;
					break;

				case 3:
					dcMax = 4;
					break;
			}
			this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size)-1,
				0.2, 1, dcMax);

			newMinterms();
		} else {
			this.minterms.generate_bounded(0.5, 1, Math.pow(2, this.options.size)-1);
			newMinterms();
		}
	}

	this.set = function(minterms, dontcare) {
		this.minterms.set_from(minterms, dontcare);
		newMinterms();
	}

	const newMinterms = () => {
		if(this.solution !== null) {
			this.solution.clear();
		}

		this.options.minterms = this.minterms.minterms.slice();
		this.options.dontcare = this.minterms.dontcare.slice();

		if(this.work !== null) {
			this.work.render();
		}

		if(this.generator !== null) {
			this.generator.refresh();
		}
	}


	this.newSize = function(size) {
		this.options.size = size;
		this.generate();
	}

    this.initialize();
}
