// Smooth scroll behavior for navigation links
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle navigation active states
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Lazy load images for performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Add smooth reveal on scroll for post cards
    if ('IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        const cards = document.querySelectorAll('.post-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
    }
    
    // Security: Sanitize any user input if you add forms later
    // This is a helper function you can use
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key closes any open modals (if you add them later)
        if (e.key === 'Escape') {
            // Modal close logic here
        }
    });
    
    // Prevent XSS by ensuring external links open safely
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
        }
    });
    
    // Add loading state management for future dynamic content
    function showLoading() {
        // Add loading spinner logic here
    }
    
    function hideLoading() {
        // Remove loading spinner logic here
    }
    
    // Console message (optional - remove in production)
    console.log('%c✨ Blog loaded successfully!', 'color: #c17a5e; font-size: 14px; font-weight: bold;');
});

// Helper function for adding new posts dynamically
function createPostCard(post) {
    // Sanitize all inputs
    const title = post.title || '';
    const excerpt = post.excerpt || '';
    const category = post.category || 'Uncategorized';
    const date = post.date || new Date().toISOString().split('T')[0];
    const readTime = post.readTime || '5 min read';
    const imageUrl = post.imageUrl || '';
    const videoId = post.videoId || null;
    
    const article = document.createElement('article');
    article.className = 'post-card';
    
    let mediaHtml = '';
    if (videoId) {
        // YouTube embed with security attributes
        mediaHtml = `
            <div class="post-video">
                <iframe 
                    src="https://www.youtube.com/embed/${encodeURIComponent(videoId)}" 
                    title="YouTube video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-presentation">
                </iframe>
            </div>
        `;
    } else if (imageUrl) {
        mediaHtml = `
            <div class="post-image">
                <img src="${encodeURI(imageUrl)}" alt="Post thumbnail" loading="lazy">
            </div>
        `;
    }
    
    article.innerHTML = `
        ${mediaHtml}
        <div class="post-content">
            <span class="post-category">${escapeHtml(category)}</span>
            <h3 class="post-title">${escapeHtml(title)}</h3>
            <p class="post-excerpt">${escapeHtml(excerpt)}</p>
            <div class="post-meta">
                <time class="post-date" datetime="${date}">${formatDate(date)}</time>
                <span class="read-time">${escapeHtml(readTime)}</span>
            </div>
        </div>
    `;
    
    return article;
}

// Escape HTML to prevent XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Format date helper
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Example: Add a new post dynamically
// Uncomment to test adding posts programmatically
/*
const postsGrid = document.querySelector('.posts-grid');
const newPost = createPostCard({
    title: 'My New Blog Post',
    excerpt: 'This is a dynamically added post with proper security.',
    category: 'Updates',
    date: '2025-01-31',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600',
    // OR for video:
    // videoId: 'dQw4w9WgXcQ'
});
postsGrid.appendChild(newPost);
*/
