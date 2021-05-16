import { FunctionComponent, useRef, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { GNBLayout } from 'components/layouts';
import { Button } from '@material-ui/core';
import { Section } from 'components/contents';
import { Headline } from 'components/typography';
import { withTranslation } from 'i18n';
import { TFunction } from 'next-i18next';
import colors from 'constants/colors';
import CityList from './CityList';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface Props {
  readonly t: TFunction;
  dispatch: Dispatch;
}

const Index: FunctionComponent<Props> = ({ t }) => {
  const targetRef = useRef<HTMLHeadingElement>(null);

  const cityList = useMemo(
    () => [
      {
        name: 'seoul',
        img: '/korea/seoul/seoul_01.jpg',
        to: '/',
      },
      {
        name: 'busan',
        img: '/korea/busan/busan_01.jpg',
        to: '/',
      },
      {
        name: 'incheon',
        img: '/korea/incheon/incheon_01.jpg',
        to: '/',
      },
      {
        name: 'jeju',
        img: '/korea/jeju/jeju_01.jpg',
        to: '/',
      },
      {
        name: 'gyeongju',
        img: '/korea/gyeongju/gyeongju_01.jpg',
        to: '/',
      },
      {
        name: 'yeosu',
        img: '/korea/yeosu/yeosu_01.jpg',
        to: '/',
      },
      {
        name: 'gangneung',
        img: '/korea/gangneung/gangneung_01.jpg',
        to: '/',
      },
      {
        name: 'gapyeong',
        img: '/korea/gapyeong/gapyeong_01.jpg',
        to: '/',
      },
    ],
    [],
  );

  return (
    <GNBLayout title="Travel Korea">
      <Section innerRef={targetRef}>
        <div className={styles['service-wrap']}>
          {cityList.map((city, i) => (
            <CityList t={t} content={city} key={`${city.name}-${i}`} />
          ))}
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
          {[1, 2, 3, 4].map((cell, i) => (
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
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

export default withTranslation('common')(connect(mapStateToProps)(Index));
