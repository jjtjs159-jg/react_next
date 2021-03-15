import React, { memo, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './FilledButton.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary';
    text?: string;
    fullSize?: boolean;
}

export type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultProps: Partial<BaseProps> = {
    color: 'primary',
    size: 'small',
};

const FilledButton: React.FC<Props> = ({
    size,
    text,
    color,
    fullSize,
    disabled,
    className,
    children,
    ...rest
}) => {
    const classes = cx('filled', className, size, color, {
        disabled,
        fullSize,
    });

    return (
        <button className={classes} {...rest}>
            {text || children}
        </button>
    );
};

FilledButton.defaultProps = defaultProps;

export default memo(FilledButton);
