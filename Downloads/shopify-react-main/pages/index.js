import Head from 'next/head'
import ProductList from '../components/ProductList';
import { getProductsInCollection } from '../lib/shopify'

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductList products={products} />
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: {
      products
    }
  }
}

