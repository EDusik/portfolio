import styled from "styled-components";

export const FooterStyle = styled.div`

.footer {
  .social {
    height: 200px;
    width: 100%;
    background-color: ${props => props.theme.footer_background_social};
    padding-top: 79px;
    text-align: center;
    margin-top: 15px;

    a {  
      color: ${props => props.theme.footer_text};
      svg {
        font-size: 42px;
        margin: 0px 5px;          
      }
      :hover {
        cursor: pointer;
        color: ${props => props.theme.footer_text_hover};
        transition: .2s;
      }
    }
  }

  .copyright {
    background-color: ${props => props.theme.footer_background};
    color: ${props => props.theme.footer_text};
    width: 100%;
    text-align: center;
    height: 42px;
    line-height: 3;
    font-size: 14px;

    strong {
      color: ${props => props.theme.footer_strong};
      font-weight: 500;
    }
  }
}`;
