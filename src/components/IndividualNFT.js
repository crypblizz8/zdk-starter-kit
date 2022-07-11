import Image from "next/image";
import { truncateContractAddress } from "../utils/contractData";

const IndividualNFT = ({ data }) => {
  if (!data) {
    return null;
  }

  const nftImage = data?.token?.token?.metadata?.image;

  const appendIpfsGateway = (ipfsHash) => {
    return `https://ipfs.infura.io/ipfs/${ipfsHash}`;
  };

  const processImgURI = (url) => {
    if (!url) {
      return null;
    }

    const replacedUrl = url.replace("ipfs://", "");

    if (replacedUrl !== url) {
      return appendIpfsGateway(replacedUrl);
    } else {
      return url;
    }
  };

  // Todo: Add ENS support
  return (
    <div className="h-1/2 w-full sm:w-1/2 bg-gray-100 flex justify-center items-center p-10 sm:p-20">
      <div className="p-12 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        {nftImage ? (
          <Image
            width={200}
            height={200}
            className="w-64 object-cover rounded-t-md"
            src={processImgURI(nftImage)}
            alt=""
          />
        ) : (
          <div className="bg-gray-200 w-48 h-48 border-4" />
        )}
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">
            {data.token.token.name}
          </h1>
          <a
            className="flex flex-row"
            href={`https://etherscan.io/address/${data.token.token.owner}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Owner: {truncateContractAddress(data.token.token.owner)} </p>
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
        </div>
      </div>
    </div>
  );
};

export default IndividualNFT;
