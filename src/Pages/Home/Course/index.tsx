import Masonry from 'react-smart-masonry';

import clsx from 'clsx';

import Container from '../../../Components/Container';
import Stack from '../../../Components/Stack';
import { Course as CourseType } from '../types';
import ModuleCard from './Module';
import styles from './styles.module.css';

const breakpoints = { mobile: 0, desktop: 1200 };

interface Props {
  course: CourseType;
  className?: string;
}

const Course = ({ course, className }: Props) => {
  const {
    name,
    details: { title, description, modules },
  } = course;

  return (
    <Container className={clsx(styles.root, className)}>
      <h1>{name}</h1>
      <Masonry breakpoints={breakpoints} columns={{ mobile: 1, desktop: 2 }} gap={48} autoArrange>
        <Stack gap={16} className={styles.item}>
          <h2 className={styles.heading}>{title}</h2>
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            description.map((item) => <p key={item}>{item}</p>)
          )}
        </Stack>
        {modules.map((module) => (
          <ModuleCard key={module.sequenceNum} module={module} className={styles.item} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Course;
