import { ReactNode, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  to?: string;
  children: ReactNode;
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
