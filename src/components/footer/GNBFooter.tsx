import { FunctionComponent, Fragment } from 'react';
import styles from './GNBFooter.module.scss';

const GNBFooter: FunctionComponent = () => (
    <Fragment>
        <footer className={styles.footer}>
            <p className={styles.greeting}>Thanks for stopping by</p>
            <p className={styles.copyright}>
                <span>Copyright © 2020- Front Roid(Park JongGwang). All right reserved.</span>
            </p>
        </footer>
    </Fragment>
);

export default GNBFooter;
