import styles from '../app/styles/page.module.css';
import Image from 'next/image';

import CalendarIcon from '../public/icons/calendar.svg';
import StarIcon from '../public/icons/star.svg';
import SatisfiedIcon from '../public/icons/satisfied.svg';
import HeartIcon from '../public/icons/heart.svg';
import HighlightCards from './HighlightCards';

export default function Highlights() {
  const data = [
    {
      icon: CalendarIcon,
      title: 'Precision Scheduling',
      text: 'Lorem ipsum dolor sit amet',
      link: '/',
    },
    {
      icon: StarIcon,
      title: 'Oustanding Results',
      text: 'Lorem ipsum dolor sit amet',
      link: '/photos',
    },
    {
      icon: SatisfiedIcon,
      title: 'Happy Customers',
      text: 'Lorem ipsum dolor sit amet',
      link: '/reviews',
    },
    {
      icon: HeartIcon,
      title: 'Community-Focused Service',
      text: 'Lorem ipsum dolor sit amet',
      link: '/',
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <HighlightCards
          image={undefined}
          link={''}
          title={'Precision Scheduling'}
          text={'text'}
        />
        <HighlightCards
          image={undefined}
          link={''}
          title={'Amazing Results'}
          text={'Our photos say it best'}
        />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <HighlightCards
          image={undefined}
          link={''}
          title={'Customer Satisfaction'}
          text={'We value our customers, and it shows!'}
        />
        <HighlightCards
          image={undefined}
          link={''}
          title={'Community Focused'}
          text={'We care about people'}
        />
      </div>
    </div>
  );
}
