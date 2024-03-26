import React from "react";
import { useTranslation } from 'react-i18next';
import { LanguageButtonStyled, LanguageStyled } from "./LanguageStyled";
import { UnitedStatesFlag } from "../../assets/flags/UnitedStatesFlag";
import { BrazilFlag } from "../../assets/flags/BrazilFlag";

const Language = () => {
    const { i18n } = useTranslation();
    const isCurrentLanguage = (language: string) => i18n.language === language;

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
                <BrazilFlag />
            </LanguageButtonStyled>
            <LanguageButtonStyled
                onClick={() => changeLanguage('en')}
                className={isCurrentLanguage('en') ? "language-selected" : ""}
                aria-label="Change language to English"
            >
                <UnitedStatesFlag />
            </LanguageButtonStyled>
        </LanguageStyled>
    );
};

export default Language;
