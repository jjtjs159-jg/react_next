import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header: FunctionComponent = () => {
    return (
        <div>
            <div className={styles.nav}>
                <Link href="/">main</Link>
            </div>
            <div className={styles.nav}>
                <Link href="/about" scroll={false}>
                    abount
                </Link>
            </div>
            <div className={styles.nav}>
                <Link href={`/student/2`}>student 404</Link>
            </div>
            <div className={styles.nav}>
                <Link href={`/student/22`}>student OK</Link>
            </div>
            <div className={styles.nav}>
                <Link href="/teacher">teacher</Link>
            </div>
            <div className={styles.nav}>
                <Link href="/asd">asd</Link>
            </div>
        </div>
    );
};

export default Header;
