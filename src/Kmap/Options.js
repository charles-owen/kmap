/**
 * User interface options.
 *
 * Options can be passed as a Javascript Object, JSON, or base64-encoded JSON
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
export const Options = function(options) {
    options = options ? options : {};

	if (options !== Object(options)) {
		if (options.substr(0, 1) === '{') {
			options = JSON.parse(options);
		} else {
			// Not JSON, must be base64 encoded
			options = JSON.parse(atob(options));
		}
	}

    /// The input size: 2, 3, or 4
	this.size = 2;

	/// The minterms. Set to integers starting at 0
	this.minterms = []; // [1, 2, 7, 8, 9, 14];

	/// The don't care minterms
	this.dontcare = [];

	/// Labels for the variables.
	this.labels = ['A', 'B', 'C', 'D'];

	/// Generate don't care maps
	this.gendontcare = false;

	//
	// User interface sections
	//

	/// Include the generator?
	this.generator = true;

	/// Include the manual data entry section?
	this.manual = true;

	/// Include the map?
	this.map = true;

	/// Include the solution section?
	this.solution = true;




	/// If true, the minterm name appears in each cell.
	this.labelMinterms = true;

	/// If set true, user input is checked for selecting invalid cells
	/// such as zeros.
	this.strict = true;

	/// If set true, practice generate features are disabled
	this.fixed = false;

	/// If true, the header Karnaugh Map is included with an option to hide the map
	this.mapHeading = true;

	/// Verbose answers on mistakes
	this.verbose = true;

	/// Is the solve button provided?
	this.solve = true;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }
}
