import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps {
  to?: string;
  children: ReactNode;
  [key: string]: any;
}

export const Button = ({ to, children, ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={`${styles.Button} ${styles.Link}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles.Button} {...props}>
      {children}
    </button>
  );
};
