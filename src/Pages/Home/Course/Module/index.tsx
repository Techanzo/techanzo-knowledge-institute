import { useMemo } from 'react';

import clsx from 'clsx';

import Stack from '../../../../Components/Stack';
import { minutesToHours } from '../../../../utils/date-time';
import { Module } from '../../types';
import { ReactComponent as BookIcon } from './book-icon.svg';
import Lecture from './Lecture';
import styles from './styles.module.css';

interface ModuleCardProps {
  module: Module;
  className?: string;
}

const ModuleCard = ({ module, className }: ModuleCardProps) => {
  const { sequenceNum, name, color = '#000000', description, lectures } = module;
  const { totalLectures, totalDuration } = useMemo(() => {
    const totalLectures = lectures.length;
    const totalDuration = lectures.reduce((acc, lecture) => acc + lecture.duration, 0);
    return { totalLectures, totalDuration };
  }, [lectures]);

  return (
    <Stack gap={16} className={clsx(styles.root, className)}>
      <small>{sequenceNum}</small>
      <h3 style={{ color }}>{name}</h3>
      <div>
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description.map((item) => <p key={item}>{item}</p>)
        )}
      </div>
      <Stack direction="row" alignItems="center" gap={8}>
        <BookIcon color={color} />
        <span className={styles.total} style={{ color }}>{`${totalLectures} Lectures — ${minutesToHours(
          totalDuration
        )}`}</span>
      </Stack>
      <Stack divider={<div className={styles.separator} />}>
        {lectures.map((lecture) => {
          return <Lecture key={lecture.sequenceNum} lecture={lecture} color={color} />;
        })}
      </Stack>
    </Stack>
  );
};

export default ModuleCard;
