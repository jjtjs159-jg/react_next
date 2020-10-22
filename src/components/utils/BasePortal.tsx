import { FunctionComponent, RefObject } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    container: RefObject<HTMLElement>;
}

const BasePortal: FunctionComponent<Props> = ({ container, children }) => {
    return ReactDOM.createPortal(children, container.current);
};

export default BasePortal;
