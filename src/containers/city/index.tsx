import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { FrameLayout } from 'components/layouts';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classnames.bind(styles);

interface Props {}

const Index: FunctionComponent<Props> = () => {
  const router = useRouter();
  const { city } = router.query;

  const title = city as string;

  return <FrameLayout title={title}>준비 중...</FrameLayout>;
};

export default Index;
