// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { useEffect, useState } from "react";

import { ZDK, ZDKNetwork, ZDKChain } from "@zoralabs/zdk";

const networkInfo = {
  network: ZDKNetwork.Ethereum,
  chain: ZDKChain.Mainnet,
};

const API_ENDPOINT = "https://api.zora.co/graphql";

const args = {
  endPoint: API_ENDPOINT,
  networks: [networkInfo],
  apiKey: process.env.API_KEY,
};

const zdk = new ZDK(args);

export function useIndividualNftQuery(collectionAddress, tokenId) {
  const [searchedData, setSearchedData] = useState();

  useEffect(() => {
    fetchSearchedNFTData();
  }, [collectionAddress, tokenId]);

  const fetchSearchedNFTData = async () => {
    const args = {
      token: {
        address: collectionAddress,
        tokenId: tokenId,
      },
      includeFullDetails: true,
    };
    try {
      const response = await zdk.token(args);
      setSearchedData(response);
    } catch (error) {
      console.log("fetchSearchedData Error:", error);
    }
  };
  return {
    searchedData,
  };
}
