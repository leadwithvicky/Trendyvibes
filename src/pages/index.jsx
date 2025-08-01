// src/pages/index.jsx
import Head from 'next/head';
import Header from '../app/components/Header';
import Hero from '../app/components/Hero';
import Impact from '../app/components/Impact';
import ServicesNew from '../app/components/ServicesNew';
import Resources from '../app/components/Resources';
import FAQ from '../app/components/FAQ';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Marketing Agency</title>
        <meta name="description" content="Grow your business with our digital marketing solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Impact />
      <ServicesNew />
      <Resources />
      <FAQ />
    </>
  );
}
