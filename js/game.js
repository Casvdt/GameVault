function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

function getBasePrefix() {
    return window.location.pathname.includes('/html/') ? '../' : '';
}

function renderGameDetail(slug) {
    const mount = document.getElementById('game-view');
    if (!mount) return;
    mount.innerHTML = '';

    const game = (window.GAMES || []).find(g => g.slug === slug);
    if (!game) {
        const msg = document.createElement('div');
        msg.className = 'text-white';
        msg.textContent = 'Game not found';
        mount.appendChild(msg);
        return;
    }

    const base = getBasePrefix();

    const back = document.createElement('a');
    back.href = 'javascript:history.back()';
    back.className = 'btn btn-outline-light mb-3';
    back.textContent = '← Back';

    const row = document.createElement('div');
    row.className = 'row g-4 align-items-start';

    const imgCol = document.createElement('div');
    imgCol.className = 'col-12 col-md-6';
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = base + game.image;
    img.alt = game.title;
    card.appendChild(img);
    imgCol.appendChild(card);

    const infoCol = document.createElement('div');
    infoCol.className = 'col-12 col-md-6 text-white';
    const title = document.createElement('h2');
    title.textContent = game.title;
    const desc = document.createElement('p');
    desc.textContent = game.description;
    const meta = document.createElement('div');
    meta.innerHTML = `
        <div><strong>Genres:</strong> ${game.genres.join(', ')}</div>
        <div><strong>Platforms:</strong> ${game.platforms.join(', ')}</div>
    `;

    infoCol.appendChild(title);
    infoCol.appendChild(desc);
    infoCol.appendChild(meta);

    row.appendChild(imgCol);
    row.appendChild(infoCol);

    mount.appendChild(back);
    mount.appendChild(row);
}

window.addEventListener('DOMContentLoaded', () => {
    const slug = getQueryParam('slug');
    if (slug) renderGameDetail(slug);
});


