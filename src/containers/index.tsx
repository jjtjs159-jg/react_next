import { Component, Fragment, createRef } from 'react';
// import { Header } from 'components/headers';
import DynamicHeader from 'components/headers/DynamicHeader';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Image from 'next/image';
import colors from 'constants/colors';
import { Button, withStyles } from '@material-ui/core';
import * as userActions from 'actions/User';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

// const Index: FunctionComponent = () => {
//     return <Fragment>메인페이지</Fragment>;
// };

interface Props {
    classes: any;
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
        // this.props.dispatch(userActions.getUser());
        this.handleScroll();
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
        const { classes } = this.props;
        const { isActive } = this.state;

        const continentList = [
            {
                name: 'Asis',
                to: '/',
            },
            {
                name: 'Europe',
                to: '/',
            },
            {
                name: 'Africa',
                to: '/',
            },
            {
                name: 'Oceania',
                to: '/',
            },
            {
                name: 'North America',
                to: '/',
            },
            {
                name: 'South America',
                to: '/',
            },
            {
                name: 'Comming soon ',
                to: '/',
                disabled: true,
            },
            {
                name: 'Comming soon ',
                to: '/',
                disabled: true,
            },
        ];

        const titleClasses = cx('main-title', {
            active: isActive,
        });

        return (
            <Fragment>
                <DynamicHeader stickyRef={this.contentRef} />
                <main className={styles.main}>
                    <section className={styles.section}>
                        <h2 className={titleClasses}>
                            <span>Travel the world</span>
                        </h2>
                        <div className={styles['content-wrap']} ref={this.contentRef}>
                            <span className={styles.wave} />
                            <div className={styles.content}>
                                {continentList.map((continent) => {
                                    const inner = cx('vertical-wrap', {
                                        disabled: continent.disabled,
                                    });
                                    return (
                                        <article className={styles.service} key={continent.name}>
                                            <div className={inner}>
                                                <span>{continent.name}</span>
                                                <div className={styles['hover-content']}>
                                                    <h3>
                                                        <span>Look around</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles['section-title']}>
                            <span>Enjoy Hygge Life</span>
                        </h2>
                        <div className={styles['content-wrap']}>
                            <div className={styles.pattern}>--</div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles['section-title']}>
                            <span>Carefully crafted resources</span>
                        </h2>
                        <div className={styles['content-wrap']}>
                            <div className={styles['creator-list']}>
                                <div className={styles.cell}>
                                    <div className={styles.creator}>
                                        <h4>Front Roid</h4>
                                        <p>frontend developer</p>
                                    </div>
                                </div>
                                {[1, 2, 3, 4, 5, 6, 7].map((cell, i) => (
                                    <div className={styles.cell} key={i}>
                                        <div className={styles.creator}>
                                            <h4>any others</h4>
                                            <p>job</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles['section-title']}>
                            <span>Stay up-to-date with our next projects</span>
                        </h2>
                        <div className={styles['content-wrap']}>
                            <div className={styles.cover}>
                                <div className={styles.inner}>
                                    <h1>
                                        <span>Crush it together</span>
                                    </h1>
                                    <p className={styles.paragraph}>
                                        It is a life we create together. Waiting for good comments.
                                    </p>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        href="/contact"
                                        disableElevation
                                        style={{
                                            borderRadius: 50,
                                            backgroundColor: colors.colorDarkGreen,
                                        }}
                                        // className={classes.button}
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.more}></div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles['section-title']}>
                            <span>Stay up-to-date with our next projects</span>
                        </h2>
                        <div className={styles['content-wrap']}>
                            <div className={styles.landscape}>
                                <div className={styles.inner}>
                                    <h2>
                                        <span>are you ready to enjoy hygge life?</span>
                                    </h2>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        href="/contact"
                                        disableElevation
                                        style={{
                                            borderRadius: 50,
                                            backgroundColor: colors.colorDarkGreen,
                                        }}
                                    >
                                        Yes, I’m Ready. Sign Me Up Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className={styles.footer}>
                    <p className={styles.greeting}>Thanks for stopping by</p>
                    <p className={styles.copyright}>
                        <span>
                            Copyright © 2020- Front Roid(Park JongGwang). All right reserved.
                        </span>
                    </p>
                </footer>
            </Fragment>
        );
    }
}

// const materialStyles = {
//     button: {
//         borderRadius: 50,
//         backgroundColor: colors.colorGreen,
//         color: 'white',
//         // borderColor: colors.colorNavy,
//         '&:hover': {
//             backgroundColor: colors.colorDarkGreen,
//         },
//     },
// };

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    };
};

export default Index;
// export default connect(mapStateToProps)(withStyles(materialStyles)(Index));
// export default withStyles(materialStyles)(Index);
