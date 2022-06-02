import LandingAttribute from "./LandingAttribute";
import { attributes } from "../../data/data";
import LandingMain from "./LandingMain";
import styles from "../../styles/Landing.module.css";
import { mapIndex } from "../../helpers/math";

const Landing = ({ maxFadeInDelay }) => {
  return (
    <div className={styles.landingGrid}>
      <LandingMain />
      {/* primary elements */}
      {attributes.map(({ text, isPrimary, styleClass }, i) => {
        return (
          <LandingAttribute
            key={i}
            text={text}
            isPrimary={isPrimary}
            styleClass={styleClass}
            delay={mapIndex(i, attributes.length, maxFadeInDelay)}
          />
        );
      })}

    </div>
  );
};

export default Landing;
