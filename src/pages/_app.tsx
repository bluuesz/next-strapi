import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Head from "next/head";
import { Global, css } from "@emotion/core";
import { useApollo } from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  const apollo = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider>
        <Head>
          <title>Next.js with strapi</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <CSSReset />
        <Global
          styles={css`
            body {
              background-color: #f7fafc;
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              max-width: 600px;
              margin: 0 auto;
              padding: 16px;
            }
          `}
        />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
