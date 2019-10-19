import styled from "styled-components";

export const Footer = styled.footer`
  font-size: 18px;
  font-style: italic;
  font-family: mr-eaves-sans, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
`;

export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterListItem = styled.li`
  list-style-type: none;
  margin-left: 8px;
  margin-right: 8px;
`;

export const FooterListItemLink = styled.a`
  padding-bottom: 2px;
  list-style-type: none;
  color: ${props => props.theme.colors.footerLinkColor};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 100ms border, 100ms color;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.footerLinkColor};
    color: ${props => props.theme.colors.textColor};
  }
`;
