'use strict';

exports.createAction = function (type, payload) {
    var action = {
        type: type
    };

    if (payload) {
        action.payload = payload;
    }

    return action;
};

exports.defineActionTypes = function () {
    var dict = {};

    for (var i= 0, l=arguments.length; i < l; i++) {
        if (Object.prototype.toString.call(arguments[i]) !== "[object String]") {
            throw new Error('Action name should be a string');
        }

        if (dict.hasOwnProperty(arguments[i])) {
            throw new Error('Passed actions should be unique strings, duplicate found: ' + arguments[i]);
        }

        dict[arguments[i]] = arguments[i];
    }

    return dict;
};