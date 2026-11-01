/* data.js - the AniOrbit catalogue .
   Summaries are written in our own words. "score" and "votes" are fictional
   AniOrbit community figures for this academic project, not real-world ratings.
   Posters live in images/posters/. "posterW" is the poster's width in pixels and
   means a 300 px copy named <poster>-300.webp also exists for small screens.
   Titles without a poster fall back to a generated "orbit" poster. */
window.AniOrbit = window.AniOrbit || {};

AniOrbit.moods = {
  "pumped": {
    "label": "Pumped up",
    "blurb": "High-energy fights and big moments."
  },
  "cozy": {
    "label": "Cozy and calm",
    "blurb": "Gentle, comforting, easy to sink into."
  },
  "mindbending": {
    "label": "Mind-bending",
    "blurb": "Twists, puzzles and theories to chew on."
  },
  "heartfelt": {
    "label": "Heartfelt",
    "blurb": "Stories that stay with you."
  },
  "laugh": {
    "label": "Need a laugh",
    "blurb": "Comedy first, plot second."
  }
};

AniOrbit.anime = [
 {
  "id": "naruto",
  "title": "Naruto",
  "year": 2002,
  "studio": "Studio Pierrot",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "episodes": "220 episodes",
  "score": 8.3,
  "moods": [
   "pumped",
   "heartfelt"
  ],
  "hue": 28,
  "poster": "naruto.webp",
  "posterW": 600,
  "blurb": "An outcast ninja with a sealed beast inside him chases his dream of leading his village.",
  "type": "TV series",
  "votes": 24600,
  "plot": "Naruto Uzumaki is a loud, mischievous ninja-in-training shunned by his village because of the creature sealed inside him. He sets out to earn everyone's respect and become Hokage, building bonds with teammates and rivals along the way.",
  "characters": [
   {
    "name": "Naruto Uzumaki",
    "role": "Energetic young ninja who dreams of becoming Hokage"
   },
   {
    "name": "Sasuke Uchiha",
    "role": "Gifted teammate and rival driven by revenge"
   },
   {
    "name": "Sakura Haruno",
    "role": "Teammate who grows into a skilled medical ninja"
   },
   {
    "name": "Kakashi Hatake",
    "role": "The teacher who leads their team"
   }
  ]
 },
 {
  "id": "one-piece",
  "title": "One Piece",
  "year": 1999,
  "studio": "Toei Animation",
  "genres": [
   "Action",
   "Fantasy",
   "Comedy"
  ],
  "episodes": "1,000+ episodes",
  "score": 8.7,
  "moods": [
   "pumped",
   "laugh"
  ],
  "hue": 355,
  "poster": "one-piece.webp",
  "blurb": "A rubber-bodied pirate and his crew sail the Grand Line in search of the ultimate treasure.",
  "type": "TV series",
  "votes": 21400,
  "plot": "Monkey D. Luffy ate a fruit that made his body rubber and now sails the seas to find the legendary treasure known as One Piece. Along the way he gathers a loyal crew and clashes with pirates, marines and tyrants.",
  "characters": [
   {
    "name": "Monkey D. Luffy",
    "role": "Rubber-bodied captain of the Straw Hat Pirates"
   },
   {
    "name": "Roronoa Zoro",
    "role": "The crew's three-sword swordsman"
   },
   {
    "name": "Nami",
    "role": "Navigator with a talent for maps and weather"
   },
   {
    "name": "Sanji",
    "role": "Cook who fights with powerful kicks"
   }
  ]
 },
 {
  "id": "bleach",
  "title": "Bleach",
  "year": 2004,
  "studio": "Studio Pierrot",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "episodes": "366 episodes",
  "score": 8,
  "moods": [
   "pumped"
  ],
  "hue": 22,
  "poster": "bleach.webp",
  "posterW": 600,
  "blurb": "A teen who can see ghosts becomes a Soul Reaper and defends the living from hostile spirits.",
  "type": "TV series",
  "votes": 14100,
  "plot": "Ichigo Kurosaki can see ghosts, and when he meets a Soul Reaper he ends up taking her powers. He must now protect the living from Hollows and uncover the wider world of the Soul Society.",
  "characters": [
   {
    "name": "Ichigo Kurosaki",
    "role": "Teenager who becomes a substitute Soul Reaper"
   },
   {
    "name": "Rukia Kuchiki",
    "role": "Soul Reaper who passes her powers to Ichigo"
   },
   {
    "name": "Orihime Inoue",
    "role": "Kind classmate with a unique healing ability"
   },
   {
    "name": "Uryu Ishida",
    "role": "Archer from a family of Quincy"
   }
  ]
 },
 {
  "id": "fmab",
  "title": "Fullmetal Alchemist: Brotherhood",
  "year": 2009,
  "studio": "Bones",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "episodes": "64 episodes",
  "score": 9.1,
  "moods": [
   "pumped",
   "heartfelt"
  ],
  "hue": 12,
  "poster": "fmab.webp",
  "posterW": 600,
  "blurb": "Two brothers use alchemy in a quest to restore what a failed ritual took from them.",
  "type": "TV series",
  "votes": 27500,
  "plot": "After a forbidden alchemy ritual goes wrong, brothers Edward and Alphonse Elric search for the Philosopher's Stone to restore their bodies. Their journey pulls them into a conspiracy at the heart of their country.",
  "characters": [
   {
    "name": "Edward Elric",
    "role": "Young State Alchemist searching for a way to restore his brother"
   },
   {
    "name": "Alphonse Elric",
    "role": "Edward's younger brother, whose soul is bound to a suit of armour"
   },
   {
    "name": "Roy Mustang",
    "role": "Ambitious Flame Alchemist in the military"
   },
   {
    "name": "Winry Rockbell",
    "role": "Mechanic who builds Edward's automail"
   }
  ]
 },
 {
  "id": "death-note",
  "title": "Death Note",
  "year": 2006,
  "studio": "Madhouse",
  "genres": [
   "Mystery"
  ],
  "episodes": "37 episodes",
  "score": 8.6,
  "moods": [
   "mindbending"
  ],
  "hue": 270,
  "poster": "death-note.webp",
  "posterW": 600,
  "blurb": "A student finds a notebook that kills anyone whose name is written in it, and a genius detective gives chase.",
  "type": "TV series",
  "votes": 31200,
  "plot": "High-school student Light Yagami finds a notebook that can kill anyone whose name is written in it. As he starts to cleanse the world in secret, the enigmatic detective L begins to close in.",
  "characters": [
   {
    "name": "Light Yagami",
    "role": "Brilliant student who finds the Death Note"
   },
   {
    "name": "L",
    "role": "Eccentric genius detective on the case"
   },
   {
    "name": "Ryuk",
    "role": "Shinigami who dropped the notebook into the human world"
   },
   {
    "name": "Misa Amane",
    "role": "Devoted follower with her own Death Note power"
   }
  ]
 },
 {
  "id": "attack-on-titan",
  "title": "Attack on Titan",
  "year": 2013,
  "studio": "Wit Studio and MAPPA",
  "genres": [
   "Action",
   "Mystery",
   "Fantasy"
  ],
  "episodes": "4 seasons",
  "score": 9,
  "moods": [
   "mindbending",
   "pumped"
  ],
  "hue": 150,
  "poster": "attack-on-titan.webp",
  "posterW": 600,
  "blurb": "Humanity hides behind giant walls from man-eating Titans until the walls fall.",
  "type": "TV series",
  "votes": 29800,
  "plot": "Humanity survives behind enormous walls until a colossal Titan breaks through and changes everything. Eren Yeager joins the fight to reclaim the world and soon learns the truth behind the Titans.",
  "characters": [
   {
    "name": "Eren Yeager",
    "role": "Determined young soldier driven by loss"
   },
   {
    "name": "Mikasa Ackerman",
    "role": "Elite fighter fiercely loyal to Eren"
   },
   {
    "name": "Armin Arlert",
    "role": "Strategist who thinks his way out of danger"
   },
   {
    "name": "Levi Ackerman",
    "role": "Humanity's strongest soldier"
   }
  ]
 },
 {
  "id": "your-name",
  "title": "Your Name",
  "year": 2016,
  "studio": "CoMix Wave Films",
  "genres": [
   "Romance",
   "Fantasy"
  ],
  "episodes": "Film, 106 min",
  "score": 8.8,
  "moods": [
   "heartfelt"
  ],
  "hue": 330,
  "poster": "your-name.webp",
  "blurb": "Two strangers mysteriously swap bodies and slowly connect across distance and time.",
  "type": "Film",
  "votes": 15600,
  "plot": "Mitsuha lives in a quiet mountain town and Taki lives in busy Tokyo, yet they begin swapping bodies at random. As they learn about each other's lives, they uncover a mystery tied to a comet.",
  "characters": [
   {
    "name": "Mitsuha Miyamizu",
    "role": "Small-town student who longs for the city"
   },
   {
    "name": "Taki Tachibana",
    "role": "Tokyo student who finds himself in Mitsuha's life"
   }
  ]
 },
 {
  "id": "spy-x-family",
  "title": "Spy x Family",
  "year": 2022,
  "studio": "Wit Studio and CloverWorks",
  "genres": [
   "Comedy",
   "Action"
  ],
  "episodes": "Season 1: 25 episodes",
  "score": 8.5,
  "moods": [
   "laugh",
   "cozy"
  ],
  "hue": 340,
  "poster": "spy-x-family.webp",
  "posterW": 600,
  "blurb": "A spy, an assassin and a telepath pose as an ordinary family to keep a secret mission alive.",
  "type": "TV series",
  "votes": 13800,
  "plot": "Spy Twilight needs a family to get close to a target, so he adopts a child and marries a stranger. He does not know his daughter can read minds or that his wife is an assassin.",
  "characters": [
   {
    "name": "Anya Forger",
    "role": "Cheerful telepath who loves peanuts"
   },
   {
    "name": "Loid Forger",
    "role": "Master spy known as Twilight"
   },
   {
    "name": "Yor Forger",
    "role": "Quiet clerk who is secretly a skilled assassin"
   },
   {
    "name": "Bond Forger",
    "role": "The family's gentle, future-seeing dog"
   }
  ]
 },
 {
  "id": "demon-slayer",
  "title": "Demon Slayer",
  "year": 2019,
  "studio": "ufotable",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "episodes": "Season 1: 26 episodes",
  "score": 8.6,
  "moods": [
   "pumped",
   "heartfelt"
  ],
  "hue": 160,
  "poster": "demon-slayer.webp",
  "posterW": 600,
  "blurb": "A kind-hearted boy trains as a demon slayer to find a cure for his sister.",
  "type": "TV series",
  "votes": 19700,
  "plot": "When demons attack his family, Tanjiro Kamado is left with a sister who has turned into one. He trains to become a demon slayer, hoping to find a cure and stop others suffering the same fate.",
  "characters": [
   {
    "name": "Tanjiro Kamado",
    "role": "Kind-hearted boy with a powerful sense of smell"
   },
   {
    "name": "Nezuko Kamado",
    "role": "His sister, now a demon who protects humans"
   },
   {
    "name": "Zenitsu Agatsuma",
    "role": "Nervous swordsman who is deadly when asleep"
   },
   {
    "name": "Inosuke Hashibira",
    "role": "Wild fighter who wears a boar mask"
   }
  ]
 },
 {
  "id": "my-hero-academia",
  "title": "My Hero Academia",
  "year": 2016,
  "studio": "Bones",
  "genres": [
   "Action"
  ],
  "episodes": "Multiple seasons",
  "score": 8,
  "moods": [
   "pumped"
  ],
  "hue": 130,
  "poster": "my-hero-academia.webp",
  "posterW": 600,
  "blurb": "In a world where most people have powers, a powerless boy inherits the strength of the greatest hero.",
  "type": "TV series",
  "votes": 16200,
  "plot": "In a world where nearly everyone has a superpower, Izuku Midoriya is born without one. A chance meeting with the top hero All Might gives him a path into the hero academy U.A.",
  "characters": [
   {
    "name": "Izuku Midoriya",
    "role": "Determined student who inherits All Might's power"
   },
   {
    "name": "Katsuki Bakugo",
    "role": "Explosive classmate and rival"
   },
   {
    "name": "Ochaco Uraraka",
    "role": "Cheerful student who can make things weightless"
   },
   {
    "name": "All Might",
    "role": "The world's greatest hero"
   }
  ]
 },
 {
  "id": "jujutsu-kaisen",
  "title": "Jujutsu Kaisen",
  "year": 2020,
  "studio": "MAPPA",
  "genres": [
   "Action",
   "Fantasy"
  ],
  "episodes": "Multiple seasons",
  "score": 8.6,
  "moods": [
   "pumped"
  ],
  "hue": 235,
  "poster": "jujutsu-kaisen.webp",
  "blurb": "A student swallows a cursed object and joins a school of sorcerers who fight curses.",
  "type": "TV series",
  "votes": 17900,
  "plot": "Yuji Itadori swallows a cursed finger to save his friends and becomes the host of a powerful curse. He joins Tokyo Jujutsu High, where sorcerers train to fight the curses that threaten people.",
  "characters": [
   {
    "name": "Yuji Itadori",
    "role": "Athletic student who hosts a dangerous curse"
   },
   {
    "name": "Megumi Fushiguro",
    "role": "Calm sorcerer who summons shadow creatures"
   },
   {
    "name": "Nobara Kugisaki",
    "role": "Fearless sorcerer who fights with a hammer and nails"
   },
   {
    "name": "Satoru Gojo",
    "role": "Playful but extremely powerful teacher"
   }
  ]
 },
 {
  "id": "cowboy-bebop",
  "title": "Cowboy Bebop",
  "year": 1998,
  "studio": "Sunrise",
  "genres": [
   "Sci-Fi",
   "Action"
  ],
  "episodes": "26 episodes",
  "score": 8.9,
  "moods": [
   "pumped",
   "mindbending"
  ],
  "hue": 205,
  "poster": "cowboy-bebop.webp",
  "posterW": 600,
  "blurb": "Bounty hunters drift through space chasing criminals and outrunning their own pasts.",
  "type": "TV series",
  "votes": 8900,
  "plot": "In 2071, a ragtag crew of bounty hunters travels aboard the spaceship Bebop, taking on jobs to stay afloat. Each member is also running from a past that keeps catching up.",
  "characters": [
   {
    "name": "Spike Spiegel",
    "role": "Laid-back bounty hunter with a mysterious past"
   },
   {
    "name": "Jet Black",
    "role": "Former cop and the Bebop's owner"
   },
   {
    "name": "Faye Valentine",
    "role": "Gambler with a lost memory and a lot of debt"
   },
   {
    "name": "Ed",
    "role": "Quirky teenage hacker"
   }
  ]
 },
 {
  "id": "steins-gate",
  "title": "Steins;Gate",
  "year": 2011,
  "studio": "White Fox",
  "genres": [
   "Sci-Fi",
   "Mystery"
  ],
  "episodes": "24 episodes",
  "score": 9,
  "moods": [
   "mindbending"
  ],
  "hue": 40,
  "poster": "steins-gate.webp",
  "posterW": 600,
  "blurb": "A self-proclaimed mad scientist finds a way to message the past, with dangerous consequences.",
  "type": "TV series",
  "votes": 9700,
  "plot": "Self-styled mad scientist Rintaro Okabe and his friends discover that their microwave can send messages to the past. Each small change snowballs into a race to undo a terrible future.",
  "characters": [
   {
    "name": "Rintaro Okabe",
    "role": "Self-proclaimed mad scientist"
   },
   {
    "name": "Kurisu Makise",
    "role": "Brilliant young neuroscientist"
   },
   {
    "name": "Mayuri Shiina",
    "role": "Okabe's gentle childhood friend"
   },
   {
    "name": "Itaru Hashida",
    "role": "Skilled hacker and lab member known as Daru"
   }
  ]
 },
 {
  "id": "violet-evergarden",
  "title": "Violet Evergarden",
  "year": 2018,
  "studio": "Kyoto Animation",
  "genres": [
   "Slice of Life",
   "Fantasy"
  ],
  "episodes": "13 episodes",
  "score": 8.5,
  "moods": [
   "heartfelt",
   "cozy"
  ],
  "hue": 255,
  "poster": "violet-evergarden.webp",
  "posterW": 400,
  "blurb": "A former soldier becomes a letter writer while she learns what the words people say to each other really mean.",
  "type": "TV series",
  "votes": 6400,
  "plot": "After the war, former soldier Violet Evergarden takes a job as an Auto Memory Doll, writing letters for other people. Through their words she begins to understand emotions she never learned to feel.",
  "characters": [
   {
    "name": "Violet Evergarden",
    "role": "Former soldier turned letter writer"
   },
   {
    "name": "Claudia Hodgins",
    "role": "Her guardian and the head of the postal company"
   },
   {
    "name": "Gilbert Bougainvillea",
    "role": "The officer whose last words stay with her"
   },
   {
    "name": "Cattleya Baudelaire",
    "role": "Fellow Auto Memory Doll and colleague"
   }
  ]
 },
 {
  "id": "spirited-away",
  "title": "Spirited Away",
  "year": 2001,
  "studio": "Studio Ghibli",
  "genres": [
   "Fantasy"
  ],
  "episodes": "Film, 125 min",
  "score": 8.9,
  "moods": [
   "cozy",
   "heartfelt"
  ],
  "hue": 185,
  "poster": "spirited-away.webp",
  "blurb": "A girl wanders into a spirit world and must work in a bathhouse to free her parents.",
  "type": "Film",
  "votes": 12200,
  "plot": "Ten-year-old Chihiro stumbles into a hidden world of spirits when her parents are turned into pigs. To save them, she takes a job at a bathhouse run by the witch Yubaba.",
  "characters": [
   {
    "name": "Chihiro",
    "role": "Brave girl who must work to free her parents"
   },
   {
    "name": "Haku",
    "role": "Mysterious boy who helps Chihiro"
   },
   {
    "name": "Yubaba",
    "role": "Powerful witch who runs the bathhouse"
   },
   {
    "name": "No-Face",
    "role": "Silent spirit who follows Chihiro"
   }
  ]
 },
 {
  "id": "mushishi",
  "title": "Mushishi",
  "year": 2005,
  "studio": "Artland",
  "genres": [
   "Slice of Life",
   "Mystery",
   "Fantasy"
  ],
  "episodes": "26 episodes",
  "score": 8.6,
  "moods": [
   "cozy"
  ],
  "hue": 105,
  "poster": "mushishi.webp",
  "blurb": "A wandering healer studies strange life forms called mushi in quiet, atmospheric tales.",
  "type": "TV series",
  "votes": 3100,
  "plot": "Ginko is a wandering mushi master who studies strange, ancient life forms and helps people affected by them. Each episode is a quiet, self-contained story set in a timeless countryside.",
  "characters": [
   {
    "name": "Ginko",
    "role": "Wandering mushi master with white hair and a green eye"
   }
  ]
 },
 {
  "id": "konosuba",
  "title": "KonoSuba",
  "year": 2016,
  "studio": "Studio Deen",
  "genres": [
   "Comedy",
   "Fantasy"
  ],
  "episodes": "Season 1: 10 episodes",
  "score": 8.2,
  "moods": [
   "laugh"
  ],
  "hue": 48,
  "poster": "konosuba.webp",
  "posterW": 600,
  "blurb": "An unlucky teen reincarnated in a fantasy world joins the most hopeless adventuring party imaginable.",
  "type": "TV series",
  "votes": 7500,
  "plot": "After a silly accident, Kazuma is offered a second life in a fantasy world and chooses the goddess Aqua as his companion. Together with two equally troublesome allies, he stumbles from one comic disaster to the next.",
  "characters": [
   {
    "name": "Kazuma Satou",
    "role": "Pragmatic adventurer with plenty of bad luck"
   },
   {
    "name": "Aqua",
    "role": "Goddess who is better at causing problems than solving them"
   },
   {
    "name": "Megumin",
    "role": "Mage obsessed with explosion magic"
   },
   {
    "name": "Darkness",
    "role": "Tough crusader with unusual tastes"
   }
  ]
 },
 {
  "id": "toradora",
  "title": "Toradora!",
  "year": 2008,
  "studio": "J.C.Staff",
  "genres": [
   "Romance",
   "Comedy",
   "Slice of Life"
  ],
  "episodes": "25 episodes",
  "score": 8.2,
  "moods": [
   "heartfelt",
   "laugh"
  ],
  "hue": 15,
  "poster": "toradora.webp",
  "posterW": 600,
  "blurb": "Two classmates agree to help each other win their crushes and end up falling for one another.",
  "type": "TV series",
  "votes": 6900,
  "plot": "Gentle but scary-looking Ryuji and small, fierce Taiga discover they each have a crush on the other's best friend. They team up to help each other, and their unlikely partnership turns into something deeper.",
  "characters": [
   {
    "name": "Ryuji Takasu",
    "role": "Kind student whose looks make people nervous"
   },
   {
    "name": "Taiga Aisaka",
    "role": "Tiny classmate with a fiery temper"
   },
   {
    "name": "Minori Kushieda",
    "role": "Energetic, upbeat friend"
   },
   {
    "name": "Ami Kawashima",
    "role": "Confident model with a sharper side"
   }
  ]
 }
];

/* Fallback used by enquiry.html if data/enquiry-responses.json cannot be fetched
   (for example when the page is opened straight from the file system). */
AniOrbit.enquiryFallback = {
  general: { reply: 'We usually reply within 2 working days.' },
  contributor: { cost: 'Free. Contributors are volunteers and are credited on every review.', availability: '4 reviewer spots are open this month.', reply: 'Our team will send onboarding details within 2 working days.' },
  sponsor: {
    bronze: { name: 'Bronze', price: 'R1,500 per month', available: 5, perks: ['Logo in the site footer', 'Mention in the monthly newsletter'] },
    silver: { name: 'Silver', price: 'R3,500 per month', available: 3, perks: ['Everything in Bronze', 'One sponsored spotlight card in the catalogue'] },
    gold:   { name: 'Gold',   price: 'R7,500 per month', available: 1, perks: ['Everything in Silver', 'Homepage banner placement', 'Quarterly community Q&A feature'] }
  }
};
