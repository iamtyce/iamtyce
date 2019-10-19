import styled from "styled-components";

export const Strikethrough = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: ${props => props.theme.colors.textColor};
    bottom: 35%;
    left: 0;
  }
`;
