// Configuration des articles de blog
const blogPosts = [
    {
        title: "Les bienfaits de l'ostéopathie pour les sportifs",
        excerpt: "Découvrez comment l'ostéopathie peut améliorer vos performances sportives et prévenir les blessures.",
        date: "2025-10-09",
        author: "Test dev auteur",
        image: "./static/photo/sportif.jpg",
        file: "sportif.html"
    },
    {
        title: "L'ostéopathie pédiatrique : prendre soin des plus petits",
        excerpt: "Pourquoi consulter un ostéopathe pour votre bébé ? Les réponses à vos questions.",
        date: "2025-10-09",
        author: "Test dev auteur",
        image: "./static/photo/bebe.jpg",
        file: "pediatrie.html"
    },
    {
        title: "Mal de dos : quand consulter un ostéopathe ?",
        excerpt: "Comprendre les causes du mal de dos et comment l'ostéopathie peut vous soulager.",
        date: "2025-10-09",
        author: "Test dev auteur",
        image: "./static/photo/dos.jpg",
        file: "mal-de-dos.html"
    },
    {
        title: "Voyage sous la peau",
        excerpt: "Comportement du Fascia dans les différents système du corps",
        date: "2018-11-22",
        author: "Dr. GUIMBERTEAU",
        image: "./static/photo/guimberteau.jpg",
        file: "fascia.html"
    }
];

// Fonction pour formater la date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Générer les cartes de blog
function generateBlogCards() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="blog-image" style="background-image: url('${post.image}');"></div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${formatDate(post.date)}</span>
                    ${post.author ? `<span class="separator">·</span><span class="blog-author">${post.author}</span>` : ""}
                </div>
                <h2>${post.title}</h2>
                <p>${post.excerpt}</p>
                <a href="./blog/${post.file}" class="read-more">Lire l'article →</a>
            </div>
        `;
        
        // Make entire card clickable
        card.addEventListener('click', function(e) {
            // Prevent double navigation if clicking directly on the link
            if (e.target.tagName !== 'A') {
                window.location.href = `./blog/${post.file}`;
            }
        });
        
        blogGrid.appendChild(card);
    });
}

// Générer les liens dans le dropdown
function generateDropdownLinks() {
    const blogLinks = document.getElementById('blogLinks');
    if (!blogLinks) return;
    
    blogLinks.innerHTML = '';
    
    blogPosts.forEach(post => {
        const link = document.createElement('a');
        const isInBlogFolder = window.location.pathname.includes('/blog/');
        link.href = isInBlogFolder ? post.file : `./blog/${post.file}`;
        link.textContent = post.title;
        blogLinks.appendChild(link);
    });
}

// Initialiser le dropdown avec gestion des clics
function initDropdown() {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown) return;
    
    const dropdownButton = dropdown.querySelector('button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    if (!dropdownButton || !dropdownContent) return;
    
    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isVisible = dropdownContent.style.display === 'block';
        dropdownContent.style.display = isVisible ? 'none' : 'block';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdownContent.style.display = 'none';
        }
    });
    
    // Prevent dropdown from closing when clicking inside it
    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Initialiser la page
document.addEventListener('DOMContentLoaded', function() {
    generateBlogCards();
    generateDropdownLinks();
    initDropdown();
});