import {
    FunctionComponent,
    memo,
    useCallback,
    MouseEventHandler,
    KeyboardEventHandler,
} from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import styles from './ContextMenuItem.module.scss';

const cx = classNames.bind(styles);

export interface Props {
    item: {
        key: string;
        value: string;
        isSelected?: boolean;
        isDisabled?: boolean;
    };
    selectedValue: string;
    onSelect: (key: string, value: string) => void;
}

const ContextMenuItem: FunctionComponent<Props> = ({ item, selectedValue, onSelect }) => {
    const handleClick: MouseEventHandler<HTMLLIElement> = useCallback(
        (_e) => {
            if (!item.isDisabled) {
                onSelect(item.key, item.value);
            }
        },
        [item.isDisabled, item.key, item.value, onSelect],
    );

    const handleSelect: KeyboardEventHandler<HTMLLIElement> = useCallback(
        (e) => {
            if (!_.isEqual(selectedValue, item.value)) {
                if (_.isEqual(e.key, 'Enter')) {
                    onSelect(item.key, item.value);
                }
            }
        },
        [item.key, item.value, onSelect, selectedValue],
    );

    const classes = cx('menu-item', {
        disabled: item.isDisabled,
    });

    return (
        <li
            key={item.key}
            tabIndex={0}
            className={classes}
            onClick={handleClick}
            onKeyDown={handleSelect}
            role="menuitem"
        >
            {item.value}
        </li>
    );
};

export default memo(ContextMenuItem);
