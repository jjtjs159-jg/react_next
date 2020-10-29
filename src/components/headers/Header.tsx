import { FunctionComponent, useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classnames.bind(styles);

const Header: FunctionComponent = () => {
    // <div className={(styles['header-inner'], styles['headder'])}></div>

    const [isActive, setActive] = useState(false);
    const headerRef = useRef<HTMLHeadElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            if (window.scrollY > headerRef.current.offsetTop) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > headerRef.current.offsetTop) {
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
        <header className={wrapper} ref={headerRef}>
            <div className={inner}>
                <div className={styles.logo}>
                    <h1>
                        <Link href="/">hyglife</Link>
                    </h1>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/">work</Link>
                        </li>
                        <li>
                            <Link href="/">about</Link>
                        </li>
                        <li>
                            <Link href="/">contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
