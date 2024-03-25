import React from "react";
import { useTranslation } from 'react-i18next';
import { LanguageButtonStyled, LanguageStyled } from "./LanguageStyled";

const Language = () => {
    const { i18n } = useTranslation();
    const isCurrentLanguage = (language: string) => i18n.language === language;
    console.log(isCurrentLanguage('en'));

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

	return (
        <LanguageStyled>
            <LanguageButtonStyled 
                onClick={() => changeLanguage('pt_br')} 
                className={isCurrentLanguage('pt_br') ? "language-selected" : ""}
                aria-label="Change language to Portuguese"
            >
                🇧🇷
            </LanguageButtonStyled>
            <LanguageButtonStyled 
                onClick={() => changeLanguage('en')} 
                className={isCurrentLanguage('en') ? "language-selected" : ""}
                aria-label="Change language to English"
            >
                🇺🇸
            </LanguageButtonStyled>
        </LanguageStyled>
	);
};

export default Language;
