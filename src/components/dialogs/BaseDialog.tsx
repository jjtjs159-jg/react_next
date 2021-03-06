import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { BasePortal } from 'components/utils';
import classnames from 'classnames/bind';
import styles from './BaseDialog.module.scss';

const cx = classnames.bind(styles);

interface Props {
    title?: string;
    onClose: () => void;
}

const focusableElementsString =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';

const BaseDialog: FunctionComponent<Props> = ({ title, onClose, children }) => {
    const portalElement = document.getElementById('portal');
    const portalRef = useRef(portalElement);
    const dialogRef = useRef(null);

    const [active] = useState<HTMLElement>(document.activeElement as HTMLElement);

    useEffect(() => {
        const focusableElements = Array.prototype.slice.call(
            dialogRef.current.querySelectorAll(focusableElementsString),
        );

        // Focus on dialog at first mount
        focusableElements[0].focus();

        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

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
            }

            // Enter, keyCode 13
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        };

        const handleFocusin = (e: FocusEvent) => {
            if (!dialogRef.current.contains(e.target)) {
                e.preventDefault();
                focusableElements[0].focus();
            }
        };

        window.addEventListener('keydown', handleTrapTabKey);
        window.addEventListener('focusin', handleFocusin);

        return () => {
            window.removeEventListener('keydown', handleTrapTabKey);
            window.removeEventListener('focusin', handleFocusin);

            // focus element before open dialog
            active.focus();
        };
    }, []);

    return (
        <BasePortal container={portalRef}>
            <div className={cx('wrapper')} ref={dialogRef}>
                <div className={cx('dialog')} tabIndex={0}>
                    {title && (
                        <div className={styles.title}>
                            <h3>{title}</h3>
                        </div>
                    )}
                    {children}
                </div>
                <div className={cx('overlay')} onClick={onClose} aria-hidden="true" />
            </div>
        </BasePortal>
    );
};

export default BaseDialog;
