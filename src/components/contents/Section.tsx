import { FunctionComponent, MutableRefObject } from 'react';
import { Headline } from 'components/typography';
import styles from './Section.module.scss';

interface Props {
    title?: string;
    innerRef?: MutableRefObject<HTMLDivElement>;
}

const Section: FunctionComponent<Props> = ({ title, innerRef, children }) => {
    return (
        <section className={styles.section}>
            {title && (
                <div className={styles.title}>
                    <Headline level={3} margin>
                        {title}
                    </Headline>
                </div>
            )}
            <div className={styles.content} ref={innerRef}>
                {children}
            </div>
        </section>
    );
};

export default Section;
