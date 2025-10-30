function getBasePrefix() {
    return window.location.pathname.includes('/html/') ? '../' : '';
}

function renderCategory(category) {
    const games = (window.GAMES || []).filter(g => {
        // Check both the category field and the genres array
        const categoryMatch = g.category && g.category.toLowerCase() === category.toLowerCase();
        const genreMatch = g.genres && g.genres.some(genre => genre.toLowerCase() === category.toLowerCase());
        return categoryMatch || genreMatch;
    });
    const mount = document.getElementById('category-view');
    if (!mount) return;
    mount.innerHTML = '';

    const row = document.createElement('div');
    row.className = 'row g-4';

    const base = getBasePrefix();
    const linkBase = window.location.pathname.includes('/html/') ? './game.html' : 'html/game.html';

    games.forEach(game => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-lg-3';

        const a = document.createElement('a');
        a.href = `${linkBase}?slug=${encodeURIComponent(game.slug)}`;
        a.className = 'text-decoration-none text-reset d-block';

        const card = document.createElement('div');
        card.className = 'card game-tile h-100';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = base + game.image;
        img.alt = game.title;

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = game.title;
        cardBody.appendChild(title);

        card.appendChild(img);
        card.appendChild(cardBody);
        a.appendChild(card);
        col.appendChild(a);
        row.appendChild(col);
    });

    mount.appendChild(row);
    animateCardGrid();
}

function animateCardGrid() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined') return;
  const cards = document.querySelectorAll('.game-tile');
  gsap.fromTo(cards, {scale:0.94, opacity:0}, {scale:1, opacity:1, stagger:0.07, duration:0.41, ease:"power2.out"});
}

window.addEventListener('DOMContentLoaded', () => {
    const category = window.CATEGORY || (document.body && document.body.getAttribute('data-category')) || '';
    if (category) {
        renderCategory(category);
    }
});


