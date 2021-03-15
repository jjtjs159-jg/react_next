import { FunctionComponent, memo, ElementType, HTMLAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './Headline.module.scss';

const cx = classnames.bind(styles);

type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
type Align = 'left' | 'center' | 'right';

interface BaseProps {
    level?: HeadingLevel;
    align?: Align;
    bold?: boolean;
    margin?: boolean;
    className?: string;
}

export type Props = BaseProps & HTMLAttributes<HTMLHeadingElement>;

const defaultProps: Partial<Props> = {
    level: '3',
};

const Headline: FunctionComponent<Props> = ({
    level,
    bold,
    margin,
    align,
    className,
    children,
    ...rest
}) => {
    const Component = `h${level}` as ElementType;

    const classes = cx('headline', `headline-${level}`, align, className, {
        margin,
        bold,
    });

    return (
        <Component className={classes} {...rest}>
            {children}
        </Component>
    );
};

Headline.defaultProps = defaultProps;

export default memo(Headline);
