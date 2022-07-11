import { commaConvert, truncateContractAddress } from "../utils/contractData";

const CollectionStats = ({ data, aggregateStat }) => {
  if (!data || !aggregateStat) {
    return;
  }

  const etherScanAddress = (
    <a
      href={`https://etherscan.io/address/${data.address}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 ml-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold my-4">{data.name}</h1>
      <div className="w-1/2 bg-gray-300 h-12 rounded flex justify-center items-center">
        <>{truncateContractAddress(data?.address)}</>
        {etherScanAddress}
      </div>

      <div className="flex flex-row justify-center items-center text-center border-2 my-8">
        <div className="p-8 border-r-2">
          <p className="text-xl">{aggregateStat.floorPrice}</p>
          <p className="text-gray-400">Floor Price</p>
        </div>
        <div className="p-8 border-r-2">
          <p className="text-xl">{commaConvert(aggregateStat.nftCount)}</p>
          <p className="text-gray-400">Items</p>
        </div>
        <div className="p-8">
          <p className="text-xl">{commaConvert(aggregateStat.ownerCount)}</p>
          <p className="text-gray-400">Owners</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionStats;
