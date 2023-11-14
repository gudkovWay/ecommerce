/**
 * Generated by orval v6.20.0 🍺
 * Do not edit manually.
 * Block list
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";
export type UpdateOrderDtoProduct = { [key: string]: any };

export interface UpdateOrderDto {
  id?: number;
  product?: UpdateOrderDtoProduct;
  total?: number;
  userId?: number;
}

export type CreateOrderDtoProduct = { [key: string]: any };

export interface CreateOrderDto {
  id: number;
  product: CreateOrderDtoProduct;
  total: number;
  userId: number;
}

export interface CreateReviewDto {
  content: string;
  productId: number;
  rating: number;
  title: string;
}

export type CreateProductsDtoType = { [key: string]: any };

export type CreateProductsDtoTags = { [key: string]: any };

export type CreateProductsDtoReviews = { [key: string]: any };

export type CreateProductsDtoDescription = { [key: string]: any };

export type CreateProductsDtoBrand = { [key: string]: any };

export type CreateProductsDtoAvailibility =
  (typeof CreateProductsDtoAvailibility)[keyof typeof CreateProductsDtoAvailibility];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const CreateProductsDtoAvailibility = {
  IN_STORE: "IN_STORE",
  ONLINE: "ONLINE",
} as const;

export interface CreateProductsDto {
  availibility: CreateProductsDtoAvailibility;
  brand: CreateProductsDtoBrand;
  createdAt: string;
  description: CreateProductsDtoDescription;
  name: string;
  price: number;
  reviews: CreateProductsDtoReviews;
  sale: boolean;
  tags: CreateProductsDtoTags;
  type: CreateProductsDtoType;
  updatedAt: string;
}

export interface CreateTypeDto {
  id: number;
  name: string;
}

export interface CreateBrandDto {
  id: number;
  name: string;
}

export interface PatchAccountDto {
  isSetRate: boolean;
}

export interface AccountDto {
  id: number;
  isSetRate: boolean;
  ownerId: number;
}

export interface GetSessionInfoDto {
  exp: number;
  iat: number;
  id: number;
  phone: string;
}

export interface SignInBodyDto {
  password: string;
  phone: string;
}

export interface SignUpBodyDto {
  birthDate: string;
  city: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  region: string;
  role: string;
}

export interface HelloWorldDto {
  message: string;
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const appControllerGetHello = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<HelloWorldDto>({ url: `/`, method: "get" }, options);
};

export const authControllerSignUp = (
  signUpBodyDto: BodyType<SignUpBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signUpBodyDto,
    },
    options,
  );
};

export const authControllerSignIn = (
  signInBodyDto: BodyType<SignInBodyDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: signInBodyDto,
    },
    options,
  );
};

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/auth/sign-out`, method: "post" },
    options,
  );
};

export const authControllerGetSessionInfo = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<GetSessionInfoDto>(
    { url: `/auth/session`, method: "get" },
    options,
  );
};

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    { url: `/account`, method: "get" },
    options,
  );
};

export const accountControllerPatchAccount = (
  patchAccountDto: BodyType<PatchAccountDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<AccountDto>(
    {
      url: `/account`,
      method: "patch",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDto,
    },
    options,
  );
};

export const brandControllerCreate = (
  createBrandDto: BodyType<CreateBrandDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/brand/create`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createBrandDto,
    },
    options,
  );
};

export const brandControllerFindAll = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/brand`, method: "get" }, options);
};

export const typeControllerCreate = (
  createTypeDto: BodyType<CreateTypeDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/type/create`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createTypeDto,
    },
    options,
  );
};

export const typeControllerFindAll = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/type`, method: "get" }, options);
};

export const productsControllerCreate = (
  createProductsDto: BodyType<CreateProductsDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/products`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createProductsDto,
    },
    options,
  );
};

export const productsControllerFindAll = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/products`, method: "get" }, options);
};

export const productsControllerFindOneWithRating = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/products/${id}`, method: "get" },
    options,
  );
};

export const productsControllerUpdate = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/products/${id}`, method: "patch" },
    options,
  );
};

export const productsControllerRemove = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/products/${id}`, method: "delete" },
    options,
  );
};

export const productsControllerFindOneWithReview = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/products/full/${id}`, method: "get" },
    options,
  );
};

export const reviewsControllerCreate = (
  createReviewDto: BodyType<CreateReviewDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/reviews`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createReviewDto,
    },
    options,
  );
};

export const reviewsControllerFindAll = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/reviews`, method: "get" }, options);
};

export const reviewsControllerFindOne = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/reviews/${id}`, method: "get" },
    options,
  );
};

export const reviewsControllerUpdate = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/reviews/${id}`, method: "patch" },
    options,
  );
};

export const reviewsControllerRemove = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    { url: `/reviews/${id}`, method: "delete" },
    options,
  );
};

export const orderControllerCreate = (
  createOrderDto: BodyType<CreateOrderDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/order`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: createOrderDto,
    },
    options,
  );
};

export const orderControllerFindAll = (
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/order`, method: "get" }, options);
};

export const orderControllerFindOne = (
  id: string,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>({ url: `/order/${id}`, method: "get" }, options);
};

export const orderControllerUpdate = (
  id: string,
  updateOrderDto: BodyType<UpdateOrderDto>,
  options?: SecondParameter<typeof createInstance>,
) => {
  return createInstance<void>(
    {
      url: `/order/${id}`,
      method: "patch",
      headers: { "Content-Type": "application/json" },
      data: updateOrderDto,
    },
    options,
  );
};

export type AppControllerGetHelloResult = NonNullable<
  Awaited<ReturnType<typeof appControllerGetHello>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionInfoResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;
export type BrandControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerCreate>>
>;
export type BrandControllerFindAllResult = NonNullable<
  Awaited<ReturnType<typeof brandControllerFindAll>>
>;
export type TypeControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof typeControllerCreate>>
>;
export type TypeControllerFindAllResult = NonNullable<
  Awaited<ReturnType<typeof typeControllerFindAll>>
>;
export type ProductsControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof productsControllerCreate>>
>;
export type ProductsControllerFindAllResult = NonNullable<
  Awaited<ReturnType<typeof productsControllerFindAll>>
>;
export type ProductsControllerFindOneWithRatingResult = NonNullable<
  Awaited<ReturnType<typeof productsControllerFindOneWithRating>>
>;
export type ProductsControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof productsControllerUpdate>>
>;
export type ProductsControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof productsControllerRemove>>
>;
export type ProductsControllerFindOneWithReviewResult = NonNullable<
  Awaited<ReturnType<typeof productsControllerFindOneWithReview>>
>;
export type ReviewsControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof reviewsControllerCreate>>
>;
export type ReviewsControllerFindAllResult = NonNullable<
  Awaited<ReturnType<typeof reviewsControllerFindAll>>
>;
export type ReviewsControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof reviewsControllerFindOne>>
>;
export type ReviewsControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof reviewsControllerUpdate>>
>;
export type ReviewsControllerRemoveResult = NonNullable<
  Awaited<ReturnType<typeof reviewsControllerRemove>>
>;
export type OrderControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerCreate>>
>;
export type OrderControllerFindAllResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerFindAll>>
>;
export type OrderControllerFindOneResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerFindOne>>
>;
export type OrderControllerUpdateResult = NonNullable<
  Awaited<ReturnType<typeof orderControllerUpdate>>
>;
