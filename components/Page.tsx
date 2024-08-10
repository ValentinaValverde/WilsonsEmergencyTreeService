import styles from '../app/styles/page.module.css';
import Card from './Card';
import Highlights from './Highlights';
import PlaceholderImage from '../public/next.svg';
import Image from 'next/image';
import ReviewCard from './ReviewCard';

export default function Page() {
  return (
    <>
      <div
        style={{
          marginTop: -50,
          backgroundColor: 'white',
          marginLeft: 50,
          marginRight: 50,
          borderRadius: 25,
          //   padding: 50,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 className={styles.center_text} style={{ marginTop: 50 }}>
          What We Do Best
        </h2>

        <Card
          //   image={''}
          title={'Complete Tree Removal'}
          text={
            'You can rely on us to safely and efficiently remove your trees while treating your property with the utmost care!'
          }
        />
        <Card
          //   image={''}
          title={'Tree Pruning'}
          text={
            'Whether cleaning up after years of neglect or yearly pruning, we can redeem your trees to a healthy and safe state in many cases!'
          }
          flipped={true}
        />
        <Card
          //   image={''}
          title={'Tree Assessment'}
          text={
            "Fungus, rot, stunted growth or just not sure what is going on? We can come assess, reveal what is going on that you can't see, and make a game plan for restoration or removal."
          }
        />
        <div style={{ height: 50 }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 className={styles.center_text}>
            Locally Owned <br /> & Operated
          </h1>
          <p>13 Years of Experience</p>
          <p>Fully Insured</p>
          <p>Dedicated to Serving Our Local Community</p>
          <button>Call Now for a Free Quote</button>
        </div>

        <div style={{ height: 100 }} />

        <Highlights />

        <div style={{ height: 50 }} />

        <Card
          //   image={''}
          title={'What Makes Us Different?'}
          text={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
          flipped={true}
        />

        <div style={{ height: 50 }} />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 className={styles.center_text}>What People Are Saying</h1>
          <p style={{ width: 400, textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>

          <div style={{ height: 20 }} />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <ReviewCard
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
              }
              name={'John Doe'}
            />
            <ReviewCard
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
              }
              name={'John Doe'}
            />
            <ReviewCard
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
              }
              name={'John Doe'}
            />
          </div>

          <div style={{ height: 20 }} />

          <a style={{ color: 'var(--med-blue)' }}>See More</a>
        </div>

        <div style={{ height: 100 }} />
      </div>
    </>
  );
}
