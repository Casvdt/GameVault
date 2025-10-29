// Minimal SPA: data + router + renderers

const games = [
    {
        slug: 'fortnite',
        title: 'Fortnite',
        image: 'game-images/fortnite.jpg',
        description: 'Battle royale with building mechanics and seasonal content.',
        genres: ['Action', 'Shooter'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Switch']
    },
    {
        slug: 'roblox',
        title: 'Roblox',
        image: 'game-images/roblox.jpg',
        description: 'User-generated games platform with endless experiences.',
        genres: ['Adventure', 'Social'],
        platforms: ['PC', 'Mobile', 'Xbox']
    },
    {
        slug: 'minecraft',
        title: 'Minecraft',
        image: 'game-images/minecraft.webp',
        description: 'Open-world sandbox for building, surviving and exploring.',
        genres: ['Sandbox', 'Survival'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile']
    },
    {
        slug: 'gtav',
        title: 'Grand Theft Auto V',
        image: 'game-images/GTAV.jpg',
        description: 'Sprawling open-world action in Los Santos and beyond.',
        genres: ['Action', 'Open World'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    }
];

function $(selector) {
    return document.querySelector(selector);
}

function renderGamesGrid() {
    const container = document.createElement('div');
    container.className = 'row g-4';

    games.forEach(game => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-lg-3';

        const link = document.createElement('a');
        link.href = `#/game/${game.slug}`;
        link.className = 'text-decoration-none text-reset d-block';

        const card = document.createElement('div');
        card.className = 'card h-100';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = game.image;
        img.alt = game.title;

        card.appendChild(img);
        link.appendChild(card);
        col.appendChild(link);
        container.appendChild(col);
    });

    return container;
}

function renderGameDetail(game) {
    const wrapper = document.createElement('div');
    wrapper.className = 'game-detail text-white';

    const back = document.createElement('button');
    back.className = 'btn btn-outline-light mb-3';
    back.textContent = '← Back to games';
    back.addEventListener('click', () => {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const row = document.createElement('div');
    row.className = 'row g-4 align-items-start';

    const imgCol = document.createElement('div');
    imgCol.className = 'col-12 col-md-6';
    const imgCard = document.createElement('div');
    imgCard.className = 'card';
    const img = document.createElement('img');
    img.src = game.image;
    img.alt = game.title;
    img.className = 'card-img-top';
    imgCard.appendChild(img);
    imgCol.appendChild(imgCard);

    const infoCol = document.createElement('div');
    infoCol.className = 'col-12 col-md-6';
    const title = document.createElement('h3');
    title.textContent = game.title;
    const desc = document.createElement('p');
    desc.className = 'mt-2';
    desc.textContent = game.description;
    const meta = document.createElement('div');
    meta.className = 'mt-3';
    meta.innerHTML = `
        <div><strong>Genres:</strong> ${game.genres.join(', ')}</div>
        <div><strong>Platforms:</strong> ${game.platforms.join(', ')}</div>
    `;

    infoCol.appendChild(title);
    infoCol.appendChild(desc);
    infoCol.appendChild(meta);

    row.appendChild(imgCol);
    row.appendChild(infoCol);

    wrapper.appendChild(back);
    wrapper.appendChild(row);
    return wrapper;
}

function findGameBySlug(slug) {
    return games.find(g => g.slug === slug);
}

function render() {
    const mount = document.getElementById('games-view');
    if (!mount) return;
    mount.innerHTML = '';

    const hash = window.location.hash || '';
    const match = hash.match(/^#\/game\/([^\/]+)$/);

    if (match) {
        const slug = match[1];
        const game = findGameBySlug(slug);
        if (game) {
            mount.appendChild(renderGameDetail(game));
        } else {
            const notice = document.createElement('div');
            notice.className = 'text-white';
            notice.textContent = 'Game not found.';
            mount.appendChild(notice);
        }
    } else {
        mount.appendChild(renderGamesGrid());
    }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);


