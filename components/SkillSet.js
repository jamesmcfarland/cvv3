import styles from "../styles/SkillSet.module.css";
import { v4 as uuidv4 } from "uuid";
import { Slide } from "react-awesome-reveal";

const SkillSet = ({ title, skills, icon: Icon }) => {
  return (
    <div className={styles.skillSet}>
      <h2 className={styles.skillSetTitle}><Icon /> {title}</h2>
        <Slide direction="up" cascade={true} damping={0.05} triggerOnce={true}>
      <div className={styles.gridContainer}>
          {skills.map((skill, i) =>
            //   <div className={styles.skill} key={skill.title}>
            [

              <h3 className={styles.skillTitle} key={uuidv4()}>
                {skill.icon && <skill.icon></skill.icon>} {skill.title}
              </h3>,

              <p key={uuidv4()} className={styles.skillInfo}>
                {skill.detail}
              </p>,

            ]
          )}
      </div>
        </Slide>
    </div>
  );
};

export default SkillSet;
