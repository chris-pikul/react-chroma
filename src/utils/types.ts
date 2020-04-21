
/**
 * Attempts to turn the supplied value into a boolean truthy return.
 * Depending on the value type, the following processes are ran:
 *  - Function: The function is ran, and the return is converted to boolean
 *  - Object: If the object is not null, then the return is true if it
 *      has more than 0 keys.
 *  - Array: If the array is longer then 0, the values are mapped using
 *      this function (resolveTruthy), then reduced using an OR operation.
 *  - Other: A standard !!value operation is ran.
 * @param value Value to resolve to boolean
 */
export function resolveTruthy(value:any):boolean {
    if(value === null || typeof value === 'undefined')
        return false;
    
    if(typeof value === 'function') {
        return !!value();
    } else if (Array.isArray(value)) {
        return value.length > 0 && value
            .map(val => resolveTruthy(val))
            .reduce((acc, cur) => (acc || !!cur), false);
    } else if(typeof value === 'object') {
        return Object.keys(value).length > 0;
    }

    return !!value;
}