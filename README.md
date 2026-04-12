# Felix Muia - Professional Portfolio

A modern, responsive, and professional portfolio website for a Software Developer, AI Engineer, and Healthcare Systems Specialist.

## 🎨 Features

### Design Highlights
- **Modern & Professional**: Clean, minimalist design with strong typography
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and scroll animations
- **Accessibility**: Built with semantic HTML and keyboard navigation
- **Performance Optimized**: Fast loading, optimized CSS and JavaScript

### Sections Included
1. **Hero Section** - Eye-catching introduction with call-to-action
2. **About Me** - Professional background and specializations
3. **Technical Skills** - Categorized skill tags with icons
4. **Featured Projects** - Detailed case studies with technologies
5. **Experience Timeline** - Career progression and milestones
6. **Achievements** - Key accomplishments and contributions
7. **Contact Section** - Email form and social links
8. **Navigation** - Sticky navbar with smooth scrolling

## 🚀 Getting Started

### Quick Start
1. Extract or clone all files to a folder
2. Open `index.html` in a modern web browser
3. View the portfolio - no build process needed!

### File Structure
```
portfolio/
├── index.html       # Main HTML file (all content)
├── styles.css       # Complete styling (responsive design)
├── script.js        # Interactivity and animations
└── README.md        # This file
```

## ✏️ Customization Guide

### Basic Customization

#### 1. Change Your Name and Title
**File:** `index.html`
```html
<h1 class="hero-title">Your Name</h1>
<h2 class="hero-subtitle">Your Title | Your Specialty</h2>
```

#### 2. Add Your Photo
**Replace the placeholder:**
```html
<div class="hero-image-placeholder">
    <!-- Add your image here -->
    <img src="your-photo.jpg" alt="Profile photo" style="width: 100%; border-radius: 20px;">
</div>
```

#### 3. Update Contact Information
**File:** `index.html` - Contact Section
```html
<a href="mailto:your-email@example.com" class="contact-method">
    <i class="fas fa-envelope"></i>
    <span>your-email@example.com</span>
</a>
<a href="https://github.com/yourusername" target="_blank" class="contact-method">
    <i class="fab fa-github"></i>
    <span>GitHub</span>
</a>
```

#### 4. Modify Projects
**File:** `index.html` - Projects Section
```html
<div class="project-card">
    <div class="project-image">
        <div class="project-image-placeholder">
            <i class="fas fa-your-icon"></i>
        </div>
        <div class="project-badge">Your Category</div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description</p>
        <!-- Add more details -->
    </div>
</div>
```

#### 5. Update Skills
**File:** `index.html` - Skills Section
```html
<div class="skill-category">
    <h3 class="skill-category-title">
        <i class="fas fa-your-icon"></i> Your Skill Category
    </h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

### CSS Customization

#### Change Color Scheme
**File:** `styles.css` - Root Variables
```css
:root {
    --primary-color: #0066cc;      /* Main blue */
    --secondary-color: #00b4d8;    /* Light blue */
    --accent-color: #06d6a0;       /* Green accent */
    /* ... other colors ... */
}
```

**Common color schemes:**
- Tech: Blues & Purples
- Healthcare: Greens & Blues
- Creative: Vibrant Gradient

#### Adjust Spacing
```css
:root {
    --spacing-md: 1rem;    /* Base spacing */
    --spacing-lg: 2rem;    /* Larger spacing */
    --spacing-xl: 3rem;    /* Extra large */
}
```

#### Modify Typography
```css
.hero-title {
    font-size: 4rem;       /* Change size */
    font-family: 'Arial', sans-serif;  /* Change font */
}
```

## 🎯 Content Tips

### Hero Section
- Keep tagline under 100 characters
- Use action verbs in CTA buttons
- Include a professional headshot

### About Section
- Focus on specializations
- Highlight unique value proposition
- Use 2-3 paragraphs maximum

### Projects
- Include 3-5 best projects
- Describe the problem and solution
- List technologies used
- Add links to GitHub/Demo

### Skills
- Organize by category (Backend, Frontend, DevOps, etc.)
- Include proficiency level if desired
- List 15-25 skills total

## 🔗 Adding External Links

### GitHub Link
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
```

### LinkedIn
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

