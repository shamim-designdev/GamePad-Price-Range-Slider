function updatePriceRange() {
    const priceRange = document.getElementById('priceRange').value;
    document.getElementById('priceValue').innerText = priceRange;
}

function filterProducts() {
    const maxPrice = document.getElementById('priceRange').value;
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productPrice = product.getAttribute('data-price');
        if (parseInt(productPrice) <= maxPrice) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
}
