import {
    FunctionComponent,
    memo,
    useCallback,
    MouseEventHandler,
    KeyboardEventHandler,
} from 'react';
import _ from 'lodash';
import classNames from 'classnames/bind';
import styles from './DropdownItem.module.scss';

const cx = classNames.bind(styles);

export interface Props {
    item: {
        key: string;
        value: string;
    };
    selectedValue: string;
    onSelect: (key: string, value: string) => void;
}

const DropdownItem: FunctionComponent<Props> = ({ item, selectedValue, onSelect }) => {
    const handleClick: MouseEventHandler<HTMLLIElement> = useCallback(
        (_e) => {
            if (!_.isEqual(selectedValue, item.value)) {
                onSelect(item.key, item.value);
            }
        },
        [item.key, item.value, onSelect, selectedValue],
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

    return (
        <li
            key={item.key}
            tabIndex={0}
            className={cx('menu-item')}
            onClick={handleClick}
            onKeyDown={handleSelect}
            role="menuitem"
        >
            {item.value}
        </li>
    );
};

export default memo(DropdownItem);
