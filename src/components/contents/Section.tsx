import { FunctionComponent, MutableRefObject } from 'react';
import styles from './Section.module.scss';

interface Props {
    title?: string;
    innerRef?: MutableRefObject<HTMLDivElement>;
}

const Section: FunctionComponent<Props> = ({ title, innerRef, children }) => {
    return (
        <section className={styles.section}>
            {title && (
                <h2 className={styles.title}>
                    <span>{title}</span>
                </h2>
            )}
            <div className={styles.content} ref={innerRef}>
                {children}
            </div>
        </section>
    );
};

export default Section;
