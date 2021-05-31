import { FunctionComponent, ReactElement, useCallback } from 'react';
import { useForm, Control, FieldValues } from 'react-hook-form';

interface ChildrenProps {
  control: Control<FieldValues>;
}

interface Props {
  defaultValues?: any;
  onSubmit: (data: any) => void;
  children: (props: ChildrenProps) => ReactElement;
}

const BaseForm: FunctionComponent<Props> = ({ defaultValues, onSubmit, children }) => {
  const { handleSubmit, reset, register, control, formState } = useForm({
    // defaultValues,
    mode: 'all',
  });

  const handleFormSubmit = (data: any) => {
    console.log('handleformsubmit');
    console.log(formState.errors);
    onSubmit(data);
  };

  console.log('formState');
  console.log(formState);

  const renderFormInner = () => {
    const props = { control };

    return children(props);
  };

  return <form onSubmit={handleSubmit(handleFormSubmit)}>{renderFormInner()}</form>;
};

export default BaseForm;
