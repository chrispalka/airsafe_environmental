import styles from '../assets/styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        {/* Contact Information */}
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>
            Phone:
            <a href='tel:+1 (678) 245-0698'> +1 (678) 245-0698</a>
          </p>
          <p>
            Email:{' '}
            <a href='mailto:customer.support@safe-environmental'>
              customer.support@safe-environmental.com
            </a>
          </p>
          <p>Operating Hours: </p>
          <p>Mon-Fri, 5 AM - 7 PM</p>
          <p>Sat-Sun, 7 AM - 5 PM</p>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>What Is Radon</a>
            </li>
            <li>
              <a href='#help'>How We Help</a>
            </li>
            <li>
              <a href='#services'>What We Do</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Legal Information */}
        {/* <div className={styles.footerSection}>
          <h3>Legal</h3>
          <ul className={styles.footerLinks}>
            <li>
              <a href='/privacy-policy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/terms-of-service'>Terms of Service</a>
            </li>
            <li>
              <a href='/accessibility'>Accessibility Statement</a>
            </li>
          </ul>
        </div> */}

        {/* Social Media */}
        {/* <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </div> */}
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>© 2025 AirSafe Environmental. All Rights Reserved.</p>
        <p className={styles.slogan}>"Clean Air, Safe Home."</p>
      </div>
    </div>
  );
}

export default Footer;
