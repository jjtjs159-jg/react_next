import { FunctionComponent, Fragment } from 'react';
import Link from 'next/link';

const Header: FunctionComponent = () => {
    return (
        <Fragment>
            <div>
                <Link href="/">main</Link>
            </div>
            <div>
                <Link href="/about">abount</Link>
            </div>
            <div>
                <Link href={`/student/2`}>student 404</Link>
            </div>
            <div>
                <Link href={`/student/22`}>student OK</Link>
            </div>
        </Fragment>
    );
};

export default Header;
