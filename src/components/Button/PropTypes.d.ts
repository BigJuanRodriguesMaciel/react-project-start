import { IconType } from 'react-icons/lib';

type PropTypes = {
    disabled?: boolean;
    icon?: IconType;
    onClick: () => void;
    theme?: 'outlined' | 'disabled' | 'default' | 'secondary';
    title: string;
};

export default PropTypes;
