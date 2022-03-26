import { FC } from 'react';
import styles from './Preloader.module.scss';

export const Preloader: FC = () => (
  <div className={styles['lds-spinner']}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
