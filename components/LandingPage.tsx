import styles from '../app/styles/page.module.css';

export default function LandingPage() {
  return (
    <div
      style={{
        height: '90vh',
        backgroundColor: 'lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className={styles.center_text}>
        Wilsons Emergency <br />
        Tree Service
      </h1>
      <p style={{ textAlign: 'center', width: 300 }}>
        Lorem ipsum dolor sit amet loream ipsum dolor sit amet lorem ipsum.
      </p>
      <button>Call Now for a Free Quote</button>
    </div>
  );
}
