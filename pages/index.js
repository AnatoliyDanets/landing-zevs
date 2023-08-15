import Script from "next/script";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";
import { useIntl } from "react-intl";
import { Suspense } from "react";
import Background from "@/components/Background/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = dynamic(() => import("../components/Hero"));
const PopularProducts = dynamic(() => import("../components/PopularProducts"));
const Products = dynamic(() => import("../components/Products"));
const Features = dynamic(() => import("../components/Features"));
const Feedback = dynamic(() => import("../components/Feedback"));
const HowOrder = dynamic(() => import("../components/HowOrder"));
const DeliveryAndPay = dynamic(() => import("../components/DeliveryAndPay"));
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
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link
          rel="alternate"
          href={process.env.NEXT_PUBLIC_CLIENT}
          hrefLang="uk"
        />
        <link
          rel="alternate"
          href={`${process.env.NEXT_PUBLIC_CLIENT}/ru`}
          hrefLang="ru"
        />
      </Head>
      <Background>
        <Header locales={locales} />
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <PopularProducts products={products} locale={locale} />
          <Products products={products} locale={locale} />
        </Suspense>
        <Features />
        <Feedback />
        <HowOrder />
        <DeliveryAndPay />
        <Contacts />
        <Footer />
      </Background>
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
