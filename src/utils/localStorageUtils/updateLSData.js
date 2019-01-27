import {localStorageConst} from '../constants';

/**
 * Method adds data to local storage.
 * @param data {object | string | number} Data to be added to the local storage.
 */
export const updateLSData = data => {
    return localStorageConst.setItem('data', JSON.stringify(data));
};
