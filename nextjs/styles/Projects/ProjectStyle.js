import styled from "styled-components";

export const ProjectStyle = styled.div`

.repositories {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 22vh;

  i {
    color: ${props => props.theme.sky};
    font-size: 14px;
  }
  
  a {
    font-size: 16px;      
    color: ${props => props.theme.text_secondary};;
    display: inherit;
    line-height: 2.6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  .repository {
    background-color: ${props => props.theme.comment};
    padding: 12px 18px;
    color: ${props => props.theme.current_line};
    border-radius: 20px;
    line-height: .2;
    font-size: 15px;
    margin: 15px 15px;
    flex: 1 1 340px;
    display: grid;
    min-height: 180px;
  }
  
  p {
    line-height: 1.2;
    color: ${props => props.theme.text_primary};
  }

  p.language {
    color: ${props => props.theme.danger};
  }
    
  p.no-repo {
    text-align: center;
    width: 100%;
    color: ${props => props.theme.danger};
  }
}`;
