import {
    FunctionComponent,
    memo,
    useCallback,
    FocusEvent,
    KeyboardEvent,
    ChangeEvent,
} from 'react';
import MaskedInput from 'react-input-mask';
import classNames from 'classnames/bind';
import styles from './BaseInput.module.scss';

const cx = classNames.bind(styles);

interface BaseProps {
    arrow?: boolean;
    mask?: string | Array<string | RegExp>;
    maskChar?: string | null;
    fullSize?: boolean;
}

type Props = BaseProps & Input.BaseInputProps;

const defaultProps: Partial<Props> = {
    type: 'text',
    maskChar: '',
    spellCheck: 'false',
    arrow: false,
};

const BaseInput: FunctionComponent<Props> = ({
    type,
    className,
    mask,
    maskChar,
    innerRef,
    disabled,
    invalid,
    arrow,
    fullSize,
    onBlur,
    onChange,
    onKeyUp,
    ...rest
}) => {
    const classes = cx('input', className, {
        arrow,
        invalid,
        disabled,
        fullSize,
    });

    const handleBlur = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            onBlur && onBlur(e);
        },
        [onBlur],
    );

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange && onChange(e);
        },
        [onChange],
    );

    const handleKeyUp = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            onKeyUp && onKeyUp(e);
        },
        [onKeyUp],
    );

    if (mask) {
        return (
            <MaskedInput
                className={classes}
                mask={mask}
                maskChar={maskChar}
                alwaysShowMask
                {...rest}
            >
                {(inputProps: unknown) => <input type={type} ref={innerRef} {...inputProps} />}
            </MaskedInput>
        );
    }

    return (
        <input
            className={classes}
            type={type}
            disabled={disabled}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            ref={innerRef}
            {...rest}
        />
    );
};

BaseInput.defaultProps = defaultProps;

export default memo(BaseInput);
