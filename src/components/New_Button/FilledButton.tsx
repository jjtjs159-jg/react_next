import { FunctionComponent, memo, ButtonHTMLAttributes, MouseEvent, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './FilledButton.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary';
    text?: string;
    fullSize?: boolean;
}

export type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const defaultProps: Partial<BaseProps> = {
    color: 'primary',
    size: 'small',
};

const FilledButton: FunctionComponent<Props> = ({
    size,
    text,
    color,
    fullSize,
    disabled,
    onClick,
    className,
    children,
    ...rest
}) => {
    const classes = cx('filled', className, size, color, {
        disabled,
        fullSize,
    });

    const handleClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            if (!disabled) {
                onClick && onClick(e);
            }
        },
        [disabled, onClick],
    );

    return (
        <button className={classes} onClick={handleClick} {...rest}>
            {text || children}
        </button>
    );
};

FilledButton.defaultProps = defaultProps;

export default memo(FilledButton);
