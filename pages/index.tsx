import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>NepRetail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  );
};

export default Home;
