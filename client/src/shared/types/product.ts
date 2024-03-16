export interface ProductProps {
  productName: string;
  productId: number;
  productRate: number;
  productPrice: number;
  productDiscountPrice?: number;
  productImages: string[];
  type?: "demo" | "full"
}

export interface ProductUIProps extends ProductProps {
  productBrand: string;
  productCountry: string;
  productWeight: number;
}
