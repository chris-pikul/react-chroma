import React from 'react';

import { compileClasses, style, compileStyles } from 'react-chroma';

import {
    Flex,
} from 'react-chroma';

export default () => {
    const classes = {
        'some': true,
        'key': 1,
        'here': [false, 1],
        'more': () => (true),
        'not': [false, 0, null],
    };

    const preStyles = [
        { color: 'red' },
        { background: 'blue' },
        () => ({ fontFamily: 'monospace'}),
        'padding: 2rem',
        [ { textDecoration: 'underline' }, () => ('font-size: 2em') ],
        style`background: black; color: yellow`,
    ];

    return <>
        <h1 className={compileClasses(classes)} style={compileStyles(preStyles)}>Storyboard</h1>

        <Flex id='row1'><span>Row</span><span>Objects</span><span>Here</span></Flex>
    </>
};