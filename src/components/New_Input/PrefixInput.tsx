import { FunctionComponent, ReactNode, MutableRefObject } from 'react';
import BaseInput from './BaseInput';
import classNames from 'classnames/bind';
import styles from './PrefixInput.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
    prefix: ReactNode;
    arrow?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    color?: 'primary' | 'default';
    className?: string;
}

const defaultProps: Partial<Props> = {
    color: 'default',
};

export type Props = BaseProps & Omit<Input.BaseInputProps, 'prefix'>;

const PrefixInput: FunctionComponent<Props> = ({ prefix, arrow, color, className, ...rest }) => {
    const classes = cx('input-wrapper', className);
    const prefixClasses = cx('prefix', color);

    return (
        <div className={classes}>
            <span className={prefixClasses}>{prefix}</span>
            <BaseInput className={cx('input')} type="number" arrow={arrow} {...rest} />
        </div>
    );
};

export default PrefixInput;
