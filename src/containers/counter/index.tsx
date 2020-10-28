import { Component } from 'react';

interface Props {
    def?: any;
    // value: number;
    // title: string;
}

interface State {
    value: number;
    title: string;
}

class Counter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            value: 0,
            title: '',
        };
    }

    changeTitle = (e: any) => {
        this.setState({
            title: e.target.value,
        });
    };

    increment = () => {
        this.setState({
            value: this.state.value + 1,
        });
    };

    render() {
        return (
            <div>
                <input value={this.state.title} id="title" onChange={this.changeTitle} />
                <b>{this.state.value}</b>
                <button id="up" onClick={this.increment}>
                    증가
                </button>
            </div>
        );
    }
}

export default Counter;
