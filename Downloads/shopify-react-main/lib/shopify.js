const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-01/graphql.json`
  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })
    return data
  }
  catch (error) {
    throw new Error("Products not fetched")
  }
}

export async function getProductsInCollection() {
  const query = `
    {
        collection(handle:"frontpage"){
            title
            products(first:25){
            edges{
                node{
                handle
                id
                title
                priceRange{
           minVariantPrice{
            amount
          } 
          }
                images(first:5){
                    edges{
                    node{
                        url
                        altText
                    }
                    }
                }
                }
            }
            }
        }
    }
    `
  const response = await ShopifyData(query)
  const allProducts = response.data.collection.products.edges ? response.data.collection.products.edges : []
  return allProducts
}

export async function getAllProducts() {
  const query = `
    query{
  products(first:250){
    edges{
      node{
        handle
        id
      }
    }
  }
}
    `

  const resonse = await ShopifyData(query)

  const slugs = resonse.data.products.edges ? resonse.data.products.edges : []
  return slugs
}

export async function getProduct(handle) {
  const query = `
        {
        product(handle:"${handle}"){
            id
            title
            handle
            description
            images(first:5){
            edges{
                node{
                url
                altText
                }
            }
            }
            options{
            name
            values
            id
            }
            variants(first:25){
            edges{
                node{
                selectedOptions{
                    name
                    value
                }
                image{
                    url
                    altText
                }
                title
                id
                priceV2{
                    amount
                }
                }
            }
            }
        }
    }`

  const response = await ShopifyData(query)
  const product = response.data.product ? response.data.product : []
  return product

}

export async function createCheckout(id, quantity) {
  const query = `
    mutation{
  checkoutCreate(input:{
    lineItems: [
      {
        variantId: "${id}",
        quantity: ${quantity}
      }
    ]
  }){
    checkout{
      id,
      webUrl
    }
  }
}

    `
  const response = await ShopifyData(query)
  const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : []
  return checkout
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map(item => {

    return `{ quantity: ${item.variantQuantity}, variantId: "${item.id}" }`
  })
  console.log(lineItemsObject);
  console.log(id);
  const query = `
    mutation {
  checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
    checkout {
      id
      webUrl
      lineItems(first:25){
          edges{
            node{
              id
              title
              quantity
            }
          }
        }
    }
  }
}

    `
  const response = await ShopifyData(query)
  console.log(response);
  const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : []
  return checkout
}