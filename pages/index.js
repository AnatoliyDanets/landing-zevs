import Script from "next/script";
import dynamic from "next/dynamic";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import { useIntl } from "react-intl";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Hero = dynamic(() => import("../components/Hero"));
const PopularProducts = dynamic(() => import("../components/PopularProducts"));
const Products = dynamic(() => import("../components/Products"));
const Features = dynamic(() => import("../components/Features"));
const Feedback = dynamic(() => import("../components/Feedback"));
const HowOrder = dynamic(() => import("../components/HowOrder"));
const DeliveryAndPay = dynamic(() => import("../components/DeliveryAndPay"));
const Contacts = dynamic(() => import("../components/Contacts"));

export default function Home({ products }) {
  const [currentDate, setCurrentDate] = useState(Date.now());
  const { locale, locales } = useRouter();
  const router = useRouter();
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(Date.now());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const changeDiscountProduct = useCallback(
    async (data, id) => {
      try {
        const res = await axios.patch(
          `${process.env.API_PRODUCTS}/${id}`,
          data
        );
        if (res.status === 200) {
          console.log("Discount :0");
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    [router.asPath, router]
  );
  useEffect(() => {
    const dataDiscount = {
      discount: 0,
      discount_time: 0,
    };

    products
      .filter((el) => el.discount > 0)
      .map((el) => {
        if (currentDate > el.discount_time) {
          changeDiscountProduct(dataDiscount, el._id);
          router.replace(router.asPath, undefined, { scroll: false });
        }
        return;
      });
  }, [currentDate, products]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.PNG" type="image/png" sizes="32x32" />
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
      <Suspense fallback={<div>Loading...</div>}>
        <Header locales={locales} />
        <Hero />
        <PopularProducts products={products} locale={locale} />
        <Products products={products} locale={locale} />
      </Suspense>
      <Features />
      <Feedback />
      <HowOrder />
      <DeliveryAndPay />
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
