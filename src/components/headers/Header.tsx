import React, { FunctionComponent, Fragment } from 'react';
import Link from 'next/link';

interface Props {}

const Header: FunctionComponent<Props> = ({}) => {
    return (
        <Fragment>
            <div>
                <Link href="/">main</Link>
            </div>
            <div>
                <Link href="/about">abount</Link>
            </div>
        </Fragment>
    );
};

export default Header;
