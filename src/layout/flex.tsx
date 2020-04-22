import React, { ReactElement, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

import { ClassResolver, compileClasses } from '../utils/classes';
import { StyleResolver, compileStyles } from '../utils/styles';

export enum FlexDirection {
    ROW = 'ROW',
    COLUMN = 'COLUMN',
};

export interface FlexProps extends HTMLAttributes<any> {
    children?   :React.ReactElement<any,any>[],
    classes?    :ClassResolver,
    styles?     :StyleResolver,
    direction?  :FlexDirection,
};

const rowCustomProps = [
    'classes', 'styles', 'props',
    'direction',
];

function Flex(props:FlexProps):ReactElement<FlexProps, any> {
    const classes = compileClasses(Flex.RootClass, {
        'c-row_row': props.direction === Flex.Direction.ROW,
        'c-row_col': props.direction === Flex.Direction.COLUMN,
    }, props.classes || {});
    const styles = compileStyles(props.styles || {});

    const htmlProps:({[key:string]:any}) = Object.assign({}, props);
    rowCustomProps.forEach(prop => { delete htmlProps[prop]; });

    return <div {...htmlProps} className={classes} style={styles}>{ props.children }</div>
}

Flex.RootClass = 'c-row';


Flex.Direction = {
    ROW: 'ROW',
    COLUMN: 'COLUMN',
};

Flex.propTypes = {
    classes: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.func,
        PropTypes.string,
    ]),
    styles: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
        PropTypes.func,
        PropTypes.string,
    ]),
    direction: PropTypes.oneOf(['ROW', 'COLUMN']),
};

Flex.defaultProps = {
    classes: {},
    styles: {},
    props: {},
    direction: 'ROW',
};

export default Flex;