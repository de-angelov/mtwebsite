import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from '../utils/context';
import Body from '../components/body';
import localization from '../utils/localization';
import '../scss/style.scss';
import '../static/style.empty.scss';

class MyApp extends App {
  state = {
    isAdmin: false,
    language: 'en',
    // toogleIsAdmin: () => this.setState((prevState) => ({ isAdmin: !prevState.isAdmin })),
    // toogleIsAdmin: () => alert('test'),
    setLanguage: (newLanguage) => { this.setState({ language: newLanguage }); },
  };

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider value={this.state}>
          <Body>
            <Component {...pageProps} />
          </Body>
        </Provider>
      </Container>
    );
  }
}

export default localization.appWithTranslation(MyApp);
