import App, { AppProps } from 'next/app';
import { Fragment } from 'react';
import Wrapper from 'store/store';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import ga from 'analytics/ga';
import { appWithTranslation } from '../i18n';
import './_app.scss';

/**
 * App 이용 시
 * 1. 레이아웃 유지가 가능하다.
 * 2. 페이지 전환 시 상태값 유지가 가능하다.
 * componentDidCatch를 이용해서 커스텀 에러 핸들링이 가능하다.
 * 추가적인 데이터를 페이지로 주입시키는 것이 가능하다.
 * 글로벌 CSS를 선언한다.
 */
NProgress.configure({ showSpinner: false });

class Home extends App<AppProps, any> {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        if (!window.ga) {
            ga.initGA();
        }

        Router.router.events.on('routeChangeStart', this.handleRouteChangeStart);
        Router.router.events.on('routeChangeError', this.handleRouteChangeError);
        Router.router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    }

    componentWillUnmount() {
        Router.router.events.off('routeChangeComplete', this.handleRouteChangeComplete);
    }

    handleRouteChangeStart = () => {
        NProgress.start();
    };

    handleRouteChangeError = () => {
        // console.log('error');
    };

    handleRouteChangeComplete = () => {
        NProgress.done();
        ga.logPageView();
    };

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Fragment>
                <Head>
                    <title>HYGLIFE</title>
                    {/* Viewport meta tags should not be used in _document.js's <Head> */}
                    <meta
                        name="viewport"
                        content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no"
                    />
                    {/* <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                    /> */}
                </Head>
                <Component {...pageProps} />
            </Fragment>
        );
    }
}

// Next Redux Wrapper의 사용으로 pre-render가 비활성된 상태
export default Wrapper.withRedux(appWithTranslation(Home));
