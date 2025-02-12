import {
  Nav,
  Hero,
  About,
  Services,
  Contact,
  Footer,
  useScroll,
} from '../layout/index.js';

import styles from '../assets/styles/App.module.css';

export function App() {
  const { scrollDirection, topOfPage } = useScroll();

  return (
    <>
      <Nav scrollDirection={scrollDirection} top={topOfPage} />
      <Hero />
      <div
        id='about'
        className={[styles.section, styles.section1, styles.noTopPadding].join(
          ' '
        )}
      >
        <div className={styles.content}>
          <About />
        </div>
      </div>
      <div
        id='services'
        className={[styles.section, styles.section2].join(' ')}
      >
        <div className={styles.content}>
          <Services />
        </div>
      </div>
      <div id='contact' className={[styles.section, styles.section3].join(' ')}>
        <div className={styles.content}>
          <Contact />
        </div>
      </div>
      <div className={[styles.section, styles.sectionfooter].join(' ')}>
        <div className={styles.content}>
          <Footer />
        </div>
      </div>
    </>
  );
}
