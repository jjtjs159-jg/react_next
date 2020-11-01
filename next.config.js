const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const debug = process.env.NODE_ENV !== 'production'
const name = 'react_next'

module.exports = withBundleAnalyzer({
    devIndicators: {
        // 페이지 우측 하단에 prerender 표시
        autoPrerender: true,
    },
    assetPrefix: !debug ? `/${name}/` : '',

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