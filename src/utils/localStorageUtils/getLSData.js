import {localStorageConst} from '../constants';
import {find} from 'lodash';

/**
 * Method extracts data from local storage.
 * @param [path] {string} The specific field that is present in the target element in store's data.
 * @param [value] {string} The value for the search field.
 */
export const getLSData = (path = null, value = null) => {
    const data = JSON.parse(localStorageConst.getItem('data'));
    if (data && path && value) {
        return find(data, item => item[path] === value);
    } else if (data && !path && !value) {
        return data;
    }
};
