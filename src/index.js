import {
  isPlainObject,
  isString,
  isSymbol,
} from 'lodash';

export function isFSA(action) {
  return (
    isPlainObject(action) &&
    (isString(action.type) || isSymbol(action.type)) &&
    Object.keys(action).every(isValidKey)
  );
}

export function isError(action) {
  return action.error === true;
}

export default function Action(type, payload, error, meta) {
  return {
    type,
    payload,
    error,
    meta,
  };
}

function isValidKey(key) {
  return [
    'type',
    'payload',
    'error',
    'meta',
  ].indexOf(key) > -1;
}
