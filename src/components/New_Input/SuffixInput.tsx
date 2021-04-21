import { FunctionComponent, ReactNode } from 'react';
import BaseInput from './BaseInput';
import classNames from 'classnames/bind';
import styles from './SuffixInput.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
    suffix: ReactNode;
    arrow?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    color?: 'primary' | 'default';
    className?: string;
}

export type Props = BaseProps & Omit<Input.BaseInputProps, 'suffix'>;

const SuffixInput: FunctionComponent<Props> = ({ suffix, arrow, color, className, ...rest }) => {
    const classes = cx('input-wrapper', className);
    const suffixClasses = cx('suffix', color);

    return (
        <div className={classes}>
            <BaseInput className={cx('input')} type="number" arrow={arrow} {...rest} />
            <span className={suffixClasses}>{suffix}</span>
        </div>
    );
};

export default SuffixInput;
