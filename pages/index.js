import Head from "next/head";
import Copyright from "../components/Copyright";
import Landing from "../components/landing/Landing";
import LetsTalk from "../components/LetsTalk";
import MainContent from "../components/MainContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>James McFarland</title>
      </Head>
      <Landing maxFadeInDelay={2} />
      <MainContent />
      <LetsTalk />
      <Copyright />
    </>
  );
}
