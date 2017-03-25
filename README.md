Redux Actions Utils
=========

A tiny utility for redux actions

## Installation

  `npm install redux-actions-utils`

## Usage

### Define actions

Allows you to define action list, checks for duplicates (throws error in case duplicated actions)

    var reduxActionsUtils = require('redux-actions-utils')

    var actionTypes = reduxActionsUtils.defineActionTypes('ACTION_TYPE_1', 'ACTION_TYPE_2');
  
  
  Output will be 
  ```
  {
    ACTION_TYPE_1: 'ACTION_TYPE_1',
    ACTION_TYPE_2: ACTION_TYPE_2
  }
  ```


### Create action

    var reduxActionsUtils = require('redux-actions-utils')

    var action = reduxActionsUtils.createAction('ACTION_TYPE', {payloadKey: 'payloadValue});
  
  
  Output will be 
  ```
  {
    type: 'ACTION_TYPE',
    payload: {
        payloadKey: 'payloadValue'
    }
  }
  ```


## Tests

  `npm test`