import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="flex-column">
      <Head>
        <title>NepRetail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative">
        <Product />
      </main>
    </div>
  );
};

export default Home;

//SSR
export const getServerSideProps: GetServerSideProps = async () => {
  // const categories = await fetchCategories();
  return {
    props: {},
  };
};
