import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../assets/styles/Icon.module.css';

const Icon = ({ icon, color = '#00274D', size }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={styles.icon}
      color={color}
      size={size}
    />
  );
};
export default Icon;
