import React from 'react';
/**
 * Strict typing of an object for string key and value
 */
export interface StringMap {
    [s: string]: string;
}
export declare type EventCallback = (evt?: React.SyntheticEvent<HTMLElement>) => void;
export declare const NoOp: EventCallback;
