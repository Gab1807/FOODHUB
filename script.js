// Initial Sample Food Products (At least 15 items in Philippine Pesos)
const DEFAULT_FOODS = [
    {
        id: 1,
        name: "Ultimate Bacon Cheeseburger",
        category: "Burgers",
        price: 249.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80",
        description: "Juicy beef patty stacked with crispy bacon, melted cheddar, and signature house sauce."
    },
    {
        id: 2,
        name: "Classic Mushroom Swiss Burger",
        category: "Burgers",
        price: 219.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80",
        description: "Sautéed earthy mushrooms, rich Swiss cheese, and creamy garlic aioli on a toasted brioche bun."
    },
    {
        id: 3,
        name: "Spicy Pepperoni Pizza",
        category: "Pizza",
        price: 499.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80",
        description: "Generous spicy pepperoni slices, Italian mozzarella, and our signature tangy tomato sauce."
    },
    {
        id: 4,
        name: "Four Cheese Delight Pizza",
        category: "Pizza",
        price: 529.00,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
        description: "A rich blend of mozzarella, parmesan, gorgonzola, and cheddar cheese on a golden crust."
    },
    {
        id: 5,
        name: "Crispy Fried Chicken (2-pc Meal)",
        category: "Chicken",
        price: 199.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&auto=format&fit=crop&q=80",
        description: "Extra crispy golden-brown fried chicken served with steamed rice and savory gravy."
    },
    {
        id: 6,
        name: "Buffalo Spicy Chicken Wings",
        category: "Chicken",
        price: 289.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=600&auto=format&fit=crop&q=80",
        description: "Tender chicken wings tossed in fiery buffalo sauce, served with cool ranch dip."
    },
    {
        id: 7,
        name: "Creamy Carbonara Pasta",
        category: "Pasta",
        price: 239.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&auto=format&fit=crop&q=80",
        description: "Classic Italian spaghetti tossed in rich cream sauce, crispy bacon bits, and parmesan."
    },
    {
        id: 8,
        name: "Baked Beef Lasagna",
        category: "Pasta",
        price: 269.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&auto=format&fit=crop&q=80",
        description: "Layers of wide pasta sheets, hearty ground beef marinara, béchamel, and melted cheese."
    },
    {
        id: 9,
        name: "Special Pork Sisig Rice Meal",
        category: "Rice Meals",
        price: 179.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80",
        description: "Sizzling savory chopped pork sisig with egg and garlic fried rice."
    },
    {
        id: 10,
        name: "Beef tapa Garlic Rice Meal",
        category: "Rice Meals",
        price: 189.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
        description: "Cured sweet beef tapa served with sinangag (garlic rice) and sunny-side-up egg."
    },
    {
        id: 11,
        name: "Chocolate Fudge Lava Cake",
        category: "Desserts",
        price: 149.00,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80",
        description: "Warm moist chocolate cake with a rich molten chocolate center."
    },
    {
        id: 12,
        name: "Classic New York Cheesecake",
        category: "Desserts",
        price: 169.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80",
        description: "Rich, smooth, and creamy cheesecake with a graham cracker crust."
    },
    {
        id: 13,
        name: "Iced Caramel Macchiato",
        category: "Drinks",
        price: 129.00,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80",
        description: "Fresh espresso poured over cold milk and ice, topped with sweet caramel drizzle."
    },
    {
        id: 14,
        name: "Refreshing Wintermelon Milk Tea",
        category: "Drinks",
        price: 110.00,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=600&auto=format&fit=crop&q=80",
        description: "Smooth wintermelon milk tea served with chewy brown sugar pearls."
    },
    {
        id: 15,
        name: "Classic Pepperoni Slice & Drink Combo",
        category: "Pizza",
        price: 199.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=600&auto=format&fit=crop&q=80",
        description: "A huge slice of pepperoni pizza paired with your choice of refreshing soft drink."
    }
];

const CATEGORIES = ["Burgers", "Pizza", "Chicken", "Pasta", "Rice Meals", "Desserts", "Drinks"];
const CATEGORY_ICONS = {
    "Burgers": "fa-burger",
    "Pizza": "fa-pizza-slice",
    "Chicken": "fa-drumstick-bite",
    "Pasta": "fa-bowl-food",
    "Rice Meals": "fa-utensils",
    "Desserts": "fa-ice-cream",
    "Drinks": "fa-cup-hot"
};

