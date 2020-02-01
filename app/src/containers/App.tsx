import * as React from 'react';

export class App extends React.Component<any, {}> {
    render() {
        return <h1>Hello from { this.props.title }!</h1>;
    }
}