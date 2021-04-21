import { FunctionComponent, memo, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './TextButton.module.scss';

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

const TextButton: FunctionComponent<Props> = ({
    size,
    text,
    color,
    fullSize,
    disabled,
    className,
    children,
    ...rest
}) => {
    const classes = cx('text', className, size, color, {
        disabled,
        fullSize,
    });

    return (
        <button className={classes} {...rest}>
            {text || children}
        </button>
    );
};

TextButton.defaultProps = defaultProps;

export default memo(TextButton);
