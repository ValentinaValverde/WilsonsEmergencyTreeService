import styles from '../app/styles/page.module.css';
import Logo from '../public/logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: 'var(--dark-blue)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 50,
      }}
    >
      <Image src={Logo} alt="Footer Logo" width={290} height={250} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <a href="/photos" className={styles.footer_link}>
          Photos
        </a>
        <a href="/reviews" className={styles.footer_link}>
          Reviews
        </a>
        <a
          href="https://www.facebook.com/DavidWilsonTreeService/"
          target="_blank"
          className={styles.footer_link}
        >
          Facebook
        </a>
        <div style={{ height: 25 }} />
        <button style={{ fontSize: 20 }}>Call Now for a Free Quote!</button>
      </div>
    </div>
  );
}
