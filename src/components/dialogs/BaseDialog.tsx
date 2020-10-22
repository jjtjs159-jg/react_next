import { FunctionComponent, useEffect, useRef } from 'react';
import { BasePortal } from 'components/utils';
import classnames from 'classnames/bind';
import styles from './BaseDialog.module.scss';

const cx = classnames.bind(styles);

interface Props {
    onClose: () => void;
}

const focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const BaseDialog: FunctionComponent<Props> = ({ onClose, children }) => {
    const portalElement = document.getElementById('portal');
    const portalRef = useRef(portalElement);
    const dialogRef = useRef(null);

    useEffect(() => {
        const focusableElements = dialogRef.current.querySelectorAll(
            focusableElementsString,
        );

        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement =
            focusableElements[focusableElements.length - 1];

        const handleTrapTabKey = (e: KeyboardEvent) => {
            // Check for TAB key press, keyCode 9
            if (e.key === 'Tab') {
                // SHIFT + TAB
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                    }
                    // TAB
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        focusableElements[0].focus();
                    }
                }
            }

            // ESCAPE, keyCode 27
            if (e.key === 'Escape') {
                onClose();
                // const activeElement = document.activeElement;
                // if (activeElement.fo) {
                //     activeElement.focus();
                // }
            }

            // Enter, keyCode 13
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        };

        window.addEventListener('keydown', handleTrapTabKey);

        return () => {
            window.removeEventListener('keydown', handleTrapTabKey);
        };
    }, []);

    return (
        <BasePortal container={portalRef}>
            <div ref={dialogRef} className={cx('wrapper')}>
                <div className={cx('dialog')} tabIndex={0}>
                    {children}
                </div>
                <div className={cx('overlay')} />
            </div>
        </BasePortal>
    );
};

export default BaseDialog;
