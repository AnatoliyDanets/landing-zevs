import Script from "next/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import { useIntl } from "react-intl";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Hero = dynamic(() => import("../components/Hero"));
const DiscountCards = dynamic(() => import("../components/DiscountCards"));
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
        <link rel="alternate" href={process.env.NEXT_PUBLIC_CLIENT} hrefLang="uk" />
        <link rel="alternate" href={`${process.env.NEXT_PUBLIC_CLIENT}/ru`} hrefLang="ru" />
      </Head>
      <Header locales={locales} />
      <Hero />
      <DiscountCards products={products} locale={locale} />
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

export async function getServerSideProps() {
  const res = await fetch(process.env.PRODUCTS_ENDPOINT);
  const products = await res.json();

  return {
    props: { products },
  };
}
