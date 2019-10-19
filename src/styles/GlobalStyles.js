import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	@import url("https://use.typekit.net/zll2fot.css");

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

  body {
		margin: 0;
		font-family: mr-eaves-modern, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	h1 {
		font-size: 9vmin;
		max-width: 1000px;
	}

	h2 {
		font-weight: 400;
		font-size: 5vmin;
		max-width: 1000px;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
			monospace;
	}
`;
