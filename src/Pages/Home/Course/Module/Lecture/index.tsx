import clsx from 'clsx';

import Stack from '../../../../../Components/Stack';
import Tag from '../../../../../Components/Tag';
import { minutesToHours } from '../../../../../utils/date-time';
import { Lecture as LectureType } from '../../../types';
import Topic from '../Topic';
import styles from './styles.module.css';

interface Props {
  lecture: LectureType;
  color?: string;
  className?: string;
}

const Lecture = ({ lecture, color, className }: Props) => {
  const { sequenceNum, name, duration, tags, topics } = lecture;

  return (
    <>
      <Stack direction="row" alignItems="center" gap={12} className={clsx(styles.lecture, className)}>
        <span className={styles.sequenceNum} style={{ color }}>
          {sequenceNum}
        </span>
        <span>{name}</span>
        {tags?.map((tag) => (
          <Tag key={tag} name={tag} className={styles.tag} />
        ))}
        <span className={styles.duration}>{minutesToHours(duration)}</span>
      </Stack>
      {topics && (
        <Stack gap={8} className={styles.topics}>
          {topics.map((topic) => (
            <Topic key={topic.sequenceNum} topic={topic} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default Lecture;
