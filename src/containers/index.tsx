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
    isActive: boolean;
}

class Index extends Component<Props, State> {
    private contentRef = createRef<HTMLHeadingElement>();
    constructor(props: Props) {
        super(props);

        this.state = {
            loaded: false,
            isActive: false,
        };
    }

    componentDidMount() {
        this.props.dispatch(userActions.getUser());
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (this.contentRef.current) {
            if (window.scrollY > this.contentRef.current.offsetTop) {
                this.setState({
                    isActive: true,
                });
            } else {
                this.setState({
                    isActive: false,
                });
            }
        }
    };

    // handleClick = () => {
    //     this.setState({
    //         loaded: true,
    //     });
    // };

    render() {
        const { isActive } = this.state;
        const classes = cx('main-title', {
            active: isActive,
        });

        return (
            <Fragment>
                <DynamicHeader stickyRef={this.contentRef} />
                <main className={styles.main}>
                    <section className={styles.section}>
                        <h2 className={classes}>
                            <span>Smart Health Care</span>
                        </h2>
                        <div className={styles['content-wrap']} ref={this.contentRef}>
                            <span className={styles.wave} />
                            <div className={styles.content}>
                                <article className={styles.service}>
                                    <div className={styles['vertical-wrap']}>
                                        <span>Survey</span>
                                        <div className={styles['hover-content']}>
                                            <h3>
                                                <span>Take the quiz</span>
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                {[1, 2, 3].map((item, i) => (
                                    <article className={styles.service} key={i}>
                                        <div className={styles['vertical-wrap']}>
                                            <span>Coming Soon</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles['section-title']}>
                            <span>Enjoy Hygge Life</span>
                        </h2>
                        <div className={styles['content-wrap']}>
                            <div className={styles.pattern}>-- </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles['section-title']}>
                            {/* <span>Stay up-to-date with our next projects</span> */}
                            <span>Carefully crafted resources</span>
                        </h2>
                        <div className={styles['content-wrap']}>
                            <div className={styles.cover}>
                                <h1 className={styles.headline}>
                                    <span>
                                        Crush it together
                                        {/* 버튼 1 버튼 2 */}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className={styles.footer}>
                    <p className={styles.greeting}>Thanks for stopping by</p>
                    <p className={styles.copyright}>
                        <span>Copyright © 2020- Jakma(Park JongGwang). All right reserved.</span>
                    </p>
                </footer>
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
