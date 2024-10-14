function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} a été ajouté au panier.`);
}

function goToCart() {
    window.location.href = 'cart.html';
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartDiv.innerHTML = ''; // Efface le contenu précédent

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Aucun article dans le panier.</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} - ${item.price}€`;
            cartDiv.appendChild(itemDiv);
            total += item.price;
        });
    }
    totalElement.textContent = `Total: ${total}€`;
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

function goBack() {
    window.location.href = 'index.html';
}

// Charger le panier sur la page du panier
if (document.getElementById('cart')) {
    loadCart();
}
