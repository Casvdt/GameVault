function getBasePrefix() {
    return window.location.pathname.includes('/html/') ? '../' : '';
}

function renderCategory(category) {
    const games = (window.GAMES || []).filter(g => g.category && g.category.toLowerCase() === category.toLowerCase());
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
        card.className = 'card h-100';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = base + game.image;
        img.alt = game.title;

        card.appendChild(img);
        a.appendChild(card);
        col.appendChild(a);
        row.appendChild(col);
    });

    mount.appendChild(row);
}

window.addEventListener('DOMContentLoaded', () => {
    const category = window.CATEGORY || (document.body && document.body.getAttribute('data-category')) || '';
    if (category) {
        renderCategory(category);
    }
});


