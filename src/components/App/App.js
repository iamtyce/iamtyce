import React from "react";
import { ThemeProvider } from "styled-components";

import { useDarkMode } from "./useDarkMode";
import { Container } from "../Container";
import {
  Footer,
  FooterList,
  FooterListItem,
  FooterListItemLink
} from "../Footer";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ThemeToggle";
import { Strikethrough } from "../Strikethrough";
import { lightTheme, darkTheme } from "../../styles/theme";
import logoLight from "../../iamtyce-lrg-black.png";
import logoDark from "../../iamtyce-lrg.png";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <Logo
          src={theme === "light" ? logoLight : logoDark}
          alt="Logo for I Am Tyce"
        />
        <header>
          <hgroup>
            <h1>
              Hej! I’m Tyce Clee, a web engineer from sunny Australia based in{" "}
              <Strikethrough>sunny</Strikethrough> New York.
            </h1>
            <h2>
              I’m currently a design systems tech lead with Spotify, focusing on
              accessibility and inclusive design.
            </h2>
            <ThemeToggle onClick={toggleTheme}>
              {theme === "light" ? "☀️" : "🌚"}
            </ThemeToggle>
          </hgroup>
        </header>
        <Footer>
          <FooterList>
            <FooterListItem>
              <FooterListItemLink
                href="https://twitter.com/iamtyce"
                title="Follow Tyce on Twitter"
                target="_blank"
              >
                Twitter
              </FooterListItemLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListItemLink
                href="https://open.spotify.com/user/iamtyce?si=Sc0LRZ_yQdKj9sfQosoKeA"
                title="Follow Tyce on Spotify"
                target="_blank"
              >
                Spotify
              </FooterListItemLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListItemLink
                href="https://www.linkedin.com/in/iamtyce/"
                title="Follow Tyce on LinkedIn"
                target="_blank"
              >
                LinkedIn
              </FooterListItemLink>
            </FooterListItem>
          </FooterList>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
