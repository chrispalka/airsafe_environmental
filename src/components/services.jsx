import { Card } from '../layout/index';
import styles from '../assets/styles/Services.module.css';

// Board Up and Tarping Images
import BoardAndTarpImg from '../assets/board-up-and-tarping.webp';
import BoardAndTarpImg320 from '../assets/board-up-and-tarping-320.webp';
import BoardAndTarpImg768 from '../assets/board-up-and-tarping-768.webp';
import BoardAndTarpImg1280 from '../assets/board-up-and-tarping-1280.webp';

// Radon Mitigation Images
import RadonMitigationImg from '../assets/radon_mitigation_exterior.webp';
import RadonMitigationImg320 from '../assets/radon_mitigation_exterior-320.webp';
import RadonMitigationImg768 from '../assets/radon_mitigation_exterior-768.webp';
import RadonMitigationImg1280 from '../assets/radon_mitigation_exterior-1280.webp';

// Radon Monitor Testing Images
import RadonTestingImg from '../assets/radon-monitor-testing_.webp';
import RadonTestingImg320 from '../assets/radon-monitor-testing320.webp';
import RadonTestingImg768 from '../assets/radon-monitor-testing768.webp';
import RadonTestingImg1280 from '../assets/radon-monitor-testing1280.webp';

// Water Mitigation and Restoration Images
import WaterMitigationImg from '../assets/water-mitigation-and-restoration.webp';
import WaterMitigationImg320 from '../assets/water-mitigation-and-restoration-320.webp';
import WaterMitigationImg768 from '../assets/water-mitigation-and-restoration-768.webp';
import WaterMitigationImg1280 from '../assets/water-mitigation-and-restoration-1280.webp';

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h1>SERVICES</h1>
      <div className={styles.grid}>
        <Card
          title={'RADON TESTING'}
          content='We use advanced equipment to accurately detect radon levels in your home, ensuring your indoor air is safe'
          image={RadonTestingImg}
          srcSet={`
            ${RadonTestingImg320} 320w,
            ${RadonTestingImg768} 768w,
            ${RadonTestingImg1280} 1280w
          `}
          alt={'Radon monitor testing in a residential home'}
        />
        <Card
          title={'RADON MITIGATION'}
          content='Our certified systems reduce radon concentrations quickly and effectively, protecting your family’s long-term health'
          image={RadonMitigationImg}
          srcSet={`
            ${RadonMitigationImg320} 320w,
            ${RadonMitigationImg768} 768w,
            ${RadonMitigationImg1280} 1280w
          `}
          alt={'Radon mitigation system installed in a residential home'}
        />
        <Card
          title={'BOARD UP & TARPING'}
          content='We respond fast to secure and cover your property after disasters, preventing further damage from weather or intrusion'
          image={BoardAndTarpImg}
          srcSet={`
            ${BoardAndTarpImg320} 320w,
            ${BoardAndTarpImg768} 768w,
            ${BoardAndTarpImg1280} 1280w
          `}
          alt={
            'Board Up and Tarping of residential home during natural disaster'
          }
        />
        <Card
          title={'WATER MITIGATION & RESTORATION'}
          content='Our team removes water, dries structures, and restores affected areas to stop damage and prevent mold growth'
          image={WaterMitigationImg}
          srcSet={`
            ${WaterMitigationImg320} 320w,
            ${WaterMitigationImg768} 768w,
            ${WaterMitigationImg1280} 1280w
          `}
          alt={'Water mitigation and restoration services for a flooded home'}
        />
      </div>
    </div>
  );
}

export default Services;
