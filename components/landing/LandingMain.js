import Link from "next/link";
import styles from "../../styles/LandingMain.module.css";
import AutoplayVideo from "../utility/AutoplayVideo";

const LandingMain = () => {
  return (
    <div className={styles.gridItem}>
      <AutoplayVideo src="./landing.mp4" stylePassthrough={styles.landingVideo} />
      <div className={styles.container}>
        <h1 className={styles.title}>james mcfarland</h1>
        <div className={styles.buttonContainer}>
          <Link href="#about">
            <a>
              <div className={styles.learnMore}>
                <h5>learn more</h5>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
