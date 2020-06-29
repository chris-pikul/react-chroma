import React from 'react';

import { compileClasses, style, compileStyles } from 'react-chroma';

import {
    Panel, FlexPanel, GridPanel
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

        <Panel>My Panel</Panel>
        <FlexPanel>
            <span>Flex Panel First</span>
            <span>Flex Panel Second</span>
            <span>Flex Panel Third</span>
            <span>Flex Panel Fourth</span>
        </FlexPanel>
        <GridPanel>
            <span>Grid Panel First</span>
            <span>Grid Panel Second</span>
            <span>Grid Panel Third</span>
            <span>Grid Panel Fourth</span>
        </GridPanel>
    </>
};