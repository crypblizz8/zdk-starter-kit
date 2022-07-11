import { NFTFullPage } from "@zoralabs/nft-components";
import { useRouter } from "next/router";

export default function Item() {
  const router = useRouter();
  const { id, contract } = router.query;

  return (
    <div className="p-24">
      <NFTFullPage id={id} contract={contract} key={id} />
    </div>
  );
}
