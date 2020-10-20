import Page from 'containers/about/index';
import axios from 'axios';
import { GetStaticProps } from 'next';

interface Props {
    data: {
        name: string;
    };
}

/**
 * 데이터를 빌드 시 미리 가져와서 정적으로 제공한다.
 * 매 요청마다 fetch할 필요가 없는 데이터를 가진 페이지를 렌더링
 * 유저에 구애받지 않고 캐시할 수 있는 데이터
 * SEO등의 이슈로 빠르게 미리 렌더링해야하는 페이지
 *
 * 서버사이드, 절대로 클라이언트에서 실행되지 않으며 브라우저 JS번들에도 포함되지 않는다
 * 소스보기를 하면 아예 데이터를 들고 있다. props 결과물 자체를 JS번들에 포함시키고있는 것.
 * Pages에서만 가능하며 개발 모드에서는 매번 요청이 간다.
 *
 */
export const getStaticProps: GetStaticProps<Props> = async () => {
    const res = await axios({
        method: 'GET',
        url: process.env.NEXT_PUBLIC_API_URL + '/',
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            const errorResponse = error.response || {
                success: false,
                status: error.response || 500,
                message: '실패',
            };

            return errorResponse;
            // throw error;
        });
    // const res = await fetch('http://localhost:8080' + '/')
    //     .then((response) => {
    //         return response;
    //     })
    //     .catch((error: Error) => {
    //         return null;
    //         // throw error;
    //     });

    // const result = await res.json();

    // const prop = res.json();

    return {
        props: {
            data: res.data,
        },
    };
};

export default Page;
