import ReviewCard from '@/components/ReviewCard';
import styles from '../styles/page.module.css';
import Image from 'next/image';

export default function page() {
  const imageData = ['', '', '', '', ''];

  return (
    <>
      <div
        style={{
          height: '50vh',
          backgroundColor: 'lightgray',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className={styles.center_text}>Reviews</h1>
      </div>

      <div
        style={{
          marginTop: -50,
          backgroundColor: 'white',
          marginLeft: 50,
          marginRight: 50,
          borderRadius: 25,
          padding: 50,

          display: 'flex',
          // flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {imageData.map((item, i) => {
          return <ReviewCard text={''} name={''} />;
        })}
      </div>
    </>
  );
}
