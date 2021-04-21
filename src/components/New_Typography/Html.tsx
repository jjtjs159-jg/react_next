import { FunctionComponent } from 'react';

export interface Props {
    content: string;
}

const Html: FunctionComponent<Props> = ({ content, ...rest }) => {
    return <div {...rest} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Html;
