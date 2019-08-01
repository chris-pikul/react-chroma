import React, { Component } from 'react';
import { StringMap } from '../types';
import { CompileClasses, ClassesFunction, ClassesProps } from '../classes';

export const HeaderClasses:StringMap = {
    HEADER: 'c_header',
    TITLE: 'c_header-title',
};

export interface HeaderProps extends ClassesProps {
    title: (string|object|React.FunctionComponent),
};

export default class Header extends Component<HeaderProps> {
    static defaultProps:HeaderProps = {
        classes: '',
        title: <h1>Header</h1>,
    };

    render() {
        const classes = CompileClasses(this.getClasses, this.props.classes);

        return <header className={classes}>
            <div className={HeaderClasses.TITLE}>
                { this.props.title }
            </div>
        </header>
    }

    private getClasses:ClassesFunction = () => ([
        HeaderClasses.HEADER,
    ])
}