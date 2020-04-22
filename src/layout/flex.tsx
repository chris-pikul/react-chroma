import React from 'react';
import PropTypes from 'prop-types';

import { ClassResolver, compileClasses } from '../utils/classes';
import { StyleResolver, compileStyles } from '../utils/styles';

export enum FlexDirection {
    ROW = 'ROW',
    COLUMN = 'COLUMN',
    ROW_REVERSE = 'ROW_REVERSE',
    COLUMN_REVERSE = 'COLUMN_REVERSE',
};

export enum FlexWrap {
    WRAP = 'wrap',
    NO_WRAP = 'no-wrap',
    WRAP_REVERSE = 'wrap-reverse',
};

export enum FlexJustify {
    START = 'START',
    END = 'END',
    SPACE_BETWEEN = 'SPACE_BETWEEN',
    SPACE_AROUND = 'SPACE_AROUND',
    SPACE_EVENLY = 'SPACE_EVENLY',
};

export enum FlexAlign {
    START = 'START',
    END = 'END',
    CENTER = 'CENTER',
    STRETCH = 'STRETCH',
    BASELINE = 'BASELINE',
};

export enum FlexContent {
    START = 'START',
    END = 'END',
    CENTER = 'CENTER',
    STRETCH = 'STRETCH',
    SPACE_BETWEEN = 'SPACE_BETWEEN',
    SPACE_AROUND = 'SPACE_AROUND',
};

export interface FlexProps {
    classes?    :ClassResolver,
    styles?     :StyleResolver,

    flex?       :number|string,
    flexGrow?   :number|string,
    flexShrink? :number|string,
    flexBasis?  :number|string,

    direction?  :FlexDirection|string,
    wrap?       :FlexWrap|string,
    justify?    :FlexJustify|string,
    align?      :FlexAlign|string,
    content?    :FlexContent|string,
};

//type StringMap = { [key:string]: string };

export default class Flex extends React.PureComponent<FlexProps, any> {
    static propTypes = {
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
    
        direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
        wrap: PropTypes.oneOf(['wrap','no-wrap','wrap-reverse']),
        justify: PropTypes.oneOf(['flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
        align: PropTypes.oneOf(['flex-start', 'flex-end', 'stretch', 'center']),
        content: PropTypes.oneOf(['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around']),
    };

    static defaultProps = {
        classes: {},
        styles: {},
    
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto',
    
        direction: 'column',
        wrap: 'no-wrap',
        justify: 'flex-start',
        align: 'flex-start',
        content: 'flex-start',
    };

    render() {
        const { 
            classes, styles,
            flex, flexGrow, flexShrink, flexBasis,
            direction, wrap, justify, align, content,
        } = this.props;

        //Compute the class names
        const classNames = compileClasses('c-flex', classes || {});

        //Compute the styles
        const style = compileStyles({
            flex: (flex || `${flexGrow} ${flexShrink} ${flexBasis}`),

            display: 'flex',
            flexDirection: (direction || 'column'),
            flexWrap: (wrap || 'no-wrap'),
            justifyContent: (justify || 'flex-start'),
            alignItems: (align || 'flex-start'),
            alignContent: (content || 'flex-start'),

        }, styles || {});

        //Pull out the custom properties and just use the remaining
        const htmlProps:({[key:string]:any}) = Object.assign({}, this.props);
        Object.keys(Flex.defaultProps).forEach(prop => { delete htmlProps[prop]; });

        return <div {...htmlProps} className={classNames} style={style}>{ this.props.children }</div>
    }

    static Row:React.FunctionComponent<FlexProps> = (props:FlexProps) => <Flex {...props} direction='row' />;
    static Col:React.FunctionComponent<FlexProps> = (props:FlexProps) => <Flex {...props} direction='column' />;
}
