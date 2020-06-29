import React from 'react';
//import PropTypes from 'prop-types';

import { ClassResolver } from '../utils/classes';
import { StyleResolver } from '../utils/styles';
import { Component, ComponentProps, ComponentState, ComponentPropTypes, ComponentDefaultProps } from '../component';

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

export default class Panel<PT extends PanelProps, ST extends PanelState> extends Component<PanelProps, PanelState> {
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
