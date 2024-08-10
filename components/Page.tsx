import styles from '../app/styles/page.module.css';
import Card from './Card';
import Highlights from './Highlights';
import { LittleReviewCard } from './ReviewCard';
import RemovalImage from '../public/general-photos/wrist.png';
import PruningImage from '../public/general-photos/prune.png';
import AssessmentImage from '../public/general-photos/rot.jpg';
import OwnerImage from '../public/general-photos/saw-dust-smile.png';

import CarrieIcon from '../public/review-icons/carrie-review.png';
import TomIcon from '../public/review-icons/tom-review.png';
import DeannaIcon from '../public/review-icons/deanna-review.png';

export default function Page() {
  return (
    <>
      <div
        style={{
          marginTop: -50,
          backgroundColor: 'white',
          marginLeft: 50,
          marginRight: 50,
          borderRadius: 10,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3 className={styles.center_text} style={{ marginTop: 50 }}>
          What We Do Best
        </h3>

        <Card
          image={RemovalImage}
          title={'Complete Tree Removal'}
          text={
            'You can rely on us to safely and efficiently remove your trees while treating your property with the utmost care!'
          }
        />
        <Card
          image={PruningImage}
          title={'Tree Pruning'}
          text={
            'Whether cleaning up after years of neglect or yearly pruning, we can redeem your trees to a healthy and safe state in many cases!'
          }
          flipped={true}
        />
        <Card
          image={AssessmentImage}
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
          <h2 className={styles.center_text}>
            Locally Owned <br /> & Operated
          </h2>
          <p>13 Years of Experience</p>
          <p>Fully Insured</p>
          <p>Dedicated to Serving Our Local Community</p>
          <button>Call Now for a Free Quote</button>
        </div>

        <div style={{ height: 100 }} />

        <Highlights />

        <div style={{ height: 50 }} />

        <Card
          image={OwnerImage}
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
          <h2 className={styles.center_text}>What People Are Saying</h2>
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
            <LittleReviewCard
              icon={CarrieIcon}
              text={
                'Very professional team! Speedy and efficient service. Had multiple tress and hanging limbs that needed to be removed, and the job was done by lunchtime! Highly recommend.'
              }
              name={'Carrie Bailey'}
            />
            <LittleReviewCard
              icon={TomIcon}
              text={
                'Great service..hardworking guy..reasonable prices..would definitely recommend his services.'
              }
              name={'Tom McGill'}
            />
            <LittleReviewCard
              icon={DeannaIcon}
              text={
                'Always on time. Always very polite. Wonderful to do business with. Very professional and great prices! They cut some trees on our property, it took no time at all, clean up and everything.'
              }
              name={'Deanna Lingo'}
            />
          </div>

          <div style={{ height: 20 }} />

          <a href="/reviews" style={{ color: 'var(--med-blue)' }}>
            See More
          </a>
        </div>

        <div style={{ height: 100 }} />
      </div>
    </>
  );
}
