import {types} from '../types/types';

export const setError = (err, input) => ({
    type: types.uiSetError,
    payload: err,
    input: input
});

export const removeError = () => ({
    type: types.uiRemoveError
});