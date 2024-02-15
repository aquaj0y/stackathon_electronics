// DOM query selectors


// Grab Elements
const productName = document.querySelector('#product-name')
const brand = document.querySelector('#brand')
const price = document.querySelector('#price')
const color = document.querySelector('#color')
const details = document.querySelector('#details')
const hero = document.querySelector('.hero')

// Event Listener
addEventListener('load', displayAllProducts())

async function displayAllProducts() {
  try {
    let response = await axios.get(`http://localhost:3001/smarthome`)
    const productsArr = response.data
    productsArr.forEach((product) => {
      hero.innerHTML += `
      <div class="product-container">
        <img src="${product.img}"  alt="${product.name}" />
        <h2 id="product-name">${product.name}</h2>
        <p id="brand">${product.brand}</p>
        <p id="price">${product.price}</p>
        <p id="color">${product.color}</p>
        <p id="details">${product.productDetails}</p>
      </div>
      `
    })

    console.log(productsArr)
  } catch (error) {
    console.error('it is an error', error)
  }
}