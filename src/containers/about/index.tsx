import React, { FunctionComponent, Fragment } from 'react';
import { Header } from 'components/headers';

interface Props {}

const Index: FunctionComponent<Props> = ({}) => {
    return (
        <Fragment>
            <Header />
            About
        </Fragment>
    );
};

export default Index;
