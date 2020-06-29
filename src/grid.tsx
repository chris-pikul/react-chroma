import PropTypes from 'prop-types';
import { StyleResolver } from 'utils/styles';

export enum GridJustifyItems {
    START = 'start',
    END = 'end',
    CENTER = 'center',
    STRETCH = 'stretch',
};

export enum GridAlignItems {
    START = 'start',
    END = 'end',
    CENTER = 'center',
    STRETCH = 'stretch',
};

export enum GridJustifyContent {
    START = 'start',
    END = 'end',
    CENTER = 'center',
    STRETCH = 'stretch',
    SPACE_AROUND = 'space-around',
    SPACE_BETWEEN = 'space-between',
    SPACE_EVENLY = 'space-evenly',
};

export enum GridAlignContent {
    START = 'start',
    END = 'end',
    CENTER = 'center',
    STRETCH = 'stretch',
    SPACE_AROUND = 'space-around',
    SPACE_BETWEEN = 'space-between',
    SPACE_EVENLY = 'space-evenly',
};

export enum GridJustifySelf {
    AUTO = 'auto',
    START = 'start',
    END = 'end',
    CENTER = 'center',
    STRETCH = 'stretch',
};

export enum GridAlignSelf {
    START = 'start',
    END = 'end',
    CENTER = 'center',
    STRETCH = 'stretch',
};

export interface GridProps {
    gridJustifyItems?       :GridJustifyItems,
    gridJustifyContent?     :GridJustifyContent,
    gridJustifySelf?        :GridJustifySelf,
    gridAlignItems?         :GridAlignItems,
    gridAlignContent?       :GridAlignContent,
    gridAlignSelf?          :GridAlignSelf,
};

export const GridPropTypes = {
    gridJustifyItems: PropTypes.oneOf(['start','end','center','stretch']),
    gridJustifyContent: PropTypes.oneOf(['start','end','center','stretch','space-around','space-between','space-evenly']),
    gridJustifySelf: PropTypes.oneOf(['auto', 'start','end','center','stretch']),
    gridAlignItems: PropTypes.oneOf(['start','end','center','stretch']),
    gridAlignContent: PropTypes.oneOf(['start','end','center','stretch','space-around','space-between','space-evenly']),
    gridAlignSelf: PropTypes.oneOf(['start','end','center','stretch']),
};

export const GridDefaultProps:GridProps = {
    gridJustifyItems: GridJustifyItems.STRETCH,
    gridJustifyContent: GridJustifyContent.STRETCH,
    gridJustifySelf: GridJustifySelf.AUTO,
    gridAlignItems: GridAlignItems.STRETCH,
    gridAlignContent: GridAlignContent.STRETCH,
    gridAlignSelf: GridAlignSelf.STRETCH,
};

export function compileGridStyles(props:any):StyleResolver {
    const {
        gridJustifyItems, gridJustifyContent, gridJustifySelf,
        gridAlignItems, gridAlignContent, gridAlignSelf,
    } = Object.assign(GridDefaultProps, props);

    if(props.display && (props.display === 'grid' || props.display === 'inline-grid')) {
        return {
            'justifyItems': gridJustifyItems,
            'justifyContent': gridJustifyContent,
            'justifySelf': gridJustifySelf,
            'alignItems': gridAlignItems,
            'alignContent': gridAlignContent,
            'alignSelf': gridAlignSelf,
        };
    }

    return {
        'justifySelf': gridJustifySelf,
        'alignSelf': gridAlignSelf,
    }
}
