import { Component, Fragment } from 'react';
import { Header } from 'components/headers';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as userActions from 'actions/User';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

// const Index: FunctionComponent = () => {
//     return <Fragment>메인페이지</Fragment>;
// };

interface Props {
    dispatch: Dispatch;
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

    componentDidMount() {
        this.props.dispatch(userActions.getUser());
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
const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Index);
