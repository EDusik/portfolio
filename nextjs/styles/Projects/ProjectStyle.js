import styled from "styled-components";

export const ProjectStyle = styled.div`

.repositories {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 22vh;

  i {
    color: $warning;
    font-size: 14px;
  }
  
  a {
    font-size: 16px;      
    color: $info;
    display: inherit;
    line-height: 2.6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  .repository {
    background-color: $primary;
    padding: 12px 18px;
    color: $light;
    @include font_code;
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
    color: $text_primary;
  }

  p.language {
    color: $light;  
  }
    
  p.no-repo {
    text-align: center;
    width: 100%;
    color: $text_secondary;
    @include font_secondary;
  }
}`;
