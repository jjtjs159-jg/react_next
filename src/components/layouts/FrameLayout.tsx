import { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './FrameLayout.module.scss';

const cx = classNames.bind(styles);

const FrameLayout: FunctionComponent = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <main className={cx('main')}>{children}</main>
    </div>
  );
};

export default FrameLayout;
