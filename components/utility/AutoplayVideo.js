import styles from "../../styles/AutoplayVideo.module.css";

const AutoplayVideo = ({ src, stylePassthrough }) => (
  <div
    className={stylePassthrough}
    dangerouslySetInnerHTML={{
      __html: `
    <video
    loop
    muted
    autoplay
    class="${styles.main}"
    playsinline>
    <source src="${src}" type="video/mp4"/>
    </video>`,
    }}
  />
);

export default AutoplayVideo;
