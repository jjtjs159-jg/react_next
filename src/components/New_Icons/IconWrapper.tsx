import { FunctionComponent, KeyboardEventHandler, memo, useCallback } from 'react';
import _ from 'lodash';
import classnames from 'classnames/bind';
import styles from './IconWrapper.module.scss';

const cx = classnames.bind(styles);

interface Props {
    icon: FunctionComponent;
    hasFrame?: boolean;
    className?: string;
    onClick?: () => void;
}

const defaultProps: Partial<Props> = {
    hasFrame: true,
};

const IconWrapper: FunctionComponent<Props> = ({ icon, hasFrame, className, onClick }) => {
    const classes = cx('wrapper', className, {
        frame: hasFrame,
    });

    const Component = icon;

    const isClickable = !!onClick;

    // focus시에, Enter key로 onClick event를 발생
    const handleKeyDown: KeyboardEventHandler<HTMLSpanElement> = useCallback(
        (e) => {
            if (_.isEqual(e.key, 'Enter')) {
                onClick && onClick();
            }
        },
        [onClick],
    );

    if (isClickable) {
        return (
            <span
                className={classes}
                onClick={onClick}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
            >
                <Component />
            </span>
        );
    }

    return (
        <span className={classes}>
            <Component />
        </span>
    );
};

IconWrapper.defaultProps = defaultProps;

export default memo(IconWrapper);
