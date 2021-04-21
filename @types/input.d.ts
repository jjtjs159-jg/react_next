import { MutableRefObject, InputHTMLAttributes, RefObject } from 'react';

export = Input;
export as namespace Input;

declare namespace Input {
  interface BaseProps {
    innerRef?: RefObject<HTMLInputElement> | ((node: unknown) => void);
    invalid?: boolean;
  }

  type BaseInputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
}

export default Input;
