import styled from "styled-components";

export const ThemeToggle = styled.button`
  padding: 2px;
  background-color: transparent;
  border: none;
  width: 34px;
  height: 34px;
  font-size: 26px;
  border: 2px solid transparent;
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  transition: 200ms opacity;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  position: absolute;
  bottom: 16px;

  /* @media (max-width: 575.98px) {
    position: absolute;
    bottom: 16px;
  } */

  @media (min-width: 576px) {
    right: 16px;
  }

  &:hover,
  &:active {
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.buttonBorderColor};
  }
`;
