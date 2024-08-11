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
    <div className={styles.highlight_section}>
      {data.map((item, i) => {
        return (
          <div key={i} className={styles.highlight_card}>
            <Image
              src={item.icon}
              alt="Icon"
              width={50}
              height={50}
              className={styles.highlight_icon}
            />
            <div style={{ height: 25 }} />
            <h3
              style={{ textAlign: 'center' }}
              className={styles.highlight_text}
            >
              {item.text}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
