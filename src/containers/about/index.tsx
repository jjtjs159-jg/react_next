import { Fragment } from 'react';
import { NextPage } from 'next';
import { Header } from 'components/headers';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface Props {
    data: {
        name?: string;
        id?: number;
    };
}

const Index: NextPage<Props> = ({ data }) => {
    // const classes = cx('color', {
    //     active_hover: !data.id,
    // });

    const classes = cx('color', {
        active_hover: !data.id,
    });

    return (
        <Fragment>
            <Header />
            <div className={classes}>어어어어</div>
            {data.name} ABOUT
        </Fragment>
    );
};

export default Index;
