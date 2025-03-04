const baseUrl = "http://localhost:3001/api/v1"

export const backendUrls = {
  products: {
    all: `${ baseUrl }/products`,
    withParams: (budget?: number) => `${ baseUrl }/products?budget=${ budget }`,
  },
  cart: {
    all: `${ baseUrl }/cart`
  }
}