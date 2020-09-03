import *as actionTypes from './actionsTypes';

export const VALIDATOR_REQUIRE = () => ({ type: actionTypes.VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: actionTypes.VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = val => ({
  type: actionTypes.VALIDATOR_TYPE_MINLENGTH,
  val: val
});
export const VALIDATOR_MAXLENGTH = val => ({
  type: actionTypes.VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_MIN = val => ({ type: actionTypes.VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = val => ({ type: actionTypes.VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: actionTypes.VALIDATOR_TYPE_EMAIL });