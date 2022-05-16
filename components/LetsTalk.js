import Link from "next/link";
import styles from "../styles/LetsTalk.module.css";

const LetsTalk = () => {
  return (
    <div className={styles.talk}>
      <div>
        <h1 className={styles.talkTag}>still interested?</h1>
        <div className={styles.buttonContainer}>
          <Link href="mailto:contact@jamesmcfarland.dev" rel="noreferrer">
            <a target="_blank">
              <div className={styles.talkLink}>
                <h5>let&apos;s talk</h5>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
