import styles from "../styles/About.module.css";
import { GiHand } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <div id="about" className={styles.about}>
      <Fade direction="up" triggerOnce><h2 className={styles.introTitle}><GiHand /> hi, nice to meet you,</h2></Fade>
      <p className={styles.normalP}>

        My name&apos;s James, and I&apos;m a 2nd Year Software Engineer at
        Queen&apos;s University Belfast. <br /> <br />
        I am the 2022/23 Secretary of the Queen&apos;s Computing Society committee,
        where I&apos;ve involved myself in all aspects from the 2022 EEECS
        Formal, to working on technical projects such as the Minecraft server
        and QCS Website. As secretary I&apos;m involved in managing company relations, running meetings and keeping things running smooth on the backend.
        <br /> <br /> Through my time on various schemes, I&apos;ve also
        developed an understanding of the importance of security, and the fact
        that it should be implemented at every stage of a project, regardless of
        nature or exposure, and I try to implement this to the best of my
        abilities in any projects I work in. <br /> <br />
        As can be seen on my GitHub (shameless plug), I am always looking to
        expand my skill set and experience, as I believe that having an
        understanding, even basic, of a large variety of technologies, platforms
        and services is a key instrument in finding the best solution to a
        problem, as it allows you to consider many diverse options. I would say
        however, my strongest language is C#, particularly within the .NET
        framework. JavaScript is quickly taking over however, Node.JS is just
        too versatile!

      </p>
    </div>
  );
};

export default About;
