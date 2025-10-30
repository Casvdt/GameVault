function getBasePrefix() {
    return window.location.pathname.includes('/html/') ? '../' : '';
}

function renderConsoleGames(consoleName) {
    const games = (window.GAMES || []).filter(g => g.platforms && g.platforms.includes(consoleName));
    const mount = document.getElementById('category-view');
    if (!mount) return;
    mount.innerHTML = '';

    const row = document.createElement('div');
    row.className = 'row g-4';

    const base = getBasePrefix();
    const linkBase = window.location.pathname.includes('/html/') ? 'game.html' : 'html/game.html';

    if (games.length === 0) {
        const col = document.createElement('div');
        col.className = 'col-12';
        col.innerHTML = '<p class="text-white">No games found for this platform.</p>';
        row.appendChild(col);
    } else {
        games.forEach(game => {
            const col = document.createElement('div');
            col.className = 'col-12 col-sm-6 col-lg-3';

            const a = document.createElement('a');
            a.href = `${linkBase}?slug=${encodeURIComponent(game.slug)}`;
            a.className = 'text-decoration-none text-reset d-block';

            const card = document.createElement('div');
            card.className = 'card h-100';

            // Img wrapper for mobile portrait/aspect CSS
            const imgContainer = document.createElement('div');
            imgContainer.className = 'card-img-container';
            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = base + game.image;
            img.alt = game.title;
            imgContainer.appendChild(img);

            card.appendChild(imgContainer);
            a.appendChild(card);
            col.appendChild(a);
            row.appendChild(col);
        });
    }

    mount.appendChild(row);
}

window.addEventListener('DOMContentLoaded', () => {
    const mount = document.getElementById('category-view');
    if (mount) {
        const consoleName = mount.getAttribute('data-console');
        if (consoleName) {
            renderConsoleGames(consoleName);
        }
    }
});
