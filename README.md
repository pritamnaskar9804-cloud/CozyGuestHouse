# 🏨 Comfort Guest House - Premium Website

> **Designed & Developed by Pritam Naskar (Rehan'Z Digital Network)**

A stunning, premium luxury guest house website featuring cinematic design, glassmorphism effects, and smooth animations.

---

## ✨ Features

### 🎨 Design Excellence
- **Premium Color Palette** — Deep navy, gold accents, cyan glow
- **Glassmorphism Effects** — Frosted glass cards and overlays
- **Smooth Animations** — Fade-up, parallax, hover effects
- **Luxury Typography** — Playfair Display + Inter
- **Responsive Design** — Mobile, tablet, desktop optimized

### 📄 Complete Pages
1. **Home** — Hero with floating booking card, trust indicators
2. **Rooms** — Premium room listings with filters
3. **Room Details** — Gallery, amenities, booking
4. **About** — Story, team, timeline
5. **Services** — Amenities showcase
6. **Gallery** — Masonry image grid
7. **Booking** — Complete booking flow UI
8. **Contact** — Form, map, FAQ

### ⚡ Interactive Features
- Sticky glassmorphism navbar
- Animated counters
- Floating booking card
- WhatsApp integration
- Newsletter signup
- Toast notifications
- Smooth scrolling
- Mobile hamburger menu

---

## 📁 Project Structure

```
comfort-guest-house/
├── index.html              # Home page
├── about.html              # About page
├── rooms.html              # Room listings
├── room-details.html       # Single room view
├── services.html           # Services page
├── gallery.html            # Image gallery
├── booking.html            # Booking page
├── contact.html            # Contact page
│
├── css/
│   ├── style.css          # Main styles
│   ├── animations.css     # Animation effects
│   └── responsive.css     # Mobile/tablet styles
│
├── js/
│   ├── main.js            # Core functionality
│   ├── animations.js      # Scroll animations
│   └── booking.js         # Booking system
│
├── assets/
│   ├── images/            # Image assets
│   ├── icons/             # Icon files
│   └── videos/            # Video files
│
└── README.md              # Documentation
```

---

## 🚀 Quick Start

### 1. Extract Files
```bash
unzip comfort-guest-house.zip
cd comfort-guest-house
```

### 2. Open in Browser
Simply open `index.html` in your browser:
```bash
# On Mac
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### 3. Use Live Server (Recommended)
For best experience, use a local server:

**VS Code Extension:**
- Install "Live Server" extension
- Right-click `index.html`
- Select "Open with Live Server"

**Python:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js:**
```bash
npx http-server
# Visit http://localhost:8080
```

---

## 🌐 Deployment

### Option 1: Netlify (Easiest)

1. **Drag & Drop:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the entire folder
   - Site is live in seconds!

2. **GitHub Deploy:**
```bash
# Initialize repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Connect to Netlify
# - Go to netlify.com → New site from Git
# - Choose your repo
# - Deploy!
```

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Option 3: GitHub Pages

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages
# - Go to repository Settings
# - Pages section
# - Source: main branch
# - Save

# Live at: https://username.github.io/comfort-guest-house
```

### Option 4: Traditional Hosting

Upload via FTP to any web host:
- GoDaddy
- Bluehost
- HostGator
- SiteGround
- Any cPanel hosting

---

## 🎨 Customization

### Change Colors

Edit `css/style.css` (lines 10-30):

```css
:root {
    --navy-deep: #0a192f;      /* Primary dark */
    --gold-primary: #d4af37;   /* Gold accent */
    --cyan-primary: #00d4ff;   /* Cyan glow */
    --coral: #ff6b35;          /* Warm accent */
}
```

### Update Content

**Hotel Name:**
- Search for "Comfort Guest House" in all HTML files
- Replace with your hotel name

**Contact Info:**
- Edit footer section in HTML files
- Update phone, email, address

**Social Links:**
- Find social icons in footer
- Replace `#` with actual URLs

### Add Images

Replace Unsplash URLs with your own:
1. Upload images to `assets/images/`
2. Update `src` attributes in HTML
3. Use relative paths: `assets/images/your-image.jpg`

### Modify Rooms

Edit room cards in `rooms.html` and `index.html`:
- Change room names
- Update prices
- Modify amenities
- Add/remove rooms

---

## 📱 Responsive Breakpoints

```css
Desktop:   > 1024px
Tablet:    768px - 1024px
Mobile:    < 768px
Small:     < 480px
```

All pages are fully responsive!

---

## 🛠️ Technical Details

**Technologies:**
- HTML5
- CSS3 (Custom Properties)
- Vanilla JavaScript
- Google Fonts (Inter, Playfair Display)

**Browser Support:**
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

**Performance:**
- Optimized images (WebP recommended)
- Lazy loading ready
- Minimal JavaScript
- Fast load times

---

## 🎯 Features Breakdown

### Navbar
- Fixed position with glassmorphism
- Scrolled state with shadow
- Mobile hamburger menu
- Smooth transitions

### Hero Section
- Fullscreen background image
- Gradient overlay
- Animated text
- Floating booking card
- Scroll indicator

### Booking Card
- Check-in/out date pickers
- Guest selection
- Room type dropdown
- Availability checker

### Room Cards
- Image gallery
- Pricing display
- Amenities list
- Rating stars
- Hover effects
- Book now button

### Animations
- Fade-up on scroll
- Parallax effects
- Counter animations
- Tilt card effects
- Smooth transitions

---

## 💡 Tips & Best Practices

### Images
- **Recommended sizes:**
  - Hero: 1920x1080px
  - Rooms: 800x600px
  - Gallery: 600x400px
- **Format:** WebP or JPEG
- **Compression:** Use TinyPNG

### SEO
- Update meta descriptions
- Add alt tags to images
- Use semantic HTML
- Include schema markup

### Performance
- Compress images
- Minimize CSS/JS
- Enable caching
- Use CDN for assets

---

## 🎨 Color Palette

```
Navy Deep:    #0a192f
Navy Light:   #112240
Gold Primary: #d4af37
Gold Light:   #f0c674
Cyan Primary: #00d4ff
Coral:        #ff6b35
Cream:        #f8f9fa
Gray Mid:     #8892b0
```

---

## 📞 Support

For customization requests or issues:

**Developer:** Pritam Naskar  
**Brand:** Rehan'Z Digital Network  
**Email:** [Your email]  
**Portfolio:** [Your portfolio URL]

---

## 📄 License

This project is created as a premium portfolio piece.

**For Clients:** Full ownership and commercial rights upon delivery.

**For Developers:** Feel free to learn from the code structure. Please create unique designs.

---

## 🎉 Project Complete

**Status:** ✅ Production Ready  
**Pages:** 8 Complete Pages  
**Responsive:** Mobile, Tablet, Desktop  
**Animations:** Smooth & Professional  
**Design:** Premium Luxury  

**Built with ❤️ by Pritam Naskar (Rehan'Z Digital Network)**

---

*Experience luxury. Book your stay today!* 🏨✨
