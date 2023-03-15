import Script from "next/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import { useIntl } from "react-intl";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = dynamic(() => import("../components/Hero"));
const Products = dynamic(() => import("../components/Products"));
const Features = dynamic(() => import("../components/Features"));
const Feedback = dynamic(() => import("../components/Feedback"));
const HowOrder = dynamic(() => import("../components/HowOrder"));
const Contacts = dynamic(() => import("../components/Contacts"));

export default function Home({ products }) {
  const { locale, locales } = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="http://localhost:3000" hrefLang="uk" />
        <link rel="alternate" href="http://localhost:3000/ru" hrefLang="ru" />
      </Head>
      <Header locales={locales} />
      <Hero />
      <Features />
      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products} locale={locale} />
      </Suspense>
      <Feedback />
      <HowOrder />
      <Contacts />
      <Footer />
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="lazyOnload"
      />
    </>
  );
}
//`http://localhost:3001/api/products`  
export async function getServerSideProps() {
  const res = await fetch(`https://testback-production-353f.up.railway.app/api/products`);
  const products = await res.json();

  return {
    props: { products },
  };
}
