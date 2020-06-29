import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { ClassResolver, compileClasses } from './utils/classes';
import { StyleResolver, compileStyles } from './utils/styles';

import { FlexCustomProps } from './flex';
import { GridCustomProps } from './grid';

export enum DisplayProp {
    NONE = 'none',
    BLOCK = 'block',
    INLINE = 'inline',
    INLINE_BLOCK = 'inline-block',
    FLEX = 'flex',
    INLINE_FLEX = 'inline-flex',
    GRID = 'grid',
    INLINE_GRID = 'inline-grid',
    FLOW_ROOT = 'flow-root',
};

export interface ComponentProps {
    tagName    :string|React.FunctionComponent,
    display    :DisplayProp|string,
    classes?    :ClassResolver,
    styles?     :StyleResolver,
};

export const ComponentCustomProps = [
    'tagName', 'display', 'classes', 'styles',
];

export interface ComponentState {

};

export const ComponentPropTypes = {
    tagName: PropTypes.string,

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
};

export const ComponentDefaultProps:ComponentProps = {
    tagName: 'div',
    display: 'block',

    classes: {},
    styles: {},
};

export type ComponentCustomRender = (props:any) => React.ReactNode;

export class Component<PropType extends ComponentProps, StateType extends ComponentState> extends React.Component<ComponentProps, any> {
    static propBlacklist = [ 
        ...ComponentCustomProps,
        ...FlexCustomProps,
        ...GridCustomProps,,
    ];

    static propTypes = { ...ComponentPropTypes };

    static defaultProps:ComponentProps = { ...ComponentDefaultProps };

    state:Readonly<StateType> = {} as StateType;

    constructor(props:PropType) {
        super(props);

        this.render = this.render.bind(this);
    }

    public render():ReactNode {
        //Compute the class names
        const classNames = compileClasses(this.classes, this.props.classes || {});

        //Compute the styles
        const style = this.getCompiledStyles();

        //Pull out the custom properties and just use the remaining
        const htmlProps:({[key:string]:any}) = Object.assign({}, this.props);
        Object.keys(htmlProps)
            .filter(prop => (Component.propBlacklist.indexOf(prop as never) >= 0))
            .forEach(prop => { delete htmlProps[prop]; });

        const compProps = {
            ...htmlProps,
            className: classNames,
            style,
        } as React.Attributes;

        return this.renderComponent(compProps);
    };

    protected renderComponent(props:any):React.ReactNode {
        return React.createElement(this.props.tagName || 'div', props, this.props.children);
    };

    protected get classes():ClassResolver {
        return {};
    }

    private getCompiledStyles():StyleResolver {
        const { display } = this.props;

        const componentStyles:any = {};
        if(display !== ComponentDefaultProps.display) componentStyles.display = display;

        return compileStyles(this.styles, componentStyles, this.props.styles || {});
    }

    protected get styles():StyleResolver {
        return {};
    }
};
