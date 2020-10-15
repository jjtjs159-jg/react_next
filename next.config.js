const dotenv = require('dotenv');
const webpack = require('webpack');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

dotenv.config();

module.exports = withBundleAnalyzer({
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "API_URL": JSON.stringify(process.env.API_URL),
            }
        }),
    ],
    devIndicators: {
        // 페이지 우측 하단에 prerender 표시
        autoPrerender: true,
    }

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