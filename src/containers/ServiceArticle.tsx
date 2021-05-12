import { FunctionComponent, memo } from 'react';
import { withTranslation } from 'i18n';
import { TFunction } from 'next-i18next';
import classnames from 'classnames/bind';
import styles from './ServiceArticle.module.scss';

const cx = classnames.bind(styles);

interface Props {
  readonly t: TFunction;
  content: {
    name: string;
    img: string;
    to: string;
  };
}

const ServiceArticle: FunctionComponent<Props> = ({ t, content }) => {
  const inner = cx('vertical-wrap', {
    default: !content.img,
  });

  return (
    <article className={styles.service}>
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
    </article>
  );
};

export default ServiceArticle;

// export default withTranslation('common')(ServiceArticle);
// export default withTranslation('common')(connect(mapStateToProps)(Index));
