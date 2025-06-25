# Scoops & Smiles - Ice Cream Store Website

A beautiful, responsive ice cream store website built with HTML, CSS, and JavaScript. Features a modern design with interactive menu filtering, smooth animations, and mobile-friendly navigation.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Menu**: Filter ice cream flavors by category (Classic, Premium, Vegan)
- **Smooth Animations**: CSS animations and JavaScript interactions for a polished user experience
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Form**: Functional contact form with validation
- **Newsletter Subscription**: Email subscription form
- **Modern UI**: Clean, modern design with ice cream themed colors and icons

## File Structure

```
Scoops_Web/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Navigate**: Use the navigation menu to explore different sections
3. **Browse Menu**: Click on filter buttons to view different ice cream categories
4. **Contact**: Fill out the contact form to send a message
5. **Subscribe**: Enter your email to subscribe to the newsletter

## Customization

### Adding New Ice Cream Flavors

To add new flavors to the menu, edit the `menuItems` array in `script.js`:

```javascript
{
    id: 13,
    name: "Your Flavor Name",
    description: "Description of the flavor",
    price: "$5.00",
    category: "classic", // or "premium", "vegan"
    icon: "🍦" // Choose an appropriate emoji
}
```

### Changing Colors

The website uses a custom color palette. To change colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    --accent-color: #ffe66d;
    --text-color: #2c3e50;
    --light-bg: #f8f9fa;
}
```

### Modifying Content

- **Store Information**: Update the contact details in the HTML
- **About Section**: Modify the story and features in the about section
- **Menu Items**: Add, remove, or modify ice cream flavors in the JavaScript file

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Poppins)

## Features in Detail

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active state indicators

### Hero Section
- Animated ice cream cone illustration
- Call-to-action button
- Parallax scrolling effect

### Menu Section
- Filterable menu with categories
- Hover animations on menu items
- Responsive grid layout
- Price and category indicators

### About Section
- Company story and features
- Animated feature cards
- Responsive layout

### Contact Section
- Contact information display
- Functional contact form
- Business hours and location

### Footer
- Social media links
- Newsletter subscription
- Quick navigation links

## Performance Optimizations

- Optimized images and icons
- Efficient CSS animations
- Minimal JavaScript footprint
- Responsive design for all screen sizes

## Future Enhancements

Potential features to add:
- Online ordering system
- Customer reviews section
- Photo gallery
- Blog section
- Online payment integration
- Loyalty program

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please refer to the code comments or create an issue in the repository.

---

**Enjoy your ice cream website! 🍦** 