import React, { FunctionComponent, Fragment } from 'react';
import { GetStaticProps, NextPage, NextPageContext } from 'next';
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
            {data.name}
        </Fragment>
    );
};

export default Index;
