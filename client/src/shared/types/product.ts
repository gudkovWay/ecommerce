export interface ProductProps {
  productName: string;
  productId: number;
  productRate: number;
  productPrice: string;
  productDiscountPrice?: string;
  productImages: string[];
  type?: "demo" | "full"
}
