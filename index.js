import './style.css';

document.getElementById('app').innerHTML = `
<head>
<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Product Page</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
</head>

<body>
    <!-- Header -->
    <header class="bg-primary text-white py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <h1 class="fs-3 fw-bold">VENIA</h1>
            <nav>
                <a href="#" class="text-white text-decoration-none mx-2">Home</a>
                <a href="#" class="text-white text-decoration-none mx-2">Women</a>
                <a href="#" class="text-white text-decoration-none mx-2">Men</a>
                <a href="#" class="text-white text-decoration-none mx-2">Smart Gear</a>
                <a href="#" class="text-white text-decoration-none mx-2">Accessories</a>
            </nav>
            <i class="bi bi-cart-fill text-white fs-4"></i>
        </div>
    </header>

    <!-- Banner -->
    <section class="banner text-white text-center py-5" style="background: #212529;">
        <div class="container">
        <div class="row">
            <!-- Filters -->
            <aside class="col-md-3">
            <h2 class="fw-bold">Men's Outerwear</h2>
            
            </aside>
            <aside class="col-md-9">
            <img src="../banner-img.jpg" />
            </aside>
        </div>
    </section>

    <!-- Main Content -->
    <main class="container my-5">
        <div class="row">
            <!-- Filters -->
            <aside class="col-md-3">
            <p class="fs-9">Clothing / Women's / Outerwear</p>
                <h5 class="fw-bold mb-4">Filters</h5>
                <h6>Categories</h6>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="jewelery" id="categoryJewellery">
                    <label class="form-check-label" for="categoryJewellery">Jewellery</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="electronics" id="categoryElectronics">
                    <label class="form-check-label" for="categoryElectronics">Electronics</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="men's clothing" id="categoryMensClothing">
                    <label class="form-check-label" for="categoryMensClothing">Men's Clothing</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="women's clothing" id="categoryWomensClothing">
                    <label class="form-check-label" for="categoryWomensClothing">Women's Clothing</label>
                </div>
            </aside>

            <!-- Product Listing -->
            <div class="col-md-9">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <p id="resultCount">38 Results</p>
                    <select id="sortSelect" class="form-select w-auto">
                        <option value="">Sort by Price</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>

                <!-- Product Grid -->
                
                <div id="product-list"  class="product-grid row"></div>
                <div id="loading-spinner" class="loading-spinner" style="display: none;">Loading...</div>
                <button id="loadMoreBtn" class="load-more">Load More</button>
                <!-- Pagination -->
<nav class="d-flex justify-content-center mt-4">
    <ul class="pagination">
        <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item active"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
            <a class="page-link" href="#">Next</a>
        </li>
    </ul>
</nav>
            </div>
            

        </div>
    </main>

    <!-- Footer -->
    <!-- Footer -->
<footer class="bg-light py-5">
    <div class="container">
        <div class="row">
            <!-- Account Section -->
            <div class="col-md-3 mb-4">
                <h6 class="fw-bold">Account</h6>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-muted text-decoration-none">Sign In</a></li>
                    <li><a href="#" class="text-muted text-decoration-none">Register</a></li>
                    <li><a href="#" class="text-muted text-decoration-none">Order Status</a></li>
                </ul>
            </div>
            <!-- About Us Section -->
            <div class="col-md-3 mb-4">
                <h6 class="fw-bold">About Us</h6>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-muted text-decoration-none">Our Story</a></li>
                    <li><a href="#" class="text-muted text-decoration-none">Careers</a></li>
                </ul>
            </div>
            <!-- Help Section -->
            <div class="col-md-3 mb-4">
                <h6 class="fw-bold">Help</h6>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-muted text-decoration-none">Contact Us</a></li>
                    <li><a href="#" class="text-muted text-decoration-none">Order Status</a></li>
                    <li><a href="#" class="text-muted text-decoration-none">Returns</a></li>
                </ul>
            </div>
            <!-- Follow Us Section -->
            <div class="col-md-3 mb-4">
                <h6 class="fw-bold">Follow Us!</h6>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="d-flex gap-3">
                    <a href="#" class="text-muted fs-4"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="text-muted fs-4"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="text-muted fs-4"><i class="bi bi-twitter"></i></a>
                </div>
            </div>
        </div>
        <div class="border-top pt-4 mt-4">
            <div class="d-flex justify-content-between flex-wrap">
            <h1 class="fs-3 fw-bold">VENIA</h1>
                <p class="text-muted small mb-0">
                    © Company Name Address Ave, City Name, State ZIP
                </p>
                <div>
                    <a href="#" class="text-muted text-decoration-none me-3 small">Terms of Use</a>
                    <a href="#" class="text-muted text-decoration-none small">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>


    
    
</body>



`;
