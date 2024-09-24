const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
      loginModal.style.display = 'none';
    });

    // Cart functionality
    
    let cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    addToCartBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));

        // Add item to cart array
        cart.push({ name, price });
        updateCart();
      });
    });

    function updateCart() {
      // Update cart count
      cartCount.textContent = cart.length;

      // Update cart items
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        cartItems.innerHTML += `<div class="cart-item"><span>${item.name}</span><span>Rs.${item.price}</span></div>`;
        total += item.price;
      });

      // Update total
      cartTotal.textContent = `Total: Rs.${total}`;
    }

    // Checkout button functionality
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
      alert('Order placed successfully!');
      cart = [];
      updateCart();
    });