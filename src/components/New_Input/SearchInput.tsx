import { FunctionComponent, memo } from 'react';
import { IconWrapper, SvgPath } from 'components/New_Icon';
import BaseInput from './BaseInput';
import classNames from 'classnames/bind';
import styles from './SearchInput.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
}

type Props = BaseProps & Input.BaseInputProps;

const SearchInput: FunctionComponent<Props> = ({ className, ...rest }) => {
    const classes = cx('input-wrapper', className);

    return (
        <div className={classes}>
            <BaseInput className={cx('input')} {...rest} />
            <IconWrapper className={cx('search')} icon={SvgPath.Search} hasFrame={false} />
        </div>
    );
};

export default memo(SearchInput);
