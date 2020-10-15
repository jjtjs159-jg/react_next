import { FunctionComponent, Fragment } from 'react';

interface Props {
    data: {
        name: string;
    };
}

const Index: FunctionComponent<Props> = ({ data }) => {
    return (
        <Fragment>
            <br />
            TEACHER
            <br />
            {data.name}
        </Fragment>
    );
};

export default Index;
