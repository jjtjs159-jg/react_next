import { ReactElement, InputHTMLAttributes } from 'react';
import { Control, FieldError, ControllerRenderProps } from 'react-hook-form';

export = Field;
export as namespace Field;

declare namespace Field {
  type InputProps = InputHTMLAttributes<HTMLInputElement>;

  type RenderProps = ControllerRenderProps & {
    error?: FieldError;
  } & Omit<BaseFieldProps, keyof FormProps & keyof BaseProps>;

  interface FormProps {
    control: Control;
  }

  interface BaseProps {
    render: (renderProps: RenderProps) => ReactElement;
    name: string;
    required?: boolean;
    defaultValue?: string;
  }

  type BaseFieldProps<T> = FormProps & BaseProps & T;
}

export default Field;
