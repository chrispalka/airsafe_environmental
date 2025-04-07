import { Card } from '../layout/index';
import {
  faPhone,
  faCalendar,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../assets/styles/Help.module.css';

function Help() {
  return (
    <div className={styles.servicesContainer}>
      <h1>GET HELP FAST</h1>
      <div className={styles.grid}>
        <Card
          title='CALL US'
          content='Call now to schedule your free consulatation.'
          icon={faPhone}
          iconColor={'#003366'}
          showButton={true}
          buttonText='CALL NOW: (678) 245-0698'
          buttonLink='tel:+1 (678) 245-0698'
        />
        <Card
          title='SCHEDULE'
          content='Pick a time that works best for you, and one of our experts will be there.'
          icon={faCalendar}
        />
        <Card
          title='REST EASY'
          content='Gain peace of mind knowing your home is safe.'
          icon={faSmile}
        />
      </div>
    </div>
  );
}

export default Help;
