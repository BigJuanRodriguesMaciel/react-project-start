import { useState, MouseEvent, useCallback } from 'react';
import { Header, Sidenav } from '@components';
import styles from './styles.module.scss';
import PropTypes from './PropTypes';

export function Layout({ children }: PropTypes) {
    const [visible, toggleVisible] = useState(false);

    const handleClick = useCallback(
        (e: MouseEvent) => {
            e.stopPropagation();
            toggleVisible(!visible);
        },
        [visible]
    );

    return (
        <div className={styles['main-container']}>
            <div
                onClick={() => {
                    toggleVisible(false);
                }}
                role="presentation"
                className={styles['sidenav-container']}
            >
                <Sidenav visible={visible} />
                <div className={styles['page-content']}>
                    <div onClick={handleClick}>
                        <Header />
                    </div>
                    <div className={styles.page}>{children}</div>
                </div>
            </div>
        </div>
    );
}
