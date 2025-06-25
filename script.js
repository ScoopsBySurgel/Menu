// Menu Data
const menuItems = [
    { name: "Kinder Ice Cream", description: "Creamy Kinder chocolate delight", price: "$1.11", category: "classic", icon: "🍫" },
    { name: "Cotton Candy Ice Cream", description: "Sweet and fluffy cotton candy flavor", price: "$1.11", category: "classic", icon: "🍬" },
    { name: "Bubble Gum Ice Cream", description: "Fun bubble gum taste for all ages", price: "$1.11", category: "classic", icon: "🍭" },
    { name: "Red Velvet Ice Cream", description: "Rich red velvet cake in a scoop", price: "$1.11", category: "premium", icon: "🧁" },
    { name: "Ferrero Rocher Ice Cream", description: "Hazelnut chocolate luxury", price: "$1.11", category: "premium", icon: "🥮" },
    { name: "Dark Chocolate Ice Cream", description: "Intense dark chocolate flavor", price: "$1.11", category: "classic", icon: "🍫" },
    { name: "Cheese Cake Ice Cream", description: "Creamy cheesecake in every bite", price: "$1.11", category: "premium", icon: "🍰" },
    { name: "Pistachio Ice Cream", description: "Nutty and creamy pistachio treat", price: "$1.11", category: "classic", icon: "🥜" },
    { name: "Caramel Caffè Frappe Ice Cream", description: "Coffee and caramel fusion", price: "$1.11", category: "premium", icon: "☕" },
    { name: "After Eight Ice Cream", description: "Mint chocolate after-dinner treat", price: "$1.11", category: "premium", icon: "🌿" },
    { name: "Fig & Almond Ice Cream", description: "Exotic fig and almond blend", price: "$1.11", category: "premium", icon: "🌰" },
    { name: "White Hershey's Ice Cream", description: "White chocolate Hershey's flavor", price: "$1.11", category: "classic", icon: "🤍" },
    { name: "Oreo Ice Cream", description: "Cookies and cream classic", price: "$1.11", category: "classic", icon: "🍪" },
    { name: "Biscotto Chocolate Ice Cream", description: "Chocolate and biscuit combo", price: "$1.11", category: "premium", icon: "🍪" },
    { name: "Passion Fruit Ice Cream", description: "Tropical passion fruit freshness", price: "$1.11", category: "vegan", icon: "🥭" },
    { name: "Lotus Ice Cream", description: "Lotus biscuit caramel flavor", price: "$1.11", category: "premium", icon: "🍯" },
    { name: "Tiramisu Ice Cream", description: "Classic Italian tiramisu taste", price: "$1.11", category: "premium", icon: "🍮" },
    { name: "Caramel Frappuccino Ice Cream", description: "Caramel coffeehouse favorite", price: "$1.11", category: "premium", icon: "🥤" },
    { name: "Mango Ice Cream", description: "Sweet and juicy mango flavor", price: "$1.11", category: "vegan", icon: "🥭" },
    { name: "Lemon Ice Cream", description: "Zesty and refreshing lemon", price: "$1.11", category: "vegan", icon: "🍋" },
    { name: "Knefe Ice Cream", description: "Middle Eastern dessert in a scoop", price: "$1.11", category: "premium", icon: "🧀" },
    { name: "Dubai Chocolate Ice Cream", description: "Luxurious Dubai-style chocolate", price: "$1.11", category: "premium", icon: "🏜️" },
    { name: "Greek Yogurt Blueberry Ice Cream", description: "Tangy yogurt and blueberry", price: "$1.11", category: "vegan", icon: "🫐" },
    { name: "Milky Mango Macadamia Ice Cream", description: "Mango and macadamia nut mix", price: "$1.11", category: "premium", icon: "🥭" },
    { name: "Vanilla Ice Cream", description: "Classic creamy vanilla", price: "$1.11", category: "classic", icon: "🍦" },
    { name: "Chocolate Ice Cream", description: "Smooth and rich chocolate", price: "$1.11", category: "classic", icon: "🍫" },
    { name: "Strawberry Ice Cream", description: "Fresh strawberry delight", price: "$1.11", category: "classic", icon: "🍓" },
    { name: "Blackberry Ice Cream", description: "Sweet and tart blackberry", price: "$1.11", category: "vegan", icon: "🫐" },
    { name: "Avocado Ice Cream", description: "Creamy avocado flavor", price: "$1.67", category: "vegan", icon: "🥑" },
    { name: "Raspberry Matcha Ice Cream", description: "Raspberry and matcha fusion", price: "$1.69", category: "vegan", icon: "🍵" }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.querySelector('.newsletter-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayMenuItems('all');
    setupEventListeners();
    setupSmoothScrolling();
});

// Display menu items based on filter
function displayMenuItems(filter) {
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    menuGrid.innerHTML = '';
    
    filteredItems.forEach(item => {
        const menuItem = createMenuItem(item);
        menuGrid.appendChild(menuItem);
    });
}

// Create menu item element
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <div class="menu-item-image">
            <span style="font-size: 4rem;">${item.icon}</span>
        </div>
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-price">${item.price}</div>
            <span class="menu-item-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
        </div>
    `;
    
    // Add click animation
    menuItem.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    return menuItem;
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
    
    // Newsletter form submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to menu function (called from CTA button)
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add some interactive animations
function addHoverEffects() {
    // Add hover effects to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize hover effects after menu is loaded
setTimeout(addHoverEffects, 1000);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add counter animation for features
function animateCounters() {
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });
    
    features.forEach(feature => {
        observer.observe(feature);
    });
}

// Initialize counter animations
setTimeout(animateCounters, 500);

// Add CSS for fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .feature {
        opacity: 0;
        transform: translateY(30px);
    }
`;
document.head.appendChild(style); 