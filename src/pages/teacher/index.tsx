import Page from 'containers/teacher/index';
import axios from 'axios';
import { GetServerSideProps } from 'next';

interface Props {
    data: {
        name: string;
    };
}

/**
 * 빌드 타임에 가능한 모든 경우의 수를 가져와서 빌드한다.
 * or GetServerSideProps
 */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    console.log(process.env.API_URL);
    const res = await axios({
        method: 'GET',
        url: process.env.API_URL + '/teacher',
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

    return {
        props: {
            data: res.data,
        },
    };
};

// const page = ({
//     data,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//     return Page(data);
// };

export default Page;
