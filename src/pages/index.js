import Head from "next/head";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ProductFeed from "./Components/ProductFeed";

export default function Home({products}) {


  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

     {/* Header  */}
      <Header />
     
      <main className='max-w-screen-2xl w-11/12  mx-auto'>
        {/* Banner */}
        <Banner />

        {/* Product Field */}
        <ProductFeed products={products} />
      </main>
       


    </div>
  );
}

export async function getServerSideProps(){
  const products = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json());

          return  {props : { products}}
} 