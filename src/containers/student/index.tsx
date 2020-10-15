import { Fragment } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from 'components/headers';

interface Props {
    data: {
        name: string;
        abc?: string;
    };
}

const Index: NextPage<Props> = ({ data }) => {
    console.log('student==');
    console.log(data);
    const router = useRouter();
    const handleClick = () => {
        router.push('/sad');
    };

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
