import {Expression} from "../../src/Logic/Expression";

describe('Expression', function() {

	it('is parsing', function() {
		const exp = new Expression();
		exp.set_size(4);

		expect(function() {exp.parse('AA')}).toThrow('Expression parsing error [1]: Not in correct sum of products form. Terms may only be used once per product.');
		expect(function() {exp.parse('A+')}).toThrow('Expression parsing error [2]: Not in correct sum of products form. Missing terms?');
		expect(function() {exp.parse("fd")}).toThrow('Expression parsing error [0]: Unexpected symbol.');

		//expect(function() {}).toThrow('');

		exp.parse("0");
		expect(exp.num_products()).toEqual(0);
		expect(exp.minterms.minterms).toEqual([]);
		expect(exp.num_terms()).toEqual(0);

		exp.parse("A B C");
		expect(exp.num_products()).toEqual(1);
		expect(exp.minterms.minterms).toEqual([14, 15]);
		expect(exp.num_terms()).toEqual(3);

		exp.parse("AB'C");
		expect(exp.num_products()).toEqual(1);
		expect(exp.minterms.minterms).toEqual([10, 11]);
		expect(exp.num_terms()).toEqual(3);

		exp.parse("A+B");
		expect(exp.num_products()).toEqual(2);
		expect(exp.minterms.minterms).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
		expect(exp.num_terms()).toEqual(2);

		exp.parse("ABC' + A D + b'd");
		expect(exp.num_terms()).toEqual(7);
	})

	it('is parsing with label change', function() {
		const exp = new Expression();
		exp.labels = ['X', 'Y', 'Z', 'W'];
		exp.set_size(4);

		expect(function() {exp.parse('AA')}).toThrow('Expression parsing error [0]: Unexpected symbol.');
		expect(function() {exp.parse('A+')}).toThrow('Expression parsing error [0]: Unexpected symbol.');
		expect(function() {exp.parse("fd")}).toThrow('Expression parsing error [0]: Unexpected symbol.');

		exp.parse("0");
		expect(exp.num_products()).toEqual(0);
		expect(exp.minterms.minterms).toEqual([]);
		expect(exp.num_terms()).toEqual(0);

		exp.parse("X Y Z");
		expect(exp.num_products()).toEqual(1);
		expect(exp.minterms.minterms).toEqual([14, 15]);
		expect(exp.num_terms()).toEqual(3);

		exp.parse("XY'Z");
		expect(exp.num_products()).toEqual(1);
		expect(exp.minterms.minterms).toEqual([10, 11]);
		expect(exp.num_terms()).toEqual(3);

		exp.parse("X+Y");
		expect(exp.num_products()).toEqual(2);
		expect(exp.minterms.minterms).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
		expect(exp.num_terms()).toEqual(2);

		exp.parse("XYZ' + x w+ y'x");
		expect(exp.num_terms()).toEqual(7);

	});



});

