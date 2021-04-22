import {
    FunctionComponent,
    memo,
    MutableRefObject,
    useState,
    useEffect,
    useCallback,
    useRef,
    useMemo,
    useLayoutEffect,
  } from 'react';
  import _ from 'lodash';
  import ContextMenuItem from './ContextMenuItem';
  import useWindowSize from 'hooks/common/useWindowSize';
  import classNames from 'classnames/bind';
  import styles from './ContextMenu.module.scss';
  
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
  
  const getNumberValue = (targetValue: string): number => {
    const startUnitIndex = targetValue.indexOf('px');
    const resultValue = Number(targetValue.substr(0, startUnitIndex));
  
    return resultValue;
  };
  
  export interface Props {
    innerRef: MutableRefObject<HTMLDivElement>;
    onSelect: (key: string, value: string) => void;
    list: {
      key: string;
      value: string;
      isSelected?: boolean;
      isDisabled?: boolean;
    }[];
    position: {
      top: string | number;
      left: string | number;
    };
  }
  
  const defaultProps: Partial<Props> = {
    list: [
      {
        key: 'item1',
        value: 'One',
        isSelected: true,
      },
      {
        key: 'item2',
        value: 'Two',
        isSelected: false,
      },
      {
        key: 'item3',
        value: 'Three',
        isSelected: false,
      },
    ],
  };
  
  const ContextMenu: FunctionComponent<Props> = ({ innerRef, list, onSelect, position }) => {
    const defaultValue = _.find(list, { isSelected: true })?.value || list[0].value;
    const [selectedValue, setSelectedValue] = useState(defaultValue);
  
    const handleSelect = useCallback(
      (key: string, value: string) => {
        setSelectedValue(value);
        onSelect(key, value);
      },
      [onSelect],
    );
  
    const nextPosition = useMemo(() => {
      const nextTopValue = String(position.top).includes('px')
        ? `${Math.floor(getNumberValue(String(position.top)))}px`
        : `${Math.floor(Number(position.top))}px`;
  
      const nextLeftValue = String(position.left).includes('px')
        ? `${Math.floor(getNumberValue(String(position.left)))}px`
        : `${Math.floor(Number(position.left))}px`;
  
      const value = { top: nextTopValue, left: nextLeftValue };
  
      return { ...value };
    }, [position.left, position.top]);
  
    const [injectedPosition, setInjectedPosition] = useState({
      top: nextPosition.top,
      left: nextPosition.left,
    });
  
    const [isMounted, setIsMounted] = useState(false);
  
    useLayoutEffect(() => {
      const currentRef = innerRef?.current;
  
      if (currentRef) {
        const { width, height } = currentRef.getBoundingClientRect();
  
        const numberValue = {
          nextPropsTop: getNumberValue(nextPosition.top),
          nextPropsLeft: getNumberValue(nextPosition.left),
          beforeStateTop: getNumberValue(injectedPosition.top),
          beforeStateLeft: getNumberValue(injectedPosition.left),
        };
  
        const topDiff = Math.abs(numberValue.nextPropsTop - numberValue.beforeStateTop);
        const leftDiff = Math.abs(numberValue.nextPropsLeft - numberValue.beforeStateLeft);
  
        let resultPositionTop = nextPosition.top;
        let resultPositionLeft = nextPosition.left;
  
        if (!isMounted) {
          if (_.isEqual(topDiff, 0)) {
            if (numberValue.beforeStateTop + height >= window.innerHeight) {
              // setInjectedPosition({
              //   top: `${getNumberValue(injectedPosition.top) - height}px`,
              //   left: nextPosition.left,
              // });
              resultPositionTop = `${getNumberValue(injectedPosition.top) - height}px`;
            } else {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: nextPosition.left,
              // });
            }
  
            setIsMounted(true);
          } else {
            if (numberValue.beforeStateTop + height >= window.innerHeight) {
              // setInjectedPosition({
              //   top: `${getNumberValue(injectedPosition.top) - height}px`,
              //   left: nextPosition.left,
              // });
              resultPositionTop = `${getNumberValue(injectedPosition.top) - height}px`;
            } else {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: nextPosition.left,
              // });
            }
          }
  
          //
          if (_.isEqual(leftDiff, 0)) {
            if (numberValue.beforeStateLeft + width >= window.innerWidth) {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: `${getNumberValue(injectedPosition.left) - width}px`,
              // });
              resultPositionLeft = `${getNumberValue(injectedPosition.left) - width}px`;
            } else {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: nextPosition.left,
              // });
            }
  
            setIsMounted(true);
          } else {
            if (numberValue.beforeStateLeft + width >= window.innerWidth) {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: `${getNumberValue(injectedPosition.left) - width}px`,
              // });
              resultPositionLeft = `${getNumberValue(injectedPosition.left) - width}px`;
            } else {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: nextPosition.left,
              // });
            }
          }
        }
  
        if (isMounted) {
          if (numberValue.nextPropsTop !== numberValue.beforeStateTop) {
            if (numberValue.nextPropsTop + height >= window.innerHeight) {
              // setInjectedPosition({
              //   top: `${numberValue.nextPropsTop - height}px`,
              //   left: nextPosition.left,
              // });
              resultPositionTop = `${numberValue.nextPropsTop - height}px`;
            } else {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: nextPosition.left,
              // });
            }
          }
  
          if (numberValue.nextPropsLeft !== numberValue.beforeStateLeft) {
            if (numberValue.nextPropsLeft + width >= window.innerWidth) {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: `${numberValue.nextPropsLeft - width}px`,
              // });
              resultPositionLeft = `${numberValue.nextPropsLeft - width}px`;
            } else {
              // setInjectedPosition({
              //   top: nextPosition.top,
              //   left: nextPosition.left,
              // });
            }
          }
        }
  
        setInjectedPosition({
          top: resultPositionTop,
          left: resultPositionLeft,
        });
      }
    }, [
      injectedPosition.left,
      injectedPosition.top,
      innerRef,
      isMounted,
      nextPosition.left,
      nextPosition.top,
    ]);
  
    useEffect(() => {
      const currentRef = innerRef?.current;
  
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
            // isOpen && handleToggle();
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
              firstFocusTarget.focus();
            }
          }
        };
  
        const handleOutSideClick = (e: MouseEvent) => {
          e.preventDefault();
          const target = e.target as Node;
          const isContains = innerRef.current?.contains(target);
  
          if (!isContains) {
            // handleClose();
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
    }, [innerRef]);
  
    return (
      <div
        ref={innerRef}
        className={cx('wrapper')}
        style={{ top: injectedPosition.top, left: injectedPosition.left }}
      >
        <ul className={cx('menu')} role="menu">
          {_.map(list, (item, i) => {
            const key = `${item.key}_${i}`;
            return (
              <ContextMenuItem
                key={key}
                item={item}
                selectedValue={selectedValue}
                onSelect={handleSelect}
              />
            );
          })}
        </ul>
      </div>
    );
  };
  
  ContextMenu.defaultProps = defaultProps;
  
  export default memo(ContextMenu);
  