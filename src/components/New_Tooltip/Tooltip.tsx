import { FunctionComponent, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Tooltip.module.scss';

const cx = classNames.bind(styles);

export interface Props {
    // @TODO
    // placement에 따른 화살표 방향 조절
    // placement: ''
    value: string;
}

const Tooltip: FunctionComponent<Props> = ({ value }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>{value}</div>
        </div>
    );
};

export default memo(Tooltip);
