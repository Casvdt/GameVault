// Shared games data (usable from homepage, category pages, and detail page)
window.GAMES = [
    // Action Games
    {
        slug: 'spider-man-2',
        title: 'Marvel\'s Spider-Man 2',
        image: 'game-images/spider-man-2.jpg',
        description: 'Swing through New York as both Peter Parker and Miles Morales.',
        genres: ['Action', 'Open World'],
        category: 'Action',
        platforms: ['PlayStation 5']
    },
    {
        slug: 'star-wars-jedi-survivor',
        title: 'Star Wars Jedi: Survivor',
        image: 'game-images/jedi-survivor.jpg',
        description: 'Continue the journey of Cal Kestis in this action-adventure set in the Star Wars universe.',
        genres: ['Action', 'Adventure'],
        category: 'Action',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },
    {
        slug: 'fortnite',
        title: 'Fortnite',
        image: 'game-images/fortnite.jpg',
        description: 'Battle royale with building mechanics and seasonal content.',
        genres: ['Battle Royale', 'Shooter'],
        category: 'Shooter',
        platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile']
    },
    {
        slug: 'gtav',
        title: 'Grand Theft Auto V',
        image: 'game-images/GTAV.jpg',
        description: 'Sprawling open-world action in Los Santos and beyond.',
        genres: ['Action', 'Open World'],
        category: 'Action',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'elden-ring',
        title: 'Elden Ring',
        image: 'game-images/elden-ring.jpg',
        description: 'Dark fantasy action RPG with a procedurally generated world.',
        genres: ['Action', 'RPG'],
        category: 'Action',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Shooter Games
    {
        slug: 'call-of-duty-mw3',
        title: 'Call of Duty: Modern Warfare III',
        image: 'game-images/mw3-2023.jpg',
        description: 'The latest installment in the Call of Duty franchise with a new campaign and multiplayer.',
        genres: ['FPS', 'Action'],
        category: 'Shooter',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'PlayStation 4', 'Xbox One']
    },
    {
        slug: 'apex-legends',
        title: 'Apex Legends',
        image: 'game-images/apex-legends.jpg',
        description: 'Free-to-play battle royale hero shooter with unique characters.',
        genres: ['FPS', 'Battle Royale'],
        category: 'Shooter',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'PlayStation 4', 'Xbox One', 'Switch', 'Mobile']
    },
    {
        slug: 'valorant',
        title: 'Valorant',
        image: 'game-images/valorant.png',
        description: 'Tactical 5v5 shooter with unique agent abilities.',
        genres: ['FPS', 'Tactical'],
        category: 'Shooter',
        platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile']
    },
    {
        slug: 'csgo-2',
        title: 'Counter-Strike 2',
        image: 'game-images/csgo2.webp',
        description: 'Tactical first-person shooter with competitive gameplay.',
        genres: ['FPS', 'Tactical'],
        category: 'Shooter',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Adventure Games
    {
        slug: 'god-of-war-ragnarok',
        title: 'God of War: Ragnarök',
        image: 'game-images/god-of-war-ragnarok.jpg',
        description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers.',
        genres: ['Action', 'Adventure'],
        category: 'Adventure',
        platforms: ['PlayStation 5', 'PlayStation 4']
    },
    {
        slug: 'starfield',
        title: 'Starfield',
        image: 'game-images/starfield.jpg',
        description: 'Bethesda\'s next-generation role-playing game set in space.',
        genres: ['RPG', 'Open World'],
        category: 'Adventure',
        platforms: ['PC', 'Xbox Series X|S']
    },
    {
        slug: 'hogwarts-legacy',
        title: 'Hogwarts Legacy',
        image: 'game-images/hogwarts-legacy.png',
        description: 'Open-world RPG set in the wizarding world.',
        genres: ['RPG', 'Open World'],
        category: 'Adventure',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'zelda-tears',
        title: 'The Legend of Zelda: Tears of the Kingdom',
        image: 'game-images/zelda-tears.jpg',
        description: 'Epic adventure in the kingdom of Hyrule with new abilities.',
        genres: ['Action', 'Adventure'],
        category: 'Adventure',
        platforms: ['Nintendo Switch']
    },
    
    // RPG Games
    {
        slug: 'baldurs-gate-3',
        title: 'Baldur\'s Gate 3',
        image: 'game-images/baldurs-gate-3.jpg',
        description: 'Next-generation RPG set in the world of Dungeons & Dragons.',
        genres: ['RPG', 'Turn-Based'],
        category: 'RPG',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },
    {
        slug: 'final-fantasy-xvi',
        title: 'Final Fantasy XVI',
        image: 'game-images/ff16.jpg',
        description: 'The next mainline entry in the Final Fantasy series.',
        genres: ['RPG', 'Action'],
        category: 'RPG',
        platforms: ['PlayStation 5']
    },
    {
        slug: 'diablo-iv',
        title: 'Diablo IV',
        image: 'game-images/diablo-iv.jpg',
        description: 'The next installment in the critically acclaimed action RPG series.',
        genres: ['ARPG', 'Hack and Slash'],
        category: 'RPG',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'PlayStation 4', 'Xbox One']
    },
    {
        slug: 'cyberpunk-2077',
        title: 'Cyberpunk 2077',
        image: 'game-images/cyberpunk-2077.avif',
        description: 'Open-world RPG set in a neon-lit future.',
        genres: ['RPG', 'Open World'],
        category: 'RPG',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Sports Games
    {
        slug: 'madden-nfl-26',
        title: 'Madden NFL 26',
        image: 'game-images/madden-26.jpg',
        description: 'The latest in the long-running American football video game franchise with enhanced gameplay and graphics.',
        genres: ['Sports', 'Simulation'],
        category: 'Sports',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },
    {
        slug: 'ea-fc-26',
        title: 'EA Sports FC 26',
        image: 'game-images/eafc26.avif',
        description: 'The latest football simulation with improved gameplay and realism.',
        genres: ['Sports', 'Simulation'],
        category: 'Sports',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'PlayStation 4', 'Xbox One', 'Switch']
    },
    {
        slug: 'nba-2k26',
        title: 'NBA 2K26',
        image: 'game-images/nba-2k26.jpg',
        description: 'Basketball simulation with realistic gameplay.',
        genres: ['Sports', 'Simulation'],
        category: 'Sports',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Racing Games
    {
        slug: 'forza-motorsport',
        title: 'Forza Motorsport (2023)',
        image: 'game-images/forza-motorsport.jpg',
        description: 'The next generation of Forza Motorsport with advanced physics and graphics.',
        genres: ['Racing', 'Simulation'],
        category: 'Racing',
        platforms: ['PC', 'Xbox Series X|S']
    },
    {
        slug: 'gran-turismo-7',
        title: 'Gran Turismo 7',
        image: 'game-images/gran-turismo-7.jpg',
        description: 'The latest entry in the legendary racing simulator series.',
        genres: ['Racing', 'Simulation'],
        category: 'Racing',
        platforms: ['PlayStation 5', 'PlayStation 4']
    },
    {
        slug: 'forza-horizon-5',
        title: 'Forza Horizon 5',
        image: 'game-images/forza-horizon-5.jpg',
        description: 'Open-world racing game set in Mexico.',
        genres: ['Racing', 'Open World'],
        category: 'Racing',
        platforms: ['PC', 'Xbox']
    },
    {
        slug: 'f1-25',
        title: 'F1 25',
        image: 'game-images/f1-25.jpg',
        description: 'Official Formula 1 racing simulation.',
        genres: ['Racing', 'Simulation'],
        category: 'Racing',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Puzzle Games
    {
        slug: 'portal-2',
        title: 'Portal 2',
        image: 'game-images/portal-2.jpg',
        description: 'The sequel to the award-winning first-person puzzle game.',
        genres: ['Puzzle', 'First-Person'],
        category: 'Puzzle',
        platforms: ['PC', 'PlayStation 3', 'Xbox 360', 'Switch']
    },
    {
        slug: 'the-witness',
        title: 'The Witness',
        image: 'game-images/the-witness.jpg',
        description: 'A single-player puzzle game in an open world.',
        genres: ['Puzzle', 'Exploration'],
        category: 'Puzzle',
        platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Switch', 'iOS']
    },
    {
        slug: 'it-takes-two',
        title: 'It Takes Two',
        image: 'game-images/it-takes-two.jpg',
        description: 'Co-op adventure with innovative puzzle mechanics.',
        genres: ['Puzzle', 'Adventure'],
        category: 'Puzzle',
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'tetris-effect',
        title: 'Tetris Effect',
        image: 'game-images/tetris-effect.jpg',
        description: 'Classic Tetris with stunning visual effects.',
        genres: ['Puzzle', 'Arcade'],
        category: 'Puzzle',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },
    
    // Casual/Party Games
    {
        slug: 'fall-guys',
        title: 'Fall Guys',
        image: 'game-images/fall-guys.jpg',
        description: 'Battle royale party game with wacky obstacle courses.',
        genres: ['Party', 'Battle Royale'],
        category: 'Casual/Party',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },
    {
        slug: 'overcooked-2',
        title: 'Overcooked! 2',
        image: 'game-images/overcooked-2.jpg',
        description: 'Chaotic cooking simulation game for up to 4 players.',
        genres: ['Party', 'Simulation'],
        category: 'Casual/Party',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },
    {
        slug: 'mario-kart-8-deluxe',
        title: 'Mario Kart 8 Deluxe',
        image: 'game-images/mario-kart-8-deluxe.jpg',
        description: 'The definitive version of Mario Kart 8 with all DLC included.',
        genres: ['Racing', 'Party'],
        category: 'Casual/Party',
        platforms: ['Nintendo Switch']
    },
    {
        slug: 'among-us',
        title: 'Among Us',
        image: 'game-images/among-us.jpg',
        description: 'Social deduction game set in space with impostors.',
        genres: ['Social', 'Party'],
        category: 'Casual/Party',
        platforms: ['PC', 'Mobile', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X|S']
    },
    
    // Survival/Horror Games
    {
        slug: 'resident-evil-4-remake',
        title: 'Resident Evil 4 Remake',
        image: 'game-images/re4-remake.jpg',
        description: 'A reimagining of the survival horror classic with modern graphics and gameplay.',
        genres: ['Survival Horror', 'Action'],
        category: 'Survival/Horror',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },
    {
        slug: 'dead-space-remake',
        title: 'Dead Space Remake',
        image: 'game-images/dead-space.jpg',
        description: 'A complete remake of the sci-fi horror classic with stunning visuals.',
        genres: ['Survival Horror', 'Sci-Fi'],
        category: 'Survival/Horror',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },

    // Fighting Games
    {
        slug: 'street-fighter-6',
        title: 'Street Fighter 6',
        image: 'game-images/sf6.jpg',
        description: 'The latest entry in the legendary fighting game series.',
        genres: ['Fighting', 'Competitive'],
        category: 'Fighting',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },
    {
        slug: 'mortal-kombat-1',
        title: 'Mortal Kombat 1',
        image: 'game-images/mk1.jpg',
        description: 'The newest installment in the brutal fighting game franchise.',
        genres: ['Fighting', 'Gore'],
        category: 'Fighting',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },

    // MMORPG Games
    {
        slug: 'final-fantasy-xiv',
        title: 'Final Fantasy XIV: Endwalker',
        image: 'game-images/ff14.jpg',
        description: 'The critically acclaimed MMORPG with an expanded free trial.',
        genres: ['MMORPG', 'RPG'],
        category: 'MMORPG',
        platforms: ['PC', 'PlayStation 5']
    },

    // Roguelike/Roguelite Games
    {
        slug: 'hades-2',
        title: 'Hades II',
        image: 'game-images/hades-2.jpg',
        description: 'The god-like rogue-like dungeon crawler returns.',
        genres: ['Roguelike', 'Action'],
        category: 'Roguelike/Roguelite',
        platforms: ['PC', 'Nintendo Switch']
    },

    // Rhythm/Music Games
    {
        slug: 'hi-fi-rush',
        title: 'Hi-Fi RUSH',
        image: 'game-images/hifi-rush.jpg',
        description: 'A rhythm action game where everything moves to the music.',
        genres: ['Rhythm', 'Action'],
        category: 'Rhythm/Music',
        platforms: ['PC', 'Xbox Series X|S']
    },

    // Visual Novels
    {
        slug: 'danganronpa-decadence',
        title: 'Danganronpa Decadence',
        image: 'game-images/danganronpa.jpg',
        description: 'A collection of the murder mystery visual novels.',
        genres: ['Visual Novel', 'Mystery'],
        category: 'Visual Novels',
        platforms: ['Nintendo Switch']
    },

    // Metroidvania Games
    {
        slug: 'hollow-knight-silksong',
        title: 'Hollow Knight: Silksong',
        image: 'game-images/silksong.jpg',
        description: 'The highly anticipated sequel to Hollow Knight.',
        genres: ['Metroidvania', 'Platformer'],
        category: 'Metroidvania',
        platforms: ['PC', 'Nintendo Switch']
    },

    // Simulation/Strategy Games
    {
        slug: 'cities-skylines-2',
        title: 'Cities: Skylines II',
        image: 'game-images/cities-skylines-2.jpg',
        description: 'The next chapter in the award-winning city-building series.',
        genres: ['Simulation', 'City Builder'],
        category: 'Simulation/Strategy',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S']
    },
    {
        slug: 'total-war-warhammer-3',
        title: 'Total War: Warhammer III',
        image: 'game-images/tww3.jpg',
        description: 'The conclusion to the Total War: Warhammer trilogy.',
        genres: ['Strategy', 'Turn-Based'],
        category: 'Simulation/Strategy',
        platforms: ['PC', 'Linux', 'macOS']
    },
    {
        slug: 'stardew-valley',
        title: 'Stardew Valley',
        image: 'game-images/stardew-valley.jpg',
        description: 'Open-ended country-life RPG with farming, mining, and social elements.',
        genres: ['Simulation', 'RPG'],
        category: 'Simulation/Strategy',
        platforms: ['PC', 'PlayStation 4', 'Xbox One', 'Switch', 'Mobile']
    },
    {
        slug: 'minecraft',
        title: 'Minecraft',
        image: 'game-images/minecraft.webp',
        description: 'Open-world sandbox for building, surviving and exploring.',
        genres: ['Sandbox', 'Survival'],
        category: 'Simulation/Strategy',
        platforms: ['PC', 'PlayStation', 'Xbox', 'Switch', 'Mobile']
    },
    {
        slug: 'civilization-vii',
        title: 'Sid Meier\'s Civilization VII',
        image: 'game-images/civ7.jpg',
        description: 'Build an empire to stand the test of time.',
        genres: ['Strategy', 'Turn-Based'],
        category: 'Simulation/Strategy',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },
    
    // Indie Games
    {
        slug: 'hollow-knight',
        title: 'Hollow Knight',
        image: 'game-images/hollow-knight.jpg',
        description: 'A beautiful, hand-drawn action-adventure with a vast underground world.',
        genres: ['Metroidvania', 'Action'],
        category: 'Indie',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },
    {
        slug: 'stray',
        title: 'Stray',
        image: 'game-images/stray.jpg',
        description: 'Adventure game where you play as a cat in a cybercity.',
        genres: ['Adventure', 'Puzzle'],
        category: 'Indie',
        platforms: ['PC', 'PlayStation 5', 'PlayStation 4']
    },
    {
        slug: 'celeste',
        title: 'Celeste',
        image: 'game-images/celeste.jpg',
        description: 'A platformer about climbing a mountain and overcoming personal struggles.',
        genres: ['Platformer', 'Indie'],
        category: 'Indie',
        platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S', 'Nintendo Switch']
    },
    {
        slug: 'hades-2',
        title: 'Hades II',
        image: 'game-images/hades-2.jpg',
        description: 'Roguelike action game with Greek mythology themes.',
        genres: ['Action', 'Roguelike'],
        category: 'Indie',
        platforms: ['PC']
    }
];


