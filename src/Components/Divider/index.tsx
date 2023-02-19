import clsx from 'clsx';

import styles from './styles.module.css';

export interface DividerProps {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Divider = ({ orientation = 'horizontal', className }: DividerProps) => {
  return (
    <div
      className={clsx(styles.root, className, {
        [styles.horizontal]: orientation === 'horizontal',
        [styles.vertical]: orientation === 'vertical',
      })}
    />
  );
};

export default Divider;
