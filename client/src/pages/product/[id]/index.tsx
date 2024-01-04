import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Head from "next/head"

import { Breadcumbs } from "@/features/breadcumbs"
import products from "@/shared/constants/products.json"

const ProductPage = () => {
  const router = useRouter()
  const [productName, setProductName] = useState("")

  useEffect(() => {

    products.map((product) => {

      if (product.id == router.query.id) {
        setProductName(product.name)
      }

    })

  }, [router.query.id])

  return (
    <>
      <Head>
        <title>Страница товара {productName} интернет магазина СеверЯночки. </title>
        <meta
          name="description"
          content="Северяночка. Интернет Магазин Продуктов. Доставка. Работа курьером."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <article>
            <Breadcumbs productName={productName} productId={`/product/${router.query.id}`} />
        </article>

      </main>
    </>
  )
}

export default ProductPage
