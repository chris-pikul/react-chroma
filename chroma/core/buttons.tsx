import React, { Component } from 'react';
import { StringMap, EventCallback, NoOp } from '../types';
import { CoreClasses, CompileClasses, ClassesFunction, ClassesProps } from '../classes';

export const ButtonClasses:StringMap = {
    BUTTON: 'b_button',

    PILL: 'b_button_pill',
    SHARP: 'b_button_sharp',
    OUTLINE: 'b_button_outline',
    CIRCLE: 'b_button_circle',
};

export enum ButtonShape {
    DEFAULT = 'DEFAULT',
    PILL = 'PILL',
    SHARP = 'SHARP',
    CIRCLE = 'CIRCLE',
};

export enum ButtonKind {
    DEFAULT = 'DEFAULT',
    OUTLINE = 'OUTLINE',
}

export interface ButtonProps extends ClassesProps {
    autoFocus: boolean,
    disabled: boolean,
    shape: ButtonShape,
    kind: ButtonKind,
    loading: boolean,

    onFocus: EventCallback,
    onBlur: EventCallback,
    onClick: EventCallback,
};

export interface ButtonState {
    isFocused: boolean,
    isDisabled: boolean,
};

export default class Button extends Component<ButtonProps, ButtonState> {
    static defaultProps:ButtonProps = {
        classes: '',

        autoFocus: false,
        disabled: false,
        shape: ButtonShape.DEFAULT,
        kind: ButtonKind.DEFAULT,
        loading: false,

        onFocus: NoOp,
        onBlur: NoOp,
        onClick: NoOp,
    };

    state:ButtonState = {
        isFocused: false,
        isDisabled: this.props.disabled,
    };

    private refEl = React.createRef<HTMLButtonElement>();

    componentDidMount() {
        if(this.props.autoFocus)
            this.focus();
    }

    componentWillReceiveProps(nextProps:ButtonProps) {
        if(this.props.disabled !== nextProps.disabled)
            this.setState({ isDisabled: nextProps.disabled });
    }
    
    render() {
        const { isDisabled } = this.state;

        const classes = CompileClasses(this.getClasses, this.props.classes);

        return <button ref={this.refEl} className={classes}
            onFocus={this.handleFocus} onBlur={this.handleBlur}
            disabled={isDisabled || this.props.loading}>
            { this.props.children }
        </button>
    }

    public focus = () => (this.refEl.current ? this.refEl.current.focus() : undefined);
    public blur = () => (this.refEl.current ? this.refEl.current.blur() : undefined );

    private getClasses:ClassesFunction = () => ([
        ButtonClasses.BUTTON,

        ( this.props.shape===ButtonShape.PILL ? ButtonClasses.PILL : null),
        ( this.props.shape===ButtonShape.SHARP ? ButtonClasses.SHARP : null),
        ( this.props.shape===ButtonShape.CIRCLE ? ButtonClasses.CIRCLE : null),

        ( this.props.kind===ButtonKind.OUTLINE ? ButtonClasses.OUTLINE : null),

        ( this.state.isFocused ? CoreClasses.FOCUSED : null),
        ( this.state.isDisabled ? CoreClasses.DISABLED : null),
        ( this.props.loading ? CoreClasses.LOADING : null),
    ]);

    private handleFocus = (evt:React.SyntheticEvent<HTMLButtonElement>) => {
        this.props.onFocus(evt);
        if(evt.isDefaultPrevented() || evt.isPropagationStopped()) return;
        this.setState({ isFocused: true });
    }

    private handleBlur = (evt:React.SyntheticEvent<HTMLButtonElement>) => {
        this.props.onBlur(evt);
        if(evt.isDefaultPrevented() || evt.isPropagationStopped()) return;
        this.setState({ isFocused: false });
    }
}