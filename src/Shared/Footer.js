import styles from "../../styles/Shared.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© 2023 GitClub</div>
      <ul className={styles.footerList}>
        <li>
          <a
            className={styles.footerItem}
            href="http://www.galvanize.com/privacy"
          >
            PRIVACY POLICY
          </a>
        </li>
        <li>
          <a
            className={styles.footerItem}
            href="http://www.galvanize.com/terms-of-use"
          >
            TERMS OF USE
          </a>
        </li>
        <li>
          <a className={styles.footerItem} href="http://www.galvanize.com">
            Galvanize
          </a>
        </li>
        <li>
          <a className={styles.footerItem} href="mailto:info@galvanize.com">
            info@galvanize.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
