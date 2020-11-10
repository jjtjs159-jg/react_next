const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    // i18n: {
    //     locales: ['en-US', 'ko'],
    //     defaultLocale: 'en-US',
    // },

    // i18n: {
    //     localeDetection: false,
    // },

    devIndicators: {
        // 페이지 우측 하단에 prerender 표시
        autoPrerender: true,
    },

    // /**
    //  * 리다이렉트 하는 경우, 클라이언트 라우트에서는 영향을 주지 않는다.
    //  */
    // async redirects() {
    //     return [
    //         {
    //             source: '/sad',
    //             destination: '/teacher',
    //             permanent: false,
    //         },
    //     ]
    // },
});