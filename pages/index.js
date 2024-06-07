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
      <h4>POSTS</h4>
      <a href="https://blog.rokcso.com/">
        <div>
          <h3>Blog</h3>
          <p>Daily recording and sharing.</p>
        </div>
      </a>
      <h4>DONATE</h4>
      <a href="https://ko-fi.com/D1D4YYEMT" target="_blank">
        <img
          height="36"
          style={{ border: "0px", height: "36px" }}
          src="https://storage.ko-fi.com/cdn/kofi1.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
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
