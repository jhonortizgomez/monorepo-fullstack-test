const baseUrl = "https://monorepo-fullstack-test-backend.vercel.app/api/v1"

export const backendUrls = {
  products: {
    all: `${ baseUrl }/products`,
    withParams: (budget?: number) => `${ baseUrl }/products?budget=${ budget }`,
  },
  cart: {
    all: `${ baseUrl }/cart`
  }
}