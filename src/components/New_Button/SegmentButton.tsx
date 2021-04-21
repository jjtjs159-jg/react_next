import { FunctionComponent, memo, ButtonHTMLAttributes, ReactNode } from 'react';
import { IconWrapper, SvgPath } from 'components/New_Icon';
import _ from 'lodash';
import classNames from 'classnames/bind';
import styles from './SegmentButton.module.scss';

const cx = classNames.bind(styles);

interface SegmentItem {
    key: string;
    value: ReactNode;
    isSelected: boolean;
    onClick: (key: string) => void;
}

interface BaseProps {
    list: SegmentItem[];
    color?: 'primary';
    fullSize?: boolean;
}

export type Props = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

// 접근성 관련은 추후 대응이 필요
const SegmentButton: FunctionComponent<Props> = ({ list, color, fullSize, ...rest }) => {
    const classes = cx('segment-group', {
        fullSize,
    });

    return (
        <div className={cx(classes)}>
            {_.map(list, (item, i) => {
                const isIcon = _.isEqual(typeof item.value, 'function');

                const handleClick = () => {
                    item.onClick(item.key);
                };

                const buttonClasses = cx('icon', {
                    selected: item.isSelected,
                });

                const key = `${item.key}_${i}`;

                if (isIcon) {
                    return (
                        <IconWrapper
                            key={key}
                            className={buttonClasses}
                            onClick={handleClick}
                            icon={item.value as FunctionComponent}
                            hasFrame={false}
                        />
                    );
                }

                return <button className={cx('segment')}>{item.value}</button>;
            })}
        </div>
    );
};

export default memo(SegmentButton);
