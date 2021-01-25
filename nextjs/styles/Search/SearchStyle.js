import styled from "styled-components";

export const SearchStyle = styled.div`
.search {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  height: 8vh;

  input {
    height: 40px;
    margin: 2.5vh 15px;
    width: 100%;
    border: solid ${props => props.theme.sky_color} 2px;
    border-radius: 0px;
    padding: 10px 8px;
    color: $primary;
    &:focus {
      border-color: ${props => props.theme.secondary_text};
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27, 31, 35, .075), 0 0 0 0.15em rgba(189, 147, 249, .9);
    }
  }
}
`;
