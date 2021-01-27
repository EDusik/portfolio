import styled from "styled-components";

export const ProjectStyle = styled.div`

.repositories {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 22vh;

  i {
    color: ${props => props.theme.secondary_text};
    font-size: 14px;
  }
  
  a {
    font-size: 16px;      
    color: ${props => props.theme.anchor_text};
    display: inherit;
    line-height: 2.6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  .repository {
    background-color: ${props => props.theme.background_repositories};
    padding: 12px 18px;
    color: ${props => props.theme.third_text};
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
    color: ${props => props.theme.primary_text};
  }

  p.language {
    color: ${props => props.theme.danger};
  }
    
  p.no-repo {
    text-align: center;
    font-size: 1.2em;
    width: 100%;
    color: ${props => props.theme.danger};
  }
}`;
