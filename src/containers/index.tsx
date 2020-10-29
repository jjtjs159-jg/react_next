import { Component, Fragment, createRef } from 'react';
// import { Header } from 'components/headers';
import DynamicHeader from 'components/headers/DynamicHeader';
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
    private contentRef = createRef<HTMLHeadingElement>();
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
                <DynamicHeader stickyRef={this.contentRef} />
                <main className={styles.main}>
                    <section>
                        <h2 className={styles['main-title']}>
                            <span>Smart Health Care</span>
                        </h2>
                        <div className={styles['content-wrap']} ref={this.contentRef}>
                            <span className={styles.wave} />
                            <div className={styles.content}>
                                <article className={styles.service}>service</article>
                                <article className={styles.service}>service</article>
                                <article className={styles.service}>service</article>
                                <article className={styles.service}>service</article>
                                <article className={styles.service}>service</article>
                            </div>
                        </div>
                    </section>
                </main>
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
