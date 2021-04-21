import { FunctionComponent, Fragment, memo, createContext, useContext, useState } from 'react';
import { BaseModal } from 'components/New_Modal';
import { IconWrapper, SvgPath } from 'components/New_Icon';
import { FilledButton } from 'components/New_Button';
import classnames from 'classnames/bind';
import styles from './AlertModal.module.scss';

const cx = classnames.bind(styles);

interface Props {
    isOpen?: boolean;
    onClose: () => void;
    onConfirm: () => void;
    onOutsideClose?: () => void;
    title: string;
    text: string;
    isAlert?: boolean;
}

// 버튼 3개 이상인 경우 세로 fullSize 배치
// 버튼 3개는 props로 받고 1개는 primary color
// 입력 양식 또한 props
// 버튼 1개는 fullSize배치
const AlertModal: FunctionComponent<Props> = ({
    isOpen,
    title,
    onClose,
    onConfirm,
    onOutsideClose,
    isAlert,
    text,
    children,
}) => {
    return (
        <Fragment>
            {isOpen && (
                <BaseModal title={title} isAlert>
                    <div className={cx('inner')}>{children}</div>
                    <FilledButton onClick={onConfirm} fullSize>
                        {text}
                    </FilledButton>
                </BaseModal>
            )}
        </Fragment>
    );
};

const AlertModalContext = createContext<any>({});

const AlertModalProvider = ({ children }: any) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogConfig, setDialogConfig] = useState<any>({});

    const handleOpen = ({ title, message, actionCallback }: any) => {
        setDialogOpen(true);
        setDialogConfig({ title, message, actionCallback });
    };

    const handleReset = () => {
        setDialogOpen(false);
        setDialogConfig({});
    };

    const handleConfirm = () => {
        handleReset();
        dialogConfig.actionCallback(true);
    };

    const handleDismiss = () => {
        handleReset();
        dialogConfig.actionCallback(false);
    };

    return (
        <AlertModalContext.Provider value={{ handleOpen }}>
            <AlertModal
                isOpen={dialogOpen}
                title={dialogConfig?.title}
                onConfirm={handleConfirm}
                onClose={handleDismiss}
                text="OK"
            />
            {children}
        </AlertModalContext.Provider>
    );
};

const useAlertModal = () => {
    const { handleOpen } = useContext(AlertModalContext);

    const getConfirm = ({ ...options }) =>
        new Promise((res) => {
            handleOpen({ actionCallback: res, ...options });
        });

    return { getConfirm };
};

export { AlertModalProvider, useAlertModal };
export default memo(AlertModal);
