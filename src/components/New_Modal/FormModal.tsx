import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { BaseModal } from 'components/New_Modal';
import { FilledButton } from 'components/New_Button';
import { BaseInput } from 'components/New_Input';
import classnames from 'classnames/bind';
import styles from './FormModal.module.scss';
const cx = classnames.bind(styles);
export interface Props {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    onOutsideClose?: () => void;
    title: string;
    text: {
        submit: string;
        cancel: string;
    };
}
// Form submit
// 버튼 1개는 fullSize배치
// 버튼 3개 이상인 경우 세로 fullSize 배치
// 버튼 3개는 props로 받고 1개는 primary color
// 입력 양식 또한 props
const FormModal: FunctionComponent<Props> = ({
    isOpen,
    title,
    text,
    onClose,
    onSubmit,
    onOutsideClose,
    children,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleFormSubmit = (data: unknown) => {
        onSubmit && onSubmit();
    };
    return (
        <BaseModal title={title} onClose={onClose} onOutsideClose={onOutsideClose}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                {children}
                <div className={cx('inner')}>
                    <FilledButton
                        className={cx('button-cancel')}
                        onClick={onClose}
                        color="secondary"
                        fullSize
                    >
                        {text.cancel}
                    </FilledButton>
                    <FilledButton type="submit" color="primary" fullSize>
                        {text.submit}
                    </FilledButton>
                </div>
            </form>
        </BaseModal>
    );
};
export default FormModal;
