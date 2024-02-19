import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Head from "next/head"

import { Breadcumbs } from "@/features/breadcumbs"
import Product from "./ui"
import products from "@/shared/constants/products.json"

const ProductPage = () => {
  const router = useRouter()
  const [productName, setProductName] = useState("")
  const [productRate, setProductRate] = useState(0)
  const [productPrice, setProductPrice] = useState("")
  const [productDiscountPrice, setProductDiscountPrice] = useState("")
  const [images, setImages] = useState<string[]>([""])


  useEffect(() => {

    products.find((product) => {

      if (product.slug === (router.query.slug)) {
        setProductName(product.name)
        setProductRate(product.rating)
        setProductPrice(product.price)
        setProductDiscountPrice(product.discountPrice!)
        setImages(product.image)
      }
      
    })

  }, [router.query.slug])

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
        <article className="product">
          <Breadcumbs productName={productName} productId={`/product/${router.query.id}`} />
        </article>
        <article className="product">
          <Product 
            productName={productName} 
            productId={Number(router.query.id)} 
            productRate={productRate} 
            productPrice={productPrice}
            productDiscountPrice={productDiscountPrice}
            productImages={images}
          />
        </article>

      </main>
    </>
  )
}

export default ProductPage
