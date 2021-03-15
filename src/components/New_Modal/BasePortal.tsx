import React, { FunctionComponent, MutableRefObject } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    container: MutableRefObject<HTMLElement>;
}

/**
 * @see https://ko.reactjs.org/docs/portals.html
 *
 * @param {Props} 렌더링시킬 Portal이 되는 DOM Element
 * @returns {React.ReactPortal} children을 Portal에 렌더링
 */
const BasePortal: FunctionComponent<Props> = ({ container, children }) => {
    const element = container.current;
    return ReactDOM.createPortal(children, element);
};

export default BasePortal;
