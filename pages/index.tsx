import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/dashboard">
          <a className="bg-purple-700 text-white p-2 rounded-lg">
            go to dashboard
          </a>
        </Link>
      </main>
    </>
  );
};

export default Home;
