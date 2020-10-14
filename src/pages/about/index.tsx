import Page from 'containers/about/index';
import { GetStaticProps } from 'next';

interface Props {
    data: {
        name: string;
    };
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    console.log('getStaticProps');
    const res = await fetch('http://localhost:8080' + '/')
        .then((response) => {
            return response;
        })
        .catch((error: Error) => {
            throw error;
        });

    const result = await res.json();

    // const prop = res.json();

    return {
        props: {
            data: result,
        },
    };
};

export default Page;
