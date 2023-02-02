import Head from "next/head";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="flex-column">
      <Head>
        <title>NepRetail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        <Landing />
      </main>
    </div>
  );
};

export default Home;
