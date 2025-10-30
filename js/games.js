// Shared games data (usable from homepage, category pages, and detail page)
window.GAMES = [
    // Action Games
    {
        slug: 'roblox',
        title: 'Roblox',
        image: 'game-images/roblox.jpg',
        description: 'Roblox is a massive online platform where millions of players come together to imagine, create, and share 3D virtual worlds and experiences. With an intuitive game creation system, players can build anything from obstacle courses to role-playing games, then share their creations with a global community. The platform offers endless variety with games spanning multiple genres, from action-adventure and simulation to role-playing and tycoon games. Regular updates and a thriving community ensure there\'s always something new to discover, making it a favorite among players of all ages who enjoy creativity and social gaming experiences.',
        genres: ['Adventure', 'Social', 'Simulation'],
        categories: ['Adventure', 'Social', 'Simulation', 'Multiplayer', 'User-Generated', 'Free-to-Play', 'Sandbox', 'Cross-Platform'],
        platforms: ['PC', 'Mobile', 'Xbox', 'PlayStation']
    },
    {
        slug: 'spider-man-2',
        title: 'Marvel\'s Spider-Man 2',
        image: 'game-images/spider-man-2.jpg',
        description: 'In this highly anticipated sequel, players take on the dual roles of Peter Parker and Miles Morales as they navigate the challenges of being superheroes while balancing their personal lives. The game expands on the beloved web-swinging mechanics and combat system from its predecessors, introducing new abilities for both Spider-Men. The story delves deeper into the characters\' relationships and features a rogues\' gallery of iconic villains. The open-world New York City is more detailed than ever, with dynamic weather, improved graphics, and seamless transitions between the two playable characters. With an emotional narrative and thrilling set pieces, Spider-Man 2 delivers an unforgettable superhero experience.',
        genres: ['Action', 'Open World'],
        categories: ['Action', 'Adventure', 'Open World', 'Superhero'],
        platforms: ['PlayStation']
    },
    {
        slug: 'star-wars-jedi-survivor',
        title: 'Star Wars Jedi: Survivor',
        image: 'game-images/jedi-survivor.jpg',
        description: 'Continue the journey of Cal Kestis in this action-adventure set in the Star Wars universe.',
        genres: ['Action', 'Adventure'],
        categories: ['Action', 'Adventure', 'RPG', 'Sci-Fi'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'fortnite',
        title: 'Fortnite',
        image: 'game-images/fortnite.jpg',
        description: 'Battle royale with building mechanics and seasonal content.',
        genres: ['Battle Royale', 'Shooter'],
        categories: ['Shooter', 'Battle Royale', 'Multiplayer', 'Free-to-Play'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
    },
    {
        slug: 'gtav',
        title: 'Grand Theft Auto V',
        image: 'game-images/GTAV.jpg',
        description: 'Sprawling open-world action in Los Santos and beyond.',
        genres: ['Action', 'Open World'],
        categories: ['Action', 'Open World', 'Adventure', 'Crime', 'Multiplayer'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'elden-ring',
        title: 'Elden Ring',
        image: 'game-images/elden-ring.jpg',
        description: 'Dark fantasy action RPG with a procedurally generated world.',
        genres: ['Action', 'RPG'],
        categories: ['Action', 'RPG', 'Adventure', 'Open World', 'Souls-like', 'Fantasy'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Shooter Games
    {
        slug: 'call-of-duty-mw3',
        title: 'Call of Duty: Modern Warfare III',
        image: 'game-images/mw3-2023.jpg',
        description: 'The latest installment in the Call of Duty franchise with a new campaign and multiplayer.',
        genres: ['FPS', 'Action'],
        categories: ['Shooter', 'FPS', 'Action', 'Multiplayer', 'First-Person'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'apex-legends',
        title: 'Apex Legends',
        image: 'game-images/apex-legends.jpg',
        description: 'Free-to-play battle royale hero shooter with unique characters.',
        genres: ['FPS', 'Battle Royale'],
        categories: ['Shooter', 'FPS', 'Battle Royale', 'Multiplayer', 'Hero Shooter', 'Free-to-Play', 'Competitive'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
    },
    {
        slug: 'valorant',
        title: 'Valorant',
        image: 'game-images/valorant.png',
        description: 'Tactical 5v5 shooter with unique agent abilities.',
        genres: ['FPS', 'Tactical'],
        categories: ['Shooter', 'FPS', 'Tactical', 'Multiplayer', 'Competitive', 'Hero Shooter', 'Free-to-Play'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Mobile']
    },
    {
        slug: 'csgo-2',
        title: 'Counter-Strike 2',
        image: 'game-images/csgo2.webp',
        description: 'Tactical first-person shooter with competitive gameplay.',
        genres: ['FPS', 'Tactical'],
        categories: ['Shooter', 'FPS', 'Tactical', 'Multiplayer', 'Competitive', 'First-Person'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Adventure Games
    {
        slug: 'god-of-war-ragnarok',
        title: 'God of War: Ragnarök',
        image: 'game-images/god-of-war-ragnarok.jpg',
        description: 'Kratos and Atreus must journey to each of the Nine Realms in search of answers.',
        genres: ['Action', 'Adventure'],
        categories: ['Adventure', 'Action', 'RPG', 'Single Player', 'Story Rich', 'Open World', 'Fantasy', 'Mythology'],
        platforms: ['PlayStation', 'PC']
    },
    {
        slug: 'starfield',
        title: 'Starfield',
        image: 'game-images/starfield.jpg',
        description: 'Bethesda\'s next-generation role-playing game set in space.',
        genres: ['RPG', 'Open World'],
        categories: ['Adventure', 'RPG', 'Open World', 'Sci-Fi', 'Single Player', 'Space', 'Exploration', 'First-Person'],
        platforms: ['PC', 'Xbox']
    },
    {
        slug: 'hogwarts-legacy',
        title: 'Hogwarts Legacy',
        image: 'game-images/hogwarts-legacy.png',
        description: 'Open-world RPG set in the wizarding world.',
        genres: ['RPG', 'Open World'],
        categories: ['Adventure', 'RPG', 'Open World', 'Fantasy', 'Single Player', 'Story Rich', 'Magic', 'Hogwarts'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'zelda-tears',
        title: 'The Legend of Zelda: Tears of the Kingdom',
        image: 'game-images/zelda-tears.jpg',
        description: 'Epic adventure in the kingdom of Hyrule with new abilities.',
        genres: ['Action', 'Adventure'],
        categories: ['Adventure', 'Action', 'Open World', 'Fantasy', 'Single Player', 'Puzzle', 'Exploration', 'Nintendo'],
        platforms: ['Nintendo Switch']
    },
    
    // RPG Games
    {
        slug: 'baldurs-gate-3',
        title: 'Baldur\'s Gate 3',
        image: 'game-images/baldurs-gate-3.jpg',
        description: 'Next-generation RPG set in the world of Dungeons & Dragons.',
        genres: ['RPG', 'Turn-Based'],
        categories: ['RPG', 'Adventure', 'Turn-Based', 'Fantasy', 'Story Rich', 'Single Player', 'Co-op', 'D&D'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'final-fantasy-xvi',
        title: 'Final Fantasy XVI',
        image: 'game-images/ff16.jpg',
        description: 'The next mainline entry in the Final Fantasy series.',
        genres: ['RPG', 'Action'],
        categories: ['RPG', 'Action', 'Adventure', 'Fantasy', 'Story Rich', 'Single Player', 'JRPG', 'Square Enix'],
        platforms: ['PlayStation', 'PC']
    },
    {
        slug: 'diablo-iv',
        title: 'Diablo IV',
        image: 'game-images/diablo-iv.jpg',
        description: 'The next installment in the critically acclaimed action RPG series.',
        genres: ['ARPG', 'Hack and Slash'],
        categories: ['RPG', 'Action', 'Hack and Slash', 'Loot', 'Multiplayer', 'Co-op', 'Dark Fantasy', 'Dungeon Crawler'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'cyberpunk-2077',
        title: 'Cyberpunk 2077',
        image: 'game-images/cyberpunk-2077.avif',
        description: 'Open-world RPG set in a neon-lit future.',
        genres: ['RPG', 'Open World'],
        categories: ['RPG', 'Action', 'Open World', 'Cyberpunk', 'FPS', 'Story Rich', 'Single Player', 'Sci-Fi'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Cloud Gaming']
    },
    
    // Sports Games
    {
        slug: 'madden-nfl-26',
        title: 'Madden NFL 26',
        image: 'game-images/madden-26.jpg',
        description: 'The latest in the long-running American football video game franchise with enhanced gameplay and graphics.',
        genres: ['Sports', 'Simulation'],
        categories: ['Sports', 'Football', 'Simulation', 'Multiplayer', 'Sports Simulation', 'Competitive', 'Online Multiplayer', 'EA Sports'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'ea-fc-26',
        title: 'EA Sports FC 26',
        image: 'game-images/eafc26.avif',
        description: 'The latest football simulation with improved gameplay and realism.',
        genres: ['Sports', 'Simulation'],
        categories: ['Sports', 'Football', 'Simulation', 'Multiplayer', 'Sports Simulation', 'Competitive', 'Online Multiplayer', 'EA Sports'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'nba-2k26',
        title: 'NBA 2K26',
        image: 'game-images/nba-2k26.jpg',
        description: 'Basketball simulation with realistic gameplay.',
        genres: ['Sports', 'Simulation'],
        categories: ['Sports', 'Basketball', 'Simulation', 'Multiplayer', 'Sports Simulation', 'Competitive', 'Online Multiplayer', '2K Sports'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Racing Games
    {
        slug: 'forza-motorsport',
        title: 'Forza Motorsport (2023)',
        image: 'game-images/forza-motorsport.jpg',
        description: 'The next generation of Forza Motorsport with advanced physics and graphics.',
        genres: ['Racing', 'Simulation'],
        categories: ['Racing', 'Simulation', 'Driving', 'Multiplayer', 'Sports', 'Realistic', 'Competitive', 'Xbox Game Studios'],
        platforms: ['PC', 'Xbox']
    },
    {
        slug: 'gran-turismo-7',
        title: 'Gran Turismo 7',
        image: 'game-images/gran-turismo-7.jpg',
        description: 'The latest entry in the legendary racing simulator series.',
        genres: ['Racing', 'Simulation'],
        categories: ['Racing', 'Simulation', 'Driving', 'Sports', 'Realistic', 'Competitive', 'PlayStation Exclusive', 'Sony'],
        platforms: ['PlayStation']
    },
    {
        slug: 'forza-horizon-5',
        title: 'Forza Horizon 5',
        image: 'game-images/forza-horizon-5.jpg',
        description: 'Open-world racing game set in Mexico.',
        genres: ['Racing', 'Open World'],
        categories: ['Racing', 'Open World', 'Driving', 'Multiplayer', 'Sports', 'Arcade', 'Exploration', 'Xbox Game Studios'],
        platforms: ['PC', 'Xbox', 'Cloud Gaming']
    },
    {
        slug: 'f1-25',
        title: 'F1 25',
        image: 'game-images/f1-25.jpg',
        description: 'Official Formula 1 racing simulation.',
        genres: ['Racing', 'Simulation'],
        categories: ['Racing', 'Simulation', 'Sports', 'Formula 1', 'Multiplayer', 'Competitive', 'Realistic', 'EA Sports'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    
    // Puzzle Games
    {
        slug: 'the-witness',
        title: 'The Witness',
        image: 'game-images/the-witness.jpg',
        description: 'A single-player puzzle game in an open world.',
        genres: ['Puzzle', 'Exploration'],
        categories: ['Puzzle', 'Exploration', 'First-Person', 'Open World', 'Single Player', 'Indie', 'Brain Teaser', 'Atmospheric'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'iOS']
    },
    {
        slug: 'it-takes-two',
        title: 'It Takes Two',
        image: 'game-images/it-takes-two.jpg',
        description: 'Co-op adventure with innovative puzzle mechanics.',
        genres: ['Puzzle', 'Adventure'],
        categories: ['Puzzle', 'Adventure', 'Co-op', 'Multiplayer', 'Split Screen', 'Story Rich', 'Platformer', 'EA Originals'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'tetris-effect',
        title: 'Tetris Effect',
        image: 'game-images/tetris-effect.jpg',
        description: 'Classic Tetris with stunning visual effects.',
        genres: ['Puzzle', 'Arcade'],
        categories: ['Puzzle', 'Arcade', 'Music', 'Relaxing', 'Single Player', 'Multiplayer', 'VR', 'Rhythm'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    
    // Casual/Party Games
    {
        slug: 'fall-guys',
        title: 'Fall Guys',
        image: 'game-images/fall-guys.jpg',
        description: 'Battle royale party game with wacky obstacle courses.',
        genres: ['Party', 'Battle Royale'],
        categories: ['Casual', 'Party', 'Battle Royale', 'Multiplayer', 'Online Multiplayer', 'Competitive', 'Free-to-Play', 'Minigames'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'overcooked-2',
        title: 'Overcooked! 2',
        image: 'game-images/overcooked-2.jpg',
        description: 'Chaotic cooking simulation game for up to 4 players.',
        genres: ['Party', 'Simulation'],
        categories: ['Casual', 'Party', 'Simulation', 'Co-op', 'Multiplayer', 'Local Multiplayer', 'Cooking', 'Chaotic'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'mario-kart-8-deluxe',
        title: 'Mario Kart 8 Deluxe',
        image: 'game-images/mario-kart-8-deluxe.jpg',
        description: 'The definitive version of Mario Kart 8 with all DLC included.',
        genres: ['Racing', 'Party'],
        categories: ['Casual', 'Party', 'Racing', 'Multiplayer', 'Local Multiplayer', 'Family Friendly', 'Nintendo', 'Arcade'],
        platforms: ['Nintendo Switch']
    },
    {
        slug: 'among-us',
        title: 'Among Us',
        image: 'game-images/among-us.jpg',
        description: 'Social deduction game set in space with impostors.',
        genres: ['Social', 'Party'],
        categories: ['Casual', 'Party', 'Multiplayer', 'Online Multiplayer', 'Social Deduction', 'Indie'],
        platforms: ['PC', 'Mobile', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X|S']
    },
    
    // Survival/Horror Games
    {
        slug: 'resident-evil-4-remake',
        title: 'Resident Evil 4 Remake',
        image: 'game-images/re4-remake.jpg',
        description: 'A reimagining of the survival horror classic with modern graphics and gameplay.',
        genres: ['Survival Horror', 'Action'],
        categories: ['Survival/Horror', 'Action', 'Remake', 'Zombies', 'Third-Person'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'dead-space-remake',
        title: 'Dead Space Remake',
        image: 'game-images/dead-space.jpg',
        description: 'A complete remake of the sci-fi horror classic with stunning visuals.',
        genres: ['Survival Horror', 'Sci-Fi'],
        categories: ['Survival/Horror', 'Sci-Fi', 'Action', 'Remake', 'Space', 'Third-Person'],
        platforms: ['PC', 'PlayStation', 'Xbox']
    },
    {
        slug: 'alien-isolation',
        title: 'Alien: Isolation',
        image: 'game-images/alien-isolation.jpg',
        description: 'Survival horror set 15 years after the original Alien film.',
        genres: ['Survival Horror', 'Stealth'],
        categories: ['Survival/Horror', 'Sci-Fi', 'Stealth', 'First-Person', 'Atmospheric'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'phasmophobia',
        title: 'Phasmophobia',
        image: 'game-images/phasmophobia.jpg',
        description: 'Co-op psychological horror where you hunt ghosts with friends.',
        genres: ['Horror', 'Co-op'],
        categories: ['Survival/Horror', 'Multiplayer', 'Co-op', 'First-Person', 'Procedural Generation'],
        platforms: ['PC', 'PlayStation', 'Xbox']
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
        categories: ['Roguelike/Roguelite', 'Action', 'Dungeon Crawler', 'Greek Mythology', 'Single Player', 'Procedural Generation'],
        platforms: ['PC', 'Nintendo Switch']
    },
    {
        slug: 'dead-cells',
        title: 'Dead Cells',
        image: 'game-images/dead-cells.jpg',
        description: 'Rogue-lite, metroidvania inspired, action-platformer.',
        genres: ['Roguelike', 'Metroidvania', 'Action'],
        categories: ['Roguelike/Roguelite', 'Action', 'Platformer', 'Procedural Generation', 'Single Player', 'Difficult'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
    },
    {
        slug: 'returnal',
        title: 'Returnal',
        image: 'game-images/returnal.jpg',
        description: 'Third-person shooter roguelike with intense action and a haunting story.',
        genres: ['Roguelike', 'Third-Person Shooter'],
        categories: ['Roguelike/Roguelite', 'Action', 'Bullet Hell', 'Sci-Fi', 'Single Player', 'Psychological Horror'],
        platforms: ['PC', 'PlayStation']
    },
    {
        slug: 'slay-the-spire',
        title: 'Slay the Spire',
        image: 'game-images/slay-the-spire.jpg',
        description: 'Deck-building roguelike with strategic card battles.',
        genres: ['Roguelike', 'Deck-Building', 'Strategy'],
        categories: ['Roguelike/Roguelite', 'Card Game', 'Turn-Based', 'Single Player', 'Procedural Generation'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile']
    },

    // Rhythm/Music Games
    {
        slug: 'hi-fi-rush',
        title: 'Hi-Fi RUSH',
        image: 'game-images/hifi-rush.jpg',
        description: 'A rhythm action game where everything moves to the music.',
        genres: ['Rhythm', 'Action'],
        categories: ['Rhythm/Music', 'Action', 'Adventure', 'Single Player', 'Stylized', 'Music-Based'],
        platforms: ['PC', 'Xbox']
    },
    // VR/AR Games
    {
        slug: 'beat-saber',
        title: 'Beat Saber',
        image: 'game-images/beat-saber.jpg',
        description: 'A VR rhythm game where you slash the beats of adrenaline-pumping music. With its intuitive gameplay and growing library of songs, Beat Saber has become one of the most popular VR games. Custom song support and regular updates keep the experience fresh and engaging.',
        genres: ['Rhythm', 'VR', 'Music', 'Exercise'],
        categories: ['Rhythm/Music', 'VR/AR', 'Music-Based', 'Rhythm', 'Exercise', 'Party'],
        platforms: ['VR/AR', 'PC', 'PlayStation', 'Oculus']
    },
    {
        slug: 'half-life-alyx',
        title: 'Half-Life: Alyx',
        image: 'game-images/half-life-alyx.jpg',
        description: 'VR game set between the events of Half-Life and Half-Life 2. Experience the next generation of VR gaming with this groundbreaking title that sets a new standard for virtual reality experiences. With innovative physics-based interactions and immersive environments.',
        genres: ['FPS', 'VR', 'Sci-Fi', 'Action'],
        categories: ['Shooter', 'VR/AR', 'Sci-Fi', 'Single Player', 'Story Rich', 'First-Person'],
        platforms: ['VR/AR', 'PC']
    },
    {
        slug: 'superhot-vr',
        title: 'SUPERHOT VR',
        image: 'game-images/superhot-vr.jpg',
        description: 'The VR version of the award-winning first-person shooter where time moves only when you move. This innovative gameplay mechanic creates intense, strategic combat scenarios that feel like you\'re in an action movie.',
        genres: ['FPS', 'VR', 'Action', 'Puzzle'],
        categories: ['Shooter', 'VR/AR', 'Action', 'Puzzle', 'First-Person', 'Single Player'],
        platforms: ['VR/AR', 'PC', 'PlayStation']
    },
    {
        slug: 'osu',
        title: 'osu!',
        image: 'game-images/osu.jpg',
        description: 'Rhythm game where you click circles to the beat of the music.',
        genres: ['Rhythm', 'Music'],
        categories: ['Rhythm/Music', 'Free-to-Play', 'Music-Based', 'Multiplayer', 'Competitive'],
        platforms: ['PC', 'Mobile']
    },

    // Visual Novels
    {
        slug: 'danganronpa-decadence',
        title: 'Danganronpa Decadence',
        image: 'game-images/danganronpa.jpg',
        description: 'A collection of the murder mystery visual novels.',
        genres: ['Visual Novel', 'Mystery'],
        categories: ['Visual Novels', 'Murder Mystery', 'Anime', 'Story Rich', 'Multiple Endings'],
        platforms: ['PC', 'PlayStation', 'Nintendo Switch', 'Mobile']
    },
    {
        slug: 'doki-doki-literature-club-plus',
        title: 'Doki Doki Literature Club Plus!',
        image: 'game-images/ddlc-plus.jpg',
        description: 'Psychological horror disguised as a dating sim visual novel.',
        genres: ['Visual Novel', 'Horror', 'Psychological'],
        categories: ['Visual Novels', 'Psychological Horror', 'Dating Sim', 'Multiple Endings', 'Meta'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'steins-gate',
        title: 'Steins;Gate',
        image: 'game-images/steins-gate.jpg',
        description: 'Time travel visual novel with multiple endings.',
        genres: ['Visual Novel', 'Sci-Fi', 'Drama'],
        categories: ['Visual Novels', 'Sci-Fi', 'Time Travel', 'Anime', 'Multiple Endings', 'Story Rich'],
        platforms: ['PC', 'PlayStation', 'Nintendo Switch', 'Mobile']
    },
    {
        slug: 'the-house-in-fata-morgana',
        title: 'The House in Fata Morgana',
        image: 'game-images/fata-morgana.jpg',
        description: 'Gothic horror visual novel spanning nearly a millennium.',
        genres: ['Visual Novel', 'Horror', 'Drama'],
        categories: ['Visual Novels', 'Gothic', 'Horror', 'Tragedy', 'Story Rich', 'Multiple Endings'],
        platforms: ['PC', 'PlayStation', 'Nintendo Switch', 'Mobile']
    },

    // Metroidvania Games
    {
        slug: 'hollow-knight-silksong',
        title: 'Hollow Knight: Silksong',
        image: 'game-images/silksong.jpg',
        description: 'The highly anticipated sequel to Hollow Knight.',
        genres: ['Metroidvania', 'Platformer'],
        categories: ['Metroidvania', 'Platformer', 'Action-Adventure', 'Single Player', 'Hand-drawn', 'Souls-like'],
        platforms: ['PC', 'Nintendo Switch']
    },
    {
        slug: 'ori-and-the-will-of-the-wisps',
        title: 'Ori and the Will of the Wisps',
        image: 'game-images/ori-2.jpg',
        description: 'A beautiful, emotional journey through a stunning hand-painted world.',
        genres: ['Metroidvania', 'Platformer', 'Adventure'],
        categories: ['Metroidvania', 'Platformer', 'Adventure', 'Single Player', 'Hand-drawn', 'Emotional'],
        platforms: ['PC', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'blasphemous 2',
        title: 'Blasphemous 2',
        image: 'game-images/blasphemous-2.jpg',
        description: 'A brutal action-platformer with a dark fantasy setting.',
        genres: ['Metroidvania', 'Souls-like', 'Action'],
        categories: ['Metroidvania', 'Action', 'Souls-like', 'Pixel Graphics', 'Difficult', 'Dark Fantasy'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
    },
    {
        slug: 'bloodstained-ritual-of-the-night',
        title: 'Bloodstained: Ritual of the Night',
        image: 'game-images/bloodstained.jpg',
        description: 'A gothic, exploration-focused action RPG from the creator of Castlevania.',
        genres: ['Metroidvania', 'Action', 'RPG'],
        categories: ['Metroidvania', 'Action RPG', 'Gothic', 'Exploration', 'Single Player', 'Side Scroller'],
        platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch']
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
    }
];


