import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './styles.module.css';

interface Props {
  /** @default false */
  fluid?: boolean;
  children: ReactNode;
  className?: string;
}

const Container = ({ fluid = false, children, className }: Props) => {
  return <div className={clsx(fluid ? styles.containerFluid : styles.container, className)}>{children}</div>;
};

export default Container;
