import styles from '../app/styles/page.module.css';
import Image from 'next/image';

import CalendarIcon from '../public/icons/calendar.svg';
import StarIcon from '../public/icons/star.svg';
import SatisfiedIcon from '../public/icons/satisfied.svg';
import ShieldIcon from '../public/icons/shield.svg';
import HeartIcon from '../public/icons/heart.svg';
import PlusIcon from '../public/icons/plus.svg';

export default function Highlights() {
  const data = [
    { icon: CalendarIcon, text: 'Precision Scheduling' },
    { icon: StarIcon, text: 'Oustanding Results' },
    { icon: SatisfiedIcon, text: 'Happy Customers' },
    { icon: PlusIcon, text: '13+ Years of Experience' },
    { icon: ShieldIcon, text: 'Fully Insured' },
    { icon: HeartIcon, text: 'Community-Focused Service' },
  ];

  return (
    <div
      style={{
        // backgroundColor: 'var(--light-blue)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',

        paddingLeft: 100,
        paddingRight: 100,
        gap: 25,
        padding: 50,
      }}
    >
      {data.map((item, i) => {
        return (
          <div key={i} className={styles.highlight_card}>
            <Image src={item.icon} alt="Icon" width={50} height={50} />
            <div style={{ height: 25 }} />
            <h3 style={{ textAlign: 'center' }}>{item.text}</h3>
          </div>
        );
      })}
    </div>
  );
}
