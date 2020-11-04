import { FunctionComponent, useEffect, useState, MutableRefObject } from 'react';
import Link from 'next/link';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classnames.bind(styles);

interface Props {
    stickyRef: MutableRefObject<HTMLDivElement>;
}

const Header: FunctionComponent<Props> = ({ stickyRef }) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        if (stickyRef && stickyRef.current) {
            if (window.scrollY > stickyRef.current.offsetTop) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        const handleScroll = () => {
            if (stickyRef && stickyRef.current) {
                if (window.scrollY > stickyRef.current.offsetTop) {
                    setActive(true);
                } else {
                    setActive(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const wrapper = cx('header', {
        active: isActive,
    });

    const inner = cx('header-inner', {
        active: isActive,
    });

    return (
        <header className={wrapper}>
            <div className={inner}>
                <div className={styles.logo}>
                    <h1>
                        <Link href="/">hyglife</Link>
                    </h1>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/work">work</Link>
                        </li>
                        <li>
                            <Link href="/about">about</Link>
                        </li>
                        <li>
                            <Link href="/contact">contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
