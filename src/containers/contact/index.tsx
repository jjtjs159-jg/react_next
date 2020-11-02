import { FunctionComponent, Fragment } from 'react';
import { GNBLayout } from 'components/layouts';
import { useForm } from 'react-hook-form';
import { TextField, Button, TextareaAutosize } from '@material-ui/core';
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
            // padding: '4px !important',
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
        // '& textarea:invalid + fieldset': {
        //     borderColor: 'red',
        // },
        '& textarea:valid:focus + fieldset': {
            borderColor: colors.colorDarkGreen,
            color: colors.colorDarkGreen,
            // padding: '4px !important',
        },
    },
})(TextField);

const RNButton = withStyles({
    root: {
        backgroundColor: colors.colorDarkGreen,
        color: '#fff',
        '&:hover': {
            backgroundColor: colors.colorDarkGreenHover,
            // boxShadow: 'none',
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
            <div style={{ height: '1500px' }}>
                {/* <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <input name="writer" ref={register} />
                    <button type="submit">제출</button>
                </form> */}
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
                                            // id="validation-outlined-input"
                                            label="Your Name*"
                                            variant="outlined"
                                            ref={register}
                                            // required
                                            fullWidth
                                        />
                                    </p>
                                    <p>
                                        <RNTextField
                                            // id="validation-outlined-input"
                                            label="Your Email*"
                                            variant="outlined"
                                            ref={register}
                                            // required
                                            fullWidth
                                        />
                                    </p>
                                    <p>
                                        <RNTextArea
                                            // id="validation-outlined-input"
                                            variant="outlined"
                                            rows={5}
                                            ref={register}
                                            // required
                                            multiline
                                            fullWidth
                                        />
                                    </p>
                                </fieldset>
                                <RNButton variant="contained" disableElevation>
                                    Send
                                </RNButton>
                            </form>
                        </div>
                    </article>
                </section>
            </div>
        </GNBLayout>
    );
};

export default Index;
