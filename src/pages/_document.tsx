import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import { GetServerSideProps, NextPageContext } from 'next';
import { ServerStyleSheets } from '@material-ui/styles';

/**
 * html, body 태그 보강
 */
class MyDocument extends Document {
    // static async getInitialProps(ctx: DocumentContext) {
    //     const initialProps = await Document.getInitialProps(ctx);

    //     return { ...initialProps };
    // }

    render() {
        return (
            <Html lang="ko">
                <Head>
                    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <div id="portal" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    console.log('get============');

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: <Fragment>{sheets.getStyleElement()}</Fragment>,
    };
};

export default MyDocument;
