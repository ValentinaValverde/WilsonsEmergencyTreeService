import LandingPage from '@/components/LandingPage';
import PageLayout from '@/components/PageLayout';

import styles from '../app/styles/page.module.css';
import Card from '../components/Card';
import Highlights from '../components/Highlights';
import { LittleReviewCard } from '../components/ReviewCard';
import RemovalImage from '../public/general-photos/wrist.png';
import PruningImage from '../public/general-photos/prune.png';
import AssessmentImage from '../public/general-photos/rot.jpg';
import OwnerImage from '../public/general-photos/saw-dust-smile.png';

import CarrieIcon from '../public/review-icons/carrie-review.png';
import TomIcon from '../public/review-icons/tom-review.png';
import DeannaIcon from '../public/review-icons/deanna-review.png';

export default function Home() {
  return (
    <main>
      <LandingPage />

      <PageLayout>
        {/* What We Do Section */}
        <div>
          <h3 className={styles.center_text} style={{ marginTop: 50 }}>
            What We Do Best
          </h3>
          <div style={{ height: 25 }} />

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
        </div>

        <div style={{ height: 100 }} />

        {/* Highlights Section */}
        <div
          style={{
            backgroundColor: 'var(--light-blue)',
            paddingTop: 50,
            paddingBottom: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className={styles.center_text}>But What Makes Us Different?</h2>
          <p
            className={styles.center_text}
            style={{ color: 'var(--med-blue)' }}
          >
            Well, something something to name a few
          </p>

          <Highlights />

          <button
            style={{ fontSize: 25, width: 500 }}
            className={styles.highlight_button}
          >
            Call Now for a Free Quote
          </button>
        </div>

        <div style={{ height: 100 }} />

        {/* About the Owner */}
        <div>
          <Card
            image={OwnerImage}
            title={'Meet the Owner'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
            flipped={true}
          />
        </div>

        <div style={{ height: 100 }} />

        {/* Review Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h2 className={styles.center_text}>What People Are Saying</h2>
          <p
            style={{
              width: 400,
              textAlign: 'center',
              color: 'var(--med-blue)',
            }}
          >
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

          <a href="/reviews" className={styles.see_more}>
            See More
          </a>
        </div>

        <div style={{ height: 100 }} />
      </PageLayout>
    </main>
  );
}
