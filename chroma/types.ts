import React from 'react';

/**
 * Strict typing of an object for string key and value
 */
export interface StringMap {
    [s:string]: string;
};

export type EventCallback = (evt?:React.SyntheticEvent<HTMLElement>)=>void;
export const NoOp:EventCallback = ()=>{};