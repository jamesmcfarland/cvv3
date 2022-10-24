import { softskills, techskills, volunteering } from "../data/data";
import About from "./About";
import Projects from "./Projects";
import SkillSet from "./SkillSet";
import styles from "../styles/MainContent.module.css";
import {MdOutlineComputer, MdVolunteerActivism} from "react-icons/md";
import {FaPeopleCarry} from "react-icons/fa";

const MainContent = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.mainSite}>
        <About />
        <SkillSet title="Tech skills" skills={techskills} icon={MdOutlineComputer}/>
        <SkillSet title="Soft skills" skills={softskills} icon={FaPeopleCarry}/>
        <SkillSet title="Volunteering" skills={volunteering} icon={MdVolunteerActivism}/>
        <Projects />
      </div>
    </div>
  );
};

export default MainContent;
