import Script from "next/script";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";
import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Products from "../components/Products";
// import HowOrder from "../components/HowOrder";
// import Contacts from "../components/Contacts";
// import Features from "../components/Features";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";


const Hero = dynamic(() => import("../components/Hero"));
const Products = dynamic(() => import("../components/Products"));
const Features = dynamic(() => import("../components/Features"));
const HowOrder = dynamic(() => import("../components/HowOrder"));
const Contacts = dynamic(() => import("../components/Contacts"));

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>
          Ковдри, подушки купити з доставкою у Харкові, Україні. Домашній
          текстиль Zevs
        </title>
        <meta name="description" content=" Ковдри, подушки купити з доставкою у Харкові, Україні" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Features />
      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products} />
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
  const res = await fetch("https://testback-production-353f.up.railway.app/api/products");
  const products = await res.json();

  return {
    props: { products },
  };
}
