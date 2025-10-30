// Game loading functionality for category and platform pages
document.addEventListener('DOMContentLoaded', function() {
    const gamesContainer = document.getElementById('games-container');
    if (!gamesContainer) return;

    // Get the current category or platform from the URL or window.CATEGORY
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '').toLowerCase();
    const currentCategory = window.CATEGORY || '';
    
    // Check if we're on a category or platform page
    const isCategoryPage = document.querySelector('.categories-page') !== null;
    const isPlatformPage = document.querySelector('.platforms-page') !== null;

    // Filter games based on the current page
    let filteredGames = [];
    
    if (isCategoryPage && currentCategory) {
        filteredGames = window.GAMES.filter(game => {
            // Check if game has categories array and includes current category
            if (game.categories && Array.isArray(game.categories)) {
                return game.categories.some(cat => 
                    cat && cat.toLowerCase() === currentCategory.toLowerCase()
                );
            }
            // Fallback to single category for backward compatibility
            return game.category && game.category.toLowerCase() === currentCategory.toLowerCase();
        });
    } else if (isPlatformPage && currentCategory) {
        filteredGames = window.GAMES.filter(game => 
            game.platforms && game.platforms.some(platform => 
                platform && platform.toString().toLowerCase().includes(currentCategory.toLowerCase())
            )
        );
    } else {
        // Default to showing all games if we can't determine the page type
        filteredGames = [...window.GAMES];
    }

    // Display the filtered games
    if (filteredGames.length > 0) {
        const gamesGrid = createGamesGrid(filteredGames);
        gamesContainer.appendChild(gamesGrid);
    } else {
        gamesContainer.innerHTML = `
            <div class="col-12 text-center text-white py-5">
                <h3>No games found</h3>
                <p>There are no games available in this category or platform.</p>
                <a href="../index.html" class="btn btn-primary">Back to Home</a>
            </div>
        `;
    }
});

// Create a grid of game cards
function createGamesGrid(games) {
    const row = document.createElement('div');
    row.className = 'row g-4';

    games.forEach(game => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        
        // Create card container
        const card = document.createElement('div');
        card.className = 'card h-100 game-card';
        
        // Create image container with fixed aspect ratio
        const imgContainer = document.createElement('div');
        imgContainer.className = 'game-card-img-container';
        
        // Create image with proper styling
        const img = document.createElement('img');
        img.src = `../${game.image}`;
        img.alt = game.title;
        img.className = 'card-img-top game-card-img';
        img.loading = 'lazy';
        
        // Handle image load and error
        img.onload = function() {
            // If image is portrait, add a class to handle it differently
            if (this.naturalHeight > this.naturalWidth) {
                this.classList.add('portrait');
            }
        };
        img.onerror = function() {
            // If image fails to load, use a placeholder
            this.src = '../images/placeholder-game.jpg';
            this.alt = 'Image not available';
        };
        
        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';
        
        // Create title
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = game.title;
        
        // Create genres container
        const genresContainer = document.createElement('div');
        genresContainer.className = 'd-flex flex-wrap gap-1 mb-2';
        game.genres.forEach(genre => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-secondary';
            badge.textContent = genre;
            genresContainer.appendChild(badge);
        });
        
        // Create platforms container
        const platformsContainer = document.createElement('div');
        platformsContainer.className = 'd-flex flex-wrap gap-1 mt-auto';
        game.platforms.forEach(platform => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-primary';
            badge.textContent = platform;
            platformsContainer.appendChild(badge);
        });
        
        // Assemble the card
        imgContainer.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(genresContainer);
        cardBody.appendChild(platformsContainer);
        
        // Create link
        const link = document.createElement('a');
        link.href = `game.html?slug=${game.slug}`;
        link.className = 'text-decoration-none text-reset h-100 d-flex flex-column';
        link.appendChild(imgContainer);
        link.appendChild(cardBody);
        
        card.appendChild(link);
        col.appendChild(card);
        row.appendChild(col);
    });

    return row;
}

