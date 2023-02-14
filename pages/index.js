import Head from "next/head";
import Layout from "../src/Layout/Layout";
import Landingpage from "./landingpage";

import { Andika } from '@next/font/google'
const andika = Andika({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DeCarbonUs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className={andika.className}>
        <Landingpage key="home" />
      </Layout>
    </>
  );
}
