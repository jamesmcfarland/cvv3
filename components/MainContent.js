import { softskills, techskills, volunteering } from "../data/data";
import About from "./About";
import Projects from "./Projects";
import SkillSet from "./SkillSet";
import styles from "../styles/MainContent.module.css";

const MainContent = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.mainSite}>
        <About />
        <SkillSet title="Tech skills" skills={techskills} />
        <SkillSet title="Soft skills" skills={softskills} />
        <SkillSet title="Volunteering" skills={volunteering} />
        <Projects />
      </div>
    </div>
  );
};

export default MainContent;
