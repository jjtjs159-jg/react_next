import { FunctionComponent, Fragment, memo, createContext, useContext, useState } from 'react';
import { BaseModal } from 'components/New_Modal';
import { FilledButton } from 'components/New_Button';
import classnames from 'classnames/bind';
import styles from './ConfirmModal.module.scss';

const cx = classnames.bind(styles);

interface Props {
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onOutsideClose?: () => void;
  title: string;
  text: {
    confirm: string;
    cancel: string;
  };
}

const ConfirmModal: FunctionComponent<Props> = ({
  isOpen,
  title,
  text,
  onClose,
  onConfirm,
  onOutsideClose,
}) => {
  return (
    <Fragment>
      {isOpen && (
        <BaseModal onClose={onClose} onOutsideClose={onOutsideClose} title={title}>
          <div className={cx('inner')}>
            <FilledButton
              className={cx('button-cancel')}
              onClick={onClose}
              color="secondary"
              fullSize
            >
              {text.cancel}
            </FilledButton>
            <FilledButton onClick={onConfirm} color="primary" fullSize>
              {text.confirm}
            </FilledButton>
          </div>
        </BaseModal>
      )}
    </Fragment>
  );
};

const ConfirmDialogContext = createContext<any>({});

const ConfirmDialogProvider = ({ children }: any) => {
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
    <ConfirmDialogContext.Provider value={{ handleOpen }}>
      <ConfirmModal
        isOpen={dialogOpen}
        title={dialogConfig?.title}
        onConfirm={handleConfirm}
        onClose={handleDismiss}
        text={{ confirm: '확인', cancel: '취소' }}
      />
      {children}
    </ConfirmDialogContext.Provider>
  );
};

const useConfirmDialog = () => {
  const { handleOpen } = useContext(ConfirmDialogContext);

  const getConfirm = ({ ...options }) =>
    new Promise((res) => {
      handleOpen({ actionCallback: res, ...options });
    });

  return { getConfirm };
};

export { ConfirmDialogProvider, useConfirmDialog };
export default memo(ConfirmModal);
