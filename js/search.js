function getGameLink(slug) {
    const inHtml = window.location.pathname.includes('/html/');
    return inHtml ? `./game.html?slug=${encodeURIComponent(slug)}` : `html/game.html?slug=${encodeURIComponent(slug)}`;
}

function normalize(str) {
    return (str || '').toString().trim().toLowerCase();
}

// Levenshtein distance for fuzzy matching
function levenshtein(a, b) {
    const s = normalize(a);
    const t = normalize(b);
    const m = s.length;
    const n = t.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = new Array(n + 1);
    for (let j = 0; j <= n; j++) dp[j] = j;
    for (let i = 1; i <= m; i++) {
        let prev = i - 1;
        dp[0] = i;
        for (let j = 1; j <= n; j++) {
            const temp = dp[j];
            const cost = s[i - 1] === t[j - 1] ? 0 : 1;
            dp[j] = Math.min(
                dp[j] + 1,      // deletion
                dp[j - 1] + 1,  // insertion
                prev + cost      // substitution
            );
            prev = temp;
        }
    }
    return dp[n];
}

function findGameByQuery(query) {
    const q = normalize(query);
    const list = (window.GAMES || []);
    if (!q || !list.length) return null;

    // Exact match by slug or title
    let game = list.find(g => normalize(g.slug) === q) || list.find(g => normalize(g.title) === q);
    if (game) return game;

    // Starts-with title match
    game = list.find(g => normalize(g.title).startsWith(q));
    if (game) return game;

    // Includes title match
    game = list.find(g => normalize(g.title).includes(q));
    if (game) return game;

    // Fuzzy match: pick the smallest distance among title and slug
    let best = null;
    let bestScore = Infinity;
    list.forEach(g => {
        const titleDist = levenshtein(q, g.title);
        const slugDist = levenshtein(q, g.slug);
        const score = Math.min(titleDist, slugDist);
        if (score < bestScore) {
            bestScore = score;
            best = g;
        }
    });
    return best;
}

function attachSearchHandlers() {
    document.querySelectorAll('form[role="search"]').forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const input = form.querySelector('input[type="search"], input[name="q"], input');
            const value = input ? input.value : '';
            const game = findGameByQuery(value);
            if (game) {
                window.location.href = getGameLink(game.slug);
            } else {
                alert('No matching game found');
            }
        });
    });
}

window.addEventListener('DOMContentLoaded', attachSearchHandlers);


