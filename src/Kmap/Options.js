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
	this.size = 4;

	/// The minterms. Set to integers starting at 0
	this.minterms = []; // [1, 2, 7, 8, 9, 14];

	/// The don't care minterms
	this.dontcare = [];

	/// Labels for the variables.
	this.labels = ['A', 'B', 'C', 'D'];

	/// Generate don't care maps
	this.genDontCare = false;

	/// Are don't cares an option for the generator?
	this.genDontCareOption = true;

	//
	// User interface sections
	//

	/// Include the generator?
	this.generator = true;

	/// Include the manual data entry section?
	this.manual = false;

	/// Include the map?
	this.map = true;

	/// Include the solution section?
	this.solution = true;

	/// Include the To PNG button
	this.toPNG = false;

	/// If set true, practice generate features are disabled
	this.fixed = false;

	/// Verbose answers on mistakes
	this.verbose = true;

	/// If true, the minterm name appears in each cell.
	this.labelMinterms = true;

	/// If set true, user input is checked for selecting invalid cells
	/// such as zeros.
	this.strict = true;



	/// If true, the header Karnaugh Map is included with an option to hide the map
	this.mapHeading = true;

	/// A results selector. Selector that will be set to the success value
	/// if the expression successfully checks
	this.resultSel = null;

	/// Value resultsSel will be set to if check is successful ('fail' otherwise)
	this.success = 'success';

	/// Selector that will be set to the expression each time check is pressed.
	this.expressionSel = null;

	/// Is the solve button provided?
	this.solve = false;

    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }
}
