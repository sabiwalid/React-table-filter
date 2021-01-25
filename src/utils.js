/**
 * Fetches products from api
 * @returns {Promise<object>} - returns a promise that resolves with data object from api
 */
export async function fetchProducts() {
  // fetch("https://app.getrecall.com/api/products")
  // .then((res) => res.json())
  // .then((data) => {
  //   console.log(data.products);
  // });

  // we wait until we get the response
  const response = await fetch("https://app.getrecall.com/api/products");
  // we wait until we parse the json data
  const data = await response.json();

  return data;
}
