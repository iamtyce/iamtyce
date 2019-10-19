import styled from "styled-components";

export const Footer = styled.footer`
  font-size: 14px;
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
  transition: 200ms border;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.colors.footerLinkColor};
  }
`;
