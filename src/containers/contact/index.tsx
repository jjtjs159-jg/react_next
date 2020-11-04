import { FunctionComponent } from 'react';
import { GNBLayout } from 'components/layouts';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from 'constants/colors';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

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

interface Props {}

const Index: FunctionComponent<Props> = ({}) => {
    const { handleSubmit, register, control } = useForm();

    const handleFormSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <GNBLayout title="Contact Us">
            <section className={styles.section}>
                <article className={styles.where} />
                <article className={styles.contact}>
                    <div>
                        <h2>
                            <span>Contact Us</span>
                        </h2>
                        {/* <RNTextField
                                        label="Your Name*"
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    /> */}
                        <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
                            <fieldset>
                                <div className={styles.field}>
                                    {/* <Controller
                                        as={RNTextField}
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        label="Your Name*"
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    /> */}
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
        </GNBLayout>
    );
};

export default Index;
