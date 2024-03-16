import './ProductCharacteristics.module.scss';

interface ProductCharacteristicsProps {
  price: string;
  discountPrice: string | undefined;
  brand: string;
  country: string;
  weight: number;
}

const ProductCharacteristics: React.FC<ProductCharacteristicsProps> = ({ price, discountPrice, brand, country, weight }) => {
  return (
    <div>характеристики</div>
  )
}

export default ProductCharacteristics
