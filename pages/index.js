import Head from "next/head";
import Profile from "../components/profile";
import Products from "../components/products";
import productsInfo from "../public/productsInfo.json";
import PageLinks from "../components/pageLinks";
import pageLinksInfo from "../public/pageLinksInfo.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>ROKCSO - rokcso.com</title>
        <meta name="description" content="rokcso's official landing page." />
        <link rel="icon" href="/favicon/icon16x16.png" />
        <link rel="icon" href="/favicon/icon32x32.png" />
        <link rel="icon" href="/favicon/icon48x48.png" />
        <link rel="icon" href="/favicon/icon64x64.png" />
        <link rel="icon" href="/favicon/icon128x128.png" />
      </Head>
      <Profile />
      <h4>PAGE LINKS</h4>
      <PageLinks pageLinksInfo={pageLinksInfo} />
      <h4>PRODUCTS</h4>
      <Products producstInfo={productsInfo} />
    </>
  );
}
