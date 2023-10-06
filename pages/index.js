import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Banner from "@/components/banner/banner";
import NavBar from "@/components/nav/navbar";
import Card from "@/components/card/card";
import SectionCards from "@/components/card/section-cards";

import { getPopularVideos, getVideos } from "@/lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("indie music");

  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  console.log({ disneyVideos });
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavBar username="info@ugurakcora.com" />
        <Banner
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCards title="Disney" videos={disneyVideos} size="large" />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
