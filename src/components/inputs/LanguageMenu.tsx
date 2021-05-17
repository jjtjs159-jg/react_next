import { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './LanguageMenu.module.scss';

const cx = classNames.bind(styles);

interface Props {
  item: {
    key: string;
    lang: string;
  };
  onChange: (lang: string) => void;
}

const LanguageMenu: FunctionComponent<Props> = ({ item, onChange }) => {
  const handleChange = () => {
    onChange(item.lang);
  };

  return (
    <li className={cx('wrapper')}>
      <div
        className={cx('inner')}
        onClick={handleChange}
        onKeyPress={handleChange}
        role="button"
        tabIndex={0}
      >
        {item.lang}
      </div>
    </li>
  );
};

export default LanguageMenu;
