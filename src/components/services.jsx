import styles from '../assets/styles/Services.module.css';
import { Card } from '../layout/index';
// import WheelchairImg from '../assets/wheelchair_transport.webp';
// import SpecialNeedsImg from '../assets/special_needs_service.webp';
// import StretcherImg from '../assets/stretcher_service.webp';
// import SeniorImg from '../assets/senior_service.webp';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1>SERVICES</h1>
      <div className={styles.grid}>
        <Card
          title='WHAT IS RADON?'
          content='Radon is a naturally occurring radioactive gas that forms from the
        breakdown of uranium in soil, rock, and water. It is colorless,
        odorless, and tasteless, making it impossible to detect without
        proper testing.'
        />
      </div>
    </div>
  );
}

export default Services;
