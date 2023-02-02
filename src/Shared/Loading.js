import styles from '../../styles/Shared.module.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}
