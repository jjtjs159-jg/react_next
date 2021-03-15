import {
  FunctionComponent,
  memo,
  ReactNode,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import _ from 'lodash';
import { Overlay } from 'components/New_Overlay';
import { Headline } from 'components/New_Typography';
import { IconWrapper, SvgPath } from 'components/New_Icons';
import BasePortal from './BasePortal';
import classnames from 'classnames/bind';
import styles from './BaseModal.module.scss';

const cx = classnames.bind(styles);

type Theme = 'light' | 'dark';

/**
 * ===WARN===
 * React의 memo type정의가 잘못되어있어서 children props를 임의로 명시
 */
export interface Props {
  onClose: () => void;
  hasCloseIcon?: boolean;
  theme?: Theme;
  title?: string;
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
  hasCloseIcon: true,
};

const BaseModal: FunctionComponent<Props> = ({ theme, onClose, hasCloseIcon, title, children }) => {
  const portalRef = useRef(document.getElementById('portal')) as MutableRefObject<HTMLElement>;
  const modalRef = useRef<HTMLDivElement>(null);

  // Modal Open 전, 기존의 포커스가 활성화된 Element
  const [beforeActiveElement] = useState<HTMLElement>(document.activeElement as HTMLElement);

  useEffect(() => {
    const mainElement = document.getElementById('_next');
    mainElement?.setAttribute('aria-hidden', 'true');

    return () => {
      mainElement?.removeAttribute('aria-hidden');
    };
  }, []);

  useEffect(() => {
    const focusableNodeList = modalRef?.current?.querySelectorAll(focusableTargetList.toString());
    const focusableElementList = Array.prototype.slice.call(focusableNodeList);

    const firstFocusTarget = focusableElementList[0];
    const lastFocusTarget = focusableElementList[focusableElementList.length - 1];

    // 초기 Modal Open시 focus 가능한 element에 기본 focus
    firstFocusTarget.focus();

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
        onClose();
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
          firstFocusTarget.focus();
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

  return (
    <BasePortal container={portalRef}>
      <div className={cx('wrapper')} ref={modalRef}>
        <div className={innerClasses} tabIndex={0}>
          {hasCloseIcon && (
            <IconWrapper className={cx('close')} icon={SvgPath.Close} onClick={onClose} />
          )}
          <div className={cx('content')}>
            {title && (
              <Headline level="6" align="center" bold margin>
                {title}
              </Headline>
            )}
            {children}
          </div>
        </div>
        <Overlay onClose={onClose} />
      </div>
    </BasePortal>
  );
};

BaseModal.defaultProps = defaultProps;

export default memo(BaseModal);