// Application State (loaded from localStorage)
let foods = JSON.parse(localStorage.getItem('foodhub_foods')) || DEFAULT_FOODS;
let cart = JSON.parse(localStorage.getItem('foodhub_cart')) || [];
let orders = JSON.parse(localStorage.getItem('foodhub_orders')) || [];
let users = JSON.parse(localStorage.getItem('foodhub_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('foodhub_current_user')) || null;
let currentCategoryFilter = "All";
let searchQuery = "";

// Initialize App on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    // Save defaults if empty
    if (!localStorage.getItem('foodhub_foods')) {
        localStorage.setItem('foodhub_foods', JSON.stringify(DEFAULT_FOODS));
    }
    renderAuthNav();
    renderHomeCategories();
    renderFeaturedFoods();
    renderMenuCategories();
    renderMenuFoods();
    renderCart();
    renderTrackingView();
    renderOrderHistory();
    renderAdminDashboard();
});

// Toast Notifications System
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Navigation Views Controller
function switchView(viewName) {
    if (viewName === 'admin' && (!currentUser || currentUser.role !== 'admin')) {
        showToast("Admin access required. Please login as admin.", "error");
        openAuthModal('login');
        return;
    }
    
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
        targetView.classList.add('active-view');
    }
    const targetLink = document.getElementById(`link-${viewName}`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh view specific components
    if (viewName === 'tracking') renderTrackingView();
    if (viewName === 'history') renderOrderHistory();
    if (viewName === 'admin') renderAdminDashboard();
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobile-nav");
    mobileNav.classList.toggle("open");
}

// Search Handler
function handleSearchInput(e) {
    searchQuery = e.target.value.toLowerCase().trim();
    if (searchQuery.length > 0) {
        switchView('menu');
    }
    renderMenuFoods();
}

// Render Home Categories
function renderHomeCategories() {
    const container = document.getElementById("home-category-grid");
    if (!container) return;
    container.innerHTML = CATEGORIES.map(cat => {
        const icon = CATEGORY_ICONS[cat] || "fa-utensils";
        return `
            <div class="category-card" onclick="filterByCategory('${cat}')">
                <i class="fa-solid ${icon}"></i>
                <h4>${cat}</h4>
            </div>
        `;
    }).join('');
}

function filterByCategory(category) {
    currentCategoryFilter = category;
    switchView('menu');
    renderMenuCategories();
    renderMenuFoods();
}

// Render Featured Foods on Home
function renderFeaturedFoods() {
    const container = document.getElementById("featured-food-grid");
    if (!container) return;
    const featured = foods.slice(0, 4);
    container.innerHTML = featured.map(food => createFoodCardHTML(food)).join('');
}

// Render Menu Categories Filter Bar
function renderMenuCategories() {
    const container = document.getElementById("category-filter-bar");
    if (!container) return;
    let html = `<button class="filter-btn ${currentCategoryFilter === 'All' ? 'active' : ''}" onclick="setMenuCategory('All')">All Items</button>`;
    html += CATEGORIES.map(cat => `
        <button class="filter-btn ${currentCategoryFilter === cat ? 'active' : ''}" onclick="setMenuCategory('${cat}')">${cat}</button>
    `).join('');
    container.innerHTML = html;
}

function setMenuCategory(cat) {
    currentCategoryFilter = cat;
    renderMenuCategories();
    renderMenuFoods();
}

