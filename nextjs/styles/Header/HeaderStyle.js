import styled from "styled-components";

export const HeaderStyle = styled.div`

.header {
  .transparent {
    background-color: transparent;
  }

  border: 0;
  box-shadow: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  @include font_primary;
  @include transition;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;    
    width: 1200px;
    max-width: 100%;
    padding: 0px 15px;
    height: 56px;
    margin: 0 auto;
    transition: 1s;

    .navbar {
      color: ${props => props.theme.text_primary};
      width: 90%;
      padding-left: 10%;
      ul {      
        padding-left: 0;         
        text-align: center;
        li {
          display: inline;
          padding: .5em 2.8em;

          @media only screen and (max-width: 632px) {
            padding: .5em 1.8em;
          }

          @media only screen and (max-width: 510px) {
            padding: .5em 1em
          }    

          @media only screen and (max-width: 420px) {
            padding: .2em .7em
          }

          @media only screen and (max-width: 340px) {
            padding: .1em .5em
          }

          a {
            font-size: 0.75em;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            text-decoration: none; 
            
            @media only screen and (max-width: 380px) {
              font-size: 0.65em;
            }

            @media only screen and (max-width: 380px) {
              font-size: 0.65em;
            }

            &:hover {
              color: ${props => props.theme.sky};
              cursor: pointer;
            }       
          }
          .active {
            color: ${props => props.theme.danger};
          }
        }
      }   
    }
  }

  .switch {
    width: 10%;
  }
}

.color {
  @include transition;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: fixed;
  height: 52px;
  background-color: ${props => props.theme.navbar};

  .navbar {
    ul {
      margin: 0em 0 .5em;
    }
  } 
}
`;
