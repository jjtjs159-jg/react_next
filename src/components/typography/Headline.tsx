import { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import styles from './Headline.module.scss';

const cx = classnames.bind(styles);

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextCase = 'uppercase' | 'capitalize';

// 컬러 추가
interface Props {
    level: Level;
    bold?: boolean;
    margin?: boolean;
    textcase?: TextCase;
}

const Headline: FunctionComponent<Props> = ({ level, bold, margin, textcase, children }) => {
    const HeadlineComponent = `h${level}` as Tag;

    const classes = cx('headline', `headline-${level}`, textcase, {
        bold,
        margin,
    });

    return (
        <HeadlineComponent className={classes}>
            <span>{children}</span>
        </HeadlineComponent>
    );
};

export default Headline;
