import { Fragment } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from 'components/headers';
import { useFetcher } from 'hooks';

interface Props {
    data: {
        name: string;
        abc?: string;
    };
}

const Index: NextPage<Props> = ({ data }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/sad');
    };

    const { data: fetchedData, error } = useFetcher('/');

    if (error) {
        return <div>error...!</div>;
    }

    if (!data) {
        return <div>!data...</div>;
    }

    console.log(fetchedData);

    return (
        <Fragment>
            <Header />
            Student
            <br />
            {data.name}
            <button onClick={handleClick}>클릭</button>
        </Fragment>
    );
};

export default Index;
