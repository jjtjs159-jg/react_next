import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const onChangeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <ul className="actions">
            <li>
                <button className="button special big" onClick={() => onChangeLanguage('ko')}>
                    {/* debug true로 console에 출력 중 */}
                    {t('korea')}
                </button>
            </li>
            <li>
                <button className="button special big" onClick={() => onChangeLanguage('en')}>
                    {/* debug true로 console에 출력 중 */}
                    {t('english')}
                </button>
            </li>
        </ul>
    );
};

LanguageSelector.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default LanguageSelector;
