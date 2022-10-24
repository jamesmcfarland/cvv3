import skillSetStyles from "../styles/SkillSet.module.css";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <div className={skillSetStyles.skillSet}>
      <h2 className={skillSetStyles.skillSetTitle}>projects</h2>
      <div className={styles.projectsGridContainer}>
        {projects.map((project, i) =>
          //   <div className={styles.skill} key={skill.title}>
          [
            <div key={uuidv4()}>
              <h3 className={skillSetStyles.skillTitle}>
                {project.title}
              </h3>
         
              <div className={styles.techUsed}>{project.icons.map((Icon, j) => (<Icon key={j} />))}</div>
             
            </div>
            ,
            <div key={uuidv4()}>
              <h3 className={skillSetStyles.skillInfo}>{project.detail}</h3>
              <Link href={project.link} rel="noreferrer">
                <a target="_blank">
                  <div className={styles.viewProject}>
                    <h5>view</h5>
                  </div>
                </a>
              </Link>
            </div>,
          ]
        )}
      </div>

      <div className={styles.gitHub}>
        <div>
          <h1 className={styles.gitHubTag}>
            more projects available on github
          </h1>
          <div className={styles.buttonContainer}>
            <Link href="https://github.com/jamesmcfarland" rel="noreferrer">
              <a target="_blank">
                <div className={styles.viewGithub}>
                  <h5>view</h5>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
