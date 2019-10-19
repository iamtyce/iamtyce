import styled from "styled-components";

export const ThemeToggle = styled.button`
  padding: 2px;
  background-color: transparent;
  border: none;
  width: 52px;
  height: 52px;
  font-size: 40px;
  border: 4px double transparent;
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
  opacity: 0.3;
  transition: 200ms opacity;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &:hover,
  &:active {
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.buttonBorderColor};
  }
`;
