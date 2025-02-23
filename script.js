// Theme Toggle Functionality

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark);
  }
  
  // Apply theme on page load for ALL pages
  document.addEventListener('DOMContentLoaded', () => {
    const isDark = localStorage.getItem('darkTheme') === 'true';
    if (isDark) {
      document.body.classList.add('dark-theme');
    }
  });

  
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Save theme preference
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    if (savedTheme) {
        document.body.classList.add('dark-theme');
    }
});

// Review Submission Handler
function submitReview(event) {
    event.preventDefault();
    const form = event.target;
    
    // Get form values
    const name = form[0].value;
    const review = form[1].value;
    const rating = form[2].value;

    // Create new review element
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
        <h3>${name}</h3>
        <div class="rating">${'⭐'.repeat(rating)}</div>
        <p>"${review}"</p>
    `;

    // Add to reviews container
    document.querySelector('.reviews-container').prepend(reviewCard);

    // Reset form
    form.reset();
    alert('Thank you for your review!');
}

function enterCafe() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('cafe-main').style.display = 'block';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For others
}

function goBack() {
    document.getElementById('cafe-main').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
}

// Keep existing theme toggle and review functions

// Cart System
let cart = [];
let favorites = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCartDisplay();
}

function updateCartDisplay() {
    document.getElementById('cart-count').textContent = cart.length;
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map((item, index) => `
        <div>${item.item} - $${item.price}</div>
    `).join('');
    document.getElementById('cart-total').textContent = 
        cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
}

// Favorites System
function addToFavorites(item) {
    if (!favorites.includes(item)) {
        favorites.push(item);
        updateFavoritesDisplay();
    }
}

function updateFavoritesDisplay() {
    const favList = document.getElementById('favorites-list');
    favList.innerHTML = favorites.map(item => `
        <div>${item}</div>
    `).join('');
}

// Chat Bot
const botResponses = {
    'recommend': 'I suggest trying our signature Coffee! ☕',
    'sweet': 'How about our Hot Chocolate? 🍫',
    'strong': 'Go for an Espresso! 💪',
    'default': 'I recommend our famous Central Perk Coffee! ☕'
};

function sendMessage() {
    const input = document.getElementById('user-input').value.toLowerCase();
    const response = Object.keys(botResponses).find(key => input.includes(key)) 
                    || 'default';
    displayMessage(botResponses[response]);
}

function displayMessage(msg) {
    const chatBox = document.getElementById('chat-messages');
    chatBox.innerHTML += `<div class="bot-message">${msg}</div>`;
}

// Toggle Functions
function toggleSection(section) {
    document.querySelectorAll('.container').forEach(div => 
        div.classList.add('hidden'));
    document.getElementById(`${section}-section`).classList.remove('hidden');
}

function toggleChat() {
    document.getElementById('chat-box').classList.toggle('hidden');
}