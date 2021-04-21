import { FunctionComponent, memo, useState, useEffect, useCallback, useRef } from 'react';
import _ from 'lodash';
import DropdownItem from './DropdownItem';
import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import { IconWrapper, SvgPath } from 'components/New_Icon';

const cx = classNames.bind(styles);

const focusableTargetList = [
    'a[href]',
    'area[href]',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'iframe',
    'object',
    'embed',
    '[tabindex="0"]',
    '[contenteditable]',
];

export interface Props {
    onSelect: (key: string, value: string) => void;
    list: {
        key: string;
        value: string;
        isSelected: boolean;
    }[];
}

/**
 *
 * @todo 추후, Sub Menu를 위한 Cascading 기능 추가 예정
 */
const Dropdown: FunctionComponent<Props> = ({ list, onSelect }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [transform, setTransform] = useState<string>();

    const defaultValue = _.find(list, { isSelected: true })?.value || list[0].value;
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleToggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        isOpen && setIsOpen(false);
    }, [isOpen]);

    const handleSelect = useCallback(
        (key: string, value: string) => {
            setSelectedValue(value);
            setIsOpen(false);
            onSelect(key, value);
        },
        [onSelect],
    );

    useEffect(() => {
        if (buttonRef && buttonRef.current) {
            setTransform(`translate3d(0px, ${buttonRef.current.offsetHeight - 21}px, 0px)`);
        }
    }, []);

    useEffect(() => {
        const currentRef = wrapperRef?.current;

        if (currentRef) {
            const focusableNodeList = currentRef.querySelectorAll(focusableTargetList.toString());
            const focusableElementList = Array.prototype.slice.call(focusableNodeList);

            const firstFocusTarget = focusableElementList[0];
            const lastFocusTarget = focusableElementList[focusableElementList.length - 1];

            const handleTrapTabKey = (e: KeyboardEvent) => {
                // Trap Tab Key: KeyCode 9
                if (_.isEqual(e.key, 'Tab')) {
                    if (e.shiftKey) {
                        if (_.isEqual(document.activeElement, firstFocusTarget)) {
                            e.preventDefault();
                            lastFocusTarget.focus();
                        }
                    }

                    // Tab
                    if (!e.shiftKey) {
                        if (_.isEqual(document.activeElement, lastFocusTarget)) {
                            e.preventDefault();

                            firstFocusTarget.focus();
                        }
                    }
                }

                // ESC Key: KeyCode 27
                if (_.isEqual(e.key, 'Escape')) {
                    isOpen && handleToggle();
                }

                // Enter Key: Keycode 13
                if (_.isEqual(e.key, 'Enter')) {
                    e.preventDefault();
                }
            };

            const handleFocusin = (e: FocusEvent) => {
                if (currentRef) {
                    if (!currentRef.contains(e.target as Node)) {
                        e.preventDefault();
                        // firstFocusTarget.focus();
                    }
                }
            };

            const handleOutSideClick = (e: MouseEvent) => {
                // e.preventDefault();
                const target = e.target as Node;
                const isContains = wrapperRef.current?.contains(target);

                if (!isContains) {
                    handleClose();
                }
            };

            window.addEventListener('keydown', handleTrapTabKey);
            window.addEventListener('focusin', handleFocusin);
            window.addEventListener('click', handleOutSideClick);

            return () => {
                window.removeEventListener('keydown', handleTrapTabKey);
                window.removeEventListener('focusin', handleFocusin);
                window.removeEventListener('click', handleOutSideClick);
            };
        }
    }, [handleClose, handleToggle, isOpen]);

    const buttonClasses = cx('button-toggle', {
        open: isOpen,
    });

    const arrowClasses = cx('arrow', {
        open: isOpen,
    });

    return (
        <div ref={wrapperRef} className={cx('wrapper')}>
            <div className={cx('header')}>
                <button
                    type="button"
                    ref={buttonRef}
                    className={buttonClasses}
                    onClick={handleToggle}
                >
                    <div className={cx('text')}>{selectedValue}</div>
                    <IconWrapper
                        className={arrowClasses}
                        icon={SvgPath.ChevronLeft}
                        hasFrame={false}
                    />
                </button>
            </div>
            {isOpen && (
                <ul className={cx('menu')} style={{ transform }} role="menu">
                    {_.map(list, (item, i) => {
                        const key = `${item.key}_${i}`;
                        return (
                            <DropdownItem
                                key={key}
                                item={item}
                                selectedValue={selectedValue}
                                onSelect={handleSelect}
                            />
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default memo(Dropdown);
