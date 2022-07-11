import styles from "../styles/Home.module.css";

import CollectionGrid from "../components/CollectionGrid";
import {
  collectionData,
  collectionTokenPreview,
  collectionStats,
} from "./api/zora";
import CollectionStats from "../components/CollectionStats";

export default function Home({
  collectionDataRes,
  zoraTokenRes,
  zoraStatsRes,
}) {
  return (
    <div className={styles.container}>
      <main className="flex flex-col justify-center items-center">
        <>
          <div className="flex flex-col justify-center items-center">
            <CollectionStats
              data={collectionDataRes}
              aggregateStat={zoraStatsRes}
            />
          </div>
          <CollectionGrid data={zoraTokenRes} />
        </>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // Get the collection NFT data
  const collectionDataRes = await collectionData();

  // Get the individual NFT data
  const zoraTokenData = await collectionTokenPreview();
  const zoraTokenRes = await zoraTokenData?.tokens;

  // Get the Zora NFT Collection Stats
  const zoraStats = await collectionStats(
    "0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"
  ); // Zorbs Contract Address
  const zoraStatsRes = await zoraStats?.aggregateStat;

  return {
    props: {
      collectionDataRes,
      zoraTokenRes,
      zoraStatsRes,
    },
  };
}
