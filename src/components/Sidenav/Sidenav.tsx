import PropTypes from './PropTypes';
import styles from './styles.module.scss';

export function Sidenav({ visible }: PropTypes) {
    const classNames = `${styles.sidenav} ${visible ? styles.open : ''}`;
    return <aside className={classNames} />;
}
