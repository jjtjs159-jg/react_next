import Page from 'containers/student/index';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
    data: {
        name: string;
    };
}

/**
 * 빌드 타임에 가능한 모든 경우의 수를 가져와서 빌드한다.
 */
export const getStaticPaths: GetStaticPaths = async () => {
    console.log('getStaticPaths');

    return {
        // value는 반드시 string이어야 한다.
        paths: [
            {
                params: { id: '1' },
            },
            {
                params: { id: '22' },
            },
            {
                params: { id: '34' },
            },
            {
                params: { id: '45' },
            },
            {
                params: { id: '56' },
            },
        ],
        // 만들어지지 않은 것도 추후 요청이오면 만들어 준다.
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    console.log('getStaticProps');
    const res = await axios({
        method: 'GET',
        url: process.env.API_URL + '/',
    })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
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
