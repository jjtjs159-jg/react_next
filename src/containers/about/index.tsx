import { Fragment } from 'react';
import { NextPage } from 'next';
import { Header } from 'components/headers';

interface Props {
    data: {
        name: string;
    };
}

const Index: NextPage<Props> = ({ data }) => {
    console.log('about==');
    console.log(data);
    return (
        <Fragment>
            <Header />
            {data.name} ABOUT
        </Fragment>
    );
};

export default Index;
