import styled from "styled-components";

export const FooterStyle = styled.div`

.footer {
  .social {
    height: 200px;
    width: 100%;
    background-color: ${props => props.theme.background};
    padding-top: 79px;
    text-align: center;
    margin-top: 15px;

    a {  
      color: ${props => props.theme.foreground};
      svg {
        font-size: 42px;
        margin: 0px 5px;          
      }
      :hover {
        cursor: pointer;
        color: ${props => props.theme.comment};
        transition: .2s;
      }
    }
  }

  .copyright {
    background-color: ${props => props.theme.current_line};
    color: ${props => props.theme.comment};
    width: 100%;
    text-align: center;
    color: $text_primary;
    height: 42px;
    line-height: 3;
    font-size: 14px;
    @include font_primary; 

    strong {
      color: ${props => props.theme.foreground};
      font-weight: 500;
    }
  }
}`;
