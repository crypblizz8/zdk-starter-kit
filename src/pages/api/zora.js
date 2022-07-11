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

const zdk = new ZDK(args); // All arguments are optional

/* 
    Query calling zdk.collection()
    Params: 
        @address of the NFT Collection

*/
export const collectionData = async () => {
  const args = {
    address: "0xCa21d4228cDCc68D4e23807E5e370C07577Dd152",
  };
  try {
    const response = await zdk.collection(args);
    return response;
  } catch (error) {
    console.log("collectionData error", error);
  }
};

/*
    Query calling zdk.tokens()
    To get the individual NFT data
    Params: 
        @address (collectionAddress) of the NFT Collection +
        @pagination
        @sorting. 
*/

export const collectionTokenPreview = async () => {
  const args = {
    where: {
      collectionAddresses: "0xCa21d4228cDCc68D4e23807E5e370C07577Dd152",
    }, // Zorbs Contract
    pagination: {
      limit: 9,
    },
    sort: {
      sortKey: "MINTED",
      sortDirection: "ASC",
    },
  };

  try {
    const response = await zdk.tokens(args);
    return response;
  } catch (error) {
    console.log("collectionMultiCall error", error);
  }
};

/*
    Query calling zdk.collectionStatsAggregate()
    To get the collection aggregate Stat Data
    Params: Address (collectionAddress) of the NFT Collection
*/

export const collectionStats = async (collectionAddress) => {
  const args = {
    collectionAddress: collectionAddress, // Zorbs Contract
  };
  try {
    const response = await zdk.collectionStatsAggregate(args);
    return response;
  } catch (error) {
    console.log("collectionStats error", error);
  }
};
