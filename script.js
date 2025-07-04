// Menu Data
const menuItems = [
    { name: "Kinder Ice Cream", description: "Creamy Kinder chocolate delight", price: "$1.11", category: "classic", icon: "🍫", color: "#8B4513", image: "images/Kinder_icecream.png" },
    { name: "Cotton Candy Ice Cream", description: "Sweet and fluffy cotton candy flavor", price: "$1.11", category: "classic", icon: "🍬", color: "#FFB6C1", image: "images/Cotton_Candy_icecream.png" },
    { name: "Bubble Gum Ice Cream", description: "Fun bubble gum taste for all ages", price: "$1.11", category: "classic", icon: "🍭", color: "#FF69B4", image: "images/Bubble_Gum_icecream.png" },
    { name: "Red Velvet Ice Cream", description: "Rich red velvet cake in a scoop", price: "$1.11", category: "premium", icon: "🧁", color: "#DC143C", image: "images/Red_Velvet_icecream.png" },
    { name: "Ferrero Rocher Ice Cream", description: "Hazelnut chocolate luxury", price: "$1.11", category: "premium", icon: "🥮", color: "#8B4513", image: "images/Ferrero_Rocher_icecream.png" },
    { name: "Dark Chocolate Ice Cream", description: "Intense dark chocolate flavor", price: "$1.11", category: "classic", icon: "🍫", color: "#2F1B14", image: "images/Dark_Chocolate_icecream.png" },
    { name: "Cheese Cake Ice Cream", description: "Creamy cheesecake in every bite", price: "$1.11", category: "premium", icon: "🍰", color: "#FFF8DC", image: "images/Cheese_cake_icecream.png" },
    { name: "Pistachio Ice Cream", description: "Nutty and creamy pistachio treat", price: "$1.11", category: "classic", icon: "🥜", color: "#90EE90", image: "images/Pistachio_icecream.png" },
    { name: "Caramel Caffè Frappe Ice Cream", description: "Coffee and caramel fusion", price: "$1.11", category: "premium", icon: "☕", color: "#8B4513", image: "images/Caramel_Caffè_Frappe_icecream.png" },
    { name: "After Eight Ice Cream", description: "Mint chocolate after-dinner treat", price: "$1.11", category: "premium", icon: "🌿", color: "#98FB98", image: "images/After_Eight_icecream.png" },
    { name: "Fig & Almond Ice Cream", description: "Exotic fig and almond blend", price: "$1.11", category: "premium", icon: "🌰", color: "#8B4513", image: "images/Fig_and_Almond_icecream.png" },
    { name: "White Hershey's Ice Cream", description: "White chocolate Hershey's flavor", price: "$1.11", category: "classic", icon: "🤍", color: "#F5F5DC", image: "images/White_Hersheys_icecream.png" },
    { name: "Oreo Ice Cream", description: "Cookies and cream classic", price: "$1.11", category: "classic", icon: "🍪", color: "#2F1B14", image: "images/Oreo_icecream.png" },
    { name: "Biscotto Chocolate Ice Cream", description: "Chocolate and biscuit combo", price: "$1.11", category: "premium", icon: "🍪", color: "#8B4513", image: "images/Biscotto_chocolate_icecream.png" },
    { name: "Passion Fruit Ice Cream", description: "Tropical passion fruit freshness", price: "$1.11", category: "vegan", icon: "🥭", color: "#FFD700", image: "images/Passion_Fruit_icecream.png" },
    { name: "Lotus Ice Cream", description: "Lotus biscuit caramel flavor", price: "$1.11", category: "premium", icon: "🍯", color: "#DAA520", image: "images/Lotus_icecream.png" },
    { name: "Tiramisu Ice Cream", description: "Classic Italian tiramisu taste", price: "$1.11", category: "premium", icon: "🍮", color: "#8B4513", image: "images/Tiramisu_icecream.png" },
    { name: "Caramel Frappuccino Ice Cream", description: "Caramel coffeehouse favorite", price: "$1.11", category: "premium", icon: "🥤", color: "#8B4513", image: "images/Caramel_Frappuccino_icecream.png" },
    { name: "Mango Ice Cream", description: "Sweet and juicy mango flavor", price: "$1.11", category: "vegan", icon: "🥭", color: "#FFA500", image: "images/Mango_icecream.png" },
    { name: "Lemon Ice Cream", description: "Zesty and refreshing lemon", price: "$1.11", category: "vegan", icon: "🍋", color: "#FFFF00", image: "images/Lemon_icecream.png" },
    { name: "Knefe Ice Cream", description: "Middle Eastern dessert in a scoop", price: "$1.11", category: "premium", icon: "🧀", color: "#FFD700", image: "images/Knafe_icecream.png" },
    { name: "Dubai Chocolate Ice Cream", description: "Luxurious Dubai-style chocolate", price: "$1.11", category: "premium", icon: "🏜️", color: "#8B4513", image: "images/Dubai_Chocolate_icecream.png" },
    { name: "Greek Yogurt Blueberry Ice Cream", description: "Tangy yogurt and blueberry", price: "$1.11", category: "vegan", icon: "🫐", color: "#4169E1", image: "images/Greek_yogurt_blueberry_icecream.png" },
    { name: "Milky Mango Macadamia Ice Cream", description: "Mango and macadamia nut mix", price: "$1.11", category: "premium", icon: "🥭", color: "#FFA500", image: "images/Milky_Mango_Macadamia_icecream.png" },
    { name: "Vanilla Ice Cream", description: "Classic creamy vanilla", price: "$1.11", category: "classic", icon: "🍦", color: "#F5F5DC", image: "images/Vanilla_icecream.png" },
    { name: "Chocolate Ice Cream", description: "Smooth and rich chocolate", price: "$1.11", category: "classic", icon: "🍫", color: "#8B4513", image: "images/Chocolate_icecream.png" },
    { name: "Strawberry Ice Cream", description: "Fresh strawberry delight", price: "$1.11", category: "classic", icon: "🍓", color: "#FF69B4", image: "images/Strawberry_icecream.png" },
    { name: "Blackberry Ice Cream", description: "Sweet and tart blackberry", price: "$1.11", category: "vegan", icon: "🫐", color: "#4B0082", image: "images/Blackberry_icecream.png" },
    { name: "Avocado Ice Cream", description: "Creamy avocado flavor", price: "$1.67", category: "vegan", icon: "🥑", color: "#228B22", image: "images/Avocado_icecream.png" },
    { name: "Raspberry Matcha Ice Cream", description: "Raspberry and matcha fusion", price: "$1.69", category: "vegan", icon: "🍵", color: "#32CD32", image: "images/Raspberry_Matcha_themed.png" }
];

