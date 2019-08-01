import { StringMap } from './types';
/**
 * Common class names that apply to most (all) components
 */
export declare const CoreClasses: StringMap;
/**
 * Enumerated class names for standard (S)CSS classes
 */
declare const Classes: StringMap;
/**
 * Collection of user added classes
 */
export declare const CustomClasses: StringMap;
/**
 * Adds a class name to the registry for use in components
 * @param key [string] Object key for lookup
 * @param name [string] Class name for injection
 */
export declare function AddClass(key: string, name: string): void;
/**
 * Removes a class name from the registry.
 * Warning: Dangerous to do with framework provided class keys
 * @param key Class name key to remove
 */
export declare function RemoveClass(key: string): void;
export default Classes;
export declare type ClassesFunction = () => (string | null)[];
export declare type Classes = (string | string[] | ClassesFunction);
export interface ClassesProps {
    classes?: Classes;
}
/**
 * Compiles the classes provided to a component into a single CSS class name string
 * @param componentClassList The initial array of class names from the component
 * @param classList Either a string, array of strings, or a function returning an array of strings
 */
export declare function CompileClasses(componentClassList: ClassesFunction, classList?: (string | string[] | ClassesFunction)): string;
