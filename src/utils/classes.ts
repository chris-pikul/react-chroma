import { resolveTruthy } from './types';

export type ClassObject = { [key:string]: any };
export type ClassFunction = () => (ClassObject | ClassFunction | string[] | string);
export type ClassResolver = (ClassObject | ClassFunction | string[] | string);

/**
 * Takes an incoming object|array|function|string and compiles
 * it down into a className string (space separated).
 * Depending on the parameter type, the following is performed:
 *  - Object: Each key is used as the class name, the key is used
 *      if the value of it resolves truthy (see: resolveTruthy).
 *  - Array: Each value (string) is joined together to form the
 *      final className string.
 *  - Function: The function is ran, and the results are recursively
 *      compiled using this function (compileClasses). The final
 *      result is returned.
 *  - String: The supplied value is passed through.
 * @see resolveTruthy
 * @param classes Input to compile
 */
export function compileClass( classes:ClassResolver ):string {
    if(typeof classes === 'function') {
        return compileClass( classes() );
    } else if(Array.isArray(classes)) {
        return classes.join(' ');
    } else if(typeof classes === 'string') {
        return classes;
    }

    //Object reducer
    return Object.keys(classes)
            .filter(key => resolveTruthy(classes[key]))
            .join(' ');
}

/**
 * Compiles multiple (variable amount) of classes using compileClass.
 * 
 * Depending on the parameter type, the following is performed:
 *  - Object: Each key is used as the class name, the key is used
 *      if the value of it resolves truthy (see: resolveTruthy).
 *  - Array: Each value (string) is joined together to form the
 *      final className string.
 *  - Function: The function is ran, and the results are recursively
 *      compiled using this function (compileClasses). The final
 *      result is returned.
 *  - String: The supplied value is passed through.
 * 
 * TODO: Make a better version of this that joins the objects in order
 * to properly use the Object.assign() operator.
 * 
 * @see compileClass
 * @param classes Variable amount of ClassResolver objects
 */
export function compileClasses( ...classes:ClassResolver[] ):string {
    const classNamesComp = classes.map(cls => compileClass(cls).split(' '));
    const classMap:({[key:string]:boolean}) = {};
    for(const clsArr of classNamesComp) {
        for(const cls of clsArr) {
            classMap[cls] = true;
        }
    }

    return Object.keys(classMap).join(' ').trim();
}