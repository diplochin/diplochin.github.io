# Personal Blog Website

A clean, modern, and secure personal blog website designed for GitHub Pages. Features editorial-style design, YouTube video embedding, and easy content management.

## Features

✨ **Beautiful Design**: Editorial-inspired layout with distinctive typography and smooth animations  
🎥 **Video Support**: Easy YouTube video embedding  
📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile  
⚡ **Fast Loading**: Optimized with lazy loading and efficient code  
🔒 **Security-Focused**: Built with XSS prevention and secure practices  
♿ **Accessible**: ARIA labels and keyboard navigation support  

## Quick Start

### 1. Set Up GitHub Pages

1. Create a new repository on GitHub (e.g., `yourusername.github.io`)
2. Upload these files to your repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

3. Go to **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io`

### 2. Customize Your Site

<h2 class="featured-title">Welcome to My Blog</h2>
   <p class="featured-excerpt">This is where I share my thoughts...</p>

Open `index.html` and edit:

```html
<!-- Line 20: Change site title -->
<h1 class="site-title">Diplochin</h1>

<!-- Line 87: Update footer -->
<p>&copy; 2025 Chineme. All rights reserved.</p>
```

#### Update Social Links

```html
<a href="https://x.com/ChinemeValerie" class="social-link">X</a>
<a href="https://soundcloud.com/chin_eme_ene" class="social-link">Soundcloud</a>
<a href="https://www.linkedin.com/in/cvene/" class="social-link">LinkedIn</a>
```

## Adding New Blog Posts

### Adding a Regular Post with Image

Copy this template and paste it inside the `<section class="posts-grid">` section:

```html
<article class="post-card">
    <div class="post-image">
        <img src="YOUR_IMAGE_URL" alt="Post description" loading="lazy">
    </div>
    <div class="post-content">
        <span class="post-category">Your Category</span>
        <h3 class="post-title">Your Post Title</h3>
        <p class="post-excerpt">A brief description of your post that entices readers to learn more.</p>
        <div class="post-meta">
            <time class="post-date" datetime="2025-01-31">January 31, 2025</time>
            <span class="read-time">5 min read</span>
        </div>
    </div>
</article>
```

### Adding a Video Post (YouTube)

```html
<article class="post-card">
    <div class="post-video">
        <iframe 
            src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
            title="YouTube video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            loading="lazy">
        </iframe>
    </div>
    <div class="post-content">
        <span class="post-category">Video</span>
        <h3 class="post-title">Your Video Post Title</h3>
        <p class="post-excerpt">Description of your video content.</p>
        <div class="post-meta">
            <time class="post-date" datetime="2025-01-31">January 31, 2025</time>
            <span class="read-time">10 min watch</span>
        </div>
    </div>
</article>
```

**To get the YouTube Video ID:**
1. Go to your YouTube video
2. Copy the URL (e.g., `https://www.youtube.com/watch?v=7sxVHYZ_PnA`)
3. The video ID is everything after `v=` (in this case: `=7sxVHYZ_PnA`)
4. Replace `VIDEO_ID_HERE` with your video ID

## Finding Free Images

Use these sources for high-quality, free images:

- **Unsplash**: https://unsplash.com (free, no attribution required)
- **Pexels**: https://pexels.com (free, no attribution required)
- **Pixabay**: https://pixabay.com (free, no attribution required)

Right-click on any image → "Copy image address" → paste as `src` value.

## Customizing Colors

Edit the color variables in `styles.css` (lines 1-9):

```css
:root {
    --color-bg: #fafaf8;          /* Background color */
    --color-text: #1a1a1a;        /* Main text color */
    --color-text-light: #666666;  /* Secondary text */
    --color-accent: #c17a5e;      /* Accent color (links, highlights) */
    --color-accent-dark: #9d5f47; /* Darker accent */
    --color-border: #e5e5e0;      /* Border color */
    --color-card-bg: #ffffff;     /* Card background */
}
```

## Customizing Typography

To change fonts, edit line 14 in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_HERE&display=swap" rel="stylesheet">
```

Browse fonts at [Google Fonts](https://fonts.google.com).

Then update in `styles.css`:

```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

## Security Features

This website includes several security best practices:

- ✅ XSS (Cross-Site Scripting) prevention through input sanitization
- ✅ Safe external link handling with `rel="noopener noreferrer"`
- ✅ YouTube embeds with sandbox attributes
- ✅ No inline JavaScript (separated into external file)
- ✅ Content Security Policy ready (add to hosting config if needed)

## Performance Optimizations

- Lazy loading for images and iframes
- Optimized animations with GPU acceleration
- Minimal CSS and JavaScript
- Responsive images with proper sizing
- Font preloading for faster text rendering

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## Troubleshooting

**Images not loading?**
- Make sure image URLs are complete (starting with `https://`)
- Check if the image URL is publicly accessible
- Try using Unsplash or Pexels URLs

**YouTube videos not showing?**
- Verify you're using the correct video ID
- Ensure the video is not private or restricted
- Check if embeds are enabled for that video

**Site not updating on GitHub Pages?**
- Changes can take 1-5 minutes to appear
- Try clearing your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab for build status

## License

Free to use for personal projects. Built with modern web standards.

## Support

For questions or issues:
1. Check this README
2. Review the code comments in the files
3. Test changes locally before pushing to GitHub
4. Open an issue on GitHub if you need help

---

**Ready to publish?** Just commit and push your changes to GitHub, and your site will automatically update!
