import { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import styles from './Overlay.module.scss';

const cx = classnames.bind(styles);

type Theme = 'light' | 'dark';

interface Props {
    theme?: Theme;
    onClose: () => void;
}

const defaultProps: Partial<Props> = {
    theme: 'light',
};

const Overlay: FunctionComponent<Props> = ({ theme, onClose }) => {
    /**
     * @todo 추후, Global Theme 지정 시, html 또는 body에서 global theme classname을 부여하고 이에 따라 자동적으로 지정되게끔 수정이 필요함
     */
    const classes = cx('overlay', theme);

    return <div className={classes} onClick={onClose} aria-hidden="true" />;
};

Overlay.defaultProps = defaultProps;

export default Overlay;
