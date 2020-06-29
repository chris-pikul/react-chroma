import React from 'react';

import { ClassResolver } from '../utils/classes';
import { StyleResolver } from '../utils/styles';
import { Component, ComponentProps, ComponentState, ComponentPropTypes, ComponentDefaultProps } from '../component';
import { FlexProps, FlexPropTypes, FlexDefaultProps, compileFlexStyles } from '../flex';
import { GridProps, GridPropTypes, GridDefaultProps, compileGridStyles } from '../grid';

export interface PanelProps extends ComponentProps {

};

export interface PanelState extends ComponentState {

};

export const PanelPropTypes = {
    ...ComponentPropTypes,
};

export const PanelDefaultProps:PanelProps = {
    ...ComponentDefaultProps,
};

export class Panel<PT extends PanelProps, ST extends PanelState> extends Component<PanelProps, PanelState> {
    static propTypes = { ...PanelPropTypes };
    static defaultProps = { ...PanelDefaultProps };

    state:Readonly<ST> = {} as ST;

    constructor(props:PT) {
        super(props);
    }

    protected renderComponent(props:any):React.ReactNode {
        return <div {...props}>{ this.props.children }</div>
    }

    protected get classes():ClassResolver {
        return [ 'c-panel' ];
    }

    protected get styles():StyleResolver {
        return {};
    }
}


export interface FlexPanelProps extends ComponentProps, FlexProps {

};

export interface FlexPanelState extends ComponentState {

};

export const FlexPanelPropTypes = {
    ...ComponentPropTypes,
    ...FlexPropTypes,
};

export const FlexPanelDefaultProps:PanelProps = {
    ...ComponentDefaultProps,
    ...FlexDefaultProps,
    display: 'flex',
};

export class FlexPanel<PT extends FlexPanelProps, ST extends FlexPanelState> extends Panel<PanelProps, PanelState> {
    static propTypes = { ...FlexPanelPropTypes };
    static defaultProps = { ...FlexPanelDefaultProps };

    state:Readonly<ST> = {} as ST;

    constructor(props:PT) {
        super(props);
    }

    protected renderComponent(props:any):React.ReactNode {
        return <div {...props}>{ this.props.children }</div>
    }

    protected get classes():ClassResolver {
        return [ 'c-panel', 'flex' ];
    }

    protected get styles():StyleResolver {
        return compileFlexStyles(this.props);
    }
}


export interface GridPanelProps extends ComponentProps, GridProps {

};

export interface GridPanelState extends ComponentState {

};

export const GridPanelPropTypes = {
    ...ComponentPropTypes,
    ...GridPropTypes,
};

export const GridPanelDefaultProps:PanelProps = {
    ...ComponentDefaultProps,
    ...GridDefaultProps,
    display: 'grid',
};

export class GridPanel<PT extends GridPanelProps, ST extends GridPanelState> extends Panel<PanelProps, PanelState> {
    static propTypes = { ...GridPanelPropTypes };
    static defaultProps = { ...GridPanelDefaultProps };

    state:Readonly<ST> = {} as ST;

    constructor(props:PT) {
        super(props);
    }

    protected renderComponent(props:any):React.ReactNode {
        return <div {...props}>{ this.props.children }</div>
    }

    protected get classes():ClassResolver {
        return [ 'c-panel', 'grid' ];
    }

    protected get styles():StyleResolver {
        return compileGridStyles(this.props);
    }
}