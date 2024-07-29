document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');
    const productsLink = document.getElementById('productsLink');
    const checkoutLink = document.getElementById('checkoutLink');
    const contactLink = document.getElementById('contactLink');
    const contactLinkFooter = document.getElementById('contactLinkFooter');

    homeLink.addEventListener('click', function() {
        showPage('homePage');
    });

    productsLink.addEventListener('click', function() {
        showPage('productsPage');
    });

    checkoutLink.addEventListener('click', function() {
        showPage('checkoutPage');
    });

    contactLink.addEventListener('click', function() {
        showPage('contactPage');
    });

    contactLinkFooter.addEventListener('click', function() {
        showPage('contactPage');
    });

    // Initialize home page display
    showPage('homePage');
});

function showPage(pageId) {
    const pages = ['homePage', 'productsPage', 'productDetailPage', 'checkoutPage', 'contactPage'];
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

function showProductDetail(productId) {
    // Example: Setting dummy content for product details
    const productDetails = {
        1: { image: 'https://cdn1.vente-unique.com/thumbnails/product/105/105689/product_raw/xs/bureau_343243.jpg', description: 'A stylish and functional office desk.' },
        2: { image: 'https://i0.wp.com/dansmamaison.ma/wp-content/uploads/2020/03/Bureau-office-photo-reelle5.jpg?fit=1024%2C768&quality=89&ssl=1', description: 'A comfortable and ergonomic office chair.' },
        3: { image: 'https://media.s-bol.com/nYO1PkOQL9yW/550x366.jpg', description: 'An elegant office lamp for your desk.' }
    };
    
    const product = productDetails[productId];
    if (product) {
        document.getElementById('productImage').innerHTML = `<img src="${product.image}" alt="Product Image">`;
        document.getElementById('productDescription').textContent = product.description;
        showPage('productDetailPage');
    }
}

function showCheckoutPage() {
    // Show checkout page only when "Buy Now" is clicked
    showPage('checkoutPage');
}

function addReview() {
    const reviewText = document.getElementById('reviewText').value;
    if (reviewText.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    const reviewDate = new Date().toLocaleDateString();
    const reviewHtml = `<p>${reviewText} <small>(${reviewDate})</small></p>`;
    document.getElementById('productReviews').innerHTML += reviewHtml;
    document.getElementById('reviewText').value = '';
}