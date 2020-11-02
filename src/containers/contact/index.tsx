import { FunctionComponent, Fragment } from 'react';
import { GNBLayout } from 'components/layouts';

interface Props {}

const Index: FunctionComponent<Props> = ({}) => {
    return (
        <GNBLayout title="Contact Us">
            <div style={{ height: '1500px' }}>contact</div>
        </GNBLayout>
    );
};

export default Index;
