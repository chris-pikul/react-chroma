import { StringMap } from './types';

import { ButtonClasses } from './core/buttons';

/**
 * Common class names that apply to most (all) components
 */
export const CoreClasses:StringMap = {
    'ACTIVE': 'b_active',
    'FOCUSED': 'b_focused',
    'DISABLED': 'b_disabled',
    'LOADING': 'b_loading',
};

/**
 * Enumerated class names for standard (S)CSS classes
 */
const Classes:StringMap = {
    ...CoreClasses,

    ...ButtonClasses,
};

/**
 * Collection of user added classes
 */
export const CustomClasses:StringMap = {

};

/**
 * Adds a class name to the registry for use in components
 * @param key [string] Object key for lookup
 * @param name [string] Class name for injection
 */
export function AddClass(key:string, name:string) {
    CustomClasses[key] = name;
    Classes[key] = name;
}

/**
 * Removes a class name from the registry.
 * Warning: Dangerous to do with framework provided class keys
 * @param key Class name key to remove
 */
export function RemoveClass(key:string) {
    if(CustomClasses.hasOwnProperty(key)) {
        do {
            delete CustomClasses[key];
        } while(CustomClasses.hasOwnProperty(key));
    }

    if(Classes.hasOwnProperty(key)) {
        do {
            delete Classes[key];
        } while(Classes.hasOwnProperty(key));
    }
}

export default Classes;


export type ClassesFunction = () => (string|null)[];
export type Classes = ( string | string[] | ClassesFunction);
export interface ClassesProps {
    classes?: Classes;
}

/**
 * Compiles the classes provided to a component into a single CSS class name string
 * @param componentClassList The initial array of class names from the component
 * @param classList Either a string, array of strings, or a function returning an array of strings
 */
export function CompileClasses(componentClassList:ClassesFunction, classList?:(string|string[]|ClassesFunction)): string {
    var classes = componentClassList().filter(c => typeof c === 'string').join(' ');
    if(!classList)
        return classes;

    if(typeof classList === 'string')
        return classes+' '+classList;
    
    var subClasses:string;
    if (typeof classList === 'function')
        subClasses = classList().filter(c => typeof c === 'string').join(' ');
    else
        subClasses = classList.join(' ');

    return classes+' '+subClasses;;
}

