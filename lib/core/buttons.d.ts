import { Component } from 'react';
import { StringMap, EventCallback } from '../types';
import { ClassesProps } from '../classes';
export declare const ButtonClasses: StringMap;
export declare enum ButtonShape {
    DEFAULT = "DEFAULT",
    PILL = "PILL",
    SHARP = "SHARP",
    CIRCLE = "CIRCLE"
}
export declare enum ButtonKind {
    DEFAULT = "DEFAULT",
    OUTLINE = "OUTLINE"
}
export interface ButtonProps extends ClassesProps {
    autoFocus: boolean;
    disabled: boolean;
    shape: ButtonShape;
    kind: ButtonKind;
    loading: boolean;
    onFocus: EventCallback;
    onBlur: EventCallback;
    onClick: EventCallback;
}
export interface ButtonState {
    isFocused: boolean;
    isDisabled: boolean;
}
export default class Button extends Component<ButtonProps, ButtonState> {
    static defaultProps: ButtonProps;
    state: ButtonState;
    private refEl;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ButtonProps): void;
    render(): JSX.Element;
    focus: () => void;
    blur: () => void;
    private getClasses;
    private handleFocus;
    private handleBlur;
}