// Ice Cream Sticks Data
const iceCreamSticks = [
    { name: "Strawberry Cheesecake Stick", description: "Creamy strawberry cheesecake on a stick", price: "$2.22", icon: "🍓", color: "#FF69B4", image: "images/Ice_cream_stick_Strawberry.png" },
    { name: "Ashta Pistachio Stick", description: "Traditional ashta with pistachio flavor", price: "$2.22", icon: "🥜", color: "#90EE90", image: "images/Ice_cream_stick_AshtaPistachio.png" },
    { name: "Cookies & Cream Stick", description: "Classic cookies and cream on a stick", price: "$2.25", icon: "🍪", color: "#2F1B14", image: "images/Ice_cream_stick_cockiesandcream.png" },
    { name: "Bubble Trouble Stick", description: "Fun bubble gum flavor on a stick", price: "$2.25", icon: "🍭", color: "#FF69B4", image: "images/ice_cream_stick_BubbleGum.png" },
    { name: "Vanilla Choco Crisp Stick", description: "Vanilla with chocolate crisp coating", price: "$2.25", icon: "🍦", color: "#F5F5DC", image: "images/ice_cream_stick_VanillaChocoCrisp.png" },
    { name: "Duo Chocolate Stick", description: "Double chocolate delight on a stick", price: "$2.25", icon: "🍫", color: "#8B4513", image: "images/ice_cream_stick_Duochocolate.png" },
    { name: "Choco Peanut Butter Stick", description: "Chocolate and peanut butter combo", price: "$2.25", icon: "🥜", color: "#DAA520", image: "images/ice_cream_stick_peanutbutter.png" },
    { name: "Salted Caramel Stick", description: "Sweet and salty caramel treat", price: "$2.25", icon: "🍯", color: "#DAA520", image: "images/ice_cream_stick_saltedcaramel.png" }
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
    displayIceCreamSticks();
    setupEventListeners();
    setupSmoothScrolling();
    const cone = document.querySelector('.ice-cream-animation');
    if (cone) {
        const scoops = cone.querySelectorAll('.scoop');
        scoops.forEach((scoop, idx) => {
            // Click to pop off and reappear
            scoop.addEventListener('click', function() {
                scoop.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55), opacity 0.5s';
                scoop.style.transform = 'translateY(-120px) scale(1.3) rotate(-20deg)';
                scoop.style.opacity = '0';
                setTimeout(() => {
                    scoop.style.transform = '';
                    scoop.style.opacity = '1';
                }, 700);
            });
            // Fun hover effect
            scoop.addEventListener('mouseenter', function() {
                scoop.style.transition = 'transform 0.2s';
                scoop.style.transform = 'scale(1.08)';
                scoop.style.zIndex = 10;
            });
            scoop.addEventListener('mouseleave', function() {
                scoop.style.transform = '';
                scoop.style.zIndex = 2 + (2-idx); // restore stacking order
            });
        });
    }
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

