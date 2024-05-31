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
        <title>rokcso's Landing Page - rokcso.com</title>
        <meta
          name="description"
          content="rokcso's Landing Page. I build for myself first."
        />
        <link rel="icon" href="/assets/favicon.ico" />
        <script
          async
          src="https://umami.rokcso.com/script.js"
          data-website-id="11d3cd91-9f13-43e3-ae19-20e6e6e34bcb"
        ></script>
      </Head>
      <Profile />
      <h4>PAGE LINKS</h4>
      <PageLinks pageLinksInfo={pageLinksInfo} />
      <h4>PRODUCTS</h4>
      <Products producstInfo={productsInfo} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
