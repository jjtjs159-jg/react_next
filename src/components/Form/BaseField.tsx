import { useCallback, ReactElement } from 'react';
import { Controller, useController, ControllerRenderProps, Control } from 'react-hook-form';

interface BaseProps {
  render: (renderProps: any) => ReactElement;
  control: Control;
  name: string;
  required?: boolean;
  defaultValue?: string;
}

type Props<T> = BaseProps & T;

const BaseField = <T extends {}>({ render, name, control, defaultValue, required, ...rest }: Props<T>) => {
  const { fieldState } = useController({
    name,
    control,
    defaultValue,

    rules: {
      required: required && 'This field is required.',
    },
  });

  console.log(rest);

  const renderInner = useCallback(
    (field: ControllerRenderProps) => {
      const renderProps = {
        error: fieldState.error,
        ...field,
        ...rest,
      };

      return render(renderProps);
    },
    [fieldState.error, render, rest],
  );

  return <Controller control={control} name={name} render={({ field }) => renderInner(field)} />;
};

export default BaseField;