// Initialize search functionality
function initSearch() {
    const searchForm = document.querySelector('form[role="search"]');
    if (!searchForm) return;
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input[type="search"]');
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (!searchTerm) {
            // If search is empty, show all games
            const gamesContainer = document.getElementById('games-container');
            if (gamesContainer) {
                const allGames = window.GAMES.filter(game => {
                    if (window.CATEGORY) {
                        // Check categories array first, then fall back to single category
                        const hasCategory = game.categories 
                            ? game.categories.some(cat => cat.toLowerCase() === window.CATEGORY.toLowerCase())
                            : game.category && game.category.toLowerCase() === window.CATEGORY.toLowerCase();
                            
                        const hasPlatform = game.platforms && 
                            game.platforms.some(p => p.toLowerCase().includes(window.CATEGORY.toLowerCase()));
                            
                        return hasCategory || hasPlatform;
                    }
                    return true;
                });
                const gamesGrid = createGamesGrid(allGames);
                gamesContainer.innerHTML = '';
                gamesContainer.appendChild(gamesGrid);
            }
            return;
        }
        
        // First, check for exact title match
        const exactMatch = window.GAMES.find(game => 
            game.title.toLowerCase() === searchTerm.toLowerCase()
        );

        // If exact match found, redirect to game page
        if (exactMatch) {
            // Get the base URL (handles both local and production paths)
            const baseUrl = window.location.href.includes('html') ? '' : 'html/';
            window.location.href = `${baseUrl}game.html?slug=${exactMatch.slug}`;
            return;
        }

        // If no exact match, filter games based on search term across all games
        const filteredGames = window.GAMES.filter(game => {
            // Check if the game matches the search term
            const matchesSearch = game.title.toLowerCase().includes(searchTerm) ||
                                (game.genres && game.genres.some(g => g.toLowerCase().includes(searchTerm))) ||
                                (game.platforms && game.platforms.some(p => p.toLowerCase().includes(searchTerm))) ||
                                (game.categories && game.categories.some(c => c.toLowerCase().includes(searchTerm))) ||
                                (game.category && game.category.toLowerCase().includes(searchTerm));
            
            // If there's a search term, return all matching games regardless of current category
            if (searchTerm) {
                return matchesSearch;
            }
            
            // If no search term, filter by current category if one is set
            if (window.CATEGORY) {
                return (game.categories && game.categories.some(cat => 
                           cat.toLowerCase() === window.CATEGORY.toLowerCase())) ||
                       (game.category && game.category.toLowerCase() === window.CATEGORY.toLowerCase()) ||
                       (game.platforms && game.platforms.some(p => 
                           p.toLowerCase().includes(window.CATEGORY.toLowerCase())));
            }
            
            // If no search term and no category, show all games
            return true;
        });
        
        // Update the games grid
        const gamesContainer = document.getElementById('games-container');
        if (gamesContainer) {
            const gamesGrid = createGamesGrid(filteredGames);
            gamesContainer.innerHTML = '';
            gamesContainer.appendChild(gamesGrid);
            
            // Show message if no results
            if (filteredGames.length === 0) {
                const noResults = document.createElement('div');
                noResults.className = 'col-12 text-center text-white py-5';
                noResults.innerHTML = `
                    <h3>No games found</h3>
                    <p>No games match your search criteria.</p>
                    <button class="btn btn-primary clear-search">Clear search</button>
                `;
                gamesContainer.appendChild(noResults);
                
                // Add event listener to clear search button
                const clearButton = noResults.querySelector('.clear-search');
                if (clearButton) {
                    clearButton.addEventListener('click', function() {
                        searchInput.value = '';
                        const event = new Event('submit');
                        searchForm.dispatchEvent(event);
                    });
                }
            }
        }
    });
    
    // Trigger search when hitting enter in the search input
    const searchInput = searchForm.querySelector('input[type="search"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchForm.dispatchEvent(new Event('submit'));
            }
        });
    }
}

// Call initSearch when the DOM is loaded
document.addEventListener('DOMContentLoaded', initSearch);

// Handle game detail page
function loadGameDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameSlug = urlParams.get('slug');
    
    if (!gameSlug) return;
    
    const game = window.GAMES.find(g => g.slug === gameSlug);
    const gameDetailContainer = document.getElementById('game-detail');
    
    if (!game || !gameDetailContainer) return;
    
    // Update the page title
    document.title = `${game.title} - Game Vault`;
    
    // Create the game detail view
    gameDetailContainer.innerHTML = `
        <div class="row">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
                <img src="../${game.image}" class="img-fluid rounded" alt="${game.title}">
            </div>
            <div class="col-12 col-md-6">
                <h1 class="text-white mb-3">${game.title}</h1>
                <div class="mb-3">
                    <h5 class="text-white">Genres</h5>
                    <div class="d-flex flex-wrap gap-2">
                        ${game.genres.map(genre => `<span class="badge bg-secondary">${genre}</span>`).join(' ')}
                    </div>
                </div>
                <div class="mb-3">
                    <h5 class="text-white">Platforms</h5>
                    <div class="d-flex flex-wrap gap-2">
                        ${game.platforms.map(platform => `<span class="badge bg-primary">${platform}</span>`).join(' ')}
                    </div>
                </div>
                <div class="mb-3">
                    <h5 class="text-white">Description</h5>
                    <p class="text-white-50">${game.description}</p>
                </div>
                <a href="../index.html" class="btn btn-primary">
                    <i class="bi bi-arrow-left"></i> Back to Games
                </a>
            </div>
        </div>
    `;
}

// Export functions for use in other scripts
window.GameLoader = {
    loadGameDetail
};
