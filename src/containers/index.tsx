import { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { GNBLayout } from 'components/layouts';
import { Button } from '@material-ui/core';
import { Section } from 'components/contents';
import { Headline } from 'components/typography';
import colors from 'constants/colors';
// import * as userActions from 'actions/User';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface Props {
    classes: any;
    dispatch: Dispatch;
    [key: string]: any;
}

interface State {
    isActive: boolean;
}

class Index extends Component<Props, State> {
    private contentRef = createRef<HTMLHeadingElement>();
    constructor(props: Props) {
        super(props);

        this.state = {
            isActive: false,
        };
    }

    render() {
        const continentList = [
            {
                name: 'Seoul',
                img: '/korea/seoul/seoul_01.jpg',
                to: '/',
            },
            {
                name: 'Busan',
                img: '/korea/busan/busan_01.jpg',
                to: '/',
            },
            {
                name: 'Incheon',
                img: '/korea/incheon/incheon_01.jpg',
                to: '/',
            },
            {
                name: 'Jeju',
                img: '/korea/jeju/jeju_01.jpg',
                to: '/',
            },
            {
                name: 'Gyeongju',
                img: '/korea/gyeongju/gyeongju_01.jpg',
                to: '/',
            },
            {
                name: 'Yeosu',
                img: '/korea/yeosu/yeosu_01.jpg',
                to: '/',
            },
            {
                name: 'Gangneung',
                img: '/korea/gangneung/gangneung_01.jpg',
                to: '/',
            },
            {
                name: 'Gapyeong',
                img: '/korea/gapyeong/gapyeong_01.jpg',
                to: '/',
            },
        ];

        return (
            <GNBLayout title="Travel the world">
                <Section innerRef={this.contentRef}>
                    <div className={styles['service-wrap']}>
                        {continentList.map((continent, i) => {
                            const inner = cx('vertical-wrap', {
                                default: !continent.img,
                            });
                            return (
                                <article className={styles.service} key={`${continent.name}-${i}`}>
                                    <i className={styles.mask} />
                                    <figure className={inner}>
                                        <img
                                            className={styles.image}
                                            src={continent.img || '/photo.png'}
                                            data-src={continent.img}
                                            alt="cover"
                                        />
                                        <figcaption>
                                            <p>{continent.name}</p>
                                        </figcaption>
                                    </figure>
                                </article>
                            );
                        })}
                    </div>
                </Section>
                <Section title="Enjoy Hygge Life">
                    <img
                        className={styles.pattern}
                        src="/mountain.png"
                        data-src="/mountain.png"
                        alt="laptop logo"
                    />
                </Section>
                <Section title="Carefully crafted resources">
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
                </Section>
                <Section title="Stay up-to-date with our next projects">
                    <div className={styles.cover}>
                        <div className={styles.inner}>
                            {/* Color Navy */}
                            <Headline level={1}>Crush it together</Headline>
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
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                    <div className={styles.more}></div>
                </Section>
                <Section>
                    <div className={styles.landscape}>
                        <div className={styles.inner}>
                            {/* Color Navy */}
                            <Headline level={2} textcase="uppercase" margin>
                                are you ready to enjoy hygge life?
                            </Headline>
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
                                Yes,&nbsp;
                                <span className={styles['button-text']}>I’m Ready.&nbsp;</span>
                                Sign Me Up Now
                            </Button>
                        </div>
                    </div>
                </Section>
            </GNBLayout>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(Index);
