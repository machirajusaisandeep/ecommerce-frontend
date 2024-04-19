import { Shoe } from "./Shoe";

interface CartProduct extends Shoe {
  noOfItems: number;
  totalItemPrice: number;
  isCouponApplied: boolean;
}

interface Cart {
  productList: Array<CartProduct>;
  cartTotal: number;
  couponsApplicable: Array<string>;
  appliedCoupon: string;
}
export type { CartProduct, Cart };
