import PropTypes from 'prop-types';

import { StyleResolver} from './utils/styles';

export enum FlexDirection {
    ROW = 'row',
    COLUMN = 'column',
    ROW_REVERSE = 'row-reverse',
    COLUMN_REVERSE = 'column-reverse',
};

export enum FlexWrap {
    WRAP = 'wrap',
    NO_WRAP = 'no-wrap',
    WRAP_REVERSE = 'wrap-reverse',
};

export enum FlexJustify {
    START = 'flex-start',
    END = 'flex-end',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
    SPACE_EVENLY = 'space-evenly',
};

export enum FlexAlign {
    START = 'flex-start',
    END = 'flex-end',
    CENTER = 'center',
    STRETCH = 'stretch',
    BASELINE = 'baseline',
};

export enum FlexContent {
    START = 'flex-start',
    END = 'flex-end',
    CENTER = 'center',
    STRETCH = 'stretch',
    SPACE_BETWEEN = 'space-between',
    SPACE_AROUND = 'space-around',
};

export interface FlexProps {
    flex?       :number|string,
    flexGrow?   :number|string,
    flexShrink? :number|string,
    flexBasis?  :number|string,

    flexDirection?  :FlexDirection,
    flexWrap?       :FlexWrap,
    flexJustify?    :FlexJustify,
    flexAlign?      :FlexAlign,
    flexContent?    :FlexContent,

    flexOrder?      :number,
    flexAlignSelf?  :FlexAlign|string,
};

export const FlexPropTypes = {
    flex: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    flexGrow: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    flexShring: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
    flexBasis: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),

    flexDirection: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
    flexWrap: PropTypes.oneOf(['wrap','no-wrap','wrap-reverse']),
    flexJustify: PropTypes.oneOf(['flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
    flexAlign: PropTypes.oneOf(['flex-start', 'flex-end', 'stretch', 'center']),
    flexContent: PropTypes.oneOf(['flex-start', 'flex-end', 'stretch', 'center', 'space-between', 'space-around']),

    flexOrder: PropTypes.number,
    flexAlignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'stretch', 'center']),
};

export const FlexDefaultProps:FlexProps = {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',

    flexDirection: FlexDirection.ROW,
    flexWrap: FlexWrap.NO_WRAP,
    flexJustify: FlexJustify.START,
    flexAlign: FlexAlign.START,
    flexContent: FlexContent.START,

    flexOrder: 0,
    flexAlignSelf: 'auto',
};

export function compileFlexStyles(props:any):StyleResolver {
    if(typeof props !== 'object') throw new TypeError("compileFlexStyles must be supplied with an object of properties");

    const {
        flex, flexGrow, flexShrink, flexBasis,
        flexDirection, flexWrap, flexJustify, flexAlign, flexContent,
        flexOrder, flexAlignSelf,
    } = Object.assign(FlexDefaultProps, props);
 
    if(props.display && (props.display === 'flex' || props.display === 'inline-flex')) {
        return {
            'display': props.display,
            
            'flex': (flex || `${flexGrow} ${flexShrink} ${flexBasis}`),
            'flexFlow': `${flexDirection} ${flexWrap}`,
            'justifyContent': flexJustify,
            'alignItems': flexAlign,
            'alignContent': flexContent,
    
            'order': flexOrder || 0,
            'alignSelf': flexAlignSelf || 'auto',
        };
    }

    //This is a child object, or at least isn't under the flex display constraint
    return {
        'order': flexOrder || 0,
        'alignSelf': flexAlignSelf || 'auto',
    }
}