// Render Full Menu Foods
function renderMenuFoods() {
    const container = document.getElementById("full-menu-grid");
    const noResults = document.getElementById("menu-no-results");
    if (!container) return;

    let filtered = foods.filter(food => {
        const matchesCategory = currentCategoryFilter === 'All' || food.category === currentCategoryFilter;
        const matchesSearch = food.name.toLowerCase().includes(searchQuery) || food.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = "";
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
        container.innerHTML = filtered.map(food => createFoodCardHTML(food)).join('');
    }
}

function createFoodCardHTML(food) {
    return `
        <div class="food-card">
            <div class="food-img-container">
                <img src="${food.image}" alt="${food.name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'">
                <span class="food-badge">${food.category}</span>
            </div>
            <div class="food-details">
                <div class="food-header-row">
                    <h3 class="food-title">${food.name}</h3>
                    <div class="food-rating"><i class="fa-solid fa-star"></i> ${food.rating}</div>
                </div>
                <p class="food-desc">${food.description}</p>
                <div class="food-footer-row">
                    <span class="food-price">₱${Number(food.price).toFixed(2)}</span>
                    <button class="btn btn-primary btn-sm" onclick="addToCart(${food.id})">
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Shopping Cart Functions
function addToCart(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (!food) return;

    const existingItem = cart.find(item => item.id === foodId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...food, quantity: 1 });
    }

    saveCart();
    renderCart();
    showToast(`Added ${food.name} to cart!`);
}

function updateCartQty(foodId, change) {
    const item = cart.find(i => i.id === foodId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== foodId);
    }
    saveCart();
    renderCart();
}

function removeFromCart(foodId) {
    cart = cart.filter(i => i.id !== foodId);
    saveCart();
    renderCart();
    showToast("Item removed from cart.", "error");
}

function saveCart() {
    localStorage.setItem('foodhub_cart', JSON.stringify(cart));
}

function renderCart() {
    const badge = document.getElementById("cart-badge");
    const container = document.getElementById("cart-items-container");
    const footer = document.getElementById("cart-footer");

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) badge.innerText = totalCount;

    if (!container || !footer) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        footer.innerHTML = `
            <button class="btn btn-secondary full-width" onclick="toggleCartModal(false)">Continue Shopping</button>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    container.innerHTML = cart.map(item => `
        <div class="cart-item-row">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>₱${Number(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                <button class="remove-cart-item" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    footer.innerHTML = `
        <div class="cart-total-box">
            <span>Subtotal:</span>
            <span>₱${subtotal.toFixed(2)}</span>
        </div>
        <button class="btn btn-primary full-width" onclick="proceedToCheckout()">Proceed to Checkout</button>
    `;
}

function toggleCartModal(isOpen) {
    const modal = document.getElementById("cart-modal");
    if (modal) {
        if (isOpen) {
            modal.classList.add("active");
            renderCart();
        } else {
            modal.classList.remove("active");
        }
    }
}

// Checkout & Order Placement
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast("Your cart is empty!", "error");
        return;
    }
    toggleCartModal(false);
    toggleCheckoutModal(true);

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 50; // Delivery fee ₱50

    document.getElementById("summary-subtotal").innerText = `₱${subtotal.toFixed(2)}`;
    document.getElementById("summary-total").innerText = `₱${total.toFixed(2)}`;

    // Auto-fill if user logged in
    if (currentUser && currentUser.name) {
        document.getElementById("checkout-name").value = currentUser.name;
    }
}

function toggleCheckoutModal(isOpen) {
    const modal = document.getElementById("checkout-modal");
    if (modal) {
        if (isOpen) modal.classList.add("active");
        else modal.classList.remove("active");
    }
}

function handlePlaceOrder(e) {
    e.preventDefault();
    const name = document.getElementById("checkout-name").value;
    const contact = document.getElementById("checkout-contact").value;
    const address = document.getElementById("checkout-address").value;
    const payment = document.getElementById("checkout-payment").value;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 50;

    const newOrder = {
        id: "FH-" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleString(),
        customer: { name, contact, address },
        items: [...cart],
        subtotal,
        total,
        payment,
        status: "Order Placed" // Order Placed → Preparing → Ready → Out for Delivery → Delivered
    };

    orders.unshift(newOrder);
    localStorage.setItem('foodhub_orders', JSON.stringify(orders));

    // Clear Cart
    cart = [];
    saveCart();
    renderCart();

    toggleCheckoutModal(false);
    showToast(`Order #${newOrder.id} placed successfully!`);
    switchView('tracking');
}

// Order Tracking Simulation
function renderTrackingView() {
    const container = document.getElementById("active-tracker-content");
    if (!container) return;

    const activeOrders = orders.filter(o => o.status !== "Delivered");
    if (activeOrders.length === 0 && orders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-person-biking"></i>
                <h3>No active orders to track</h3>
                <p>Place an order from the menu to track its real-time delivery status!</p>
                <button class="btn btn-primary" onclick="switchView('menu')" style="margin-top: 15px;">Order Now</button>
            </div>
        `;
        return;
    }

    const order = activeOrders.length > 0 ? activeOrders[0] : orders[0];
    const statuses = ["Order Placed", "Preparing", "Ready", "Out for Delivery", "Delivered"];
    const currentStatusIdx = statuses.indexOf(order.status);

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3>Order ID: <strong>${order.id}</strong></h3>
            <span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, '-')}">${order.status}</span>
        </div>
        <div class="tracking-steps">
            ${statuses.map((st, idx) => {
                let cls = "";
                if (idx < currentStatusIdx) cls = "completed";
                else if (idx === currentStatusIdx) cls = "active";
                return `
                    <div class="step ${cls}">
                        <div class="step-icon">${idx < currentStatusIdx ? '<i class="fa-solid fa-check"></i>' : idx + 1}</div>
                        <p>${st}</p>
                    </div>
                `;
            }).join('')}
        </div>
        <div class="order-info-card">
            <h4>Delivery Address:</h4>
            <p>${order.customer.address} (${order.customer.name} - ${order.customer.contact})</p>
            <h4 style="margin-top: 10px;">Items Summary:</h4>
            <p>${order.items.map(i => `${i.quantity}x ${i.name}`).join(', ')}</p>
            <h4 style="margin-top: 10px;">Total Amount: ₱${order.total.toFixed(2)} (${order.payment})</h4>
        </div>
        <div style="margin-top: 20px; text-align: center;">
            <button class="btn btn-secondary btn-sm" onclick="simulateNextStatus('${order.id}')"><i class="fa-solid fa-forward"></i> Simulate Next Status</button>
        </div>
    `;
}

function simulateNextStatus(orderId) {
    const statuses = ["Order Placed", "Preparing", "Ready", "Out for Delivery", "Delivered"];
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    let idx = statuses.indexOf(order.status);
    if (idx < statuses.length - 1) {
        order.status = statuses[idx + 1];
        localStorage.setItem('foodhub_orders', JSON.stringify(orders));
        renderTrackingView();
        renderOrderHistory();
        renderAdminDashboard();
        showToast(`Order status updated to: ${order.status}`);
    } else {
        showToast("Order is already delivered!", "error");
    }
}

// Order History View
function renderOrderHistory() {
    const container = document.getElementById("order-history-list");
    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>No past orders found.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = orders.map(ord => `
        <div class="order-history-card">
            <div class="order-history-details">
                <h4>Order #${ord.id}</h4>
                <p>${ord.date} • ${ord.items.length} items</p>
                <p style="margin-top: 5px; font-weight: 600; color: var(--dark);">Total: ₱${ord.total.toFixed(2)} (${ord.payment})</p>
            </div>
            <div>
                <span class="status-badge ${ord.status.toLowerCase().replace(/\s+/g, '-')}">${ord.status}</span>
            </div>
        </div>
    `).join('');
}

// Authentication System (Login / Register)
function renderAuthNav() {
    const container = document.getElementById("auth-nav-container");
    const mobileContainer = document.getElementById("mobile-auth-container");
    if (!container) return;

    if (currentUser) {
        let adminLink = currentUser.role === 'admin' ? `<a href="#" onclick="switchView('admin')" class="nav-link" id="link-admin">Admin</a>` : '';
        container.innerHTML = `
            ${adminLink}
            <span style="font-size: 0.9rem; font-weight: 600; color: var(--primary);">Hi, ${currentUser.name || currentUser.username}</span>
            <button class="btn btn-secondary btn-sm" onclick="handleLogout()">Logout</button>
        `;
        if (mobileContainer) {
            mobileContainer.innerHTML = `
                ${currentUser.role === 'admin' ? `<a href="#" onclick="switchView('admin'); toggleMobileMenu();">Admin Panel</a>` : ''}
                <a href="#" onclick="handleLogout()">Logout (${currentUser.name || currentUser.username})</a>
            `;
        }
    } else {
        container.innerHTML = `
            <button class="btn btn-secondary btn-sm" onclick="openAuthModal('login')">Login</button>
            <button class="btn btn-primary btn-sm" onclick="openAuthModal('register')">Register</button>
        `;
        if (mobileContainer) {
            mobileContainer.innerHTML = `
                <a href="#" onclick="openAuthModal('login'); toggleMobileMenu();">Login</a>
                <a href="#" onclick="openAuthModal('register'); toggleMobileMenu();">Register</a>
            `;
        }
    }
}

let isRegisterMode = false;
function openAuthModal(mode) {
    const modal = document.getElementById("auth-modal");
    isRegisterMode = mode === 'register';
    document.getElementById("auth-modal-title").innerText = isRegisterMode ? "Customer Registration" : "Customer Login";
    document.getElementById("auth-name-group").style.display = isRegisterMode ? "block" : "none";
    document.getElementById("auth-submit-btn").innerText = isRegisterMode ? "Register" : "Login";
    document.getElementById("auth-switch-container").innerHTML = isRegisterMode ? 
        `Already have an account? <a href="#" onclick="toggleAuthMode(event)">Login here</a>` :
        `Don't have an account? <a href="#" onclick="toggleAuthMode(event)">Register here</a>`;
    modal.classList.add("active");
}

function toggleAuthModal(isOpen) {
    const modal = document.getElementById("auth-modal");
    if (modal) {
        if (isOpen) modal.classList.add("active");
        else modal.classList.remove("active");
    }
}

function toggleAuthMode(e) {
    e.preventDefault();
    openAuthModal(isRegisterMode ? 'login' : 'register');
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const username = document.getElementById("auth-username").value.trim();
    const password = document.getElementById("auth-password").value;
    const fullname = document.getElementById("auth-fullname").value.trim();

    // Demo Admin Login check
    if (!isRegisterMode && username === "admin" && password === "admin123") {
        currentUser = { username: "admin", name: "Administrator", role: "admin" };
        localStorage.setItem('foodhub_current_user', JSON.stringify(currentUser));
        toggleAuthModal(false);
        renderAuthNav();
        showToast("Logged in as Admin successfully!");
        switchView('admin');
        return;
    }

    if (isRegisterMode) {
        const existing = users.find(u => u.username === username);
        if (existing) {
            showToast("Username/Email already registered!", "error");
            return;
        }
        const newUser = { username, password, name: fullname || username, role: "customer" };
        users.push(newUser);
        localStorage.setItem('foodhub_users', JSON.stringify(users));
        currentUser = newUser;
        localStorage.setItem('foodhub_current_user', JSON.stringify(currentUser));
        toggleAuthModal(false);
        renderAuthNav();
        showToast("Registration successful!");
        switchView('home');
    } else {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('foodhub_current_user', JSON.stringify(currentUser));
            toggleAuthModal(false);
            renderAuthNav();
            showToast(`Welcome back, ${user.name}!`);
            switchView('home');
        } else {
            showToast("Invalid username or password!", "error");
        }
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('foodhub_current_user');
    renderAuthNav();
    showToast("Logged out successfully.");
    switchView('home');
}

// Admin Dashboard & Management
let currentAdminTab = 'dashboard';
function switchAdminTab(tabName) {
    currentAdminTab = tabName;
    document.querySelectorAll('.admin-tab-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));

    event.currentTarget.classList.add('active');
    document.getElementById(`admin-tab-${tabName}`).classList.add('active');
    renderAdminDashboard();
}

function renderAdminDashboard() {
    // Stats
    const totalOrdersEl = document.getElementById("admin-stat-orders");
    const totalSalesEl = document.getElementById("admin-stat-sales");
    const totalCustomersEl = document.getElementById("admin-stat-customers");

    if (totalOrdersEl) totalOrdersEl.innerText = orders.length;
    const totalSales = orders.reduce((sum, o) => sum + o.total, 0);
    if (totalSalesEl) totalSalesEl.innerText = `₱${totalSales.toFixed(2)}`;
    if (totalCustomersEl) totalCustomersEl.innerText = users.length + 1; // including admin

    // Foods Table
    const foodTbody = document.getElementById("admin-food-tbody");
    if (foodTbody) {
        foodTbody.innerHTML = foods.map(food => `
            <tr>
                <td><img src="${food.image}" alt="${food.name}"></td>
                <td><strong>${food.name}</strong></td>
                <td>${food.category}</td>
                <td>₱${Number(food.price).toFixed(2)}</td>
                <td><i class="fa-solid fa-star" style="color: #f1c40f;"></i> ${food.rating}</td>
                <td>
                    <div class="action-btns">
                        <button class="btn btn-edit btn-sm" onclick="openFoodModal(${food.id})"><i class="fa-solid fa-pen"></i></button>
                        <button class="btn btn-delete btn-sm" onclick="deleteFood(${food.id})"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Orders Table
    const orderTbody = document.getElementById("admin-order-tbody");
    if (orderTbody) {
        if (orders.length === 0) {
            orderTbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--gray);">No customer orders yet.</td></tr>`;
        } else {
            orderTbody.innerHTML = orders.map(ord => `
                <tr>
                    <td><strong>#${ord.id}</strong></td>
                    <td>${ord.customer.name}<br><small>${ord.customer.contact}</small></td>
                    <td>₱${ord.total.toFixed(2)}</td>
                    <td>${ord.payment}</td>
                    <td><span class="status-badge ${ord.status.toLowerCase().replace(/\s+/g, '-')}">${ord.status}</span></td>
                    <td>
                        <select class="btn-sm" onchange="adminUpdateStatus('${ord.id}', this.value)">
                            <option value="" disabled selected>Update Status</option>
                            <option value="Order Placed">Order Placed</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Ready">Ready</option>
                            <option value="Out for Delivery">Out for Delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </td>
                </tr>
            `).join('');
        }
    }
}

// Add/Edit Food Functions (Admin)
function openFoodModal(foodId = null) {
    const modal = document.getElementById("food-modal");
    const title = document.getElementById("food-modal-title");
    const form = document.getElementById("food-form");
    form.reset();
    document.getElementById("edit-food-id").value = "";

    if (foodId) {
        title.innerText = "Edit Food Item";
        const food = foods.find(f => f.id === foodId);
        if (food) {
            document.getElementById("edit-food-id").value = food.id;
            document.getElementById("food-input-name").value = food.name;
            document.getElementById("food-input-category").value = food.category;
            document.getElementById("food-input-price").value = food.price;
            document.getElementById("food-input-rating").value = food.rating;
            document.getElementById("food-input-image").value = food.image;
            document.getElementById("food-input-desc").value = food.description;
        }
    } else {
        title.innerText = "Add New Food Item";
    }
    modal.classList.add("active");
}

function toggleFoodModal(isOpen) {
    const modal = document.getElementById("food-modal");
    if (modal) {
        if (isOpen) modal.classList.add("active");
        else modal.classList.remove("active");
    }
}

function handleSaveFood(e) {
    e.preventDefault();
    const idVal = document.getElementById("edit-food-id").value;
    const name = document.getElementById("food-input-name").value;
    const category = document.getElementById("food-input-category").value;
    const price = parseFloat(document.getElementById("food-input-price").value);
    const rating = parseFloat(document.getElementById("food-input-rating").value);
    const image = document.getElementById("food-input-image").value;
    const description = document.getElementById("food-input-desc").value;

    if (idVal) {
        // Edit
        const food = foods.find(f => f.id == idVal);
        if (food) {
            food.name = name;
            food.category = category;
            food.price = price;
            food.rating = rating;
            food.image = image;
            food.description = description;
            showToast("Food item updated successfully!");
        }
    } else {
        // Add
        const newFood = {
            id: Date.now(),
            name,
            category,
            price,
            rating,
            image,
            description
        };
        foods.unshift(newFood);
        showToast("New food item added successfully!");
    }

    localStorage.setItem('foodhub_foods', JSON.stringify(foods));
    toggleFoodModal(false);
    renderFeaturedFoods();
    renderMenuFoods();
    renderAdminDashboard();
}

function deleteFood(foodId) {
    if (confirm("Are you sure you want to delete this food item?")) {
        foods = foods.filter(f => f.id !== foodId);
        localStorage.setItem('foodhub_foods', JSON.stringify(foods));
        renderFeaturedFoods();
        renderMenuFoods();
        renderAdminDashboard();
        showToast("Food item deleted.", "error");
    }
}

function adminUpdateStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        localStorage.setItem('foodhub_orders', JSON.stringify(orders));
        renderAdminDashboard();
        renderTrackingView();
        renderOrderHistory();
        showToast(`Order #${orderId} status changed to ${newStatus}`);
    }
}