// General modal for both flavors and sticks
function showIceCreamModal(item, cardElement) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.ice-cream-modal');
    if (existingModal) {
        existingModal.remove();
    }
    // Get card bounding rect for morph effect
    let cardRect = null;
    if (cardElement) {
        cardRect = cardElement.getBoundingClientRect();
    }
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'ice-cream-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 2rem;
        max-width: 90%;
        max-height: 90%;
        position: relative;
        transform: scale(0.7);
        transition: transform 0.3s ease;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        overflow: visible;
    `;
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s ease;
    `;
    closeBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0f0f0';
    });
    closeBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
    // Create image container with card-like gradient background
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        background: linear-gradient(45deg, ${item.color}, ${item.color}dd);
        border-radius: 15px;
        padding: 2rem 1.5rem 1.5rem 1.5rem;
        box-sizing: border-box;
        margin-bottom: 1.5rem;
        box-shadow: 0 5px 20px rgba(0,0,0,0.10);
        width: 100%;
        max-width: 400px;
        position: relative;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(.68,-0.55,.27,1.55);
    `;
    // Create image
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    image.style.cssText = `
        max-width: 100%;
        max-height: 50vh;
        object-fit: contain;
        border-radius: 10px;
        background: transparent;
        box-shadow: none;
        display: block;
    `;
    // Create item details
    const details = document.createElement('div');
    details.style.cssText = `
        text-align: center;
        margin-top: 1rem;
    `;
    details.innerHTML = `
        <h3 style="color: #333; margin-bottom: 0.5rem; font-size: 1.5rem;">${item.name}</h3>
        <p style="color: #666; margin-bottom: 0.5rem; font-size: 1rem;">${item.description || ''}</p>
        <div style="color: #ff6b6b; font-weight: bold; font-size: 1.3rem;">${item.price}</div>
        ${item.category ? `<div style='margin-top:0.5rem; color:#888; font-size:1rem;'>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>` : ''}
    `;
    // Assemble modal
    imageContainer.appendChild(image);
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(imageContainer);
    modalContent.appendChild(details);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    // Morph effect: set initial position/size to card, then animate to center
    if (cardRect) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        imageContainer.style.position = 'fixed';
        imageContainer.style.left = (cardRect.left + scrollLeft) + 'px';
        imageContainer.style.top = (cardRect.top + scrollTop) + 'px';
        imageContainer.style.width = cardRect.width + 'px';
        imageContainer.style.height = cardRect.height + 'px';
        imageContainer.style.marginBottom = '0';
        imageContainer.style.transform = 'none';
        imageContainer.style.zIndex = '10001';
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
            imageContainer.style.position = '';
            imageContainer.style.left = '';
            imageContainer.style.top = '';
            imageContainer.style.width = '';
            imageContainer.style.height = '';
            imageContainer.style.marginBottom = '1.5rem';
            imageContainer.style.zIndex = '';
        }, 10);
        imageContainer.addEventListener('transitionend', function handler() {
            imageContainer.style.position = '';
            imageContainer.style.left = '';
            imageContainer.style.top = '';
            imageContainer.style.width = '';
            imageContainer.style.height = '';
            imageContainer.style.marginBottom = '1.5rem';
            imageContainer.style.zIndex = '';
            imageContainer.removeEventListener('transitionend', handler);
        });
    } else {
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }, 10);
    }
    // Close functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        modalContent.style.transform = 'scale(0.7)';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    };
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Update createMenuItem to use the modal with morph effect
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.style.borderLeft = `4px solid ${item.color}`;
    // Use image if available, otherwise create a styled emoji placeholder
    const imageContent = item.image 
        ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 30%; border-radius: 10px;">`
        : `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white;">
            <span style="font-size: 3rem; margin-bottom: 0.5rem;">${item.icon}</span>
            <span style="font-size: 0.9rem; text-align: center; padding: 0 10px; opacity: 0.9;">${item.name}</span>
           </div>`;
    menuItem.innerHTML = `
        <div class="menu-item-image" style="background: linear-gradient(45deg, ${item.color}, ${item.color}dd);">
            ${imageContent}
        </div>
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-price">${item.price}</div>
            <span class="menu-item-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
        </div>
    `;
    // Add click animation and modal functionality
    menuItem.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        // Show modal with morph effect
        showIceCreamModal(item, menuItem);
    });
    return menuItem;
}

