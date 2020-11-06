import { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import colors from 'constants/colors';
import styles from './NotFound.module.scss';

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
    const handleBack = () => {
        history.back();
    };

    return (
        <section className={styles.wrap}>
            <div className={styles.title}>
                <h1>
                    <span>404 ERROR</span>
                </h1>
            </div>
            <div>
                <p>죄송합니다. 현재 찾을수 없는 페이지를 요청하셨습니다.</p>
                <p>존재하지 않는 주소를 입력하셨거나</p>
                <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</p>
                <p>또는, 현재 준비 중인 페이지 입니다.</p>
                <p>감사합니다.</p>
            </div>
            <div className={styles.button}>
                <RNButton type="button" href="/">
                    Home
                </RNButton>
                <RNButton type="button" onClick={handleBack}>
                    Back
                </RNButton>
            </div>
        </section>
    );
};

export default Index;
