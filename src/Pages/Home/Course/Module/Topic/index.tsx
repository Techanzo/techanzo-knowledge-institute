import clsx from 'clsx';

import Stack from '../../../../../Components/Stack';
import Tag from '../../../../../Components/Tag';
import { minutesToHours } from '../../../../../utils/date-time';
import { Topic as TopicType } from '../../../types';
import styles from './styles.module.css';

interface TopicProps {
  topic: TopicType;
  className?: string;
}

const Topic = ({ topic, className }: TopicProps) => {
  const { sequenceNum, name, description, duration, tags } = topic;

  return (
    <Stack direction="row" gap={8} className={clsx(styles.root, className)}>
      <span>{sequenceNum}</span>
      <Stack gap={4}>
        <span>{name}</span>
        <div className={styles.description}>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            description?.map((item) => <p key={item}>{item}</p>)
          )}
        </div>
      </Stack>
      {tags?.map((tag) => (
        <Tag key={tag} name={tag} className={styles.tag} />
      ))}
      <span className={styles.duration}>{minutesToHours(duration)}</span>
    </Stack>
  );
};

export default Topic;
