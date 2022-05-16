import Copyright from "../components/Copyright";
import Landing from "../components/landing/Landing";
import LetsTalk from "../components/LetsTalk";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <>
      <Landing maxFadeInDelay={2} />
      <MainContent />
      <LetsTalk />
      <Copyright />
    </>
  );
}
