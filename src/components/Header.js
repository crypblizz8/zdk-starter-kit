import NextLink from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <>
      <>
        <meta property="og:url" content="https://zdk-starter-kit.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ZDK Starter Kit" />
        <meta property="og:description" content="ZDK Starter Kit" />
        <meta
          property="og:image"
          content="https://zdk-starter-kit.vercel.app/ogImage.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lilpragma.xyz" />
        <meta
          property="twitter:url"
          content="https://zdk-starter-kit.vercel.app/"
        />
        <meta name="twitter:title" content="ZDK Starter Kit" />
        <meta name="twitter:description" content="ZDK Starter Kit" />
        <meta
          name="twitter:image"
          content="https://zdk-starter-kit.vercel.app/ogImage.png"
        />
        <title>ZDK Starter Kit</title>
        <meta name="description" content="ZDK Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </>

      <nav className="bg-white border-gray-200 p-6">
        <div className=" flex flex-row mx-auto justify-between">
          <div className="flex">
            <NextLink href={`/`} passHref key={"home"}>
              <a>
                <h1 className="text-2xl font-bold m-0">ZDK Starter Kit</h1>
              </a>
            </NextLink>
            <div className="flex-row hidden md:flex">
              <NextLink href={`/explorer`} passHref key={"explorer"}>
                <a>
                  <h1 className="text-xl px-4 py-1">Explorer</h1>
                </a>
              </NextLink>
              <NextLink
                href={`https://github.com/crypblizz8/zdk-starter-kit`}
                passHref
                key={"code"}
              >
                <a target="_blank">
                  <h1 className="text-xl px-4 py-1">Code</h1>
                </a>
              </NextLink>
              <NextLink
                href={`https://docs.zora.co/docs/zora-api/zdk`}
                passHref
                key={"home"}
              >
                <a target="_blank">
                  <h1 className="text-xl px-4 py-1">Docs</h1>
                </a>
              </NextLink>
            </div>
          </div>

          <div className="flex flex-row justify-stretch">
            <ConnectButton />
            <Dropdown />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
