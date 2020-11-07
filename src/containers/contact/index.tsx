import { FunctionComponent, useEffect, useState } from 'react';
import { GNBLayout } from 'components/layouts';
import { BaseDialog } from 'components/dialogs';
import { useForm } from 'react-hook-form';
import { Headline } from 'components/typography';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from 'constants/colors';
import styles from './index.module.scss';

const RNTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: colors.colorDarkGreen,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
        },
        '& input:valid:focus + fieldset': {
            borderColor: colors.colorDarkGreen,
            color: colors.colorDarkGreen,
            borderLeftWidth: 6,
        },
        '& label.Mui-focused': {
            borderColor: colors.colorDarkGreen,
            color: colors.colorDarkGreen,
        },
    },
})(TextField);

const RNTextArea = withStyles({
    root: {
        '& textarea:valid + fieldset': {
            borderColor: colors.colorDarkGreen,
        },
        '& textarea:valid:focus + fieldset': {
            borderColor: colors.colorDarkGreen,
            color: colors.colorDarkGreen,
        },
    },
})(TextField);

const RNButton = withStyles({
    root: {
        backgroundColor: colors.colorDarkGreen,
        padding: '10px 20px',
        minWidth: '96px',
        color: '#fff',
        '&:hover': {
            backgroundColor: colors.colorDarkGreenHover,
        },
    },
})(Button);

const Index: FunctionComponent = () => {
    const { handleSubmit, register } = useForm();
    const [showsDialog, setShowsDialog] = useState(false);

    const handleFormSubmit = (data: any) => {
        setShowsDialog(true);
    };

    const handleClose = () => {
        setShowsDialog(!showsDialog);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (showsDialog) {
                if (e.key === 'Enter') {
                    handleClose();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showsDialog]);

    return (
        <GNBLayout title="Contact Us">
            <section className={styles.section}>
                <article>
                    <picture>
                        <img
                            src="/travel_landscape.jpg"
                            data-src="/travel_landscape.jpg"
                            alt="landscape"
                            className={styles.where}
                        />
                    </picture>
                </article>
                <article className={styles.contact}>
                    <div>
                        <div className={styles['headline-wrap']}>
                            <Headline level={2} margin>
                                Contact Us
                            </Headline>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                            <fieldset>
                                <div className={styles.field}>
                                    <RNTextField
                                        label="Your Name*"
                                        name="name"
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </div>
                                <div className={styles.field}>
                                    <RNTextField
                                        label="Your Email*"
                                        name="email"
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </div>
                                <div className={styles.field}>
                                    <RNTextArea
                                        variant="outlined"
                                        name="text"
                                        rows={5}
                                        inputRef={register}
                                        multiline
                                        fullWidth
                                    />
                                </div>
                            </fieldset>
                            <div className={styles.submit}>
                                <RNButton type="submit" variant="contained" disableElevation>
                                    Send
                                </RNButton>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
            {showsDialog && (
                <BaseDialog title="COMING SOON" onClose={handleClose}>
                    preparing the service
                    <div className={styles['dialog-button']}>
                        <RNButton type="button" onClick={handleClose}>
                            close
                        </RNButton>
                    </div>
                </BaseDialog>
            )}
        </GNBLayout>
    );
};

export default Index;
