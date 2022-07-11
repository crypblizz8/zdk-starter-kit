import { useState, useEffect } from "react";
import IndividualNFT from "../../components/IndividualNFT";
import SearchInput from "../../components/SearchInput";
import { useIndividualNftQuery } from "../api/hooks";

export default function Explorer() {
  const [collectionAddress, setCollectionAddress] = useState(
    "0xA97D3Eb991303CF3b9B759bD026BaCB55256E9dB"
  );
  const [tokenId, setTokenId] = useState("4");

  const { searchedData: data } = useIndividualNftQuery(
    collectionAddress,
    tokenId
  );

  useEffect(() => {}, [data]);

  const rightColumnContent = (
    <div className="w-full sm:px-4">
      <div>
        <p className="my-6 font-bold text-4xl">
          Search for different types of NFTs with the ZDK
        </p>
      </div>
      <SearchInput
        type={"contract"}
        value={collectionAddress}
        setValue={setCollectionAddress}
      />
      <SearchInput type={"tokenId"} value={tokenId} setValue={setTokenId} />
    </div>
  );

  return (
    <div className="flex flex-col justify-start align-center ">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <IndividualNFT data={data} />
        {rightColumnContent}
      </div>
    </div>
  );
}
