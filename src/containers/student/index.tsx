import { Fragment } from 'react';
import { NextPage } from 'next';
import { Header } from 'components/headers';

interface Props {
    data: {
        name: string;
    };
}

const Index: NextPage<Props> = ({ data }) => {
    console.log('student==');
    console.log(data);
    return (
        <Fragment>
            <Header />
            Student
            <br />
            {data.name}
        </Fragment>
    );
};

export default Index;
