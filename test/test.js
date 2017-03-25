'use strict';

var expect = require('chai').expect;
var actionsUtils = require('../index');

describe('createAction', function() {
	var actionType = 'TEST_ACTION';

	it('returns proper object in case payload is not defined', function() {
		var result = actionsUtils.createAction(actionType);

		expect(result).to.deep.equal({
			type: actionType
		});
	});

	it('returns proper object in case payload is defined', function() {
		var payload = 'mock payload';
		var result = actionsUtils.createAction(actionType, payload);


		expect(result).to.deep.equal({
			type: actionType,
			payload: 'mock payload'
		});
	});
});

describe('defineActionTypes', function() {
	var actionType1 = 'TEST_ACTION_1';
	var actionType2 = 'TEST_ACTION_2';

	it('throws proper error in case of any of passed action is not a string', function (){
	    try {
			actionsUtils.defineActionTypes(actionType1, {});
		} catch (error) {
			expect(error.message).to.equal('Action name should be a string');
		}
	});

	it('throws proper error in case of action type duplication', function (){
		try {
			actionsUtils.defineActionTypes(actionType1, actionType1);
		} catch (error) {
			expect(error.message).to.equal('Passed actions should be unique strings, duplicate found: ' + actionType1);
		}
	});

	it('returns proper object for properly defined actions names', function() {
	    var result = actionsUtils.defineActionTypes(actionType1, actionType2);

		expect(result).to.deep.equal({
			'TEST_ACTION_1': 'TEST_ACTION_1',
			'TEST_ACTION_2': 'TEST_ACTION_2'
		})
	});
});