import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE } from '../utils/constants';

const resources = {
    en: {
        translation: {
            profile: {
                role: "Front-end Engineer",
                bio: "Front-end engineer passionate about what he does. Enjoys listening to power metal and can't stay without :coffee:.",
            },
            navbar: {
                about: 'About',
                projects: 'Projects',
                contact: 'Contact',
            },
            messages: {
                error: "Error loading, please try again later :sob:",
            },
            search: {
                placeholder: "Search for a repository...",
                noRepo: "No repositories found :sob:"
            },
            footer: {
                copyright: "Developed by"
            }
        },
    },
    pt_br: {
        translation: {
            profile: {
                role: "Desenvolvedor Front-end",
                bio: 'Desenvolvedor web front-end apaixonado pelo que faz. Curte escutar power metal e não consegue ficar um dia sem beber :coffee:.',
            },
            navbar: {
                about: 'Sobre',
                projects: 'Projetos',
                contact: 'Contato',
            },
            messages: {
                error: "Erro ao carregar, tente novamente mais tarde :sob:",
            },
            search: {
                placeholder: "Procure um repositório...",
                noRepo: "Nenhum repositório encontrado :sob:"
            },
            footer: {
                copyright: "Desenvolvido por"
            }
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: DEFAULT_LANGUAGE,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
