import React, { Component } from 'react';

import { Button } from 'react-basics';

export default class Example extends Component {
    render() {
        return <React.Fragment>
            <span>Some text here</span>
            <Button>Standard</Button>
            <Button disabled>Disabled</Button>
            <Button shape='PILL' >Pill</Button>
            <Button shape='SHARP'>Sharp</Button>
            <Button kind='OUTLINE'>Outline</Button>
            <Button kind='OUTLINE' shape='PILL'>Outline Pill</Button>
            <Button loading>Loading</Button>
            <Button kind='OUTLINE' shape='PILL' loading >Loading Pill</Button>
        </React.Fragment>
    }
}