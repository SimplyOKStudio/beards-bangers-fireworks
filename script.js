// This is the tax rate used for the estimated total.
// Example: 0.0825 means 8.25% tax.
// Later, change this to your real local tax rate.
const taxRate = 0.0825;

// This is our starter list of fireworks.
// Each firework has an id, name, price, and category.
// The id is a simple nickname JavaScript uses behind the scenes.
const fireworks = [
  {
  id: "artillery-shell-6-shot",
    name: "ARTILLERY SHELL - 6 SHOT",
    price: 25.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "asst-effect-artillery-6-shot",
    name: "ASST EFFECT ARTILLERY - 6 SHOT",
    price: 25.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "bc-artillery-bc-6-shot",
    name: "BLACK CAT ARTILLERY - 6 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "bc-festival-balls-bc-6-shot",
    name: "BLACK CAT FESTIVAL BALLS - 6 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "festival-ball-6-shot",
    name: "FESTIVAL BALL - 6 SHOT",
    price: 20.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "showtime-festival-ball-6-shot",
    name: "SHOWTIME FESTIVAL BALL - 6 SHOT",
    price: 20.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "sucker-punch-fj-6-shot",
    name: "FIRECRACKER JOE SUCKER PUNCH - 6 SHOT",
    price: 20.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "solar-blast-5in-6-shot",
    name: "SOLAR BLAST 5-INCH - 6 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "6-shot-neon-diablo-5in-bc",
    name: "BLACK CAT NEON DIABLO 5-INCH - 6 SHOT",
    price: 70.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "donut-shells-6in-6-shot",
    name: "DONUT SHELLS 6-INCH - 6 SHOT",
    price: 65.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "scatter-bombs-6in-6-shot",
    name: "SCATTER BOMBS 6-INCH - 6 SHOT",
    price: 65.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "bad-bombs-12-shot",
    name: "BAD BOMBS - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "bullet-bombs-12-shot",
    name: "BULLET BOMBS - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "magnum-artillery-bc-12-shot",
    name: "BLACK CAT MAGNUM ARTILLERY - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "red-white-boom-12-shot",
    name: "RED WHITE & BOOM - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "smoking-gun-artillery-12-shot",
    name: "SMOKING GUN ARTILLERY - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "star-spangled-cannon-bc-12-shot",
    name: "BLACK CAT STAR SPANGLED CANNON - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "zombie-blaster-12-shot",
    name: "ZOMBIE BLASTER - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "12-shot-diablo-4in-bc",
    name: "BLACK CAT DIABLO 4-INCH - 12 SHOT",
    price: 120.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "select-diablo-4in-5in-bc-12-shot",
    name: "BLACK CAT SELECT DIABLO 4-INCH / 5-INCH - 12 SHOT",
    price: 130.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "neon-nightmare-4in-16-shot",
    name: "NEON NIGHTMARE 4-INCH - 16 SHOT",
    price: 160.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "ammo-mag-6in-24-shot",
    name: "AMMO MAG 6-INCH - 24 SHOT",
    price: 280.00,
    unitLabel: "1 PIECE",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "barely-legal-5in-24-shot",
    name: "BARELY LEGAL 5-INCH - 24 SHOT",
    price: 250.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "bc-5in-canister-bc-24-shot",
    name: "BLACK CAT 5-INCH CANISTER - 24 SHOT",
    price: 250.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "death-punch-4in-fj-24-shot",
    name: "FIRECRACKER JOE DEATH PUNCH 4-INCH - 24 SHOT",
    price: 240.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "destiny-dominion-6in-7in-br-24-shot",
    name: "BROTHERS DESTINY DOMINION 6-INCH / 7-INCH - 24 SHOT",
    price: 300.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "24-shot-diablo-4in-bc",
    name: "BLACK CAT DIABLO 4-INCH - 24 SHOT",
    price: 240.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "grand-jury-5in-br-24-shot",
    name: "BROTHERS GRAND JURY 5-INCH - 24 SHOT",
    price: 250.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "lock-n-load-4in-24-shot",
    name: "LOCK -N- LOAD 4-INCH - 24 SHOT",
    price: 240.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "neon-beef-5in-24-shot",
    name: "NEON BEEF 5-INCH - 24 SHOT",
    price: 250.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "24-shot-neon-diablo-5in-bc",
    name: "BLACK CAT NEON DIABLO 5-INCH - 24 SHOT",
    price: 250.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "patriot-6in-bc-24-shot",
    name: "BLACK CAT PATRIOT 6-INCH - 24 SHOT",
    price: 280.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "raise-the-dead-7in-24-shot",
    name: "RAISE THE DEAD 7-INCH - 24 SHOT",
    price: 300.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "shocker-6in-24-shot",
    name: "SHOCKER 6-INCH - 24 SHOT",
    price: 280.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "spider-biter-5in-24-shot",
    name: "SPIDER BITER 5-INCH - 24 SHOT",
    price: 250.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "tank-buster-5-7in-24-shot",
    name: "TANK BUSTER 5-INCH / 7-INCH - 24 SHOT",
    price: 280.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "ultimate-outlaw-36-shot",
    name: "ULTIMATE OUTLAW - 36 SHOT",
    price: 300.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "power-of-pride-48-shot",
    name: "POWER OF PRIDE - 48 SHOT",
    price: 400.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
      // Punks start here.
  {
    id: "standard-punks",
    name: "STANDARD PUNKS",
    category: "Punks",
    shopTypes: ["Punks"],
    options: [
      {
        id: "standard-punks-single",
        label: "1 EXTRA PUNK",
        price: 0.03
      }
    ]
  },
  {
    id: "jumbo-punks",
    name: "JUMBO PUNKS",
    category: "Punks",
    shopTypes: ["Punks"],
    options: [
      {
        id: "jumbo-punks-single",
        label: "1 EXTRA JUMBO PUNK",
        price: 0.24
      }
    ]
  },
  {
    id: "xlg-punks",
    name: "XLG PUNKS",
    category: "Punks",
    shopTypes: ["Punks"],
    options: [
      {
        id: "xlg-punks-single",
        label: "1 EXTRA XLG PUNK",
        price: 0.30
      }
    ]
  },

  // Sparklers start here.
  {
    id: "8-inch-colored-sparklers",
    name: "8-INCH COLORED SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "8-inch-colored-sparklers-box",
        label: "1 BOX",
        price: 2.00
      },
      {
        id: "8-inch-colored-sparklers-pack",
        label: "1 PACK OF 12 BOXES",
        price: 24.00
      }
    ]
  },
  {
    id: "8-inch-gold-sparklers",
    name: "8-INCH GOLD SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "8-inch-gold-sparklers-box",
        label: "1 BOX",
        price: 2.00
      },
      {
        id: "8-inch-gold-sparklers-pack",
        label: "1 PACK OF 12 BOXES",
        price: 24.00
      }
    ]
  },
  {
    id: "10-inch-colored-sparklers",
    name: "10-INCH COLORED SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "10-inch-colored-sparklers-box",
        label: "1 BOX",
        price: 2.50
      },
      {
        id: "10-inch-colored-sparklers-pack",
        label: "1 PACK OF 12 BOXES",
        price: 30.00
      }
    ]
  },
  {
    id: "10-inch-gold-sparklers",
    name: "10-INCH GOLD SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "10-inch-gold-sparklers-box",
        label: "1 BOX",
        price: 2.50
      },
      {
        id: "10-inch-gold-sparklers-pack",
        label: "1 PACK OF 12 BOXES",
        price: 30.00
      }
    ]
  },
  {
    id: "20-inch-gold-sparklers",
    name: "20-INCH GOLD SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "20-inch-gold-sparklers-pack",
        label: "1 PACK",
        price: 10.00
      }
    ]
  },
  {
    id: "20-inch-gold-magic-sparklers",
    name: "20-INCH GOLD MAGIC SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "20-inch-gold-magic-sparklers-each",
        label: "1 PIECE",
        price: 2.50
      },
      {
        id: "20-inch-gold-magic-sparklers-pack",
        label: "1 PACK OF 6",
        price: 15.00
      }
    ]
  },
  {
    id: "black-cat-morning-glory-sparklers",
    name: "BLACK CAT MORNING GLORY SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "black-cat-morning-glory-sparklers-bundle",
        label: "1 BUNDLE",
        price: 1.25
      },
      {
        id: "black-cat-morning-glory-sparklers-box",
        label: "1 BOX OF 24 BUNDLES",
        price: 30.00
      }
    ]
  },
  {
    id: "morning-glory-sparklers",
    name: "MORNING GLORY SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "morning-glory-sparklers-bundle",
        label: "1 BUNDLE",
        price: 1.25
      },
      {
        id: "morning-glory-sparklers-box",
        label: "1 BOX OF 24 BUNDLES",
        price: 30.00
      }
    ]
  },
  {
    id: "36-inch-morning-glory-sparklers",
    name: "36-INCH MORNING GLORY SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "36-inch-morning-glory-sparklers-each",
        label: "1 PIECE",
        price: 1.67
      },
      {
        id: "36-inch-morning-glory-sparklers-bag",
        label: "1 BAG OF 6",
        price: 10.02
      }
    ]
  },
  {
    id: "black-cat-neon-sparklers",
    name: "BLACK CAT NEON SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "black-cat-neon-sparklers-each",
        label: "1 PIECE",
        price: 1.40
      },
      {
        id: "black-cat-neon-sparklers-pack",
        label: "1 PACK OF 5",
        price: 7.00
      }
    ]
  },

  // Smoke Items start here.
    {
    id: "5-minute-smoke",
    name: "5 MINUTE SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "5-minute-smoke-each",
        label: "1 PIECE",
        price: 6.00
      }
    ]
  },
    {
    id: "clay-colored-smoke-balls",
    name: "CLAY COLORED SMOKE BALLS",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "clay-colored-smoke-balls-bag",
        label: "1 BAG OF 12",
        price: 6.67
      }
    ]
  },
    {
    id: "sawdust-colored-smoke-balls",
    name: "SAWDUST COLORED SMOKE BALLS",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "sawdust-colored-smoke-balls-bag",
        label: "1 BAG OF 12",
        price: 6.67
      }
    ]
  },
  {
    id: "cloud-nine",
    name: "CLOUD NINE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "cloud-nine-each",
        label: "1 PIECE",
        price: 30.00
      }
    ]
  },
    {
    id: "color-grenade-with-pull-string",
    name: "COLOR GRENADE W/PULL STRING",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "color-grenade-with-pull-string-each",
        label: "1 PIECE",
        price: 6.00
      }
    ]
  },
  {
    id: "jumbo-smoke-crayons",
    name: "JUMBO SMOKE CRAYONS",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "jumbo-smoke-crayons-each",
        label: "1 PIECE",
        price: 2.50
      },
      {
        id: "jumbo-smoke-crayons-box",
        label: "1 BOX OF 6",
        price: 15.00
      }
    ]
  },
    {
    id: "mammoth-smoke",
    name: "MAMMOTH SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "mammoth-smoke-each",
        label: "1 PIECE",
        price: 3.00
      }
    ]
  },
  {
    id: "mini-tube-smoke",
    name: "MINI TUBE SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "mini-tube-smoke-pack",
        label: "1 PACK",
        price: 3.00
      },
      {
        id: "mini-tube-smoke-box",
        label: "1 BOX OF 6 PACKS",
        price: 18.00
      }
    ]
  },
  {
    id: "black-cat-neon-camo-smoke",
    name: "BLACK CAT NEON CAMO SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "black-cat-neon-camo-smoke-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "black-cat-neon-camo-smoke-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    id: "patriot-neon-assorted-smoke",
    name: "PATRIOT / NEON ASSORTED SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "patriot-neon-assorted-smoke-each",
        label: "1 PIECE",
        price: 3.00
      }
    ]
  },
  {
    id: "never-ending-smoke",
    name: "NEVER-ENDING SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "never-ending-smoke-each",
        label: "1 PIECE",
        price: 20.00
      }
    ]
  },
  {
    id: "reaper-smoke-black",
    name: "REAPER SMOKE - BLACK",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "reaper-smoke-black-each",
        label: "1 PIECE",
        price: 8.00
      }
    ]
  },
  {
    id: "usa-smoke",
    name: "USA SMOKE",
    category: "Smoke Items",
    shopTypes: ["Smoke", "Daytime Fun"],
    options: [
      {
        id: "usa-smoke-each",
        label: "1 PIECE",
        price: 12.00
      }
    ]
  },
        // Firecrackers start here.
  {
    id: "firecrackers-pack-of-16",
    name: "ASSORTED FIRECRACKERS - 16 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "firecrackers-pack-of-16-single",
        label: "1 PACK OF 16",
        price: 0.50
      },
      {
        id: "firecrackers-pack-of-16-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 20.00
      }
    ]
  },
  {
    id: "firecrackers-pack-of-50",
    name: "ASSORTED FIRECRACKERS - 50 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "firecrackers-pack-of-50-single",
        label: "1 PACK OF 50",
        price: 1.50
      },
      {
        id: "firecrackers-pack-of-50-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 60.00
      }
    ]
  },
  {
    id: "firecrackers-pack-of-100",
    name: "ASSORTED FIRECRACKERS - 100 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "firecrackers-pack-of-100-single",
        label: "1 PACK OF 100",
        price: 3.00
      },
      {
        id: "firecrackers-pack-of-100-bundle",
        label: "1 BUNDLE OF 20 PACKS",
        price: 60.00
      }
    ]
  },
  {
    id: "500-roll-assorted",
    name: "ASSORTED FIRECRACKER ROLL - 1 ROLL OF 500",
    price: 15.00,
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"]
  },
  {
    id: "1000-roll-assorted",
    name: "ASSORTED FIRECRACKER ROLL - 1 ROLL OF 1000",
    price: 30.00,
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"]
  },
  {
    id: "black-cat-firecrackers-pack-of-16",
    name: "BLACK CAT FIRECRACKERS - 16 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-pack-of-16-single",
        label: "1 PACK OF 16",
        price: 0.65
      },
      {
        id: "black-cat-firecrackers-pack-of-16-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 26.00
      }
    ]
  },
  {
    id: "black-cat-firecrackers-pack-of-50",
    name: "BLACK CAT FIRECRACKERS - 50 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-pack-of-50-single",
        label: "1 PACK OF 50",
        price: 2.00
      },
      {
        id: "black-cat-firecrackers-pack-of-50-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 80.00
      }
    ]
  },
  {
    id: "black-cat-firecrackers-pack-of-100",
    name: "BLACK CAT FIRECRACKERS - 100 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-pack-of-100-single",
        label: "1 PACK OF 100",
        price: 4.00
      },
      {
        id: "black-cat-firecrackers-pack-of-100-bundle",
        label: "1 BUNDLE OF 20 PACKS",
        price: 80.00
      }
    ]
  },
  {
    id: "black-cat-firecrackers-pack-of-200",
    name: "BLACK CAT FIRECRACKERS - 200 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-pack-of-200-single",
        label: "1 PACK OF 200",
        price: 8.00
      },
      {
        id: "black-cat-firecrackers-pack-of-200-bundle",
        label: "1 BUNDLE OF 10 PACKS",
        price: 80.00
      }
    ]
  },
  {
    id: "black-cat-firecrackers-pack-of-400",
    name: "BLACK CAT FIRECRACKERS - 400 COUNT PACKS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-pack-of-400-single",
        label: "1 PACK OF 400",
        price: 16.00
      },
      {
        id: "black-cat-firecrackers-pack-of-400-bundle",
        label: "1 BUNDLE OF 5 PACKS",
        price: 80.00
      }
    ]
  },
  {
    id: "1000-roll-black-cat",
    name: "BLACK CAT FIRECRACKER ROLL - 1 ROLL OF 1000",
    price: 40.00,
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"]
  },
  {
    id: "2000-roll-black-cat",
    name: "BLACK CAT FIRECRACKER ROLL - 1 ROLL OF 2000",
    price: 80.00,
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"]
  },
  {
    id: "m-60-m-90-crackers",
    name: "M-60 / M-90 CRACKERS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "m-60-m-90-crackers-single",
        label: "1 PIECE",
        price: 0.56
      },
      {
        id: "m-60-m-90-crackers-box",
        label: "1 BOX OF 36",
        price: 20.16
      }
    ]
  },
  {
    id: "m-150-salute-bc-red-silver",
    name: "BLACK CAT M-150 SALUTE CRACKERS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "m-150-salute-bc-red-silver-single",
        label: "1 PIECE",
        price: 0.56
      },
      {
        id: "m-150-salute-bc-red-silver-box",
        label: "1 BOX OF 36",
        price: 20.16
      }
    ]
  },
  {
    id: "bunker-buster-crackers",
    name: "BUNKER BUSTER CRACKERS",
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "bunker-buster-crackers-box",
        label: "1 BOX",
        price: 5.00
      },
      {
        id: "bunker-buster-crackers-pack",
        label: "1 PACK OF 4 BOXES",
        price: 20.00
      }
    ]
  },
  {
    id: "little-dynamite-bc",
    name: "BLACK CAT LITTLE DYNAMITE - 1 BOX",
    price: 6.00,
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"]
  },
  {
    id: "magic-whip-with-boom",
    name: "MAGIC WHIP W/BOOM - 1 BOX",
    price: 15.00,
    category: "Chinese Firecracker & Special Crackers",
    shopTypes: ["Firecrackers"]
  },

    // Roman Candles start here.
  {
    id: "5-ball-import-roman-candle",
    name: "5 BALL IMPORT ROMAN CANDLE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "5-ball-import-roman-candle-each",
        label: "1 PIECE",
        price: 1.50
      },
      {
        id: "5-ball-import-roman-candle-pack",
        label: "1 PACK OF 6",
        price: 9.00
      }
    ]
  },
  {
    id: "americas-candle-5-ball",
    name: "AMERICAS CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "americas-candle-5-ball-each",
        label: "1 PIECE",
        price: 6.00
      },
      {
        id: "americas-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 24.00
      }
    ]
  },
  {
    id: "blackjack-brothers-5-ball",
    name: "BROTHERS BLACKJACK - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "blackjack-brothers-5-ball-each",
        label: "1 PIECE",
        price: 6.00
      },
      {
        id: "blackjack-brothers-5-ball-pack",
        label: "1 PACK OF 4",
        price: 24.00
      }
    ]
  },
  {
    id: "contraband-5-ball",
    name: "CONTRABAND - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "contraband-5-ball-each",
        label: "1 PIECE",
        price: 6.00
      },
      {
        id: "contraband-5-ball-pack",
        label: "1 PACK OF 4",
        price: 24.00
      }
    ]
  },
  {
    id: "crazy-aces-brothers-5-ball",
    name: "BROTHERS CRAZY ACES - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "crazy-aces-brothers-5-ball-each",
        label: "1 PIECE",
        price: 6.00
      },
      {
        id: "crazy-aces-brothers-5-ball-pack",
        label: "1 PACK OF 4",
        price: 24.00
      }
    ]
  },
  {
    id: "dragon-tails-5-ball",
    name: "DRAGON TAILS - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "dragon-tails-5-ball-each",
        label: "1 PIECE",
        price: 6.00
      },
      {
        id: "dragon-tails-5-ball-pack",
        label: "1 PACK OF 5",
        price: 30.00
      }
    ]
  },
  {
    id: "black-cat-gatlin-pack-5-ball",
    name: "BLACK CAT GATLIN PACK - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "black-cat-gatlin-pack-5-ball-each",
        label: "1 PIECE",
        price: 7.00
      },
      {
        id: "black-cat-gatlin-pack-5-ball-pack",
        label: "1 PACK OF 8",
        price: 56.00
      }
    ]
  },
  {
    id: "black-cat-premium-candle-5-ball",
    name: "BLACK CAT PREMIUM CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "black-cat-premium-candle-5-ball-each",
        label: "1 PIECE",
        price: 6.00
      },
      {
        id: "black-cat-premium-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 24.00
      }
    ]
  },
  {
    id: "thundermania-8-ball",
    name: "THUNDERMANIA - 8 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "thundermania-8-ball-each",
        label: "1 PIECE",
        price: 4.00
      },
      {
        id: "thundermania-8-ball-pack",
        label: "1 PACK OF 4",
        price: 16.00
      }
    ]
  },
  {
    id: "10-ball-import-roman-candle",
    name: "10 BALL IMPORT ROMAN CANDLE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "10-ball-import-roman-candle-each",
        label: "1 PIECE",
        price: 2.50
      },
      {
        id: "10-ball-import-roman-candle-pack",
        label: "1 PACK OF 6",
        price: 15.00
      }
    ]
  },
  {
    id: "boombomb-candle-10-ball",
    name: "BOOMBOMB CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "boombomb-candle-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "boombomb-candle-10-ball-pack",
        label: "1 PACK OF 6",
        price: 18.00
      }
    ]
  },
  {
    id: "camo-pack-10-ball",
    name: "CAMO PACK - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "camo-pack-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "camo-pack-10-ball-pack",
        label: "1 PACK OF 12",
        price: 36.00
      }
    ]
  },
  {
    id: "cherry-on-top-brothers-10-ball",
    name: "BROTHERS CHERRY ON TOP - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "cherry-on-top-brothers-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "cherry-on-top-brothers-10-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    id: "crackling-candle-10-ball",
    name: "CRACKLING CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "crackling-candle-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "crackling-candle-10-ball-pack",
        label: "1 PACK OF 6",
        price: 18.00
      }
    ]
  },
  {
    id: "exploding-candle-10-ball",
    name: "EXPLODING CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "exploding-candle-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "exploding-candle-10-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    id: "black-cat-handful-candle-10-ball",
    name: "BLACK CAT HANDFUL CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "black-cat-handful-candle-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "black-cat-handful-candle-10-ball-pack",
        label: "1 PACK OF 5",
        price: 15.00
      }
    ]
  },
  {
    id: "wild-side-10-ball",
    name: "WILD SIDE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "wild-side-10-ball-each",
        label: "1 PIECE",
        price: 3.00
      },
      {
        id: "wild-side-10-ball-pack",
        label: "1 PACK OF 8",
        price: 24.00
      }
    ]
  },
  {
    id: "powerball-140-ball",
    name: "POWERBALL - 140 BALL",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "gangster-gun-196-ball",
    name: "GANGSTER GUN - 196 BALL",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "gatling-gun-brothers-240-ball",
    name: "BROTHERS GATLING GUN - 240 BALL",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "mini-blaster-280-ball",
    name: "MINI BLASTER - 280 BALL",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "heavy-gear-brothers-380-ball",
    name: "BROTHERS HEAVY GEAR - 380 BALL",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "steel-titan-mortar-384-ball",
    name: "STEEL TITAN MORTAR - 384 BALL",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },

    // Rotating Roman Candles start here.
  {
    id: "352-shot-rotating-machine-gun",
    name: "352 SHOT ROTATING MACHINE GUN",
    price: 280.00,
    unitLabel: "1 PIECE",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "352-shot-cartridge-rotating-machine-gun",
    name: "352 SHOT CARTRIDGE ROTATING MACHINE GUN",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    id: "388-shot-machine-gun-kelly",
    name: "388 SHOT MACHINE GUN KELLY",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles"]
  },

    // Ground Spinners start here.
  {
    id: "dancing-trolls",
    name: "DANCING TROLLS",
    price: 4.00,
    unitLabel: "1 PIECE",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "friendship-pagoda",
    name: "FRIENDSHIP PAGODA",
    price: 6.00,
    unitLabel: "1 PIECE",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "ground-bloom-flowers",
    name: "GROUND BLOOM FLOWERS",
    price: 2.50,
    unitLabel: "1 PACK OF 6",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "happy-lamp-large",
    name: "HAPPY LAMP - LARGE",
    price: 12.00,
    unitLabel: "1 BOX",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "head-spin",
    name: "HEAD SPIN",
    price: 8.00,
    unitLabel: "1 PIECE",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "lotus-lantern",
    name: "LOTUS LANTERN",
    price: 3.00,
    unitLabel: "1 PIECE",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "spinning-top",
    name: "SPINNING TOP",
    price: 1.25,
    unitLabel: "1 PIECE",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "black-cat-tasmanian-devil",
    name: "BLACK CAT TASMANIAN DEVIL",
    price: 4.00,
    unitLabel: "1 PIECE",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    id: "whistling-chaser-with-report",
    name: "WHISTLING CHASER W/REPORT",
    price: 4.00,
    unitLabel: "1 PACK OF 12",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },

    // Flying Items start here.
  {
    id: "2-color-spaceship-3-package",
    name: "2 COLOR SPACESHIP",
    price: 3.00,
    unitLabel: "1 PACK OF 3",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "2-stage-turbo-phantom",
    name: "2 STAGE TURBO PHANTOM",
    price: 3.00,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "artificial-satellites",
    name: "ARTIFICIAL SATELLITES",
    price: 4.00,
    unitLabel: "1 PACK OF 12",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "drone",
    name: "DRONE",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "fanta-sea",
    name: "FANTA SEA",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "brothers-lady-bugs",
    name: "BROTHERS LADY BUGS",
    price: 5.00,
    unitLabel: "1 PACK OF 3",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "brothers-magic-crystal",
    name: "BROTHERS MAGIC CRYSTAL",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "pigs-can-fly",
    name: "PIGS CAN FLY",
    price: 6.00,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "sky-smoke",
    name: "SKY SMOKE",
    price: 4.50,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun", "Smoke"]
  },
  {
    id: "tiger-tails",
    name: "TIGER TAILS",
    price: 3.00,
    unitLabel: "1 PIECE",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "black-cat-uav",
    name: "BLACK CAT UAV",
    price: 4.00,
    unitLabel: "1 PACK OF 3",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    id: "zips-zip-blades",
    name: "ZIPS / ZIP BLADES",
    price: 3.00,
    unitLabel: "1 PACK OF 6",
    category: "Satellites & Wing Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },

    // Novelties start here.
  {
    id: "brothers-big-brute-plastic",
    name: "BROTHERS BIG BRUTE - PLASTIC",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "climbing-panda",
    name: "CLIMBING PANDA",
    price: 3.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "crackling-balls",
    name: "CRACKLING BALLS",
    price: 2.50,
    unitLabel: "1 BAG OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "flashing-strobe",
    name: "FLASHING STROBE",
    price: 3.00,
    unitLabel: "1 PACK OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "hen-laying-eggs-12-24",
    name: "HEN LAYING EGGS - 12/24",
    price: 1.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "hen-laying-eggs-24-24",
    name: "HEN LAYING EGGS - 24/24",
    price: 1.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "jumbo-strobe-large",
    name: "JUMBO STROBE - LARGE",
    price: 4.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "kryptonite",
    name: "KRYPTONITE",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "magnum-pistol-popper",
    name: "MAGNUM PISTOL POPPER",
    price: 0.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "night-crawler-worms-snakes",
    name: "NIGHT CRAWLER / WORMS - SNAKES",
    price: 2.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "12pk-party-poppers-champagne",
    name: "PARTY POPPERS - 12 COUNT CHAMPAGNE",
    price: 0.50,
    unitLabel: "1 PACK",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "72pk-party-poppers-champagne",
    name: "PARTY POPPERS - 72 COUNT CHAMPAGNE",
    price: 0.50,
    unitLabel: "1 PACK",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "black-cat-party-poppers-champagne",
    name: "BLACK CAT PARTY POPPERS - CHAMPAGNE",
    price: 3.00,
    unitLabel: "1 PACK OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "pooping-elephant",
    name: "POOPING ELEPHANT",
    price: 3.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "12ct-poopy-puppy",
    name: "POOPY PUPPY - 12 COUNT",
    price: 3.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "144ct-poopy-puppy",
    name: "POOPY PUPPY - 144 COUNT",
    price: 3.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "red-dirt-rampage-plastic",
    name: "RED DIRT RAMPAGE - PLASTIC",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "120ct-snakes-6-pack-assorted",
    name: "SNAKES - 120 COUNT ASSORTED",
    price: 1.50,
    unitLabel: "1 PACK OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "144ct-snakes-6-pack-assorted",
    name: "SNAKES - 144 COUNT ASSORTED",
    price: 1.50,
    unitLabel: "1 PACK OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "shark-family-plastic",
    name: "SHARK FAMILY - PLASTIC",
    price: 40.00,
    unitLabel: "1 PACK OF 5",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "snappers",
    name: "SNAPPERS",
    price: 1.50,
    unitLabel: "1 BOX",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "solo-spinner-plastic",
    name: "SOLO SPINNER - PLASTIC",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun", "Ground Spinners"]
  },
  {
    id: "spirospark",
    name: "SPIROSPARK",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "tanks-toy",
    name: "TANKS - TOY",
    price: 2.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "brothers-terrific-tyrant-plastic",
    name: "BROTHERS TERRIFIC TYRANT - PLASTIC",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    id: "torpedo-thunder-snaps",
    name: "TORPEDO / THUNDER SNAPS",
    price: 3.00,
    unitLabel: "1 BOX",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },

    // Cone & Base Fountains start here.
  {
    id: "5-jumbo-cone-fountain",
    name: "5 JUMBO CONE FOUNTAIN",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "magic-potion",
    name: "MAGIC POTION",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "crazy-crackups-junebug",
    name: "CRAZY CRACKUPS / JUNEBUG",
    price: 3.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "cuckoo-fountain",
    name: "CUCKOO FOUNTAIN",
    price: 4.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "happiness-fountain",
    name: "HAPPINESS FOUNTAIN",
    price: 1.50,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "hn-60-fountain",
    name: "HN 60 FOUNTAIN",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "hn-90-fountain",
    name: "HN 90 FOUNTAIN",
    price: 6.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "killer-bees",
    name: "KILLER BEES",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Cone & Base Fountains",
    shopTypes: ["Fountains"]
  },

    // Multi-Effect Fountains start here.
  {
    id: "black-cat-3-for-1-fountains",
    name: "BLACK CAT 3 FOR 1 FOUNTAINS",
    price: 8.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "a-to-z-brothers",
    name: "BROTHERS A TO Z",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "america-forever",
    name: "AMERICA FOREVER",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "arachnophobia",
    name: "ARACHNOPHOBIA",
    price: 70.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "bad-apple-brothers",
    name: "BROTHERS BAD APPLE",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "bad-cactus",
    name: "BAD CACTUS",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "bees-knees-brothers",
    name: "BROTHERS BEES KNEES",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "born-and-raised-brothers",
    name: "BROTHERS BORN AND RAISED",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "bowl-o-cherries-brothers",
    name: "BROTHERS BOWL O CHERRIES",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "bring-it-minion",
    name: "BRING IT - MINION",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "california-sunrise",
    name: "CALIFORNIA SUNRISE",
    price: 15.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "cool-fountain",
    name: "COOL FOUNTAIN",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "cosmic-spin",
    name: "COSMIC SPIN",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Ground Spinners"]
  },
  {
    id: "dancing-with-ghost",
    name: "DANCING WITH GHOST",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "despicable-minion",
    name: "DESPICABLE - MINION",
    price: 12.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "dragon-fire-plastic",
    name: "DRAGON FIRE - PLASTIC",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "extra-zesty-brothers",
    name: "BROTHERS EXTRA ZESTY",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "fairies-in-a-jar-brothers",
    name: "BROTHERS FAIRIES IN A JAR",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-fantastic-4",
    name: "BLACK CAT FANTASTIC 4",
    price: 6.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "flower-child",
    name: "FLOWER CHILD",
    price: 35.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "flutter-by-brothers",
    name: "BROTHERS FLUTTER BY",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "freezy-pops",
    name: "FREEZY POPS",
    price: 3.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "ftn-dew",
    name: "FTN DEW",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "go-go-balls",
    name: "GO GO BALLS",
    price: 17.50,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "havana-heat",
    name: "HAVANA HEAT",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "hoot-hoot-hooray",
    name: "HOOT HOOT HOORAY",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-hyper-chill",
    name: "BLACK CAT HYPER CHILL",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "jr-snow-cone-fountain",
    name: "JR SNOW CONE FOUNTAIN",
    price: 6.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "kevin-minion",
    name: "KEVIN - MINION",
    price: 12.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "koi-pond",
    name: "KOI POND",
    price: 35.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "kooky-katerpillar-brothers",
    name: "BROTHERS KOOKY KATERPILLAR",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "lava-lamp",
    name: "LAVA LAMP",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },

    // Multi-Effect Fountains continue here.
  {
    id: "black-cat-mad-cat",
    name: "BLACK CAT MAD CAT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "mad-monkey",
    name: "MAD MONKEY",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "maximum-velocity",
    name: "MAXIMUM VELOCITY",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-medusa-fountain",
    name: "BLACK CAT MEDUSA FOUNTAIN",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "meow",
    name: "MEOW",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "military-tank-fire-storm",
    name: "MILITARY TANK / FIRE STORM",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "neon-jelly-beans",
    name: "NEON JELLY BEANS",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "pika-pika-plastic",
    name: "PIKA PIKA - PLASTIC",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "pina-colada",
    name: "PINA COLADA",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "poop-plastic",
    name: "POOP - PLASTIC",
    price: 8.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "princess-purse",
    name: "PRINCESS PURSE",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "puppy-fountain",
    name: "PUPPY FOUNTAIN",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "puzzle-cube",
    name: "PUZZLE CUBE",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "pyro-patrick",
    name: "PYRO PATRICK",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "pyro-shed",
    name: "PYRO SHED",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "rainbow-cupcake",
    name: "RAINBOW CUPCAKE",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "shazaam",
    name: "SHAZAAM",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "skull-fountain-plastic",
    name: "SKULL FOUNTAIN - PLASTIC",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "snail-it",
    name: "SNAIL IT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "snow-cone",
    name: "SNOW CONE",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-spark-my-interest",
    name: "BLACK CAT SPARK MY INTEREST",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "sponge-boy",
    name: "SPONGE BOY",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "stellar-beauty",
    name: "STELLAR BEAUTY",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "toadally-purple",
    name: "TOADALLY PURPLE",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "unicorn-plastic",
    name: "UNICORN - PLASTIC",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "young-man",
    name: "YOUNG MAN",
    price: 8.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "zapper-dapper-doo-brothers",
    name: "BROTHERS ZAPPER DAPPER DOO",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains",
    shopTypes: ["Fountains"]
  },

    // Hand-Held Fountains start here.
  {
    id: "handheld-snow-cone",
    name: "HANDHELD SNOW CONE",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "hit-parade-brothers",
    name: "BROTHERS HIT PARADE",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "light-saber",
    name: "LIGHT SABER",
    price: 12.00,
    unitLabel: "1 PIECE",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "lucky-wheels",
    name: "LUCKY WHEELS",
    price: 50.00,
    unitLabel: "1 BOX",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "photon-phaser-brothers",
    name: "BROTHERS PHOTON PHASER",
    price: 15.00,
    unitLabel: "1 PIECE",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains"]
  },
  {
    id: "sword-boys",
    name: "SWORD - BOYS",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    id: "sword-girls",
    name: "SWORD - GIRLS",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },

    // Multi-Effect Fountains - 350 up to 500 Grams start here.
  {
    id: "closed-caption",
    name: "CLOSED CAPTION",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains - 350 up to 500 Grams",
    shopTypes: ["Fountains"]
  },
  {
    id: "dragon-throne",
    name: "DRAGON THRONE",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains - 350 up to 500 Grams",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-energizer",
    name: "BLACK CAT ENERGIZER",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains - 350 up to 500 Grams",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-neon-lights",
    name: "BLACK CAT NEON LIGHTS",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains - 350 up to 500 Grams",
    shopTypes: ["Fountains"]
  },
  {
    id: "spartan-scream",
    name: "SPARTAN SCREAM",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains - 350 up to 500 Grams",
    shopTypes: ["Fountains"]
  },
  {
    id: "black-cat-tropical-thunder",
    name: "BLACK CAT TROPICAL THUNDER",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Fountains - 350 up to 500 Grams",
    shopTypes: ["Fountains"]
  },

    // Fountain to Multi-Effect Items start here.
  {
    id: "black-cat-high-strung-with-mine-19-shot",
    name: "BLACK CAT HIGH STRUNG W/MINE - 19 SHOT",
    price: 70.00,
    unitLabel: "1 PIECE",
    category: "Fountain to Multi-Effect Items",
    shopTypes: ["Fountains", "Cakes"]
  },
  {
    id: "mr-hippo",
    name: "MR HIPPO",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Fountain to Multi-Effect Items",
    shopTypes: ["Fountains"]
  },

    // Saturn Missiles start here.
  {
    id: "25-saturn-missile-battery-single",
    name: "25 SHOT SATURN MISSILE BATTERY",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Saturn Missile Battery",
    shopTypes: ["Saturn Missiles"]
  },
  {
    id: "25-saturn-missile-battery-4-pack",
    name: "25 SHOT SATURN MISSILE BATTERY",
    price: 5.00,
    unitLabel: "1 PACK OF 4",
    category: "Saturn Missile Battery",
    shopTypes: ["Saturn Missiles"]
  },
  {
    id: "100-saturn-missile-battery",
    name: "100 SHOT SATURN MISSILE BATTERY",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Saturn Missile Battery",
    shopTypes: ["Saturn Missiles"]
  },
  {
    id: "300-saturn-missile-battery",
    name: "300 SHOT SATURN MISSILE BATTERY",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Saturn Missile Battery",
    shopTypes: ["Saturn Missiles"]
  },
  {
    id: "325-saturn-missile-battery",
    name: "325 SHOT SATURN MISSILE BATTERY",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Saturn Missile Battery",
    shopTypes: ["Saturn Missiles"]
  },
  {
    id: "red-bright-blue-660-shot",
    name: "RED BRIGHT & BLUE - 660 SHOT",
    price: 270.00,
    unitLabel: "1 PIECE",
    category: "Saturn Missile Battery",
    shopTypes: ["Saturn Missiles"]
  },

    // Cakes / Multi-Effect Items start here.
  {
    id: "25-zombies-25-shot",
    name: "25 ZOMBIES - 25 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "badhareday-brothers-49-shot",
    name: "BROTHERS BADHAREDAY - 49 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "beach-vibes-12-shot",
    name: "BEACH VIBES - 12 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-blade-16-shot",
    name: "BLACK BLADE - 16 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "bling-bling-brothers-36-shot",
    name: "BROTHERS BLING BLING - 36 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "blue-16-shot",
    name: "BLUE - 16 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "bonnie-and-clyde-19-shot",
    name: "BONNIE AND CLYDE - 19 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "boomerbang-brothers-55-shot",
    name: "BROTHERS BOOMERBANG - 55 SHOT",
    price: 65.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "born-on-the-bayou-16-shot",
    name: "BORN ON THE BAYOU - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "break-out-6-shot",
    name: "BREAK OUT - 6 SHOT",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "cat-fight-9-shot",
    name: "CAT FIGHT - 9 SHOT",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "chameleon-2000-16-shot",
    name: "CHAMELEON 2000 - 16 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "cherry-bomber-10-shot",
    name: "CHERRY BOMBER - 10 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "color-me-america-20-shot",
    name: "COLOR ME AMERICA - 20 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-color-pearl-48-shot",
    name: "BLACK CAT COLOR PEARL - 48 SHOT",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "color-pearl-48-shot",
    name: "COLOR PEARL - 48 SHOT",
    price: 5.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "colorful-skies-25-shot",
    name: "COLORFUL SKIES - 25 SHOT",
    price: 35.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "copper-devils-brothers-25-shot",
    name: "BROTHERS COPPER DEVILS - 25 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "county-fair-16-shot",
    name: "COUNTY FAIR - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "crazy-cat-12-shot",
    name: "CRAZY CAT - 12 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },

    // Cakes / Multi-Effect Items continue here.
  {
    id: "crimson-bulls-brothers-25-shot",
    name: "BROTHERS CRIMSON BULLS - 25 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "dang-it-carl-28-shot",
    name: "DANG IT CARL - 28 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "dino-pack-7-shot-6-assorted",
    name: "DINO PACK - 7 SHOT 6 ASSORTED",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "dirty-dancing-in-the-sky-7-shot",
    name: "DIRTY DANCING IN THE SKY - 7 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "dope-16-shot",
    name: "DOPE - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "fast-trigger-200-shot",
    name: "FAST TRIGGER - 200 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-fear-city-25-shot",
    name: "BLACK CAT FEAR CITY - 25 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "fire-in-the-hole-7-shot",
    name: "FIRE IN THE HOLE - 7 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "fireworks-fiesta-96-shot",
    name: "FIREWORKS FIESTA - 96 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "fish-frenzy-9-shot",
    name: "FISH FRENZY - 9 SHOT",
    price: 15.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "for-our-flag-16-shot",
    name: "FOR OUR FLAG - 16 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "friki-tiki-36-shot",
    name: "FRIKI TIKI - 36 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "garden-in-spring-7-shot",
    name: "GARDEN IN SPRING - 7 SHOT",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "ghost-peppers-10-shot",
    name: "GHOST PEPPERS - 10 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "great-expectation-9-shot",
    name: "GREAT EXPECTATION - 9 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "happy-camper-23-shot",
    name: "HAPPY CAMPER - 23 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "happy-fireworks-36-shot",
    name: "HAPPY FIREWORKS - 36 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "hard-hitter-16-shot",
    name: "HARD HITTER - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "henchmen-12-shot",
    name: "HENCHMEN - 12 SHOT",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },

    // Cakes / Multi-Effect Items continue here.
  {
    id: "high-five-25-shot",
    name: "HIGH FIVE - 25 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "hot-n-spicy-9-shot",
    name: "HOT -N- SPICY - 9 SHOT",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "hyper-ii-96-shot",
    name: "HYPER II - 96 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "instant-replay-brothers-12-shot",
    name: "BROTHERS INSTANT REPLAY - 12 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "irish-luck-brothers-12-shot",
    name: "BROTHERS IRISH LUCK - 12 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "legendary-beast-16-shot",
    name: "LEGENDARY BEAST - 16 SHOT",
    price: 55.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-liquid-sky-20-shot",
    name: "BLACK CAT LIQUID SKY - 20 SHOT",
    price: 35.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "little-nemo-19-shot",
    name: "LITTLE NEMO - 19 SHOT",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "loud-nasty-12-shot",
    name: "LOUD & NASTY - 12 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "loyal-to-all-25-shot",
    name: "LOYAL TO ALL - 25 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "lucky-streak-66-shot",
    name: "LUCKY STREAK - 66 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "macaron-pops-16-shot",
    name: "MACARON POPS - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "magical-barrage-100-shot",
    name: "MAGICAL BARRAGE - 100 SHOT",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "magnificent-festival-brothers-25-shot",
    name: "BROTHERS MAGNIFICENT FESTIVAL - 25 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "mecha-mermaid-30-shot",
    name: "MECHA MERMAID - 30 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "mechanical-bug-brothers-100-shot",
    name: "BROTHERS MECHANICAL BUG - 100 SHOT",
    price: 65.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "metal-hawk-30-shot",
    name: "METAL HAWK - 30 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "micro-pigzilla-108-shot",
    name: "MICRO PIGZILLA - 108 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "mighty-python-cobra-19-shot",
    name: "MIGHTY PYTHON / COBRA - 19 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "mobile-menace-brothers-35-shot",
    name: "BROTHERS MOBILE MENACE - 35 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "mondays-suck-16-shot",
    name: "MONDAYS SUCK - 16 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "monstrous-10-shot",
    name: "MONSTROUS - 10 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },

    // Cakes / Multi-Effect Items continue here.
  {
    id: "nation-ovation-16-shot",
    name: "NATION OVATION - 16 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "neon-rainbow-16-shot",
    name: "NEON RAINBOW - 16 SHOT",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-night-defense-210-shot",
    name: "BLACK CAT NIGHT DEFENSE - 210 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "night-moves-18-shot",
    name: "NIGHT MOVES - 18 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "no-trespassing-16-shot",
    name: "NO TRESPASSING - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "oklahoma-kicker-16-shot",
    name: "OKLAHOMA KICKER - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "original-gangster-16-shot",
    name: "ORIGINAL GANGSTER - 16 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "pink-16-shot",
    name: "PINK - 16 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "pop-rocks-16-shot",
    name: "POP ROCKS - 16 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "poppycock-brothers-46-shot",
    name: "BROTHERS POPPYCOCK - 46 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-pro-200-16-shot",
    name: "BLACK CAT PRO 200 - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "pulse-pounder-50-shot",
    name: "PULSE POUNDER - 50 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "punk-rockers-10-shot",
    name: "PUNK ROCKERS - 10 SHOT",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "purple-haze-16-shot",
    name: "PURPLE HAZE - 16 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "pyro-lips-16-shot",
    name: "PYRO LIPS - 16 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "red-white-blue-salute-brothers-24-shot",
    name: "BROTHERS RED WHITE & BLUE SALUTE - 24 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "sabertooth-brothers-40-shot",
    name: "BROTHERS SABERTOOTH - 40 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "sapphire-clan-brothers-25-shot",
    name: "BROTHERS SAPPHIRE CLAN - 25 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "sirens-call-7-shot",
    name: "SIRENS CALL - 7 SHOT",
    price: 35.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "sleeping-with-the-fishes-25-shot",
    name: "SLEEPING WITH THE FISHES - 25 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },

    // Cakes / Multi-Effect Items continue here.
  {
    id: "space-monkey-18-shot",
    name: "SPACE MONKEY - 18 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "stop-n-go-brothers-25-shot",
    name: "BROTHERS STOP N GO - 25 SHOT",
    price: 45.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "super-sonic-25-shot",
    name: "SUPER SONIC - 25 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "texas-rattlesnake-16-shot",
    name: "TEXAS RATTLESNAKE - 16 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "tombstone-9-shot",
    name: "TOMBSTONE - 9 SHOT",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "uncle-ham-22-shot",
    name: "UNCLE HAM - 22 SHOT",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "vendetta-firecracker-joe-12-shot",
    name: "FIRECRACKER JOE VENDETTA - 12 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "whack-job-7-shot",
    name: "WHACK JOB - 7 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "white-tiger-9-shot",
    name: "WHITE TIGER - 9 SHOT",
    price: 15.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "widows-kiss-25-shot",
    name: "WIDOWS KISS - 25 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },
  {
    id: "wildcard-brothers-49-shot",
    name: "BROTHERS WILDCARD - 49 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items",
    shopTypes: ["Cakes"]
  },

    // Girandola start here.
  {
    id: "screaming-mimi-girandola",
    name: "SCREAMING MIMI - GIRANDOLA",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "abduction-20-shot",
    name: "ABDUCTION - 20 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "alien-disco-girandola",
    name: "ALIEN DISCO - GIRANDOLA",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "alien-invasion-21-shot",
    name: "ALIEN INVASION - 21 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "beam-me-up-girandola",
    name: "BEAM ME UP - GIRANDOLA",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "cleared-for-takeoff-brothers-girandola",
    name: "BROTHERS CLEARED FOR TAKEOFF - GIRANDOLA",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "return-to-roswell-26-shot",
    name: "RETURN TO ROSWELL - 26 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },
  {
    id: "whistling-bunghole-21-shot",
    name: "WHISTLING BUNGHOLE - 21 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Girandola",
    shopTypes: ["Girandola"]
  },

    // Multi-Effect Value Items - 350 to 500 Grams start here.
  {
    id: "agent-of-boom-37-shot",
    name: "AGENT OF BOOM - 37 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "alpha-dog-21-shot",
    name: "ALPHA DOG - 21 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "audio-graffiti-16-shot",
    name: "AUDIO GRAFFITI - 16 SHOT",
    price: 70.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "bamboozle-brothers-42-shot",
    name: "BROTHERS BAMBOOZLE - 42 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "banana-split-16-shot",
    name: "BANANA SPLIT - 16 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "big-top-brothers-42-shot",
    name: "BROTHERS BIG TOP - 42 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-badge-brothers-30-shot",
    name: "BROTHERS BLACK BADGE - 30 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brew-crew-35-shot",
    name: "BREW CREW - 35 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "current-events-brothers-30-shot",
    name: "BROTHERS CURRENT EVENTS - 30 SHOT",
    price: 70.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-dragons-breath-15-shot",
    name: "BLACK CAT DRAGONS BREATH - 15 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "gigablaster-480-shot",
    name: "GIGABLASTER - 480 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "good-thinkin-lincoln-134-shot",
    name: "GOOD THINKIN LINCOLN - 134 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "gunslinger-brothers-25-shot",
    name: "BROTHERS GUNSLINGER - 25 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "honk-for-freedom-155-shot",
    name: "HONK FOR FREEDOM - 155 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "i-love-it-loud-33-shot",
    name: "I LOVE IT LOUD - 33 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "light-brigade-brothers-42-shot",
    name: "BROTHERS LIGHT BRIGADE - 42 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "my-vice-brothers-48-shot",
    name: "BROTHERS MY VICE - 48 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "nishiki-forest-9-shot",
    name: "NISHIKI FOREST - 9 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "our-baby-reveal-12-shot",
    name: "OUR BABY REVEAL - 12 SHOT",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "power-of-pink-25-shot",
    name: "POWER OF PINK - 25 SHOT",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pyro-approved-12-shot",
    name: "PYRO APPROVED - 12 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "rounders-25-shot",
    name: "ROUNDERS - 25 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-shark-bite-15-shot",
    name: "BLACK CAT SHARK BITE - 15 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "sour-patch-lemonade-16-shot",
    name: "SOUR PATCH LEMONADE - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "striker-serpent-brothers-16-shot",
    name: "BROTHERS STRIKER SERPENT - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "taco-truck-24-shot",
    name: "TACO TRUCK - 24 SHOT",
    price: 60.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "tempt-fate-brothers-20-shot",
    name: "BROTHERS TEMPT FATE - 20 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-terminator-cakes-15-shot",
    name: "BLACK CAT TERMINATOR CAKES - 15 SHOT",
    price: 80.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "trophy-wife-brothers-480-shot",
    name: "BROTHERS TROPHY WIFE - 480 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "v-day-26-shot",
    name: "V-DAY - 26 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "whiskey-business-20-shot",
    name: "WHISKEY BUSINESS - 20 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Value Items - 350 to 500 Grams",
    shopTypes: ["Cakes"]
  },

    // Multi-Effect Items - Up to 500 Grams start here.
  {
    id: "aerial-privilege-168-shot",
    name: "AERIAL PRIVILEGE - 168 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "al-capone-16-shot",
    name: "AL CAPONE - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "all-jacked-up-25-shot",
    name: "ALL JACKED UP - 25 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "amazing-ballet-220-shot",
    name: "AMAZING BALLET - 220 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "americas-finest-25-shot",
    name: "AMERICAS FINEST - 25 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "assassin-9-shot",
    name: "ASSASSIN - 9 SHOT",
    price: 160.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "baby-face-nelson-16-shot",
    name: "BABY FACE NELSON - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "backroad-rebel-24-shot",
    name: "BACKROAD REBEL - 24 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "backyard-bully-44-shot",
    name: "BACKYARD BULLY - 44 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "bad-company-brothers-35-shot",
    name: "BROTHERS BAD COMPANY - 35 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "batter-up-53-shot",
    name: "BATTER UP - 53 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-hole-43-shot",
    name: "BLACK HOLE - 43 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "blond-joke-brothers-36-shot",
    name: "BROTHERS BLOND JOKE - 36 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "blue-blitz-brothers-80-shot",
    name: "BROTHERS BLUE BLITZ - 80 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "border-patrol-159-shot",
    name: "BORDER PATROL - 159 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "bucks-ducks-12-shot",
    name: "BUCKS & DUCKS - 12 SHOT",
    price: 160.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "bulldog-bash-34-shot",
    name: "BULLDOG BASH - 34 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "capitalists-195-shot",
    name: "CAPITALISTS - 195 SHOT",
    price: 350.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-caribbean-palms-20-shot",
    name: "BLACK CAT CARIBBEAN PALMS - 20 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "carolina-reaper-20-shot",
    name: "CAROLINA REAPER - 20 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "cerdo-loco-27-shot",
    name: "CERDO LOCO - 27 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "chain-reaction-86-shot",
    name: "CHAIN REACTION - 86 SHOT",
    price: 220.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "colors-of-america-10-shot",
    name: "COLORS OF AMERICA - 10 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "country-roots-25-shot",
    name: "COUNTRY ROOTS - 25 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "dapper-dan-12-shot",
    name: "DAPPER DAN - 12 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "dillinger-121-shot",
    name: "DILLINGER - 121 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "dont-tread-on-me-8-shot",
    name: "DONT TREAD ON ME - 8 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "dripping-donut-33-shot",
    name: "DRIPPING DONUT - 33 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-fiesta-grande-216-shot",
    name: "BLACK CAT FIESTA GRANDE - 216 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "fire-ninja-33-shot",
    name: "FIRE NINJA - 33 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "frank-the-enforcer-12-shot",
    name: "FRANK THE ENFORCER - 12 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "galaxia-138-shot",
    name: "GALAXIA - 138 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "ghost-fleet-9-shot",
    name: "GHOST FLEET - 9 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "grand-finale-432-shot",
    name: "GRAND FINALE - 432 SHOT",
    price: 240.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "black-cat-gunfighter-from-hell-49-shot",
    name: "BLACK CAT GUNFIGHTER FROM HELL - 49 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "hammer-20-shot",
    name: "HAMMER - 20 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "hardcore-cycles-16-shot",
    name: "HARDCORE CYCLES - 16 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },

    // Multi-Effect Items - Up to 500 Grams continue here.
  {
    id: "high-falutin-brothers-49-shot",
    name: "BROTHERS HIGH FALUTIN - 49 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "hit-the-road-jack-brothers-49-shot",
    name: "BROTHERS HIT THE ROAD JACK - 49 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "hog-smash-28-shot",
    name: "HOG SMASH - 28 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "hot-box-30-shot",
    name: "HOT BOX - 30 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "howling-wolf-brothers-36-shot",
    name: "BROTHERS HOWLING WOLF - 36 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "inferno-core-33-shot",
    name: "INFERNO CORE - 33 SHOT",
    price: 160.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "inside-job-brothers-49-shot",
    name: "BROTHERS INSIDE JOB - 49 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "johnny-da-jackal-16-shot",
    name: "JOHNNY DA JACKAL - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "kabuki-12-shot",
    name: "KABUKI - 12 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "lets-go-brandon-30-shot",
    name: "LETS GO BRANDON - 30 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "loud-proud-21-shot",
    name: "LOUD & PROUD - 21 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "lunar-eclipse-24-shot",
    name: "LUNAR ECLIPSE - 24 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "machine-gun-kelly-16-shot",
    name: "MACHINE GUN KELLY - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "mad-dog-coll-16-shot",
    name: "MAD DOG COLL - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "magic-balls-12-shot",
    name: "MAGIC BALLS - 12 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "major-combat-brothers-119-shot",
    name: "BROTHERS MAJOR COMBAT - 119 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "man-cave-36-shot",
    name: "MAN CAVE - 36 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "master-of-our-enemies-172-shot",
    name: "MASTER OF OUR ENEMIES - 172 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "maximum-insanity-182-shot",
    name: "MAXIMUM INSANITY - 182 SHOT",
    price: 350.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "mechapigzilla-136-shot",
    name: "MECHAPIGZILLA - 136 SHOT",
    price: 350.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "midnight-brothers-204-shot",
    name: "BROTHERS MIDNIGHT - 204 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "misconduct-firecracker-joe-30-shot",
    name: "FIRECRACKER JOE MISCONDUCT - 30 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "moe-the-money-man-17-shot",
    name: "MOE THE MONEY MAN - 17 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "mug-shots-25-shot",
    name: "MUG SHOTS - 25 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "neon-jellyfish-12-shot",
    name: "NEON JELLYFISH - 12 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-neon-peacock-93-shot",
    name: "BLACK CAT NEON PEACOCK - 93 SHOT",
    price: 220.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "opposing-forces-48-shot",
    name: "OPPOSING FORCES - 48 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "out-for-blood-30-shot",
    name: "OUT FOR BLOOD - 30 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pablo-escobar-21-shot",
    name: "PABLO ESCOBAR - 21 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "parrots-prattle-brothers-36-shot",
    name: "BROTHERS PARROTS PRATTLE - 36 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "party-meter-154-shot",
    name: "PARTY METER - 154 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "patriotic-af-42-shot",
    name: "PATRIOTIC AF - 42 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pigzilla-142-shot",
    name: "PIGZILLA - 142 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },

      // Multi-Effect Items - Up to 500 Grams continue here.
  {
    id: "poppin-pineapple-27-shot",
    name: "POPPIN PINEAPPLE - 27 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "porcupine-planet-55-shot",
    name: "PORCUPINE PLANET - 55 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pretty-boy-floyd-12-shot",
    name: "PRETTY BOY FLOYD - 12 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pretty-pants-bandit-15-shot",
    name: "PRETTY PANTS BANDIT - 15 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pucker-up-33-shot",
    name: "PUCKER UP - 33 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-purple-monster-16-shot",
    name: "BLACK CAT PURPLE MONSTER - 16 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "pyro-tsunami-25-shot",
    name: "PYRO TSUNAMI - 25 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "rat-face-willy-20-shot",
    name: "RAT FACE WILLY - 20 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-remix-24-shot",
    name: "BROTHERS REMIX - 24 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "revolver-9-shot",
    name: "REVOLVER - 9 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "rifle-9-shot",
    name: "RIFLE - 9 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-rowdy-ride-185-shot",
    name: "BROTHERS ROWDY RIDE - 185 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "roy-l-flush-18-shot",
    name: "ROY L FLUSH - 18 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "royal-assorted-cakes-16-shot",
    name: "ROYAL ASSORTED CAKES - 16 SHOT",
    price: 100.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "sailors-nightmare-16-shot",
    name: "SAILORS NIGHTMARE - 16 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "sammy-the-bull-16-shot",
    name: "SAMMY THE BULL - 16 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-sassy-600-shot",
    name: "BROTHERS SASSY - 600 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-saturday-night-special-36-shot",
    name: "BROTHERS SATURDAY NIGHT SPECIAL - 36 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "semi-auto-9-shot",
    name: "SEMI AUTO - 9 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "shock-jock-36-shot",
    name: "SHOCK JOCK - 36 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-sky-wide-204-shot",
    name: "BROTHERS SKY WIDE - 204 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "skyfire-278-shot",
    name: "SKYFIRE - 278 SHOT",
    price: 120.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },

    // Multi-Effect Items - Up to 500 Grams continue here.
  {
    id: "smoke-master-30-shot",
    name: "SMOKE MASTER - 30 SHOT",
    price: 160.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "space-explorer-20-shot",
    name: "SPACE EXPLORER - 20 SHOT",
    price: 400.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "spider-bite-12-shot",
    name: "SPIDER BITE - 12 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "sprinkle-donuts-10-shot",
    name: "SPRINKLE DONUTS - 10 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "step-mutha-16-shot",
    name: "STEP MUTHA - 16 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "super-stunt-12-shot",
    name: "SUPER STUNT - 12 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-swift-n-shimmery-44-shot",
    name: "BROTHERS SWIFT N SHIMMERY - 44 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "ta-dah-36-shot",
    name: "TA-DAH - 36 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "teflon-don-20-shot",
    name: "TEFLON DON - 20 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "the-wild-beast-42-shot",
    name: "THE WILD BEAST - 42 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "tony-the-big-tuna-12-shot",
    name: "TONY THE BIG TUNA - 12 SHOT",
    price: 90.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "too-hot-to-handle-35-shot",
    name: "TOO HOT TO HANDLE - 35 SHOT",
    price: 200.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "triumphant-25-shot",
    name: "TRIUMPHANT - 25 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "trump-train-250-shot",
    name: "TRUMP TRAIN - 250 SHOT",
    price: 500.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "trumps-revenge-250-shot",
    name: "TRUMPS REVENGE - 250 SHOT",
    price: 400.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-uncle-sams-answer-16-shot",
    name: "BROTHERS UNCLE SAMS ANSWER - 16 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "usa-conqueror-192-shot",
    name: "USA CONQUEROR - 192 SHOT",
    price: 350.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "black-cat-voodoo-rain-36-shot",
    name: "BLACK CAT VOODOO RAIN - 36 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "war-games-156-shot",
    name: "WAR GAMES - 156 SHOT",
    price: 250.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },
  {
    id: "brothers-war-hero-30-shot",
    name: "BROTHERS WAR HERO - 30 SHOT",
    price: 130.00,
    unitLabel: "1 PIECE",
    category: "Multi-Effect Items - Up to 500 Grams",
    shopTypes: ["Cakes"]
  },

    // 500 Gram Compound Cakes start here.
  {
    id: "black-cat-american-freedom-train-180-shot",
    name: "BLACK CAT AMERICAN FREEDOM TRAIN - 180 SHOT",
    price: 400.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "blood-is-pumping-72-shot",
    name: "BLOOD IS PUMPING - 72 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "born-leaders-757-shot",
    name: "BORN LEADERS - 757 SHOT",
    price: 400.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "fourth-of-july-finale-75-shot",
    name: "FOURTH OF JULY FINALE - 75 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "on-freedoms-wing-72-shot",
    name: "ON FREEDOMS WING - 72 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "red-white-and-brew-84-shot",
    name: "RED WHITE & BREW - 84 SHOT",
    price: 400.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "smoke-color-waterfall-28-shot",
    name: "SMOKE COLOR WATERFALL - 28 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    id: "vip-180-shot",
    name: "VIP - 180 SHOT",
    price: 400.00,
    unitLabel: "1 PIECE",
    category: "500 Gram Compound Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },

    // 3-Inch Super Shells start here.
  {
    id: "alakazam-3-inch-super-shells-9-shot",
    name: "ALAKAZAM - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "ghost-shell-3-inch-super-shells-9-shot",
    name: "GHOST SHELL - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "internal-combustion-3-inch-super-shells-9-shot",
    name: "INTERNAL COMBUSTION - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "super-beast-3-inch-super-shells-9-shot",
    name: "SUPER BEAST - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "usa-usa-3-inch-super-shells-9-shot",
    name: "USA USA - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "brothers-whacky-tobacky-3-inch-super-shells-9-shot",
    name: "BROTHERS WHACKY TOBACKY - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    id: "xtreme-energy-3-inch-super-shells-9-shot",
    name: "XTREME ENERGY - 9 SHOT",
    price: 300.00,
    unitLabel: "1 PIECE",
    category: "3-Inch Super Shells",
    shopTypes: ["Reloadable Shells"]
  },

    // Bundle Packages / Tray Assortments start here.
  {
    id: "black-cat-the-beast",
    name: "BLACK CAT THE BEAST",
    price: 350.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-night-display",
    name: "BLACK CAT NIGHT DISPLAY",
    price: 250.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-pyro-city",
    name: "BLACK CAT PYRO CITY",
    price: 250.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-party-animal",
    name: "BLACK CAT PARTY ANIMAL",
    price: 185.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "big-city-assortment",
    name: "BIG CITY ASSORTMENT",
    price: 185.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "diamond-backyard-6",
    name: "DIAMOND BACKYARD 6",
    price: 160.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "party-pack-6",
    name: "PARTY PACK 6",
    price: 160.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-pride-and-honor-6",
    name: "BLACK CAT PRIDE & HONOR 6",
    price: 160.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-celebrate-america-5",
    name: "BLACK CAT CELEBRATE AMERICA 5",
    price: 140.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "platinum-backyard-5",
    name: "PLATINUM BACKYARD 5",
    price: 140.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-heritage-4",
    name: "BLACK CAT HERITAGE 4",
    price: 90.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "party-pack-4",
    name: "PARTY PACK 4",
    price: 90.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "neon-surprise-s-and-s",
    name: "NEON SURPRISE - S&S",
    price: 40.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-excellent-bag",
    name: "BLACK CAT EXCELLENT BAG",
    price: 45.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-jr-pyro-assortment",
    name: "BLACK CAT JR PYRO ASSORTMENT",
    price: 40.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "nitro-bag-assortment",
    name: "NITRO BAG ASSORTMENT",
    price: 30.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-kids-pack-s-and-s",
    name: "BLACK CAT KIDS PACK - S&S",
    price: 12.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "black-cat-jr-pyro-backpack-s-and-s",
    name: "BLACK CAT JR PYRO BACKPACK - S&S",
    price: 25.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "wacky-pack-boys-s-and-s",
    name: "WACKY PACK BOYS - S&S",
    price: 25.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "wacky-pack-girls-s-and-s",
    name: "WACKY PACK GIRLS - S&S",
    price: 25.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  },
  {
    id: "frisbee-assortment",
    name: "FRISBEE ASSORTMENT",
    price: 10.00,
    unitLabel: "1 PACK",
    category: "Net Items - Tray Assortments",
    shopTypes: ["Bundle Packages"]
  }
];

// This stores the customer's selected quantities.
// It starts empty because the customer has not picked anything yet.
const selectedFireworks = {};

// This keeps track of the currently selected inventory category.
let activeCategory = "All";

// These are the product IDs we want to show in the Popular Picks section.
const popularPickIds = [
  "8-inch-colored-sparklers",
  "clay-colored-smoke-balls",
  "snappers",
  "ground-bloom-flowers",
  "black-cat-morning-glory-sparklers",
  "black-cat-artillery-shell-6-shot",
  "25-saturn-missile-battery-single",
  "black-cat-color-pearl-48-shot"
];

// These are the product IDs we want to show in the Bundle Packages section.
const bundlePackageIds = [
  "black-cat-the-beast",
  "black-cat-night-display",
  "black-cat-pyro-city",
  "black-cat-party-animal",
  "big-city-assortment",
  "diamond-backyard-6",
  "party-pack-6",
  "black-cat-pride-and-honor-6"
];

// These are the product IDs we want to show in the Big Show Finale section.
const bigShowFinaleIds = [
  "black-cat-american-freedom-train-180-shot",
  "born-leaders-757-shot",
  "red-white-and-brew-84-shot",
  "vip-180-shot",
  "grand-finale-432-shot",
  "trump-train-250-shot",
  "trumps-revenge-250-shot",
  "usa-conqueror-192-shot"
];

// This finds the empty box in index.html where firework cards will be placed.
const fireworksContainer = document.getElementById("fireworks-container");

// This finds the Full Inventory search box.
const inventorySearch = document.getElementById("inventory-search");

// This finds the Popular Picks section box.
const popularPicksContainer = document.getElementById("popular-picks-container");

// This finds the Bundle Packages section box.
const bundlePackagesContainer = document.getElementById("bundle-packages-container");

// This finds the Big Show Finale section box.
const bigShowFinaleContainer = document.getElementById("big-show-finale-container");

// This finds the box that shows the customer's selected fireworks.
const customerListText = document.getElementById("customer-list-text");

// This finds the subtotal paragraph.
const subtotalText = document.getElementById("subtotal-text");

// This finds the estimated tax paragraph.
const taxText = document.getElementById("tax-text");

// This finds the estimated total paragraph.
const totalText = document.getElementById("total-text");

// This finds the floating item count text.
const floatingItemCount = document.getElementById("floating-item-count");

// This finds the floating estimated total text.
const floatingTotalText = document.getElementById("floating-total-text");

// This creates the plus and minus button rows for a firework card.
// Some fireworks have one buying option.
// Other fireworks have multiple buying options, like 1 piece or 1 box.
function createBuyingOptionsHtml(firework) {
  // This checks if this firework has multiple buying options.
  if (firework.options !== undefined) {
    // This creates one row for each buying option.
    return firework.options.map(function (option) {
      // This gets the current selected quantity for this option, or 0 if none is selected.
      const currentQuantity = selectedFireworks[option.id] || 0;

      // This returns the HTML for one buying option row.
      return `
        <div class="buying-option-row">
          <div class="buying-option-info">
            <p class="buying-option-label">${option.label}</p>
            <p class="buying-option-price">$${option.price.toFixed(2)}</p>
          </div>

          <div class="buying-option-buttons">
            <button onclick="subtractFirework('${option.id}')">-</button>
            <span class="quantity-text" data-firework-id="${option.id}">${currentQuantity}</span>
            <button onclick="addFirework('${option.id}')">+</button>
          </div>
        </div>
      `;
    }).join("");
  }

   // This gets the current selected quantity for a normal one-option firework.
  const currentQuantity = selectedFireworks[firework.id] || 0;

  // This uses the product's unit label if it has one.
  // If it does not have one yet, it falls back to "1 ITEM".
  const unitLabel = firework.unitLabel || "1 ITEM";

  // This returns the normal one-option button layout.
  return `
    <p class="buying-option-label">${unitLabel}</p>
    <p>$${firework.price.toFixed(2)}</p>

    <button onclick="subtractFirework('${firework.id}')">-</button>
    <span class="quantity-text" data-firework-id="${firework.id}">${currentQuantity}</span>
    <button onclick="addFirework('${firework.id}')">+</button>
  `;
}

// This displays the fireworks in the Full Inventory section.
function displayFireworks() {
  // This clears the current Full Inventory cards before rebuilding them.
  fireworksContainer.innerHTML = "";

  // This gets whatever the customer typed into the search box.
  const searchText = inventorySearch.value.toLowerCase();

    // This keeps only fireworks that match the search text and selected category.
  const filteredFireworks = fireworks.filter(function (firework) {
    // This checks the firework name.
    const nameMatches = firework.name.toLowerCase().includes(searchText);

    // This checks the firework category.
    const categoryMatches = firework.category.toLowerCase().includes(searchText);

        // This checks the buying option labels if this firework has multiple buying options.
    const optionMatches =
      firework.options !== undefined &&
      firework.options.some(function (option) {
        return option.label.toLowerCase().includes(searchText);
      });

    // This checks whether the selected shopping type matches this firework.
const selectedShopTypeMatches =
  activeCategory === "All" ||
  firework.category === activeCategory ||
  firework.shopTypes.includes(activeCategory);

// This keeps the firework if it matches the search and the selected shopping type.
return (nameMatches || categoryMatches || optionMatches) && selectedShopTypeMatches;
  });
  // This shows a message if no fireworks match the search.
  if (filteredFireworks.length === 0) {
    // This tells the customer nothing matched their search.
    fireworksContainer.innerHTML = "<p>No fireworks found.</p>";

    // This stops the function here.
    return;
  }

  // This loops through each filtered firework.
  filteredFireworks.forEach(function (firework) {
    // This creates a new div for one firework card.
    const fireworkCard = document.createElement("div");

    // This gives the firework card a class name so CSS can style inventory cards only.
    fireworkCard.className = "inventory-card";

    // This fills the firework card with the product name, category, and buying option buttons.
    fireworkCard.innerHTML = `
      <h3>${firework.name}</h3>
      <p>${firework.category}</p>

      ${createBuyingOptionsHtml(firework)}
    `;

    // This places the firework card inside the Full Inventory section.
    fireworksContainer.appendChild(fireworkCard);
  });
}

// This displays a small group of featured fireworks in one of the top sections.
function displayFeaturedFireworks(container, featuredIds) {
  // This clears out the "coming soon" text inside the section.
  container.innerHTML = "";

  // This loops through each featured product ID.
  featuredIds.forEach(function (fireworkId) {
    // This finds the full firework object that matches the ID.
    const firework = findFireworkById(fireworkId);

    // This stops the code from breaking if an ID is typed wrong.
    if (firework === undefined) {
      return;
    }

    // This creates a new div for one featured firework card.
    const fireworkCard = document.createElement("div");

    // This gives the featured card the same style as our inventory cards.
    fireworkCard.className = "inventory-card";

    // This fills the featured card with product info and buying option buttons.
    fireworkCard.innerHTML = `
      <h3>${firework.name}</h3>
      <p>${firework.category}</p>

      ${createBuyingOptionsHtml(firework)}
    `;

    // This places the featured card inside the correct top section.
    container.appendChild(fireworkCard);
  });
}

// This fills the three top shopping sections with featured products.
function displayTopSections() {
  // This fills the Popular Picks section.
  displayFeaturedFireworks(popularPicksContainer, popularPickIds);

  // This fills the Bundle Packages section.
  displayFeaturedFireworks(bundlePackagesContainer, bundlePackageIds);

  // This fills the Big Show Finale section.
  displayFeaturedFireworks(bigShowFinaleContainer, bigShowFinaleIds);
}

// This gives a small phone vibration when the customer adds or subtracts an item.
function playHapticTap() {
  // This checks if the phone/browser supports vibration.
  if (navigator.vibrate) {
    // This makes a short 20 millisecond vibration.
    navigator.vibrate(20);
  }
}

// This function finds one firework or one buying option by its id.
function findFireworkById(fireworkId) {
  // This first checks normal one-option fireworks.
  const normalFirework = fireworks.find(function (firework) {
    // This checks if the current firework id matches the id we are looking for.
    return firework.id === fireworkId;
  });

  // This returns the normal firework if it was found.
  if (normalFirework !== undefined) {
    return normalFirework;
  }

  // This checks fireworks that have multiple buying options.
  for (let i = 0; i < fireworks.length; i++) {
    // This gets one firework from the list.
    const firework = fireworks[i];

    // This skips this firework if it does not have buying options.
    if (firework.options === undefined) {
      continue;
    }

    // This looks for the matching buying option.
    const matchingOption = firework.options.find(function (option) {
      // This checks if the option id matches the id we are looking for.
      return option.id === fireworkId;
    });

    // This returns a customer-list version of the option if it was found.
    if (matchingOption !== undefined) {
      return {
        id: matchingOption.id,
        name: firework.name + " - " + matchingOption.label,
        price: matchingOption.price,
        category: firework.category,
        shopTypes: firework.shopTypes
      };
    }
  }

  // This returns undefined if nothing was found.
  return undefined;
}

// This function adds one firework to the customer's list.
function addFirework(fireworkId) {
  // This checks if this firework is not already in the selected list.
  if (selectedFireworks[fireworkId] === undefined) {
    // This starts the quantity at 0 if it does not exist yet.
    selectedFireworks[fireworkId] = 0;
  }

  // This increases the selected firework quantity by 1.
  selectedFireworks[fireworkId] = selectedFireworks[fireworkId] + 1;

    // This plays a small haptic tap when an item is added.
  playHapticTap();

  // This updates the quantity number beside the firework in the main product list.
  updateQuantityText(fireworkId);

  // This updates the My Fireworks List area.
  updateCustomerList();
}

// This function subtracts one firework from the customer's list.
function subtractFirework(fireworkId) {
  // This checks if this firework is not already in the selected list.
  if (selectedFireworks[fireworkId] === undefined) {
    // This starts the quantity at 0 if it does not exist yet.
    selectedFireworks[fireworkId] = 0;
  }

    // This only subtracts if the quantity is above 0.
  if (selectedFireworks[fireworkId] > 0) {
    // This subtracts 1 from the selected firework quantity.
    selectedFireworks[fireworkId] = selectedFireworks[fireworkId] - 1;

    // This plays a small haptic tap when an item is subtracted.
    playHapticTap();
  }

  // This updates the quantity number beside the firework in the main product list.
  updateQuantityText(fireworkId);

  // This updates the My Fireworks List area.
  updateCustomerList();
}

// This function removes one firework completely from My Fireworks List.
function removeFirework(fireworkId) {
  // This finds the full firework info using the id.
  const firework = findFireworkById(fireworkId);

  // This asks the customer/team member to confirm before removing the item.
  const shouldRemove = confirm("Remove " + firework.name + " from list?");

  // This checks if they clicked OK.
  if (shouldRemove === true) {
    // This deletes the firework from the selected list completely.
    delete selectedFireworks[fireworkId];

    // This updates the quantity number beside the firework in the main product list.
    updateQuantityText(fireworkId);

    // This updates the My Fireworks List area.
    updateCustomerList();
  }
}

// This updates every visible quantity number for one firework.
function updateQuantityText(fireworkId) {
  // This finds every quantity number connected to this firework ID.
  const quantityTexts = document.querySelectorAll(`[data-firework-id="${fireworkId}"]`);

  // This gets the current selected quantity, or uses 0 if none exists.
  const currentQuantity = selectedFireworks[fireworkId] || 0;

  // This loops through every matching quantity number on the page.
  quantityTexts.forEach(function (quantityText) {
    // This updates the visible number.
    quantityText.textContent = currentQuantity;
  });
}

// This function updates the My Fireworks List section.
function updateCustomerList() {
  // This starts the subtotal at 0.
  let subtotal = 0;

  // This counts the total number of selected items.
let totalItems = 0;

  // This starts an empty list of HTML chunks for selected fireworks.
  let selectedLines = [];

  // This gets all selected firework ids from the selectedFireworks object.
  const selectedIds = Object.keys(selectedFireworks);

  // This goes through each selected firework id.
  selectedIds.forEach(function (fireworkId) {
    // This finds the full firework info using the id.
    const firework = findFireworkById(fireworkId);

    // This gets the selected quantity for this firework.
    const quantity = selectedFireworks[fireworkId];

    // This adds this quantity to the total item count.
totalItems = totalItems + quantity;

    // This calculates the total price for this one firework.
    const itemTotal = quantity * firework.price;

    // This adds this item total to the subtotal.
    subtotal = subtotal + itemTotal;

    // This creates one selected item card for My Fireworks List.
    selectedLines.push(`
      <div class="selected-list-card">
        <h3>${firework.name}</h3>
        <p>$${firework.price.toFixed(2)} each</p>

        <button onclick="subtractFirework('${firework.id}')">-</button>
        <span>${quantity}</span>
        <button onclick="addFirework('${firework.id}')">+</button>

        <p>Item Total: $${itemTotal.toFixed(2)}</p>

        <button onclick="removeFirework('${firework.id}')">Remove</button>
      </div>
    `);
  });

  // This checks if the customer has any fireworks on their list.
  if (selectedLines.length > 0) {
    // This shows all selected firework cards in My Fireworks List.
    customerListText.innerHTML = selectedLines.join("");
  } else {
    // This shows the empty message if nothing is selected.
    customerListText.textContent = "No fireworks selected yet.";
  }

  // This calculates the estimated tax.
  const estimatedTax = subtotal * taxRate;

  // This calculates the estimated total.
  const estimatedTotal = subtotal + estimatedTax;

  // This updates the subtotal text.
  subtotalText.textContent = "Subtotal: $" + subtotal.toFixed(2);

  // This updates the estimated tax text.
  taxText.textContent = "Estimated Tax: $" + estimatedTax.toFixed(2);

  // This updates the estimated total text.
  totalText.textContent = "Estimated Total: $" + estimatedTotal.toFixed(2);

  // This updates the floating item count.
floatingItemCount.textContent = totalItems + " items";

// This updates the floating total.
floatingTotalText.textContent = "$" + estimatedTotal.toFixed(2);
}

// This scrolls the customer down to the My Fireworks List section.
function scrollToCustomerList() {
  // This finds the My Fireworks List section.
  const myListSection = document.getElementById("my-list-section");

  // This scrolls smoothly to that section.
  myListSection.scrollIntoView({ behavior: "smooth" });
}

// This changes the selected category filter.
function setCategoryFilter(categoryName) {
  // This updates the active category value.
  activeCategory = categoryName;

    // This clears the search box when the customer chooses a new category.
  inventorySearch.value = "";

  // This finds all category buttons.
  const categoryButtons = document.querySelectorAll(".category-button");

  // This loops through every category button.
  categoryButtons.forEach(function (button) {
    // This removes the active look from every button.
    button.classList.remove("active-category");
  });

  // This finds the button the customer clicked by checking its text.
  categoryButtons.forEach(function (button) {
    // This checks if this button text matches the selected category.
    if (button.textContent === categoryName) {
      // This gives the selected button the active look.
      button.classList.add("active-category");
    }
  });

  // This rebuilds the Full Inventory list using the selected category.
  displayFireworks();
}

// This reruns the Full Inventory display every time the customer types in the search box.
inventorySearch.addEventListener("input", displayFireworks);

// This runs the displayFireworks function when the page loads.
displayFireworks();

// This runs the displayTopSections function when the page loads.
displayTopSections();



