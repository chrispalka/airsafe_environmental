import styles from '../assets/styles/Services.module.css';
import { Card } from '../layout/index';
import WheelchairImg from '../assets/wheelchair_transport.webp';
import SpecialNeedsImg from '../assets/special_needs_service.webp';
import StretcherImg from '../assets/stretcher_service.webp';
import SeniorImg from '../assets/senior_service.webp';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1>SERVICES</h1>
      <div className={styles.grid}>
        <Card
          title='Wheelchair'
          content='Safe and reliable transportation for wheelchair-bound passengers, ensuring comfort and ease of access.'
          image={WheelchairImg}
        />
        <Card
          title='Stretcher'
          content='Specialized transportation services for patients requiring a stretcher, with experienced staff ensuring safe handling.'
          image={StretcherImg}
        />
        <Card
          title='Senior'
          content='Caring and professional transportation for seniors to medical appointments, social events, or errands.'
          image={SeniorImg}
        />
        <Card
          title='Special Needs'
          content='Personalized transportation solutions for individuals with disabilities or special needs.'
          image={SpecialNeedsImg}
        />
      </div>
    </div>
  );
}

export default Services;
