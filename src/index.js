import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import content from './content';
import Card from "./components/Card";
import Footer from "./components/Footer";
import CallToActionCard from "./components/CallToActionCard";

const theme = {
  colors: {
    header: 'hsl(193 100% 96%)',
    body: 'hsl(255 100% 99%)',
    footer: 'hsl(192 100% 9%)',
    primaryButton: 'hsl(322, 100%, 66%)',
  },
  mobile: '768px',
};

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </Container>
        <CallToActionCard />
        <Footer />
      </ThemeProvider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));