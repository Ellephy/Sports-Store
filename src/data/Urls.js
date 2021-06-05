import { DataTypes } from "./Types";

export const RestUrls = {
  [DataTypes.PRODUCTS]: `/api/products`,
  [DataTypes.CATEGORIES]: `/api/categories`,
  [DataTypes.ORDERS]: `/api/orders`,
};
export const GraphQlUrl = `/graphql`;
export const authUrl = `/login`;

/* const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`,
};

export const GraphQlUrl = `${protocol}://${hostname}:${port}/graphql`;
export const authUrl = `${protocol}://${hostname}:${port}/login`; */
