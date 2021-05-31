import { useCallback, ReactElement } from 'react';
import { Controller, useController, ControllerRenderProps, Control } from 'react-hook-form';

const BaseField = <T extends {}>({
  render,
  name,
  control,
  defaultValue,
  required,
  ...rest
}: Field.BaseFieldProps<T>) => {
  const { fieldState } = useController({
    name,
    control,
    defaultValue,

    rules: {
      required: required && 'This field is required.',
    },
  });

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
