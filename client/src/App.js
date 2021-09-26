import { useEffect, useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./utils/theme";
import {
  GlobalStyle,
  Container,
  Headline,
  Footer,
  HeadlineContent,
} from "./App.styled";
import { PDP, PLP, Header } from "./views";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  const [theme, setTheme] = useState(LightTheme);
  const local_theme = localStorage.getItem("local_theme");

  const switchTheme = (id) => {
    switch (id) {
      case "DarkTheme":
        setTheme(LightTheme);
        localStorage.setItem("local_theme", "LightTheme");
        break;
      default:
      case "LightTheme":
        setTheme(DarkTheme);
        localStorage.setItem("local_theme", "DarkTheme");
        break;
    }
  };

  useEffect(() => {
    local_theme === "LightTheme"
      ? switchTheme("DarkTheme")
      : switchTheme("LightTheme");

    if (local_theme === null) {
      switchTheme("DarkTheme");
    }
  }, [local_theme]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Container>
            <Headline>
              <div>
                <HeadlineContent>When the sky isn't the limit!</HeadlineContent>
                <HeadlineContent>
                  Find the rocket you have been looking for your entire life.
                </HeadlineContent>
              </div>
              <button onClick={() => switchTheme(theme.id)}>{theme.id}</button>
            </Headline>
            <Route exact path="/" component={PLP} />
            <Route exact path="/rocket/:rocker_id" component={PDP} />
          </Container>
          <Footer>@RocketStore</Footer>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
