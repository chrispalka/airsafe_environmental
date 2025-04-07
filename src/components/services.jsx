import { Card } from '../layout/index';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/styles/Services.module.css';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1>SERVICES</h1>
      <div className={styles.grid}>
        <Card
          title='CALL US'
          content='Call now to schedule your free radon'
          icon={faPhone}
        />
      </div>
    </div>
  );
}

export default Services;
