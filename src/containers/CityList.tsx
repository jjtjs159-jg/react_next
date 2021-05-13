import { FunctionComponent, memo } from 'react';
import { TFunction } from 'next-i18next';
import Link from 'next/link';
import classnames from 'classnames/bind';
import styles from './CityList.module.scss';

const cx = classnames.bind(styles);

interface Props {
  readonly t: TFunction;
  content: {
    name: string;
    img: string;
    to: string;
  };
}

const CityList: FunctionComponent<Props> = ({ t, content }) => {
  const inner = cx('vertical-wrap', {
    default: !content.img,
  });

  return (
    <article className={styles.service}>
      <Link href={`city/${content.name}`}>
        <a>
          <i className={styles.mask} />
          <figure className={inner}>
            <img
              className={styles.image}
              src={content.img || '/photo.png'}
              data-src={content.img}
              alt="cover"
            />
            <figcaption>
              <p>{t(content.name)}</p>
            </figcaption>
          </figure>
        </a>
      </Link>
    </article>
  );
};

export default CityList;
