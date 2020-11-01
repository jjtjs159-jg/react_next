import { Fragment } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from 'components/headers';
import { useFetcher } from 'hooks';
import Button from '@material-ui/core/Button';

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
    console.log(fetchedData);

    if (error) {
        return <div>error...!</div>;
    }

    if (!data) {
        return <div>! data...</div>;
    }

    return (
        <Fragment>
            {/* <Header /> */}
            Student
            <br />
            {data.name}
            <br />
            <Button variant="contained" color="primary" onClick={handleClick}>
                Click
            </Button>
        </Fragment>
    );
};

export default Index;