// Display ice cream sticks
function displayIceCreamSticks() {
    const sticksGrid = document.getElementById('sticksGrid');
    if (!sticksGrid) return;
    
    sticksGrid.innerHTML = '';
    
    iceCreamSticks.forEach(item => {
        const stickItem = createStickItem(item);
        sticksGrid.appendChild(stickItem);
    });
}

// Update createStickItem to use the general modal
function createStickItem(item) {
    const stickItem = document.createElement('div');
    stickItem.className = 'menu-item';
    stickItem.style.borderLeft = `4px solid ${item.color}`;
    const imagePosition = item.name.toLowerCase().includes('strawberry') ? 'center 5%' : 'center 20%';
    const imageContent = item.image 
        ? `<img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: ${imagePosition}; border-radius: 10px;">`
        : `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white;">
            <span style="font-size: 3rem; margin-bottom: 0.5rem;">${item.icon}</span>
            <span style="font-size: 0.9rem; text-align: center; padding: 0 10px; opacity: 0.9;">${item.name}</span>
           </div>`;
    stickItem.innerHTML = `
        <div class="menu-item-image" style="background: linear-gradient(45deg, ${item.color}, ${item.color}dd);">
            ${imageContent}
        </div>
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-description">${item.description}</p>
            <div class="menu-item-price">${item.price}</div>
            <span class="menu-item-category">Stick</span>
        </div>
    `;
    stickItem.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        showIceCreamModal(item, stickItem);
    });
    return stickItem;
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