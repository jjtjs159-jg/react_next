import { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './FrameLayout.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
}

const FrameLayout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
        <h1>
          <Link href="/">hyglife</Link>
        </h1>
      </div>
      <div className={cx('label')}>
        <h2>{title}</h2>
      </div>
      <main className={cx('main')}>{children}</main>
    </div>
  );
};

export default FrameLayout;
