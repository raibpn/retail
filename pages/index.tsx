import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Product from "../components/Product";
import { fetchProducts } from "../utils/fetchProducts";

interface Props {
  // categories: Category[];
  products: Product[];
  // session: Session | null;
}

const Home = ({ products }: Props) => {
  // const showProducts = (category: number) => {
  //   return products
  //     .filter(
  //       (product) => product.category._ref === categories[category]._id ////filter products by categories
  //     )
  //     .map((product) => <Product />);
  // };
  return (
    <div className="flex-column">
      <Head>
        <title>NepRetail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative">
        <Product products={products} />
      </main>
    </div>
  );
};

export default Home;

//SSR
// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  // const categories = await fetchCategories();
  const products = await fetchProducts();
  // const session = await getSession(context);

  return {
    props: {
      products,
    },
  };
};
