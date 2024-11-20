const productsPerPage = 10; // Number of products displayed initially
let visibleCount = productsPerPage; // Track visible products
let products = []; // Store fetched products
let filteredProducts = []; // Store filtered products
let isLoading = false; // Track loading state

// Fetch Products from API
const fetchProducts = async () => {
  try {
    setLoadingState(true); // Start loading
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
      throw new Error('Failed to fetch products.'); // Handle HTTP errors
    }

    products = await response.json();
    filteredProducts = [...products]; // Initially, filtered products are the same as fetched
    renderProducts();
    checkLoadMoreVisibility();
  } catch (error) {
    console.error('Error fetching products:', error);
    showError();
  } finally {
    setLoadingState(false); // End loading
  }
};

// Render Products
const renderProducts = () => {
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = ''; // Clear previous products

  // Render products up to visibleCount
  filteredProducts.slice(0, visibleCount).forEach((product) => {
    const productCard = `
      <div class="card col-md-4 mb-4">
        <img src="${product.image}" alt="${product.title}" class="card-img-top">
        <div class="card-body">
          <h6 class="card-title">${product.title}</h6>
          
          <p class="card-price">$${product.price}</p>
        </div>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
};

// Lazy Load More Products
const loadMoreProducts = () => {
  visibleCount += productsPerPage; // Increment visible count
  renderProducts();
  checkLoadMoreVisibility();
};

// Show or Hide "Load More" Button
const checkLoadMoreVisibility = () => {
  const loadMoreButton = document.getElementById('loadMoreBtn');
  if (visibleCount >= filteredProducts.length) {
    loadMoreButton.style.display = 'none'; // Hide button if all products are visible
  } else {
    loadMoreButton.style.display = 'block'; // Show button
  }
};

// Display Error Message
const showError = () => {
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = `
    <div class="error-message">Failed to load products. Please try again later.</div>
  `;
};

// Set Loading State
const setLoadingState = (state) => {
  isLoading = state; // Update loading state
  const loadingSpinner = document.getElementById('loading-spinner');

  if (state) {
    loadingSpinner.style.display = 'block'; // Show loading spinner
    document.getElementById('loadMoreBtn').disabled = true; // Disable "Load More" button
  } else {
    loadingSpinner.style.display = 'none'; // Hide loading spinner
    document.getElementById('loadMoreBtn').disabled = false; // Enable "Load More" button
  }
};

// Filter Products by Category
const filterProducts = () => {
  const selectedCategories = Array.from(
    document.querySelectorAll('.form-check-input:checked')
  ).map((checkbox) => checkbox.value);

  filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : [...products]; // Reset to all products if no category is selected

  visibleCount = productsPerPage; // Reset visible products
  renderProducts(); // Re-render products
  checkLoadMoreVisibility();
};

// Sort Products
const sortProducts = (sortOrder) => {
  filteredProducts.sort((a, b) => {
    return sortOrder === 'low-to-high' ? a.price - b.price : b.price - a.price;
  });
  renderProducts(); // Re-render products after sorting
};

// Add Event Listeners
document
  .getElementById('loadMoreBtn')
  .addEventListener('click', loadMoreProducts);
document
  .querySelectorAll('.form-check-input')
  .forEach((checkbox) => checkbox.addEventListener('change', filterProducts));
document.getElementById('sortSelect').addEventListener('change', (e) => {
  const sortOrder = e.target.value;
  if (sortOrder) sortProducts(sortOrder);
});

// Initial Fetch
fetchProducts();
