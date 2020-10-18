import { Component, Fragment } from 'react';
import { Header } from 'components/headers';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

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

    render() {
        return (
            <Fragment>
                <Header />
                <div className={cx('index-background')}>
                    <img src="/leaves.png" alt="leavs" />
                </div>
            </Fragment>
        );
    }
}

export default Index;
