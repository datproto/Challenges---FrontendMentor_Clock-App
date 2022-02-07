import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/button';
import Clock from '../components/clock';
import Quote from '../components/quote';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-between w-full h-full px-6 pt-8 pb-10">
        <Quote />
        <div className="z-10 flex flex-col w-full gap-12 xl:flex-row xl:gap-10">
          <Clock />
          <div className="flex">
            <Button type="more" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