### Project Links
```html
<a href="https://github.com/yourrepo" class="project-link">
    <i class="fab fa-github"></i> Code
</a>
<a href="https://yourproject.com" class="project-link">
    <i class="fas fa-external-link-alt"></i> Live Demo
</a>
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full layout (1200px+)
- **Tablet**: Adjusted grid (768px - 1199px)
- **Mobile**: Single column (below 768px)

### Test Responsiveness
1. Open portfolio in browser
2. Press `F12` to open Developer Tools
3. Click responsive design mode (Ctrl+Shift+M)
4. Switch between device sizes

## 🔧 JavaScript Features

### Included Functionality
- ✅ Mobile menu toggle
- ✅ Smooth scrolling between sections
- ✅ Navbar highlighting on scroll
- ✅ Form validation
- ✅ Scroll animations
- ✅ Keyboard navigation
- ✅ Accessibility features

### Modify Form Behavior
**File:** `script.js`
```javascript
contactForm.addEventListener('submit', (e) => {
    // Customize form handling here
});
```

## 📊 Performance Optimization

### Already Implemented
- Minimal external dependencies (only Font Awesome icons)
- CSS animations using GPU acceleration
- Lazy loading support for images
- Optimized file sizes

### Further Optimization
1. Compress images (PNG/JPEG)
2. Minify CSS/JS for production
3. Use CDN for Font Awesome
4. Enable gzip compression on server

## 🚀 Deployment Options

### 1. GitHub Pages (Free)
```bash
1. Create GitHub account
2. Create repository named: yourusername.github.io
3. Push files to repository
4. Visit https://yourusername.github.io
```

### 2. Netlify (Recommended)
```bash
1. Go to netlify.com
2. Drag & drop your portfolio folder
3. Done! Get instant live URL
```

### 3. Vercel
```bash
1. Go to vercel.com
2. Import repository or upload files
3. Instant deployment
```

### 4. Traditional Hosting
1. Purchase web hosting
2. Upload files via FTP/SFTP
3. Visit your domain

## 🎨 Icon Resources

The portfolio uses [Font Awesome Icons](https://fontawesome.com/). Find icons by name:

- Healthcare: `fa-hospital`, `fa-stethoscope`, `fa-pills`
- Code: `fa-code`, `fa-code-branch`, `fa-github`
- Design: `fa-palette`, `fa-pen-fancy`
- AI/ML: `fa-brain`, `fa-robot`, `fa-chart-line`

Add icons with:
```html
<i class="fas fa-icon-name"></i>
```

## 🌐 SEO Optimization

### Add Meta Tags
**File:** `index.html` - Head section
```html
<meta name="description" content="Felix Muia - AI Engineer, Software Developer specializing in Healthcare Systems">
<meta name="keywords" content="AI, Healthcare, Software Developer, Healthcare Tech">
<meta name="author" content="Felix Muia">
```

### Add Google Analytics
```html
<!-- Add to <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_ID');
</script>
```

## ⚠️ Important Notes

1. **Browser Compatibility**: Works on all modern browsers (Chrome, Firefox, Safari, Edge)
2. **Email Form**: Currently shows success message but doesn't send email. To enable:
   - Use a service like Formspree, EmailJS, or Netlify Forms
   - Or set up a backend API endpoint

3. **Images**: Replace placeholder icons with actual project screenshots
4. **Social Links**: Update all social media URLs to your profiles

## 📧 Email Form Setup (Optional)

### Using Formspree
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- form fields -->
</form>
```

### Using EmailJS
```javascript
emailjs.init("YOUR_PUBLIC_KEY");

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', contactForm)
        .then(() => console.log('Success'))
        .catch(err => console.log('Error'));
});
```

## 🐛 Troubleshooting

### Navbar doesn't stick
- Check `position: sticky` in CSS
- Ensure parent container isn't `overflow: hidden`

### Animations not working
- Update browser (use Chrome 60+)
- Check CSS animations in console
- Verify JavaScript is enabled

### Form submission fails
- Check browser console for errors
- Verify form validation logic
- Test on different browsers

### Mobile menu doesn't toggle
- Check hamburger element exists
- Verify JavaScript loaded
- Clear browser cache

## 📚 Resources

- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design](https://web.dev/responsive-web-design-basics/)
- [Web Accessibility](https://www.w3.org/WAI/tips/getting-started/)

## 📄 License

This portfolio template is free to use and modify. Attribution appreciated but not required.

## 🤝 Support

For issues or questions:
1. Check the customization guide above
2. Review comments in HTML/CSS/JS files
3. Test in browser developer tools
4. Check web standards documentation

---

**Happy sharing your portfolio! 🚀**

Last Updated: April 2024
