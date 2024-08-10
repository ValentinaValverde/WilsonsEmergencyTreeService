import PlaceholderIcon from '../public/next.svg';
import PlaceholderImage from '../public/vercel.svg';
import Image, { StaticImageData } from 'next/image';
import styles from '../app/styles/page.module.css';

export default function ReviewCard({
  image = PlaceholderImage,
  icon = PlaceholderIcon,
  text,
  name,
}: {
  image?: StaticImageData;
  icon?: StaticImageData;
  text: string;
  name: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image.src})`,
        borderRadius: 10,
        width: 400,
        height: 500,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        margin: 5,
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--dark-blue)',
          color: 'white',
          padding: 20,
          borderRadius: '0px 0px 10px 10px',
          textAlign: 'center',
        }}
      >
        <Image
          src={icon}
          alt="Review Person Icon"
          width={100}
          height={100}
          style={{
            backgroundColor: 'white',
            borderRadius: 100,
            marginTop: -75,
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ paddingTop: 20 }}>"{text}"</p>
          <p style={{ color: 'var(--light-blue)', fontSize: 14 }}>~ {name}</p>
        </div>
      </div>
    </div>
  );
}

export function LittleReviewCard({
  icon = PlaceholderIcon,
  text,
  name,
}: {
  image?: StaticImageData;
  icon?: StaticImageData;
  text: string;
  name: string;
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--dark-blue)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        width: 350,
        height: 250,
        margin: 10,
      }}
    >
      <Image
        src={icon}
        alt="Review Person Icon"
        width={100}
        height={100}
        style={{
          backgroundColor: 'white',
          borderRadius: 100,
          objectFit: 'cover',
          marginRight: 24,
        }}
      />

      <p
        style={{ paddingTop: 20, color: 'white' }}
        className={styles.center_text}
      >
        "{text}"
      </p>
      <p
        style={{ color: 'var(--light-blue)', fontSize: 14 }}
        className={styles.center_text}
      >
        ~ {name}
      </p>
    </div>
  );
}
