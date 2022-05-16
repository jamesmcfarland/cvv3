import styles from "../styles/SkillSet.module.css";
import { v4 as uuidv4}  from "uuid";

const SkillSet = ({ title, skills }) => {
  return (
    <div className={styles.skillSet}>
      <h2 className={styles.skillSetTitle}>{title}</h2>
      <div className={styles.gridContainer}>
        {skills.map((skill, i) =>
          //   <div className={styles.skill} key={skill.title}>
          [
            <h3 key={uuidv4()} className={styles.skillTitle}>
              {skill.title}
            </h3>,
            <h3 key={uuidv4()} className={styles.skillInfo}>
              {skill.detail}
            </h3>,
          ]
        )}
      </div>
    </div>
  );
};

export default SkillSet;
