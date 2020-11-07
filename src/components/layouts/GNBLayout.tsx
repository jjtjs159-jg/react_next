import { FunctionComponent, useRef } from 'react';
import { Header } from 'components/headers';
import { GNBFooter } from 'components/footer';
import { Headline } from 'components/typography';
import styles from './GNBLayout.module.scss';

interface Props {
    title: string;
}

const GNBLayout: FunctionComponent<Props> = ({ title, children }) => {
    const contentRef = useRef(null);

    return (
        <div className={styles.wrapper}>
            <Header stickyRef={contentRef} />
            <main className={styles.main}>
                <section>
                    <div className={styles['main-title']}>
                        <Headline level={1}>{title}</Headline>
                    </div>
                    <div className={styles['content-wrap']}>
                        <span className={styles.wave} />
                    </div>
                </section>
                <div className={styles.inner} ref={contentRef}>
                    {children}
                </div>
            </main>
            <GNBFooter />
        </div>
    );
};

export default GNBLayout;
