import App, { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import './_app.scss';

/**
 * App 이용 시
 * 1. 레이아웃 유지가 가능하다.
 * 2. 페이지 전환 시 상태값 유지가 가능하다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링이 가능하다.
 * 추가적인 데이터를 페이지로 주입시키는 것이 가능하다.
 * 글로벌 CSS를 선언한다.
 */
class Home extends App<AppProps, any> {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Head>
                    {/* Viewport meta tags should not be used in _document.js's <Head> */}
                    <meta
                        name="viewport"
                        content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
                    />
                </Head>
                <Component {...pageProps} />
            </Fragment>
        );
    }
}

// Home.getInitialProps = async (appContext: AppContext) => {
//     const appProps = await App.getInitialProps(appContext);

//     return { ...appProps };
// };

export default Home;
