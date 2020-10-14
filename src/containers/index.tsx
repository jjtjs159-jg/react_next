import React, { Component, Fragment } from 'react';
import { Header } from 'components/headers';

// const Index: FunctionComponent = () => {
//     return <Fragment>메인페이지</Fragment>;
// };

interface Props {
    [key: string]: any;
}

interface State {
    loaded: boolean;
}

class Index extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    static getDerivedStateFromProps(): State | null {
        console.log('zz');
        return null;
    }

    // handleClick = () => {
    //     this.setState({
    //         loaded: true,
    //     });
    // };

    render(): JSX.Element {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Index;
