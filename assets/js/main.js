document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navMenu = document.getElementById('navbar-default');

    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
    }
    
    // Optional: Close menu when a link is clicked (better UX for mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
             if (!navMenu.classList.contains('hidden')) {
                 navMenu.classList.add('hidden');
             }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch Data
    fetch('assets/data/club-data.json')
        .then(response => response.json())
        .then(data => {
            loadGallery(data.gallery);
            loadNews(data.news);
        })
        .catch(error => console.error('Error loading data:', error));
});

// 2. Gallery Logic (Auto-Sort & Render)
function loadGallery(images) {
    const grid = document.getElementById('gallery-grid');
    
    // Sort by date (Newest First)
    images.sort((a, b) => new Date(b.date) - new Date(a.date));

    grid.innerHTML = images.map(img => `
        <div class="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-800" 
             onclick="openLightbox('${img.image}', '${img.title}', '${img.description}', '${img.date}')">
            <img src="${img.image}" alt="${img.title}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-deep-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span class="text-white text-sm font-mono">${img.date}</span>
            </div>
        </div>
    `).join('');
}

// 3. News Logic
function loadNews(newsItems) {
    const feed = document.getElementById('news-feed');
    
    // Sort by date
    newsItems.sort((a, b) => new Date(b.date) - new Date(a.date));

    feed.innerHTML = newsItems.map(item => `
        <div class="mb-4 border-l-2 ${item.urgent ? 'border-red-500' : 'border-cyber-blue'} pl-3 pb-2">
            <span class="text-xs text-gray-500 block">[${item.date}]</span>
            <a href="${item.link}" class="text-gray-200 hover:text-cyber-blue transition-colors font-bold block">
                > ${item.title}
            </a>
        </div>
    `).join('');
}

// 4. Lightbox Logic
window.openLightbox = (img, title, desc, date) => {
    document.getElementById('lightbox-img').src = img;
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox-desc').innerText = desc;
    document.getElementById('lightbox-date').innerText = `LOG DATE: ${date}`;
    document.getElementById('lightbox').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

document.getElementById('lightbox-close').addEventListener('click', () => {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = 'auto';
});