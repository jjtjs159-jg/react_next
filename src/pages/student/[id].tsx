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

export const getStaticProps: GetStaticProps<Props> = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_API_URL + '/',
        });

        return {
            props: {
                data: response.data,
            },
        };
    } catch (error) {
        return (
            error.response || {
                props: {
                    data: {},
                    error: {
                        success: false,
                        status: error.response || 500,
                        message: '실패',
                    },
                },
            }
        );
    }
};

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//     const res = await axios({
//         method: 'GET',
//         url: process.env.NEXT_PUBLIC_API_URL + '/',
//     })
//         .then((response) => {
//             return response;
//         })
//         .catch((error) => {
//             const errorResponse = error.response || {
//                 success: false,
//                 status: error.response || 500,
//                 message: '실패',
//             };

//             return errorResponse;
//             // throw error;
//         });

//     return {
//         props: {
//             data: res.data,
//         },
//     };
// };

export default Page;
