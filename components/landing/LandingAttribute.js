import styles from "../../styles/LandingAttribute.module.css";

const LandingAttribute = ({ isPrimary, styleClass, text, delay }) => {
  return (
    <div
      className={` ${
        isPrimary ? styles.gridPrimary : styles.gridSecondary
      } ${styles.gridItem} ${styleClass}`}
      style={{
        animationDelay: `${delay}s !important`,
      }}
    >
      <h4>{text}</h4>
    </div>
  );
};

export default LandingAttribute;
