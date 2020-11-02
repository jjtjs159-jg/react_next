import Document, { Html, Head, Main, NextScript } from 'next/document';

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
                    <link rel="stylesheet" href="nprogress.css" />
                    <script src="nprogress.js" />
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

export default MyDocument;
