import styled from "styled-components";

export const LanguageStyled = styled.div`
    display: flex;

    .language-selected {
        opacity: 1;
    }
`;


export const LanguageButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    font-size: 26px;
    margin: 2px 4px 0 0;
    opacity: .3;

    svg {
        width: 22px;
        height: 22px;
    }
`;