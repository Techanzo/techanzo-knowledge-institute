import clsx from 'clsx';

import styles from './styles.module.css';

interface TagProps {
  // TODO: implement variant property
  /** @default 'filled' */
  variant?: 'filled' | 'outlined';
  name: string;
  /** @default '#333' */
  color?: string;
  className?: string;
}

const Tag = ({ variant = 'filled', name, color = '#333', className }: TagProps) => {
  return (
    <p className={clsx(styles.root, className)} style={{ backgroundColor: color, color: '#fff' }}>
      {name}
    </p>
  );
};

export default Tag;
