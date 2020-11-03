import { FunctionComponent } from 'react';
import { GNBLayout } from 'components/layouts';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from 'constants/colors';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

const RNTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
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
            borderColor: 'green',
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
    const { handleSubmit, register } = useForm();

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
                        <form className={styles.form}>
                            <fieldset>
                                <p>
                                    <RNTextField
                                        label="Your Name*"
                                        variant="outlined"
                                        ref={register}
                                        fullWidth
                                    />
                                </p>
                                <p>
                                    <RNTextField
                                        label="Your Email*"
                                        variant="outlined"
                                        ref={register}
                                        fullWidth
                                    />
                                </p>
                                <p>
                                    <RNTextArea
                                        variant="outlined"
                                        rows={5}
                                        ref={register}
                                        multiline
                                        fullWidth
                                    />
                                </p>
                            </fieldset>
                            <p className={styles.submit}>
                                <RNButton variant="contained" disableElevation>
                                    Send
                                </RNButton>
                            </p>
                        </form>
                    </div>
                </article>
            </section>
        </GNBLayout>
    );
};

export default Index;
