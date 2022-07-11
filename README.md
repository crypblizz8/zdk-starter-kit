## ✨✨✨ ZDK Starter Kit ✨✨✨

![ZDK Preview Video](https://user-images.githubusercontent.com/45455218/178251337-1597420f-a31f-4e24-bc10-7f1f3ca3d6c0.gif)

This is a general Starter kit using Zora Development Kit (ZDK) to call common endpoints for NFT data. Their main documentation can be found [here](https://docs.zora.co/docs/zora-api/zdk). Built with Next.js, Tailwind, RainbowKit and of course ZDK.

This Starter Kit calls several endpoints using the ZDK. See (```hooks.js and zora.js```)
- ```zdk.collection()```
- ```zdk.token()```
- ```zdk.tokens()```
- ```zdk.collectionStatsAggregate()```

Also uses React Components from ```"@zoralabs/nft-components"```
- ```NFTPreview```
- ```NFTFullPage```

### To get Started. 
First, install:
```
yarn install 
yarn dev
```

Then copy .env example and add an Alchemy ID
```
NEXT_ALCHEMY_ID: "INSERT ID HERE"
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the ZDK Starter Kit.

## To Finish Off
- Add Pagination for the Collections
- Create NFTCollectionStats Component for ```"@zoralabs/nft-components"```
- Add a builders list of projects integrating ZDK

PR's welcome / other suggestions welcome here or via Twitter/Telegram (@crypblizz)