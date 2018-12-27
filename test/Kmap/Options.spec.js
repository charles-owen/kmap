import {Options} from "../../src/Kmap/Options";

describe('Options', function() {

	it('defaults working', function() {
		let opt = new Options({});

		expect(opt.map).toBeTruthy();
		expect(opt.labels).toEqual(['A', 'B', 'C', 'D']);

		opt = new Options({labels: ['X', 'Y', 'Z', 'W']});
		expect(opt.labels).toEqual(['X', 'Y', 'Z', 'W']);
	})

	it('JSON working', function() {
		let opt = new Options(JSON.stringify({labels: ['X', 'Y', 'Z', 'W']}));
		expect(opt.labels).toEqual(['X', 'Y', 'Z', 'W']);
	})

	it('base64 working', function() {
		let opt = new Options(btoa(JSON.stringify({labels: ['X', 'Y', 'Z', 'W']})));
		expect(opt.labels).toEqual(['X', 'Y', 'Z', 'W']);
	})
});
