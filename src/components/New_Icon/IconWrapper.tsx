import { FunctionComponent, KeyboardEventHandler, memo, useCallback, RefObject } from 'react';
import _ from 'lodash';
import classnames from 'classnames/bind';
import styles from './IconWrapper.module.scss';

const cx = classnames.bind(styles);

interface Props {
  icon: FunctionComponent;
  hasFrame?: boolean;
  className?: string;
  onClick?: (e?: any) => void;
  innerRef?: RefObject<HTMLSpanElement>;
}

const defaultProps: Partial<Props> = {
  hasFrame: true,
};

const IconWrapper: FunctionComponent<Props> = ({
  icon,
  hasFrame,
  innerRef,
  className,
  onClick,
}) => {
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

  const classes = cx('wrapper', className, {
    button: isClickable,
    frame: hasFrame,
  });

  if (isClickable) {
    return (
      <span
        className={classes}
        ref={innerRef}
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
    <span className={classes} ref={innerRef}>
      <Component />
    </span>
  );
};

IconWrapper.defaultProps = defaultProps;

export default memo(IconWrapper);
