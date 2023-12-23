import { useRouter } from "next/router"

const ProductPage = () => {
  const router = useRouter()
  return (
    <h1> product id: {router.query.id} </h1>
  )
}

export default ProductPage
