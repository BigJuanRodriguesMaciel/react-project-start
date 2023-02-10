import PropTypes from './PropTypes';
import styles from './styles.module.scss';

export function Button({ disabled, onClick, theme, title, icon }: PropTypes) {
    const buttonTheme = disabled ? 'disabled' : theme;

    const handleClick = () => {
        if (buttonTheme === 'disabled') return;
        onClick?.();
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className={styles[`button--${buttonTheme}`]}
        >
            {icon && icon}
            <span
                style={{ marginLeft: icon ? 18 : 0 }}
                className={styles[`button--${buttonTheme}__title`]}
            >
                {title}
            </span>
        </button>
    );
}

Button.defaultProps = {
    theme: 'default',
};
