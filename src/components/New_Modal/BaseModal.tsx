import {
    FunctionComponent,
    memo,
    ReactNode,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
    useCallback,
} from 'react';
import _ from 'lodash';
import { Overlay } from 'components/New_Overlay';
import { Headline, Html } from 'components/New_Typography';
import { IconWrapper, SvgPath } from 'components/New_Icon';
import BasePortal from './BasePortal';
import classnames from 'classnames/bind';
import styles from './BaseModal.module.scss';

const cx = classnames.bind(styles);

type Theme = 'light' | 'dark';

export interface Props {
    className?: string;
    onClose?: () => void;
    onOutsideClose?: () => void;
    hasCloseIcon?: boolean;
    theme?: Theme;
    title?: string;
    isAlert?: boolean;
    children?: ReactNode;
}

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

const defaultProps: Partial<Props> = {
    theme: 'light',
    hasCloseIcon: false,
};

const BaseModal: FunctionComponent<Props> = ({
    className,
    theme,
    onClose,
    hasCloseIcon,
    title,
    isAlert,
    onOutsideClose,
    children,
}) => {
    const portalRef = useRef(document.getElementById('portal')) as MutableRefObject<HTMLElement>;
    const modalRef = useRef<HTMLDivElement>(null);

    // Modal Open 전, 기존의 포커스가 활성화된 Element
    const [beforeActiveElement] = useState<HTMLElement>(document.activeElement as HTMLElement);

    useEffect(() => {
        const mainElement = document.getElementById('_next');
        mainElement?.setAttribute('aria-hidden', 'true');

        const focusableNodeList = modalRef?.current?.querySelectorAll(
            focusableTargetList.toString(),
        );
        const focusableElementList = Array.prototype.slice.call(focusableNodeList);

        const firstFocusTarget = focusableElementList[0];

        // 초기 Modal Open시 focus 가능한 element에 기본 focus
        firstFocusTarget.focus();

        return () => {
            mainElement?.removeAttribute('aria-hidden');
        };
    }, []);

    useEffect(() => {
        const focusableNodeList = modalRef?.current?.querySelectorAll(
            focusableTargetList.toString(),
        );
        const focusableElementList = Array.prototype.slice.call(focusableNodeList);

        const firstFocusTarget = focusableElementList[0];
        const lastFocusTarget = focusableElementList[focusableElementList.length - 1];

        // 초기 Modal Open시 focus 가능한 element에 기본 focus
        // firstFocusTarget.focus();

        const handleKeyPress = (e: KeyboardEvent) => {
            // Trap Tab Key: KeyCode 9
            if (_.isEqual(e.key, 'Tab')) {
                // Shift + Tab
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
                onClose && onClose();
            }

            // Enter Key: Keycode 13
            if (_.isEqual(e.key, 'Enter')) {
                e.preventDefault();
            }
        };

        const handleFocusin = (e: FocusEvent) => {
            if (modalRef.current) {
                if (!modalRef.current.contains(e.target as Node)) {
                    e.preventDefault();
                    // firstFocusTarget.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('focusin', handleFocusin);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('focusin', handleFocusin);

            // Modal Open 전 focus상태인 element에 다시 focus
            beforeActiveElement.focus();
        };
    }, [beforeActiveElement, onClose]);

    const innerClasses = cx('inner', theme, {
        icon: hasCloseIcon,
    });

    const handleOutSideClose = useCallback(() => {
        if (onOutsideClose) {
            onOutsideClose();
        }
    }, [onOutsideClose]);

    const classes = className ? cx('wrapper', className) : cx('wrapper');

    const titleClasses = cx('title', {
        margin: !!children,
    });

    return (
        <BasePortal container={portalRef}>
            <div className={classes} ref={modalRef}>
                <div className={innerClasses} tabIndex={0}>
                    {hasCloseIcon && (
                        <IconWrapper
                            className={cx('close')}
                            icon={SvgPath.Close}
                            onClick={onClose}
                        />
                    )}
                    <div className={cx('content')}>
                        {isAlert && (
                            <div className={cx('alert-wrapper')}>
                                <IconWrapper
                                    className={cx('alert')}
                                    icon={SvgPath.Alert}
                                    hasFrame={false}
                                />
                            </div>
                        )}
                        {title && (
                            <Headline className={titleClasses} level="5" align="center" bold>
                                <Html content={title} />
                            </Headline>
                        )}
                        {children}
                    </div>
                </div>
                <Overlay onClose={handleOutSideClose} />
            </div>
        </BasePortal>
    );
};

BaseModal.defaultProps = defaultProps;

export default memo(BaseModal);
