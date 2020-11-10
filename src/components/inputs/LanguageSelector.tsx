import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import colors from 'constants/colors';
import styles from './LanguageSelector.module.scss';

const RNButton = withStyles({
    root: {
        padding: '10px 20px',
        minWidth: '96px',
        color: '#000',
        fontSize: '1rem',
        fontWeight: 600,
        '&:hover': {
            color: colors.colorDarkGreen,
        },
    },
})(Button);

const LanguageSelector = () => {
    const [isOpen, setOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const handleChangeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const handleOpen = () => {
        setOpen(!isOpen);
    };

    const languageList = [
        {
            key: 'KR',
            lang: 'ko',
        },
        {
            key: 'US',
            lang: 'en',
        },
    ];

    return (
        <div className={styles.wrap}>
            <RNButton onClick={handleOpen}>
                <i className={styles.icon} />
                <span>{i18n.language}</span>
            </RNButton>
            {isOpen && (
                <div className={styles.list}>
                    <div className={styles['inner-wrap']}>
                        <div className={styles.head}>{t('language')}</div>
                        <ul className={styles.inner}>
                            {languageList.map((item, i) => (
                                <li key={item.key}>
                                    <div
                                        onClick={() => handleChangeLanguage(item.lang)}
                                        onKeyPress={() => handleChangeLanguage(item.lang)}
                                        role="button"
                                        tabIndex={i}
                                    >
                                        {item.lang}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

LanguageSelector.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default LanguageSelector;
