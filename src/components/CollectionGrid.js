import Link from "next/link";
import { NFTPreview } from "@zoralabs/nft-components";
// Check out ZoraNFT Components here: https://github.com/ourzora/nft-components

/* ToDo: Fix / understand Error for NFTPreview
  Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
  Check the render method of `ForwardRef(LinkComponent)`.
*/
const CollectionGrid = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {data?.nodes.map((e, i) => {
        return (
          <Link
            key={e.token.tokenId}
            href={{
              pathname: `/item/${encodeURIComponent(e.token.tokenId)}`,
              query: {
                contract: e.token.collectionAddress,
              },
            }}
            passHref
          >
            <NFTPreview
              id={e.token.tokenId}
              contract={e.token.collectionAddress}
              key={e.token.tokenId}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default CollectionGrid;
