// Sample product data (replace with actual data from API)
const products = [
  {
    name: "Product 1",
    image: "images/product1.jpg",
    price: 19.99,
  },
  {
    name: "Product 2",
    image: "images/product2.jpg",
    price: 29.99,
  },
  // ... more products
];

// Function to create product cards
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product');

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productCard.appendChild(productImage);

  const productName = document.createElement('h3');
  productName.textContent = product.name;
  productCard.appendChild(productName);

  const productPrice = document.createElement('p');
  productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
  productCard.appendChild(productPrice);

  const addToCartButton = document.createElement('button');
  addToCartButton.textContent = 'Add to Cart';
  // Add event listener for "Add to Cart" functionality
  addToCartButton.addEventListener('click', () => {
    // Handle adding product to cart logic here
    alert('Product added to cart!');
  });
  productCard.appendChild(addToCartButton);

  return productCard;
}

// Display products on the page
const productContainer = document.getElementById('productContainer');
products.forEach(product => {
  const productCard = createProductCard(product);
  productContainer.appendChild(productCard);
