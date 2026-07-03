// This is the tax rate used for the estimated total.
// Example: 0.0825 means 8.25% tax.
// Later, change this to your real local tax rate.
const taxRate = 0.09995;

const fireworks = [
  {
    itemNumber: 5,
    id: "standard-firecrackers-16-count",
    name: "STANDARD FIRECRACKERS - 16 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "standard-firecrackers-16-count-pack",
        label: "1 PACK OF 16",
        price: 0.50
      },
      {
        id: "standard-firecrackers-16-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 10,
    id: "standard-firecrackers-50-count",
    name: "STANDARD FIRECRACKERS - 50 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "standard-firecrackers-50-count-pack",
        label: "1 PACK OF 50",
        price: 1.50
      },
      {
        id: "standard-firecrackers-50-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 30.00
      }
    ]
  },
  {
    itemNumber: 15,
    id: "standard-firecrackers-100-count",
    name: "STANDARD FIRECRACKERS - 100 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "standard-firecrackers-100-count-pack",
        label: "1 PACK OF 100",
        price: 3.00
      },
      {
        id: "standard-firecrackers-100-count-bundle",
        label: "1 BUNDLE OF 20 PACKS",
        price: 30.00
      }
    ]
  },
  {
    itemNumber: 20,
    id: "standard-firecracker-roll-500",
    name: "STANDARD FIRECRACKER ROLL - 500 COUNT",
    price: 7.50,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 25,
    id: "standard-firecracker-roll-1000",
    name: "STANDARD FIRECRACKER ROLL - 1000 COUNT",
    price: 15.00,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 30,
    id: "black-cat-firecrackers-16-count",
    name: "BLACK CAT FIRECRACKERS - 16 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-16-count-pack",
        label: "1 PACK OF 16",
        price: 0.65
      },
      {
        id: "black-cat-firecrackers-16-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 13.00
      }
    ]
  },
  {
    itemNumber: 35,
    id: "black-cat-firecrackers-50-count",
    name: "BLACK CAT FIRECRACKERS - 50 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-50-count-pack",
        label: "1 PACK OF 50",
        price: 2.00
      },
      {
        id: "black-cat-firecrackers-50-count-bundle",
        label: "1 BUNDLE OF 40 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 40,
    id: "black-cat-firecrackers-100-count",
    name: "BLACK CAT FIRECRACKERS - 100 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-100-count-pack",
        label: "1 PACK OF 100",
        price: 4.00
      },
      {
        id: "black-cat-firecrackers-100-count-bundle",
        label: "1 BUNDLE OF 20 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 45,
    id: "black-cat-firecrackers-200-count",
    name: "BLACK CAT FIRECRACKERS - 200 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-200-count-pack",
        label: "1 PACK OF 200",
        price: 8.00
      },
      {
        id: "black-cat-firecrackers-200-count-bundle",
        label: "1 BUNDLE OF 10 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 50,
    id: "black-cat-firecrackers-400-count",
    name: "BLACK CAT FIRECRACKERS - 400 COUNT PACKS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-firecrackers-400-count-pack",
        label: "1 PACK OF 400",
        price: 16.00
      },
      {
        id: "black-cat-firecrackers-400-count-bundle",
        label: "1 BUNDLE OF 5 PACKS",
        price: 40.00
      }
    ]
  },
  {
    itemNumber: 55,
    id: "black-cat-firecracker-roll-1000",
    name: "BLACK CAT FIRECRACKER ROLL - 1000 COUNT",
    price: 20.00,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 60,
    id: "black-cat-firecracker-roll-2000",
    name: "BLACK CAT FIRECRACKER ROLL - 2000 COUNT",
    price: 40.00,
    unitLabel: "1 ROLL",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 65,
    id: "m-60-m-90-crackers",
    name: "M-60 / M-90 CRACKERS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "m-60-m-90-crackers-piece",
        label: "EACH",
        price: 0.60
      },
      {
        id: "m-60-m-90-crackers-box",
        label: "1 BOX OF 36",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 70,
    id: "black-cat-m-150-salute-crackers",
    name: "BLACK CAT M-150 SALUTE CRACKERS",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"],
    options: [
      {
        id: "black-cat-m-150-salute-crackers-piece",
        label: "EACH",
        price: 0.60
      },
      {
        id: "black-cat-m-150-salute-crackers-box",
        label: "1 BOX OF 36",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 75,
    id: "bunker-buster-crackers",
    name: "BUNKER BUSTER CRACKERS",
    category: "Firecrackers",
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
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 80,
    id: "black-cat-little-dynamite",
    name: "BLACK CAT LITTLE DYNAMITE",
    price: 3.00,
    unitLabel: "1 BOX",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  },
  {
    itemNumber: 85,
    id: "magic-whip-with-boom",
    name: "MAGIC WHIP WITH BOOM",
    price: 7.50,
    unitLabel: "1 BOX",
    category: "Firecrackers",
    shopTypes: ["Firecrackers"]
  }
  ,
  {
    itemNumber: 90,
    id: "punks",
    name: "PUNKS",
    price: 0.03,
    unitLabel: "EACH",
    category: "Punks",
    shopTypes: ["Punks", "Accessories"]
  },
  {
    itemNumber: 95,
    id: "black-cat-punks",
    name: "BLACK CAT PUNKS",
    price: 0.24,
    unitLabel: "EACH",
    category: "Punks",
    shopTypes: ["Punks", "Accessories"]
  },
  {
    itemNumber: 100,
    id: "jumbo-punks",
    name: "JUMBO PUNKS",
    price: 0.30,
    unitLabel: "EACH",
    category: "Punks",
    shopTypes: ["Punks", "Accessories"]
  },
  {
    itemNumber: 105,
    id: "x-wing-missile-4-inch",
    name: "X-WING MISSILE - 4 INCH",
    category: "Missiles",
    shopTypes: ["Missiles", "Flying Items"],
    options: [
      {
        id: "x-wing-missile-4-inch-piece",
        label: "EACH",
        price: 1.75
      },
      {
        id: "x-wing-missile-4-inch-box",
        label: "1 BOX OF 12",
        price: 21.00
      }
    ]
  },
  {
    itemNumber: 110,
    id: "x-wing-missile-6-inch",
    name: "X-WING MISSILE - 6 INCH",
    category: "Missiles",
    shopTypes: ["Missiles", "Flying Items"],
    options: [
      {
        id: "x-wing-missile-6-inch-piece",
        label: "EACH",
        price: 1.88
      },
      {
        id: "x-wing-missile-6-inch-box",
        label: "1 BOX OF 12",
        price: 22.50
      }
    ]
  },
  {
    itemNumber: 115,
    id: "assorted-missile-10-inch",
    name: "ASSORTED MISSILE - 10 INCH",
    category: "Missiles",
    shopTypes: ["Missiles", "Flying Items"],
    options: [
      {
        id: "assorted-missile-10-inch-piece",
        label: "EACH",
        price: 4.25
      },
      {
        id: "assorted-missile-10-inch-pack",
        label: "1 PACK OF 6",
        price: 25.50
      }
    ]
  },
  {
    itemNumber: 120,
    id: "assorted-missile-12-inch",
    name: "ASSORTED MISSILE - 12 INCH",
    category: "Missiles",
    shopTypes: ["Missiles", "Flying Items"],
    options: [
      {
        id: "assorted-missile-12-inch-piece",
        label: "EACH",
        price: 4.50
      },
      {
        id: "assorted-missile-12-inch-pack",
        label: "1 PACK OF 6",
        price: 27.00
      }
    ]
  },
  {
    itemNumber: 125,
    id: "strike-eagle-missile",
    name: "STRIKE EAGLE MISSILE",
    category: "Missiles",
    shopTypes: ["Missiles", "Flying Items"],
    options: [
      {
        id: "strike-eagle-missile-piece",
        label: "EACH",
        price: 4.50
      },
      {
        id: "strike-eagle-missile-box",
        label: "1 BOX OF 4",
        price: 18.00
      }
    ]
  },
  {
    itemNumber: 130,
    id: "neptune-missile",
    name: "NEPTUNE MISSILE",
    price: 4.50,
    unitLabel: "EACH",
    category: "Missiles",
    shopTypes: ["Missiles", "Flying Items"]
  },

  {
    itemNumber: 135,
    id: "single-night-parachute",
    name: "SINGLE NIGHT PARACHUTE",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"],
    options: [
      {
        id: "single-night-parachute-piece",
        label: "EACH",
        price: 1.25
      },
      {
        id: "single-night-parachute-box",
        label: "1 BOX OF 6",
        price: 7.50
      }
    ]
  },
  {
    itemNumber: 140,
    id: "air-trooper-parachute",
    name: "AIR TROOPER PARACHUTE",
    price: 10.00,
    unitLabel: "EACH",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"]
  },
  {
    itemNumber: 145,
    id: "giant-parachute-40-inch",
    name: "GIANT PARACHUTE - 40 INCH",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"],
    options: [
      {
        id: "giant-parachute-40-inch-piece",
        label: "EACH",
        price: 3.75
      },
      {
        id: "giant-parachute-40-inch-box",
        label: "1 BOX OF 4",
        price: 15.00
      }
    ]
  },
  {
    itemNumber: 150,
    id: "oh-chute-parachute",
    name: "OH CHUTE PARACHUTE",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"],
    options: [
      {
        id: "oh-chute-parachute-piece",
        label: "EACH",
        price: 5.00
      },
      {
        id: "oh-chute-parachute-box",
        label: "1 BOX OF 4",
        price: 20.00
      }
    ]
  },
  {
    itemNumber: 155,
    id: "parachute-battalion-11-shot",
    name: "PARACHUTE BATTALION - 11 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"]
  },
  {
    itemNumber: 160,
    id: "princess-parachute",
    name: "PRINCESS PARACHUTE",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"],
    options: [
      {
        id: "princess-parachute-piece",
        label: "EACH",
        price: 10.00
      },
      {
        id: "princess-parachute-box",
        label: "1 BOX OF 2",
        price: 20.00
      }
    ]
  },
  {
    itemNumber: 165,
    id: "base-jump-parachute-5-shot",
    name: "BASE JUMP PARACHUTE - 5 SHOT",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"],
    options: [
      {
        id: "base-jump-parachute-5-shot-piece",
        label: "EACH",
        price: 5.00
      },
      {
        id: "base-jump-parachute-5-shot-pack",
        label: "1 PACK OF 4",
        price: 20.00
      }
    ]
  },
  {
    itemNumber: 170,
    id: "chutes-25-shot",
    name: "CHUTES - 25 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Parachutes",
    shopTypes: ["Parachutes", "Daytime Fun"]
  }
  ,
  {
    itemNumber: 175,
    id: "colored-sparklers-8-inch",
    name: "COLORED SPARKLERS - 8 INCH",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "colored-sparklers-8-inch-box",
        label: "1 BOX OF 6 SPARKLERS",
        price: 1.00
      },
      {
        id: "colored-sparklers-8-inch-pack",
        label: "1 PACK OF 12 BOXES",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 180,
    id: "gold-sparklers-8-inch",
    name: "GOLD SPARKLERS - 8 INCH",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "gold-sparklers-8-inch-box",
        label: "1 BOX OF 6 SPARKLERS",
        price: 1.00
      },
      {
        id: "gold-sparklers-8-inch-pack",
        label: "1 PACK OF 12 BOXES",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 185,
    id: "colored-sparklers-10-inch",
    name: "COLORED SPARKLERS - 10 INCH",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "colored-sparklers-10-inch-box",
        label: "1 BOX OF 8 SPARKLERS",
        price: 1.25
      },
      {
        id: "colored-sparklers-10-inch-pack",
        label: "1 PACK OF 12 BOXES",
        price: 15.00
      }
    ]
  },
  {
    itemNumber: 190,
    id: "gold-sparklers-10-inch",
    name: "GOLD SPARKLERS - 10 INCH",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "gold-sparklers-10-inch-box",
        label: "1 BOX OF 8 SPARKLERS",
        price: 1.25
      },
      {
        id: "gold-sparklers-10-inch-pack",
        label: "1 PACK OF 12 BOXES",
        price: 15.00
      }
    ]
  },
  {
    itemNumber: 195,
    id: "gold-sparklers-20-inch",
    name: "GOLD SPARKLERS - 20 INCH",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "gold-sparklers-20-inch-pack",
        label: "1 PACK OF 4 SPARKLERS",
        price: 5.00
      },
      {
        id: "gold-sparklers-20-inch-bundle",
        label: "1 BUNDLE OF 6 PACKS",
        price: 30.00
      }
    ]
  },
  {
    itemNumber: 200,
    id: "gold-magic-sparklers-20-inch",
    name: "GOLD MAGIC SPARKLERS - 20 INCH",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "gold-magic-sparklers-20-inch-piece",
        label: "1 SPARKLER",
        price: 1.25
      },
      {
        id: "gold-magic-sparklers-20-inch-pack",
        label: "1 PACK OF 6",
        price: 7.50
      }
    ]
  },
  {
    itemNumber: 205,
    id: "black-cat-morning-glory-sparklers",
    name: "BLACK CAT MORNING GLORY SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "black-cat-morning-glory-sparklers-bundle",
        label: "1 BUNDLE OF 6 SPARKLERS",
        price: 0.65
      },
      {
        id: "black-cat-morning-glory-sparklers-box",
        label: "1 BOX OF 24 BUNDLES",
        price: 15.00
      }
    ]
  },
  {
    itemNumber: 210,
    id: "morning-glory-sparklers",
    name: "MORNING GLORY SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "morning-glory-sparklers-bundle",
        label: "1 BUNDLE OF 6 SPARKLERS",
        price: 0.65
      },
      {
        id: "morning-glory-sparklers-box",
        label: "1 BOX OF 24 BUNDLES",
        price: 15.00
      }
    ]
  },
  {
    itemNumber: 215,
    id: "morning-glory-sparklers-36-count",
    name: "MORNING GLORY SPARKLERS - 36 COUNT BAG",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "morning-glory-sparklers-36-count-piece",
        label: "1 SPARKLER",
        price: 0.85
      },
      {
        id: "morning-glory-sparklers-36-count-bag",
        label: "1 BAG OF 36",
        price: 5.00
      }
    ]
  },
  {
    itemNumber: 220,
    id: "black-cat-neon-sparklers",
    name: "BLACK CAT NEON SPARKLERS",
    category: "Sparklers",
    shopTypes: ["Sparklers", "Daytime Fun"],
    options: [
      {
        id: "black-cat-neon-sparklers-piece",
        label: "1 SPARKLER",
        price: 0.70
      },
      {
        id: "black-cat-neon-sparklers-pack",
        label: "1 PACK OF 5",
        price: 3.50
      }
    ]
  },

  {
    itemNumber: 225,
    id: "roman-candle-5-ball",
    name: "ROMAN CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "roman-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 0.75
      },
      {
        id: "roman-candle-5-ball-pack",
        label: "1 PACK OF 6",
        price: 4.50
      }
    ]
  },
  {
    itemNumber: 230,
    id: "americas-candle-5-ball",
    name: "AMERICA'S CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "americas-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 3.00
      },
      {
        id: "americas-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 235,
    id: "brothers-blackjack-candle-5-ball",
    name: "BROTHERS BLACKJACK CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "brothers-blackjack-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 3.00
      },
      {
        id: "brothers-blackjack-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 240,
    id: "contraband-candle-5-ball",
    name: "CONTRABAND CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "contraband-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 3.00
      },
      {
        id: "contraband-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 245,
    id: "brothers-crazy-aces-candle-5-ball",
    name: "BROTHERS CRAZY ACES CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "brothers-crazy-aces-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 3.00
      },
      {
        id: "brothers-crazy-aces-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 250,
    id: "dragon-tails-candle-5-ball",
    name: "DRAGON TAILS CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "dragon-tails-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 3.00
      },
      {
        id: "dragon-tails-candle-5-ball-pack",
        label: "1 PACK OF 5",
        price: 15.00
      }
    ]
  },
  {
    itemNumber: 255,
    id: "black-cat-gatlin-pack-5-ball",
    name: "BLACK CAT GATLIN PACK - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "black-cat-gatlin-pack-5-ball-candle",
        label: "1 CANDLE",
        price: 3.50
      },
      {
        id: "black-cat-gatlin-pack-5-ball-pack",
        label: "1 PACK OF 8",
        price: 28.00
      }
    ]
  },
  {
    itemNumber: 260,
    id: "black-cat-premium-candle-5-ball",
    name: "BLACK CAT PREMIUM CANDLE - 5 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "black-cat-premium-candle-5-ball-piece",
        label: "1 CANDLE",
        price: 3.00
      },
      {
        id: "black-cat-premium-candle-5-ball-pack",
        label: "1 PACK OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 265,
    id: "thundermania-candle-8-ball",
    name: "THUNDERMANIA CANDLE - 8 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "thundermania-candle-8-ball-piece",
        label: "1 CANDLE",
        price: 2.00
      },
      {
        id: "thundermania-candle-8-ball-pack",
        label: "1 PACK OF 4",
        price: 8.00
      }
    ]
  }
  ,
  {
    itemNumber: 270,
    id: "roman-candle-10-ball",
    name: "ROMAN CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "roman-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.25
      },
      {
        id: "roman-candle-10-ball-pack",
        label: "1 PACK OF 6",
        price: 7.50
      }
    ]
  },
  {
    itemNumber: 275,
    id: "boombomb-candle-10-ball",
    name: "BOOMBOMB CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "boombomb-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "boombomb-candle-10-ball-pack",
        label: "1 PACK OF 6",
        price: 9.00
      }
    ]
  },
  {
    itemNumber: 280,
    id: "camo-pack-candle-10-ball",
    name: "CAMO PACK CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "camo-pack-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "camo-pack-candle-10-ball-pack",
        label: "1 PACK OF 12",
        price: 18.00
      }
    ]
  },
  {
    itemNumber: 285,
    id: "brothers-cherry-on-top-candle-10-ball",
    name: "BROTHERS CHERRY ON TOP CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "brothers-cherry-on-top-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "brothers-cherry-on-top-candle-10-ball-pack",
        label: "1 PACK OF 4",
        price: 6.00
      }
    ]
  },
  {
    itemNumber: 290,
    id: "crackling-candle-10-ball",
    name: "CRACKLING CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "crackling-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "crackling-candle-10-ball-pack",
        label: "1 PACK OF 6",
        price: 9.00
      }
    ]
  },
  {
    itemNumber: 295,
    id: "exploding-candle-10-ball",
    name: "EXPLODING CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "exploding-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "exploding-candle-10-ball-pack",
        label: "1 PACK OF 4",
        price: 6.00
      }
    ]
  },
  {
    itemNumber: 300,
    id: "black-cat-handful-candle-10-ball",
    name: "BLACK CAT HANDFUL CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "black-cat-handful-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "black-cat-handful-candle-10-ball-pack",
        label: "1 PACK OF 5",
        price: 7.50
      }
    ]
  },
  {
    itemNumber: 305,
    id: "wild-side-candle-10-ball",
    name: "WILD SIDE CANDLE - 10 BALL",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"],
    options: [
      {
        id: "wild-side-candle-10-ball-piece",
        label: "1 CANDLE",
        price: 1.50
      },
      {
        id: "wild-side-candle-10-ball-pack",
        label: "1 PACK OF 8",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 310,
    id: "powerball-140-ball",
    name: "POWERBALL - 140 BALL",
    price: 20.00,
    unitLabel: "EACH",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 315,
    id: "gangster-gun-196-ball",
    name: "GANGSTER GUN - 196 BALL",
    price: 20.00,
    unitLabel: "EACH",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 320,
    id: "brothers-gatling-gun-240-ball",
    name: "BROTHERS GATLING GUN - 240 BALL",
    price: 40.00,
    unitLabel: "EACH",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 325,
    id: "mini-blaster-280-ball",
    name: "MINI BLASTER - 280 BALL",
    price: 15.00,
    unitLabel: "EACH",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 330,
    id: "brothers-heavy-gear-380-ball",
    name: "BROTHERS HEAVY GEAR - 380 BALL",
    price: 50.00,
    unitLabel: "EACH",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 335,
    id: "steel-titan-mortar-384-ball",
    name: "STEEL TITAN MORTAR - 384 BALL",
    price: 40.00,
    unitLabel: "EACH",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },

  {
    itemNumber: 340,
    id: "rotating-machine-gun-352-shot",
    name: "ROTATING MACHINE GUN - 352 SHOT",
    price: 140.00,
    unitLabel: "EACH",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles", "Rotating Roman Candles"]
  },
  {
    itemNumber: 345,
    id: "cartridge-rotating-machine-gun-352-shot",
    name: "CARTRIDGE ROTATING MACHINE GUN - 352 SHOT",
    price: 30.00,
    unitLabel: "EACH",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles", "Rotating Roman Candles"]
  },
  {
    itemNumber: 350,
    id: "machine-gun-kelly-388-shot",
    name: "MACHINE GUN KELLY - 388 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles", "Rotating Roman Candles"]
  }
  ,
  {
    itemNumber: 355,
    id: "5-minute-smoke",
    name: "5 MINUTE SMOKE",
    price: 3.00,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 360,
    id: "clay-colored-smoke-balls",
    name: "CLAY COLORED SMOKE BALLS",
    price: 3.25,
    unitLabel: "1 BAG OF 6",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 365,
    id: "sawdust-colored-smoke-balls",
    name: "SAWDUST COLORED SMOKE BALLS",
    price: 3.25,
    unitLabel: "1 BAG OF 6",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 370,
    id: "cloud-nine",
    name: "CLOUD NINE",
    price: 15.00,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 375,
    id: "color-grenade-with-pull-string",
    name: "COLOR GRENADE WITH PULL STRING",
    price: 3.00,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 380,
    id: "jumbo-smoke-crayons",
    name: "JUMBO SMOKE CRAYONS",
    price: 7.50,
    unitLabel: "1 BOX OF 6",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 385,
    id: "mammoth-smoke",
    name: "MAMMOTH SMOKE",
    price: 1.50,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 390,
    id: "mini-tube-smoke",
    name: "MINI TUBE SMOKE",
    price: 1.50,
    unitLabel: "1 PACK OF 4",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 395,
    id: "black-cat-neon-camo-smoke",
    name: "BLACK CAT NEON CAMO SMOKE",
    price: 6.00,
    unitLabel: "1 PACK OF 4",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 400,
    id: "patriot-neon-assorted-smoke",
    name: "PATRIOT / NEON ASSORTED SMOKE",
    price: 1.50,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 405,
    id: "never-ending-smoke",
    name: "NEVER-ENDING SMOKE",
    price: 10.00,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 410,
    id: "reaper-smoke-black",
    name: "REAPER SMOKE - BLACK",
    price: 4.00,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 415,
    id: "usa-smoke",
    name: "USA SMOKE",
    price: 6.00,
    unitLabel: "EACH",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },

  {
    itemNumber: 420,
    id: "dancing-trolls",
    name: "DANCING TROLLS",
    price: 8.00,
    unitLabel: "1 BOX OF 4",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 425,
    id: "friendship-pagoda",
    name: "FRIENDSHIP PAGODA",
    price: 3.00,
    unitLabel: "EACH",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 430,
    id: "ground-bloom-flowers",
    name: "GROUND BLOOM FLOWERS",
    price: 1.25,
    unitLabel: "1 PACK OF 6",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 435,
    id: "happy-lamp-large",
    name: "HAPPY LAMP - LARGE",
    price: 6.00,
    unitLabel: "1 BOX",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 440,
    id: "head-spin",
    name: "HEAD SPIN",
    price: 8.00,
    unitLabel: "1 BOX OF 2",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 445,
    id: "lotus-lantern",
    name: "LOTUS LANTERN",
    price: 6.00,
    unitLabel: "1 BOX OF 4",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 450,
    id: "spinning-top",
    name: "SPINNING TOP",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"],
    options: [
      {
        id: "spinning-top-piece",
        label: "EACH",
        price: 1.25
      },
      {
        id: "spinning-top-pack",
        label: "1 PACK OF 8",
        price: 5.00
      }
    ]
  },
  {
    itemNumber: 455,
    id: "black-cat-tasmanian-devil",
    name: "BLACK CAT TASMANIAN DEVIL",
    price: 6.00,
    unitLabel: "1 BOX OF 3",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  },
  {
    itemNumber: 460,
    id: "whistling-chaser-with-report",
    name: "WHISTLING CHASER WITH REPORT",
    price: 2.00,
    unitLabel: "1 PACK OF 12",
    category: "Ground Spinners",
    shopTypes: ["Ground Spinners", "Daytime Fun"]
  }
  ,
  {
    itemNumber: 465,
    id: "color-spaceship-2-pack",
    name: "2 COLOR SPACESHIP",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "color-spaceship-2-pack-piece",
        label: "EACH",
        price: 1.50
      },
      {
        id: "color-spaceship-2-pack-package",
        label: "1 PACKAGE OF 3",
        price: 4.50
      }
    ]
  },
  {
    itemNumber: 470,
    id: "two-stage-turbo-phantom",
    name: "2 STAGE TURBO PHANTOM",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "two-stage-turbo-phantom-piece",
        label: "EACH",
        price: 1.50
      },
      {
        id: "two-stage-turbo-phantom-box",
        label: "1 BOX OF 6",
        price: 9.00
      }
    ]
  },
  {
    itemNumber: 475,
    id: "artificial-satellites",
    name: "ARTIFICIAL SATELLITES",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "artificial-satellites-pack",
        label: "1 PACK OF 12",
        price: 2.00
      },
      {
        id: "artificial-satellites-box",
        label: "1 BOX OF 12 PACKS",
        price: 24.00
      }
    ]
  },
  {
    itemNumber: 480,
    id: "drone",
    name: "DRONE",
    price: 15.00,
    unitLabel: "EACH",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    itemNumber: 485,
    id: "fanta-sea",
    name: "FANTA SEA",
    price: 10.00,
    unitLabel: "EACH",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    itemNumber: 490,
    id: "brothers-lady-bugs",
    name: "BROTHERS LADY BUGS",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "brothers-lady-bugs-piece",
        label: "EACH",
        price: 2.50
      },
      {
        id: "brothers-lady-bugs-pack",
        label: "1 PACK OF 3",
        price: 7.50
      }
    ]
  },
  {
    itemNumber: 495,
    id: "brothers-magic-crystal",
    name: "BROTHERS MAGIC CRYSTAL",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "brothers-magic-crystal-piece",
        label: "EACH",
        price: 2.50
      },
      {
        id: "brothers-magic-crystal-box",
        label: "1 BOX OF 4",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 500,
    id: "pigs-can-fly",
    name: "PIGS CAN FLY",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "pigs-can-fly-piece",
        label: "EACH",
        price: 3.00
      },
      {
        id: "pigs-can-fly-box",
        label: "1 BOX OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 505,
    id: "sky-smoke",
    name: "SKY SMOKE",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Smoke", "Daytime Fun"],
    options: [
      {
        id: "sky-smoke-piece",
        label: "EACH",
        price: 2.25
      },
      {
        id: "sky-smoke-box",
        label: "1 BOX OF 4",
        price: 9.00
      }
    ]
  },
  {
    itemNumber: 510,
    id: "tiger-tails",
    name: "TIGER TAILS",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "tiger-tails-piece",
        label: "EACH",
        price: 1.50
      },
      {
        id: "tiger-tails-box",
        label: "1 BOX OF 6",
        price: 9.00
      }
    ]
  },
  {
    itemNumber: 515,
    id: "black-cat-uav",
    name: "BLACK CAT UAV",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "black-cat-uav-piece",
        label: "EACH",
        price: 2.00
      },
      {
        id: "black-cat-uav-pack",
        label: "1 PACK OF 3",
        price: 6.00
      }
    ]
  },
  {
    itemNumber: 520,
    id: "zips-zip-blades",
    name: "ZIPS / ZIP BLADES",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"],
    options: [
      {
        id: "zips-zip-blades-pack",
        label: "1 PACK OF 6",
        price: 1.50
      },
      {
        id: "zips-zip-blades-box",
        label: "1 BOX OF 40 PACKS",
        price: 60.00
      }
    ]
  }
  ,
  {
    itemNumber: 525,
    id: "brothers-big-brute-plastic",
    name: "BROTHERS BIG BRUTE",
    price: 10.00,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 530,
    id: "climbing-panda",
    name: "CLIMBING PANDA",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"],
    options: [
      {
        id: "climbing-panda-piece",
        label: "EACH",
        price: 3.50
      },
      {
        id: "climbing-panda-box",
        label: "1 BOX OF 6",
        price: 10.50
      }
    ]
  },
  {
    itemNumber: 535,
    id: "crackling-balls",
    name: "CRACKLING BALLS",
    price: 1.25,
    unitLabel: "1 BAG OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 540,
    id: "flashing-strobe",
    name: "FLASHING STROBE",
    price: 1.50,
    unitLabel: "1 PACK",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 545,
    id: "hen-laying-eggs",
    name: "HEN LAYING EGGS",
    price: 0.50,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 555,
    id: "jumbo-strobe-large",
    name: "JUMBO STROBE - LARGE",
    price: 6.00,
    unitLabel: "1 PACK OF 3",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 560,
    id: "kryptonite",
    name: "KRYPTONITE",
    price: 7.50,
    unitLabel: "1 PACK OF 3",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 570,
    id: "night-crawler-worms-snakes",
    name: "NIGHT CRAWLER WORMS / SNAKES",
    price: 1.25,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 575,
    id: "party-poppers-12-count",
    name: "PARTY POPPERS - 12 COUNT",
    price: 3.00,
    unitLabel: "1 BOX OF 12",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 585,
    id: "black-cat-party-poppers-6-count",
    name: "BLACK CAT PARTY POPPERS - 6 COUNT",
    price: 1.50,
    unitLabel: "1 PACK OF 6",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 590,
    id: "pooping-elephant",
    name: "POOPING ELEPHANT",
    price: 1.75,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 595,
    id: "poopy-puppy-12-count",
    name: "POOPY PUPPY - 12 COUNT",
    price: 1.75,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 600,
    id: "poopy-puppy-144-count",
    name: "POOPY PUPPY - 144 COUNT",
    price: 1.75,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 605,
    id: "red-dirt-rampage",
    name: "RED DIRT RAMPAGE",
    price: 5.00,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 610,
    id: "snakes-6-pack-assortment-120-count",
    name: "SNAKES - 6 PACK ASSORTMENT",
    price: 4.50,
    unitLabel: "1 PACK",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 615,
    id: "snakes-6-pack-assortment-144-count",
    name: "SNAKES - 6 PACK ASSORTMENT",
    price: 4.50,
    unitLabel: "1 PACK",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 620,
    id: "shark-family",
    name: "SHARK FAMILY",
    price: 20.00,
    unitLabel: "1 PACK",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 625,
    id: "snappers",
    name: "SNAPPERS",
    price: 0.75,
    unitLabel: "1 BOX",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 630,
    id: "solo-spinner",
    name: "SOLO SPINNER",
    price: 5.00,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 635,
    id: "spirospark",
    name: "SPIROSPARK",
    price: 25.00,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 640,
    id: "toy-tanks",
    name: "TOY TANKS",
    price: 1.00,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 645,
    id: "brothers-terrific-tyrant",
    name: "BROTHERS TERRIFIC TYRANT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 650,
    id: "torpedo-thunder-snaps",
    name: "TORPEDO / THUNDER SNAPS",
    price: 1.50,
    unitLabel: "EACH",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  }
  ,
  {
    itemNumber: 655,
    id: "jumbo-cone-fountain-5-inch",
    name: "JUMBO CONE FOUNTAIN - 5 INCH",
    price: 5.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 660,
    id: "magic-potion",
    name: "MAGIC POTION",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 665,
    id: "crazy-crackups-junebug",
    name: "CRAZY CRACKUPS / JUNEBUG",
    category: "Fountains",
    shopTypes: ["Fountains"],
    options: [
      {
        id: "crazy-crackups-junebug-piece",
        label: "EACH",
        price: 3.00
      },
      {
        id: "crazy-crackups-junebug-box",
        label: "1 BOX OF 6",
        price: 9.00
      }
    ]
  },
  {
    itemNumber: 670,
    id: "cuckoo-fountain",
    name: "CUCKOO FOUNTAIN",
    category: "Fountains",
    shopTypes: ["Fountains"],
    options: [
      {
        id: "cuckoo-fountain-piece",
        label: "EACH",
        price: 4.00
      },
      {
        id: "cuckoo-fountain-box",
        label: "1 BOX OF 6",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 675,
    id: "happiness-fountain",
    name: "HAPPINESS FOUNTAIN",
    category: "Fountains",
    shopTypes: ["Fountains"],
    options: [
      {
        id: "happiness-fountain-piece",
        label: "EACH",
        price: 1.50
      },
      {
        id: "happiness-fountain-box",
        label: "1 BOX OF 6",
        price: 4.50
      }
    ]
  },
  {
    itemNumber: 680,
    id: "hn-60-fountain",
    name: "HN 60 FOUNTAIN",
    category: "Fountains",
    shopTypes: ["Fountains"],
    options: [
      {
        id: "hn-60-fountain-piece",
        label: "EACH",
        price: 5.00
      },
      {
        id: "hn-60-fountain-box",
        label: "1 BOX OF 4",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 685,
    id: "hn-90-fountain",
    name: "HN 90 FOUNTAIN",
    category: "Fountains",
    shopTypes: ["Fountains"],
    options: [
      {
        id: "hn-90-fountain-piece",
        label: "EACH",
        price: 6.00
      },
      {
        id: "hn-90-fountain-box",
        label: "1 BOX OF 4",
        price: 12.00
      }
    ]
  },
  {
    itemNumber: 690,
    id: "killer-bees",
    name: "KILLER BEES",
    category: "Fountains",
    shopTypes: ["Fountains"],
    options: [
      {
        id: "killer-bees-piece",
        label: "EACH",
        price: 5.00
      },
      {
        id: "killer-bees-box",
        label: "1 BOX OF 4",
        price: 10.00
      }
    ]
  },
  {
    itemNumber: 695,
    id: "black-cat-3-for-1-fountains",
    name: "BLACK CAT 3 FOR 1 FOUNTAINS",
    price: 12.00,
    unitLabel: "1 PACK OF 3",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 700,
    id: "brothers-a-to-z",
    name: "BROTHERS A TO Z",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 705,
    id: "america-forever",
    name: "AMERICA FOREVER",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 710,
    id: "arachnophobia",
    name: "ARACHNOPHOBIA",
    price: 35.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 715,
    id: "brothers-bad-apple",
    name: "BROTHERS BAD APPLE",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 720,
    id: "bad-cactus",
    name: "BAD CACTUS",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 725,
    id: "brothers-bees-knees",
    name: "BROTHERS BEES KNEES",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 730,
    id: "brothers-born-and-raised",
    name: "BROTHERS BORN AND RAISED",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 735,
    id: "brothers-bowl-o-cherries",
    name: "BROTHERS BOWL O CHERRIES",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 740,
    id: "bring-it-minion",
    name: "BRING IT - MINION",
    price: 12.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 745,
    id: "california-sunrise",
    name: "CALIFORNIA SUNRISE",
    price: 7.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 750,
    id: "cool-fountain",
    name: "COOL FOUNTAIN",
    price: 10.00,
    unitLabel: "1 PACK OF 4",
    category: "Fountains",
    shopTypes: ["Fountains"]
  }
  ,
  {
    itemNumber: 755,
    id: "cosmic-spin",
    name: "COSMIC SPIN",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    itemNumber: 760,
    id: "dancing-with-ghost",
    name: "DANCING WITH GHOST",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 765,
    id: "despicable-minion",
    name: "DESPICABLE - MINION",
    price: 6.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 770,
    id: "dragon-fire",
    name: "DRAGON FIRE",
    price: 12.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 775,
    id: "brothers-extra-zesty",
    name: "BROTHERS EXTRA ZESTY",
    price: 12.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 780,
    id: "brothers-fairies-in-a-jar",
    name: "BROTHERS FAIRIES IN A JAR",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 785,
    id: "black-cat-fantastic-4",
    name: "BLACK CAT FANTASTIC 4",
    price: 12.00,
    unitLabel: "1 PACK OF 4",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 790,
    id: "flower-child",
    name: "FLOWER CHILD",
    price: 17.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 795,
    id: "brothers-flutter-by",
    name: "BROTHERS FLUTTER BY",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 800,
    id: "freezy-pops",
    name: "FREEZY POPS",
    price: 1.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 805,
    id: "ftn-dew",
    name: "FTN DEW",
    price: 12.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 810,
    id: "go-go-balls",
    name: "GO GO BALLS",
    price: 17.50,
    unitLabel: "1 BOX OF 2",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 815,
    id: "havana-heat",
    name: "HAVANA HEAT",
    price: 12.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 820,
    id: "hoot-hoot-hooray",
    name: "HOOT HOOT HOORAY",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 825,
    id: "black-cat-hyper-chill",
    name: "BLACK CAT HYPER CHILL",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 830,
    id: "jr-snow-cone-fountain",
    name: "JR SNOW CONE FOUNTAIN",
    price: 12.00,
    unitLabel: "1 BOX OF 4",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 835,
    id: "kevin-minion",
    name: "KEVIN - MINION",
    price: 6.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 840,
    id: "koi-pond",
    name: "KOI POND",
    price: 17.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 845,
    id: "brothers-kooky-katerpillar",
    name: "BROTHERS KOOKY KATERPILLAR",
    price: 22.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 850,
    id: "lava-lamp",
    name: "LAVA LAMP",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 855,
    id: "black-cat-mad-cat",
    name: "BLACK CAT MAD CAT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  }
  ,
  {
    itemNumber: 860,
    id: "mad-monkey",
    name: "MAD MONKEY",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 865,
    id: "maximum-velocity",
    name: "MAXIMUM VELOCITY",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 870,
    id: "black-cat-medusa-fountain",
    name: "BLACK CAT MEDUSA FOUNTAIN",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 875,
    id: "meow",
    name: "MEOW",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 880,
    id: "military-tank-fire-storm",
    name: "MILITARY TANK / FIRE STORM",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    itemNumber: 885,
    id: "neon-jelly-beans",
    name: "NEON JELLY BEANS",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 890,
    id: "pika-pika",
    name: "PIKA PIKA",
    price: 22.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 895,
    id: "pina-colada",
    name: "PINA COLADA",
    price: 12.50,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 900,
    id: "poop",
    name: "POOP",
    price: 4.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 905,
    id: "princess-purse",
    name: "PRINCESS PURSE",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 910,
    id: "puppy-fountain",
    name: "PUPPY FOUNTAIN",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    itemNumber: 915,
    id: "puzzle-cube",
    name: "PUZZLE CUBE",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 920,
    id: "pyro-patrick",
    name: "PYRO PATRICK",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 925,
    id: "pyro-shed",
    name: "PYRO SHED",
    price: 30.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 930,
    id: "rainbow-cupcake",
    name: "RAINBOW CUPCAKE",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 935,
    id: "shazaam",
    name: "SHAZAAM",
    price: 5.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 940,
    id: "skull-fountain",
    name: "SKULL FOUNTAIN",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 945,
    id: "snail-it",
    name: "SNAIL IT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 950,
    id: "snow-cone",
    name: "SNOW CONE",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 955,
    id: "black-cat-spark-my-interest",
    name: "BLACK CAT SPARK MY INTEREST",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 960,
    id: "sponge-boy",
    name: "SPONGE BOY",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 965,
    id: "stellar-beauty",
    name: "STELLAR BEAUTY",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 970,
    id: "toadally-purple",
    name: "TOADALLY PURPLE",
    price: 30.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 975,
    id: "unicorn",
    name: "UNICORN",
    price: 10.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Novelties"]
  },
  {
    itemNumber: 980,
    id: "young-man",
    name: "YOUNG MAN",
    price: 4.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 985,
    id: "brothers-zapper-dapper-doo",
    name: "BROTHERS ZAPPER DAPPER DOO",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  }
  ,
  {
    itemNumber: 990,
    id: "handheld-snow-cone",
    name: "HANDHELD SNOW CONE",
    price: 5.00,
    unitLabel: "EACH",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },
  {
    itemNumber: 995,
    id: "brothers-hit-parade",
    name: "BROTHERS HIT PARADE",
    price: 10.00,
    unitLabel: "EACH",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },
  {
    itemNumber: 1000,
    id: "light-saber",
    name: "LIGHT SABER",
    price: 6.00,
    unitLabel: "EACH",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },
  {
    itemNumber: 1005,
    id: "lucky-wheels",
    name: "LUCKY WHEELS",
    price: 25.00,
    unitLabel: "1 BOX OF 3",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },
  {
    itemNumber: 1010,
    id: "brothers-photon-phaser",
    name: "BROTHERS PHOTON PHASER",
    price: 7.50,
    unitLabel: "EACH",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },
  {
    itemNumber: 1015,
    id: "sword-boys",
    name: "SWORD - BOYS",
    price: 5.00,
    unitLabel: "EACH",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },
  {
    itemNumber: 1020,
    id: "sword-girls",
    name: "SWORD - GIRLS",
    price: 5.00,
    unitLabel: "EACH",
    category: "Hand-Held Fountains",
    shopTypes: ["Fountains", "Hand-Held Fountains"]
  },

  {
    itemNumber: 1025,
    id: "closed-caption",
    name: "CLOSED CAPTION",
    price: 30.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 1030,
    id: "dragon-throne",
    name: "DRAGON THRONE",
    price: 50.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 1035,
    id: "black-cat-energizer",
    name: "BLACK CAT ENERGIZER",
    price: 65.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 1040,
    id: "black-cat-neon-lights",
    name: "BLACK CAT NEON LIGHTS",
    price: 40.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 1045,
    id: "spartan-scream",
    name: "SPARTAN SCREAM",
    price: 60.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 1050,
    id: "black-cat-tropical-thunder",
    name: "BLACK CAT TROPICAL THUNDER",
    price: 40.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 1055,
    id: "black-cat-high-strung-with-mine-19-shot",
    name: "BLACK CAT HIGH STRUNG WITH MINE - 19 SHOT",
    price: 35.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains", "Cakes"]
  },
  {
    itemNumber: 1060,
    id: "mr-hippo",
    name: "MR HIPPO",
    price: 25.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },

  {
    itemNumber: 1065,
    id: "saturn-missile-battery-25-shot",
    name: "SATURN MISSILE BATTERY - 25 SHOT",
    price: 2.50,
    unitLabel: "EACH",
    category: "Saturn Missiles",
    shopTypes: ["Saturn Missiles", "Cakes"]
  },
  {
    itemNumber: 1070,
    id: "saturn-missile-battery-25-shot-4-pack",
    name: "SATURN MISSILE BATTERY - 25 SHOT",
    price: 10.00,
    unitLabel: "1 PACK OF 4",
    category: "Saturn Missiles",
    shopTypes: ["Saturn Missiles", "Cakes"]
  },
  {
    itemNumber: 1075,
    id: "saturn-missile-battery-100-shot",
    name: "SATURN MISSILE BATTERY - 100 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Saturn Missiles",
    shopTypes: ["Saturn Missiles", "Cakes"]
  },
  {
    itemNumber: 1080,
    id: "saturn-missile-battery-300-shot",
    name: "SATURN MISSILE BATTERY - 300 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Saturn Missiles",
    shopTypes: ["Saturn Missiles", "Cakes"]
  },
  {
    itemNumber: 1085,
    id: "saturn-missile-battery-325-shot",
    name: "SATURN MISSILE BATTERY - 325 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Saturn Missiles",
    shopTypes: ["Saturn Missiles", "Cakes"]
  },
  {
    itemNumber: 1090,
    id: "red-bright-and-blue-660-shot",
    name: "RED BRIGHT & BLUE - 660 SHOT",
    price: 135.00,
    unitLabel: "EACH",
    category: "Saturn Missiles",
    shopTypes: ["Saturn Missiles", "Cakes", "Big Show Finale"]
  }
  ,
  {
    itemNumber: 1095,
    id: "25-zombies-25-shot",
    name: "25 ZOMBIES - 25 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1100,
    id: "brothers-badhareday-49-shot",
    name: "BROTHERS BADHAREDAY - 49 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1105,
    id: "beach-vibes-12-shot",
    name: "BEACH VIBES - 12 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1110,
    id: "black-blade-16-shot",
    name: "BLACK BLADE - 16 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1115,
    id: "brothers-bling-bling-36-shot",
    name: "BROTHERS BLING BLING - 36 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1120,
    id: "blue-16-shot",
    name: "BLUE - 16 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1125,
    id: "bonnie-and-clyde-19-shot",
    name: "BONNIE AND CLYDE - 19 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1130,
    id: "brothers-boomerbang-55-shot",
    name: "BROTHERS BOOMERBANG - 55 SHOT",
    price: 32.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1135,
    id: "born-on-the-bayou-16-shot",
    name: "BORN ON THE BAYOU - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1140,
    id: "break-out-6-shot",
    name: "BREAK OUT - 6 SHOT",
    price: 5.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1145,
    id: "cat-fight-9-shot",
    name: "CAT FIGHT - 9 SHOT",
    price: 5.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1150,
    id: "chameleon-2000-16-shot",
    name: "CHAMELEON 2000 - 16 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1155,
    id: "cherry-bomber-10-shot",
    name: "CHERRY BOMBER - 10 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1160,
    id: "color-me-america-20-shot",
    name: "COLOR ME AMERICA - 20 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1165,
    id: "black-cat-color-pearl-48-shot",
    name: "BLACK CAT COLOR PEARL - 48 SHOT",
    price: 5.00,
    unitLabel: "1 PACK OF 2",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1170,
    id: "color-pearl-48-shot",
    name: "COLOR PEARL - 48 SHOT",
    price: 2.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1175,
    id: "colorful-skies-25-shot",
    name: "COLORFUL SKIES - 25 SHOT",
    price: 17.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1180,
    id: "brothers-copper-devils-25-shot",
    name: "BROTHERS COPPER DEVILS - 25 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1185,
    id: "county-fair-16-shot",
    name: "COUNTY FAIR - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1190,
    id: "crazy-cat-12-shot",
    name: "CRAZY CAT - 12 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1195,
    id: "brothers-crimson-bulls-25-shot",
    name: "BROTHERS CRIMSON BULLS - 25 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1200,
    id: "dang-it-carl-28-shot",
    name: "DANG IT CARL - 28 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1205,
    id: "dino-pack-7-shot",
    name: "DINO PACK - 7 SHOT",
    price: 5.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1210,
    id: "dirty-dancing-in-the-sky-7-shot",
    name: "DIRTY DANCING IN THE SKY - 7 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1215,
    id: "dope-16-shot",
    name: "DOPE - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1220,
    id: "fast-trigger-200-shot",
    name: "FAST TRIGGER - 200 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1225,
    id: "black-cat-fear-city-25-shot",
    name: "BLACK CAT FEAR CITY - 25 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1230,
    id: "fire-in-the-hole-7-shot",
    name: "FIRE IN THE HOLE - 7 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1235,
    id: "fireworks-fiesta-96-shot",
    name: "FIREWORKS FIESTA - 96 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1240,
    id: "fish-frenzy-9-shot",
    name: "FISH FRENZY - 9 SHOT",
    price: 7.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1245,
    id: "for-our-flag-16-shot",
    name: "FOR OUR FLAG - 16 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1250,
    id: "friki-tiki-36-shot",
    name: "FRIKI TIKI - 36 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1255,
    id: "garden-in-spring-7-shot",
    name: "GARDEN IN SPRING - 7 SHOT",
    price: 5.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1260,
    id: "ghost-peppers-10-shot",
    name: "GHOST PEPPERS - 10 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1265,
    id: "great-expectation-9-shot",
    name: "GREAT EXPECTATION - 9 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1270,
    id: "happy-camper-23-shot",
    name: "HAPPY CAMPER - 23 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1275,
    id: "happy-fireworks-36-shot",
    name: "HAPPY FIREWORKS - 36 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1280,
    id: "hard-hitter-16-shot",
    name: "HARD HITTER - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1285,
    id: "henchmen-12-shot",
    name: "HENCHMEN - 12 SHOT",
    price: 12.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1290,
    id: "high-five-25-shot",
    name: "HIGH FIVE - 25 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1295,
    id: "hot-n-spicy-9-shot",
    name: "HOT N SPICY - 9 SHOT",
    price: 12.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1300,
    id: "hyper-ii-96-shot",
    name: "HYPER II - 96 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1305,
    id: "brothers-instant-replay-12-shot",
    name: "BROTHERS INSTANT REPLAY - 12 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1310,
    id: "brothers-irish-luck-12-shot",
    name: "BROTHERS IRISH LUCK - 12 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1315,
    id: "legendary-beast-16-shot",
    name: "LEGENDARY BEAST - 16 SHOT",
    price: 27.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1320,
    id: "black-cat-liquid-sky-20-shot",
    name: "BLACK CAT LIQUID SKY - 20 SHOT",
    price: 17.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1325,
    id: "little-nemo-19-shot",
    name: "LITTLE NEMO - 19 SHOT",
    price: 30.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1330,
    id: "loud-and-nasty-12-shot",
    name: "LOUD & NASTY - 12 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1335,
    id: "loyal-to-all-25-shot",
    name: "LOYAL TO ALL - 25 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1340,
    id: "lucky-streak-66-shot",
    name: "LUCKY STREAK - 66 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1345,
    id: "macaron-pops-16-shot",
    name: "MACARON POPS - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1350,
    id: "magical-barrage-100-shot",
    name: "MAGICAL BARRAGE - 100 SHOT",
    price: 5.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1355,
    id: "brothers-magnificent-festival-25-shot",
    name: "BROTHERS MAGNIFICENT FESTIVAL - 25 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1360,
    id: "mecha-mermaid-30-shot",
    name: "MECHA MERMAID - 30 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1365,
    id: "brothers-mechanical-bug-100-shot",
    name: "BROTHERS MECHANICAL BUG - 100 SHOT",
    price: 32.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1370,
    id: "metal-hawk-30-shot",
    name: "METAL HAWK - 30 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1375,
    id: "micro-pigzilla-108-shot",
    name: "MICRO PIGZILLA - 108 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1380,
    id: "mighty-python-cobra-19-shot",
    name: "MIGHTY PYTHON / COBRA - 19 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1385,
    id: "brothers-mobile-menace-35-shot",
    name: "BROTHERS MOBILE MENACE - 35 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1390,
    id: "mondays-suck-16-shot",
    name: "MONDAYS SUCK - 16 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1395,
    id: "monstrous-10-shot",
    name: "MONSTROUS - 10 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1400,
    id: "nation-ovation-16-shot",
    name: "NATION OVATION - 16 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1405,
    id: "neon-rainbow-16-shot",
    name: "NEON RAINBOW - 16 SHOT",
    price: 12.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1410,
    id: "black-cat-night-defense-210-shot",
    name: "BLACK CAT NIGHT DEFENSE - 210 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1415,
    id: "night-moves-18-shot",
    name: "NIGHT MOVES - 18 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1420,
    id: "no-trespassing-16-shot",
    name: "NO TRESPASSING - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1425,
    id: "oklahoma-kicker-16-shot",
    name: "OKLAHOMA KICKER - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1430,
    id: "original-gangster-16-shot",
    name: "ORIGINAL GANGSTER - 16 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1435,
    id: "pink-16-shot",
    name: "PINK - 16 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1440,
    id: "pop-rocks-16-shot",
    name: "POP ROCKS - 16 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1445,
    id: "brothers-poppycock-46-shot",
    name: "BROTHERS POPPYCOCK - 46 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1450,
    id: "black-cat-pro-200-16-shot",
    name: "BLACK CAT PRO 200 - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1455,
    id: "pulse-pounder-50-shot",
    name: "PULSE POUNDER - 50 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1460,
    id: "punk-rockers-10-shot",
    name: "PUNK ROCKERS - 10 SHOT",
    price: 10.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1465,
    id: "purple-haze-16-shot",
    name: "PURPLE HAZE - 16 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1470,
    id: "pyro-lips-16-shot",
    name: "PYRO LIPS - 16 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1475,
    id: "brothers-red-white-and-blue-salute-24-shot",
    name: "BROTHERS RED WHITE & BLUE SALUTE - 24 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1480,
    id: "brothers-sabertooth-40-shot",
    name: "BROTHERS SABERTOOTH - 40 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1485,
    id: "brothers-sapphire-clan-25-shot",
    name: "BROTHERS SAPPHIRE CLAN - 25 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1490,
    id: "sirens-call-7-shot",
    name: "SIRENS CALL - 7 SHOT",
    price: 17.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1495,
    id: "sleeping-with-the-fishes-25-shot",
    name: "SLEEPING WITH THE FISHES - 25 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1500,
    id: "space-monkey-18-shot",
    name: "SPACE MONKEY - 18 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1505,
    id: "brothers-stop-n-go-25-shot",
    name: "BROTHERS STOP N GO - 25 SHOT",
    price: 22.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1510,
    id: "super-sonic-25-shot",
    name: "SUPER SONIC - 25 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1515,
    id: "texas-rattlesnake-16-shot",
    name: "TEXAS RATTLESNAKE - 16 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1520,
    id: "tombstone-9-shot",
    name: "TOMBSTONE - 9 SHOT",
    price: 30.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1525,
    id: "uncle-ham-22-shot",
    name: "UNCLE HAM - 22 SHOT",
    price: 25.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1530,
    id: "firecracker-joe-vendetta-12-shot",
    name: "FIRECRACKER JOE VENDETTA - 12 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1535,
    id: "whack-job-7-shot",
    name: "WHACK JOB - 7 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1540,
    id: "white-tiger-9-shot",
    name: "WHITE TIGER - 9 SHOT",
    price: 7.50,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1545,
    id: "widows-kiss-25-shot",
    name: "WIDOWS KISS - 25 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1550,
    id: "brothers-wildcard-49-shot",
    name: "BROTHERS WILDCARD - 49 SHOT",
    price: 15.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1555,
    id: "winter-ballistic-20-shot",
    name: "WINTER BALLISTIC - 20 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },

  {
    itemNumber: 1560,
    id: "screaming-mimi-girandola",
    name: "SCREAMING MIMI - GIRANDOLA",
    price: 15.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items"]
  },
  {
    itemNumber: 1565,
    id: "abduction-20-shot",
    name: "ABDUCTION - 20 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items", "Big Show Finale"]
  },
  {
    itemNumber: 1570,
    id: "alien-disco-girandola",
    name: "ALIEN DISCO - GIRANDOLA",
    price: 75.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items"]
  },
  {
    itemNumber: 1575,
    id: "alien-invasion-21-shot",
    name: "ALIEN INVASION - 21 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items", "Big Show Finale"]
  },
  {
    itemNumber: 1580,
    id: "beam-me-up-girandola",
    name: "BEAM ME UP - GIRANDOLA",
    price: 75.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items"]
  },
  {
    itemNumber: 1585,
    id: "brothers-cleared-for-takeoff-girandola",
    name: "BROTHERS CLEARED FOR TAKEOFF - GIRANDOLA",
    price: 75.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items"]
  },
  {
    itemNumber: 1590,
    id: "return-to-roswell-26-shot",
    name: "RETURN TO ROSWELL - 26 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items", "Big Show Finale"]
  },
  {
    itemNumber: 1595,
    id: "whistling-bunghole-21-shot",
    name: "WHISTLING BUNGHOLE - 21 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Girandola",
    shopTypes: ["Girandola", "Flying Items", "Big Show Finale"]
  }
  ,
  {
    itemNumber: 1600,
    id: "agent-of-boom-37-shot",
    name: "AGENT OF BOOM - 37 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1605,
    id: "alpha-dog-21-shot",
    name: "ALPHA DOG - 21 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1610,
    id: "audio-graffiti-16-shot",
    name: "AUDIO GRAFFITI - 16 SHOT",
    price: 35.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1615,
    id: "brothers-bamboozle-42-shot",
    name: "BROTHERS BAMBOOZLE - 42 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1620,
    id: "banana-split-16-shot",
    name: "BANANA SPLIT - 16 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1625,
    id: "brothers-big-top-42-shot",
    name: "BROTHERS BIG TOP - 42 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1630,
    id: "brothers-black-badge-30-shot",
    name: "BROTHERS BLACK BADGE - 30 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1635,
    id: "brew-crew-35-shot",
    name: "BREW CREW - 35 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1640,
    id: "brothers-current-events-30-shot",
    name: "BROTHERS CURRENT EVENTS - 30 SHOT",
    price: 35.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1645,
    id: "black-cat-dragons-breath-15-shot",
    name: "BLACK CAT DRAGONS BREATH - 15 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1650,
    id: "gigablaster-480-shot",
    name: "GIGABLASTER - 480 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1655,
    id: "good-thinkin-lincoln-134-shot",
    name: "GOOD THINKIN LINCOLN - 134 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1660,
    id: "brothers-gunslinger-25-shot",
    name: "BROTHERS GUNSLINGER - 25 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1665,
    id: "honk-for-freedom-155-shot",
    name: "HONK FOR FREEDOM - 155 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1670,
    id: "i-love-it-loud-33-shot",
    name: "I LOVE IT LOUD - 33 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1675,
    id: "brothers-light-brigade-42-shot",
    name: "BROTHERS LIGHT BRIGADE - 42 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1680,
    id: "brothers-my-vice-48-shot",
    name: "BROTHERS MY VICE - 48 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1685,
    id: "nishiki-forest-9-shot",
    name: "NISHIKI FOREST - 9 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1690,
    id: "our-baby-reveal-12-shot",
    name: "OUR BABY REVEAL - 12 SHOT",
    price: 20.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1695,
    id: "power-of-pink-25-shot",
    name: "POWER OF PINK - 25 SHOT",
    price: 30.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1700,
    id: "pyro-approved-12-shot",
    name: "PYRO APPROVED - 12 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1705,
    id: "rounders-25-shot",
    name: "ROUNDERS - 25 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1710,
    id: "black-cat-shark-bite-15-shot",
    name: "BLACK CAT SHARK BITE - 15 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1715,
    id: "sour-patch-lemonade-16-shot",
    name: "SOUR PATCH LEMONADE - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1720,
    id: "brothers-striker-serpent-16-shot",
    name: "BROTHERS STRIKER SERPENT - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1725,
    id: "taco-truck-24-shot",
    name: "TACO TRUCK - 24 SHOT",
    price: 30.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1730,
    id: "brothers-tempt-fate-20-shot",
    name: "BROTHERS TEMPT FATE - 20 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1735,
    id: "black-cat-terminator-cakes-15-shot",
    name: "BLACK CAT TERMINATOR CAKES - 15 SHOT",
    price: 40.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1740,
    id: "brothers-trophy-wife-480-shot",
    name: "BROTHERS TROPHY WIFE - 480 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1745,
    id: "uss-hornet-89-shot",
    name: "USS HORNET - 89 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 1750,
    id: "v-day-26-shot",
    name: "V-DAY - 26 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1755,
    id: "whiskey-business-20-shot",
    name: "WHISKEY BUSINESS - 20 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1760,
    id: "aerial-privilege-168-shot",
    name: "AERIAL PRIVILEGE - 168 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1765,
    id: "al-capone-16-shot",
    name: "AL CAPONE - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1770,
    id: "all-jacked-up-25-shot",
    name: "ALL JACKED UP - 25 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1775,
    id: "amazing-ballet-220-shot",
    name: "AMAZING BALLET - 220 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1780,
    id: "americas-finest-25-shot",
    name: "AMERICA'S FINEST - 25 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1785,
    id: "assassin-9-shot",
    name: "ASSASSIN - 9 SHOT",
    price: 80.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1790,
    id: "baby-face-nelson-16-shot",
    name: "BABY FACE NELSON - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1795,
    id: "backroad-rebel-24-shot",
    name: "BACKROAD REBEL - 24 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1800,
    id: "backyard-bully-44-shot",
    name: "BACKYARD BULLY - 44 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1805,
    id: "brothers-bad-company-35-shot",
    name: "BROTHERS BAD COMPANY - 35 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1810,
    id: "batter-up-53-shot",
    name: "BATTER UP - 53 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1815,
    id: "black-hole-43-shot",
    name: "BLACK HOLE - 43 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1820,
    id: "brothers-blond-joke-36-shot",
    name: "BROTHERS BLOND JOKE - 36 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1825,
    id: "brothers-blue-blitz-80-shot",
    name: "BROTHERS BLUE BLITZ - 80 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1830,
    id: "border-patrol-159-shot",
    name: "BORDER PATROL - 159 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1835,
    id: "bucks-and-ducks-12-shot",
    name: "BUCKS & DUCKS - 12 SHOT",
    price: 80.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1840,
    id: "bulldog-bash-34-shot",
    name: "BULLDOG BASH - 34 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1845,
    id: "capitalists-195-shot",
    name: "CAPITALISTS - 195 SHOT",
    price: 175.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1850,
    id: "black-cat-caribbean-palms-20-shot",
    name: "BLACK CAT CARIBBEAN PALMS - 20 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1855,
    id: "carolina-reaper-20-shot",
    name: "CAROLINA REAPER - 20 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1860,
    id: "cerdo-loco-27-shot",
    name: "CERDO LOCO - 27 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1865,
    id: "chain-reaction-86-shot",
    name: "CHAIN REACTION - 86 SHOT",
    price: 110.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  }
  ,
  {
    itemNumber: 1870,
    id: "colors-of-america-10-shot",
    name: "COLORS OF AMERICA - 10 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1875,
    id: "country-roots-25-shot",
    name: "COUNTRY ROOTS - 25 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes", 
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1880,
    id: "dapper-dan-12-shot",
    name: "DAPPER DAN - 12 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1885,
    id: "dillinger-121-shot",
    name: "DILLINGER - 121 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1890,
    id: "dont-tread-on-me-8-shot",
    name: "DONT TREAD ON ME - 8 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1895,
    id: "dripping-donut-33-shot",
    name: "DRIPPING DONUT - 33 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1900,
    id: "black-cat-fiesta-grande-216-shot",
    name: "BLACK CAT FIESTA GRANDE - 216 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1905,
    id: "fire-ninja-33-shot",
    name: "FIRE NINJA - 33 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1910,
    id: "frank-the-enforcer-12-shot",
    name: "FRANK THE ENFORCER - 12 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1915,
    id: "galaxia-138-shot",
    name: "GALAXIA - 138 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1920,
    id: "ghost-fleet-9-shot",
    name: "GHOST FLEET - 9 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1925,
    id: "grand-finale-432-shot",
    name: "GRAND FINALE - 432 SHOT",
    price: 120.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 1930,
    id: "black-cat-gunfighter-from-hell-49-shot",
    name: "BLACK CAT GUNFIGHTER FROM HELL - 49 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1935,
    id: "hammer-20-shot",
    name: "HAMMER - 20 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1940,
    id: "hardcore-cycles-16-shot",
    name: "HARDCORE CYCLES - 16 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1945,
    id: "brothers-high-falutin-49-shot",
    name: "BROTHERS HIGH FALUTIN - 49 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1950,
    id: "brothers-hit-the-road-jack-49-shot",
    name: "BROTHERS HIT THE ROAD JACK - 49 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1955,
    id: "hog-smash-28-shot",
    name: "HOG SMASH - 28 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1960,
    id: "hot-box-30-shot",
    name: "HOT BOX - 30 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1965,
    id: "brothers-howling-wolf-36-shot",
    name: "BROTHERS HOWLING WOLF - 36 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1970,
    id: "inferno-core-33-shot",
    name: "INFERNO CORE - 33 SHOT",
    price: 80.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1975,
    id: "brothers-inside-job-49-shot",
    name: "BROTHERS INSIDE JOB - 49 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 1980,
    id: "johnny-da-jackal-16-shot",
    name: "JOHNNY DA JACKAL - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1985,
    id: "kabuki-12-shot",
    name: "KABUKI - 12 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 1990,
    id: "lets-go-brandon-30-shot",
    name: "LETS GO BRANDON - 30 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 1995,
    id: "loud-and-proud-21-shot",
    name: "LOUD & PROUD - 21 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2000,
    id: "lunar-eclipse-24-shot",
    name: "LUNAR ECLIPSE - 24 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2005,
    id: "machine-gun-kelly-16-shot",
    name: "MACHINE GUN KELLY - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2010,
    id: "mad-dog-coll-16-shot",
    name: "MAD DOG COLL - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2015,
    id: "magic-balls-12-shot",
    name: "MAGIC BALLS - 12 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2020,
    id: "brothers-major-combat-119-shot",
    name: "BROTHERS MAJOR COMBAT - 119 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2025,
    id: "man-cave-36-shot",
    name: "MAN CAVE - 36 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2030,
    id: "master-of-our-enemies-172-shot",
    name: "MASTER OF OUR ENEMIES - 172 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2035,
    id: "maximum-insanity-182-shot",
    name: "MAXIMUM INSANITY - 182 SHOT",
    price: 175.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2040,
    id: "mechapigzilla-136-shot",
    name: "MECHAPIGZILLA - 136 SHOT",
    price: 175.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2045,
    id: "brothers-midnight-204-shot",
    name: "BROTHERS MIDNIGHT - 204 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2050,
    id: "firecracker-joe-misconduct-30-shot",
    name: "FIRECRACKER JOE MISCONDUCT - 30 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2055,
    id: "moe-the-money-man-17-shot",
    name: "MOE THE MONEY MAN - 17 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2060,
    id: "mug-shots-25-shot",
    name: "MUG SHOTS - 25 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2065,
    id: "neon-jellyfish-12-shot",
    name: "NEON JELLYFISH - 12 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2070,
    id: "black-cat-neon-peacock-93-shot",
    name: "BLACK CAT NEON PEACOCK - 93 SHOT",
    price: 110.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2075,
    id: "opposing-forces-48-shot",
    name: "OPPOSING FORCES - 48 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2080,
    id: "out-for-blood-30-shot",
    name: "OUT FOR BLOOD - 30 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2085,
    id: "pablo-escobar-21-shot",
    name: "PABLO ESCOBAR - 21 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 2090,
    id: "brothers-parrots-prattle-36-shot",
    name: "BROTHERS PARROTS PRATTLE - 36 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2095,
    id: "party-meter-154-shot",
    name: "PARTY METER - 154 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2100,
    id: "patriotic-af-42-shot",
    name: "PATRIOTIC AF - 42 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 2105,
    id: "pigzilla-142-shot",
    name: "PIGZILLA - 142 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2110,
    id: "poppin-pineapple-27-shot",
    name: "POPPIN PINEAPPLE - 27 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2115,
    id: "porcupine-planet-55-shot",
    name: "PORCUPINE PLANET - 55 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2120,
    id: "pretty-boy-floyd-12-shot",
    name: "PRETTY BOY FLOYD - 12 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2125,
    id: "pretty-pants-bandit-15-shot",
    name: "PRETTY PANTS BANDIT - 15 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2130,
    id: "pucker-up-33-shot",
    name: "PUCKER UP - 33 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2135,
    id: "black-cat-purple-monster-16-shot",
    name: "BLACK CAT PURPLE MONSTER - 16 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2140,
    id: "pyro-tsunami-25-shot",
    name: "PYRO TSUNAMI - 25 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2145,
    id: "rat-face-willy-20-shot",
    name: "RAT FACE WILLY - 20 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2150,
    id: "brothers-remix-24-shot",
    name: "BROTHERS REMIX - 24 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2155,
    id: "revolver-9-shot",
    name: "REVOLVER - 9 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2160,
    id: "rifle-9-shot",
    name: "RIFLE - 9 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2165,
    id: "brothers-rowdy-ride-185-shot",
    name: "BROTHERS ROWDY RIDE - 185 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2170,
    id: "roy-l-flush-18-shot",
    name: "ROY L FLUSH - 18 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2175,
    id: "royal-assorted-cakes-16-shot",
    name: "ROYAL ASSORTED CAKES - 16 SHOT",
    price: 50.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2180,
    id: "sailors-nightmare-16-shot",
    name: "SAILORS NIGHTMARE - 16 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2185,
    id: "sammy-the-bull-16-shot",
    name: "SAMMY THE BULL - 16 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2190,
    id: "brothers-sassy-600-shot",
    name: "BROTHERS SASSY - 600 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2195,
    id: "brothers-saturday-night-special-36-shot",
    name: "BROTHERS SATURDAY NIGHT SPECIAL - 36 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  }
  ,
  {
    itemNumber: 2200,
    id: "semi-auto-9-shot",
    name: "SEMI AUTO - 9 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2205,
    id: "shock-jock-36-shot",
    name: "SHOCK JOCK - 36 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2210,
    id: "brothers-sky-wide-204-shot",
    name: "BROTHERS SKY WIDE - 204 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2215,
    id: "skyfire-278-shot",
    name: "SKYFIRE - 278 SHOT",
    price: 60.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2220,
    id: "smoke-master-30-shot",
    name: "SMOKE MASTER - 30 SHOT",
    price: 80.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2225,
    id: "space-explorer-20-shot",
    name: "SPACE EXPLORER - 20 SHOT",
    price: 200.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2230,
    id: "spider-bite-12-shot",
    name: "SPIDER BITE - 12 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2235,
    id: "sprinkle-donuts-10-shot",
    name: "SPRINKLE DONUTS - 10 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2240,
    id: "step-mutha-16-shot",
    name: "STEP MUTHA - 16 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2245,
    id: "super-stunt-12-shot",
    name: "SUPER STUNT - 12 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2250,
    id: "brothers-swift-n-shimmery-44-shot",
    name: "BROTHERS SWIFT N SHIMMERY - 44 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2255,
    id: "ta-dah-36-shot",
    name: "TA-DAH - 36 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2260,
    id: "teflon-don-20-shot",
    name: "TEFLON DON - 20 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2265,
    id: "the-wild-beast-42-shot",
    name: "THE WILD BEAST - 42 SHOT",
    price: 75.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2270,
    id: "tony-the-big-tuna-12-shot",
    name: "TONY THE BIG TUNA - 12 SHOT",
    price: 45.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2275,
    id: "too-hot-to-handle-35-shot",
    name: "TOO HOT TO HANDLE - 35 SHOT",
    price: 100.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2280,
    id: "triumphant-25-shot",
    name: "TRIUMPHANT - 25 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2285,
    id: "trump-train-250-shot",
    name: "TRUMP TRAIN - 250 SHOT",
    price: 250.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2290,
    id: "trumps-revenge-250-shot",
    name: "TRUMPS REVENGE - 250 SHOT",
    price: 200.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2295,
    id: "brothers-uncle-sams-answer-16-shot",
    name: "BROTHERS UNCLE SAMS ANSWER - 16 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  },
  {
    itemNumber: 2300,
    id: "usa-conqueror-192-shot",
    name: "USA CONQUEROR - 192 SHOT",
    price: 175.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2305,
    id: "black-cat-voodoo-rain-36-shot",
    name: "BLACK CAT VOODOO RAIN - 36 SHOT",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes"]
  },
  {
    itemNumber: 2310,
    id: "war-games-156-shot",
    name: "WAR GAMES - 156 SHOT",
    price: 125.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2315,
    id: "brothers-war-hero-30-shot",
    name: "BROTHERS WAR HERO - 30 SHOT",
    price: 65.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic"]
  }
  ,
  {
    itemNumber: 2320,
    id: "black-cat-american-freedom-train-180-shot",
    name: "BLACK CAT AMERICAN FREEDOM TRAIN - 180 SHOT",
    price: 200.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2325,
    id: "blood-is-pumping-72-shot",
    name: "BLOOD IS PUMPING - 72 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2330,
    id: "born-leaders-757-shot",
    name: "BORN LEADERS - 757 SHOT",
    price: 200.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 2335,
    id: "fourth-of-july-finale-75-shot",
    name: "FOURTH OF JULY FINALE - 75 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2340,
    id: "on-freedoms-wing-72-shot",
    name: "ON FREEDOMS WING - 72 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2345,
    id: "red-white-and-brew-84-shot",
    name: "RED WHITE & BREW - 84 SHOT",
    price: 200.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2350,
    id: "smoke-color-waterfall-28-shot",
    name: "SMOKE COLOR WATERFALL - 28 SHOT",
    price: 150.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Smoke", "Big Show Finale"]
  },
  {
    itemNumber: 2355,
    id: "vip-180-shot",
    name: "VIP - 180 SHOT",
    price: 200.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  }
  ,
  {
    itemNumber: 2360,
    id: "artillery-shell-6-shot",
    name: "ARTILLERY SHELL - 6 SHOT",
    price: 12.50,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2365,
    id: "assorted-effect-artillery-6-shot",
    name: "ASSORTED EFFECT ARTILLERY - 6 SHOT",
    price: 12.50,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2370,
    id: "black-cat-artillery-6-shot",
    name: "BLACK CAT ARTILLERY - 6 SHOT",
    price: 15.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2375,
    id: "black-cat-festival-balls-6-shot",
    name: "BLACK CAT FESTIVAL BALLS - 6 SHOT",
    price: 15.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2380,
    id: "festival-ball-6-shot",
    name: "FESTIVAL BALL - 6 SHOT",
    price: 10.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2385,
    id: "showtime-festival-ball-6-shot",
    name: "SHOWTIME FESTIVAL BALL - 6 SHOT",
    price: 10.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2390,
    id: "firecracker-joe-sucker-punch-6-shot",
    name: "FIRECRACKER JOE SUCKER PUNCH - 6 SHOT",
    price: 10.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2395,
    id: "solar-blast-5-inch-6-shot",
    name: "SOLAR BLAST 5 INCH - 6 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2400,
    id: "black-cat-neon-diablo-5-inch-6-shot",
    name: "BLACK CAT NEON DIABLO 5 INCH - 6 SHOT",
    price: 35.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2405,
    id: "donut-shells-6-inch-6-shot",
    name: "DONUT SHELLS 6 INCH - 6 SHOT",
    price: 32.50,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2410,
    id: "scatter-bombs-6-inch-6-shot",
    name: "SCATTER BOMBS 6 INCH - 6 SHOT",
    price: 32.50,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2415,
    id: "bad-bombs-12-shot",
    name: "BAD BOMBS - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2420,
    id: "bullet-bombs-12-shot",
    name: "BULLET BOMBS - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2425,
    id: "black-cat-magnum-artillery-12-shot",
    name: "BLACK CAT MAGNUM ARTILLERY - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2430,
    id: "red-white-and-boom-12-shot",
    name: "RED WHITE & BOOM - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Patriotic"]
  },
  {
    itemNumber: 2435,
    id: "smoking-gun-artillery-12-shot",
    name: "SMOKING GUN ARTILLERY - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2440,
    id: "black-cat-star-spangled-cannon-12-shot",
    name: "BLACK CAT STAR SPANGLED CANNON - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Patriotic"]
  },
  {
    itemNumber: 2445,
    id: "zombie-blaster-12-shot",
    name: "ZOMBIE BLASTER - 12 SHOT",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2450,
    id: "black-cat-diablo-4-inch-12-shot",
    name: "BLACK CAT DIABLO 4 INCH - 12 SHOT",
    price: 60.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  }
  ,
  {
    itemNumber: 2455,
    id: "black-cat-select-diablo-4-5-inch-12-shot",
    name: "BLACK CAT SELECT DIABLO 4/5 INCH - 12 SHOT",
    price: 65.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2460,
    id: "neon-nightmare-4-inch-16-shot",
    name: "NEON NIGHTMARE 4 INCH - 16 SHOT",
    price: 80.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells"]
  },
  {
    itemNumber: 2465,
    id: "ammo-mag-6-inch-24-shot",
    name: "AMMO MAG 6 INCH - 24 SHOT",
    price: 140.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2470,
    id: "barely-legal-5-inch-24-shot",
    name: "BARELY LEGAL 5 INCH - 24 SHOT",
    price: 125.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2475,
    id: "black-cat-5-inch-canister-24-shot",
    name: "BLACK CAT 5 INCH CANISTER - 24 SHOT",
    price: 125.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2480,
    id: "firecracker-joe-death-punch-4-inch-24-shot",
    name: "FIRECRACKER JOE DEATH PUNCH 4 INCH - 24 SHOT",
    price: 120.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2485,
    id: "brothers-destiny-dominion-6-7-inch-24-shot",
    name: "BROTHERS DESTINY DOMINION 6/7 INCH - 24 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2490,
    id: "black-cat-diablo-4-inch-24-shot",
    name: "BLACK CAT DIABLO 4 INCH - 24 SHOT",
    price: 120.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2495,
    id: "brothers-grand-jury-5-inch-24-shot",
    name: "BROTHERS GRAND JURY 5 INCH - 24 SHOT",
    price: 125.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2500,
    id: "lock-n-load-4-inch-24-shot",
    name: "LOCK N LOAD 4 INCH - 24 SHOT",
    price: 120.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2505,
    id: "neon-beef-5-inch-24-shot",
    name: "NEON BEEF 5 INCH - 24 SHOT",
    price: 125.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2510,
    id: "black-cat-neon-diablo-5-inch-24-shot",
    name: "BLACK CAT NEON DIABLO 5 INCH - 24 SHOT",
    price: 125.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2515,
    id: "black-cat-patriot-6-inch-24-shot",
    name: "BLACK CAT PATRIOT 6 INCH - 24 SHOT",
    price: 140.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2520,
    id: "raise-the-dead-7-inch-24-shot",
    name: "RAISE THE DEAD 7 INCH - 24 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2525,
    id: "shocker-6-inch-24-shot",
    name: "SHOCKER 6 INCH - 24 SHOT",
    price: 140.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2530,
    id: "spider-biter-5-inch-24-shot",
    name: "SPIDER BITER 5 INCH - 24 SHOT",
    price: 125.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2535,
    id: "tank-buster-5-7-inch-24-shot",
    name: "TANK BUSTER 5/7 INCH - 24 SHOT",
    price: 140.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2540,
    id: "ultimate-outlaw-36-shot",
    name: "ULTIMATE OUTLAW - 36 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2545,
    id: "power-of-pride-48-shot",
    name: "POWER OF PRIDE - 48 SHOT",
    price: 200.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Patriotic", "Big Show Finale"]
  },

  {
    itemNumber: 2550,
    id: "alakazam-3-inch-super-shells-9-shot",
    name: "ALAKAZAM 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2555,
    id: "ghost-shell-3-inch-super-shells-9-shot",
    name: "GHOST SHELL 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2560,
    id: "internal-combustion-3-inch-super-shells-9-shot",
    name: "INTERNAL COMBUSTION 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2565,
    id: "super-beast-3-inch-super-shells-9-shot",
    name: "SUPER BEAST 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2570,
    id: "usa-usa-3-inch-super-shells-9-shot",
    name: "USA USA 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Patriotic", "Big Show Finale"]
  },
  {
    itemNumber: 2575,
    id: "brothers-whacky-tobacky-3-inch-super-shells-9-shot",
    name: "BROTHERS WHACKY TOBACKY 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  },
  {
    itemNumber: 2580,
    id: "xtreme-energy-3-inch-super-shells-9-shot",
    name: "XTREME ENERGY 3 INCH SUPER SHELLS - 9 SHOT",
    price: 150.00,
    unitLabel: "1 BOX",
    category: "Reloadable Shells",
    shopTypes: ["Reloadable Shells", "Big Show Finale"]
  }
  ,
  {
    itemNumber: 2585,
    id: "black-cat-the-beast-assortment",
    name: "BLACK CAT THE BEAST ASSORTMENT",
    price: 350.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages", "Big Show Finale"]
  },
  {
    itemNumber: 2590,
    id: "black-cat-night-display",
    name: "BLACK CAT NIGHT DISPLAY",
    price: 250.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages", "Big Show Finale"]
  },
  {
    itemNumber: 2595,
    id: "black-cat-pyro-city",
    name: "BLACK CAT PYRO CITY",
    price: 250.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Big Show Finale"]
  },
  {
    itemNumber: 2600,
    id: "black-cat-party-animal",
    name: "BLACK CAT PARTY ANIMAL",
    price: 185.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments"]
  },
  {
    itemNumber: 2605,
    id: "big-city-assortment",
    name: "BIG CITY ASSORTMENT",
    price: 185.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages"]
  },
  {
    itemNumber: 2610,
    id: "diamond-backyard-6-assortment",
    name: "DIAMOND BACKYARD ASSORTMENT",
    price: 160.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages"]
  },
  {
    itemNumber: 2615,
    id: "party-pack-6",
    name: "PARTY PACK ASSORTMENT - LARGE",
    price: 160.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments"]
  },
  {
    itemNumber: 2620,
    id: "black-cat-pride-and-honor-6",
  name: "BLACK CAT PRIDE & HONOR ASSORTMENT",
    price: 160.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Patriotic"]
  },
  {
    itemNumber: 2625,
    id: "black-cat-celebrate-america-5-assortment",
    name: "BLACK CAT CELEBRATE AMERICA ASSORTMENT",
    price: 140.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages", "Patriotic"]
  },
  {
    itemNumber: 2630,
    id: "platinum-backyard-5",
    name: "PLATINUM BACKYARD ASSORTMENT",
    price: 140.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments"]
  },
  {
    itemNumber: 2635,
    id: "black-cat-heritage-4",
    name: "BLACK CAT HERITAGE ASSORTMENT",
    price: 90.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Patriotic"]
  },
  {
    itemNumber: 2640,
    id: "party-pack-4-assortment",
    name: "PARTY PACK ASSORTMENT - MEDIUM",
    price: 90.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages"]
  },
  {
    itemNumber: 2645,
    id: "neon-surprise-safe-and-sane",
    name: "NEON SURPRISE - SAFE & SANE",
    price: 40.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Daytime Fun"]
  },
  {
    itemNumber: 2650,
    id: "black-cat-excellent-bag",
    name: "BLACK CAT EXCELLENT BAG",
    price: 45.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments"]
  },
  {
    itemNumber: 2655,
    id: "black-cat-jr-pyro-assortment",
    name: "BLACK CAT JR PYRO ASSORTMENT",
    price: 40.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments"]
  },
  {
    itemNumber: 2660,
    id: "nitro-bag-assortment",
    name: "NITRO BAG ASSORTMENT",
    price: 30.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments"]
  },
  {
    itemNumber: 2665,
    id: "black-cat-kids-pack-safe-and-sane",
    name: "BLACK CAT KIDS PACK - SAFE & SANE",
    price: 12.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Daytime Fun"]
  },
  {
    itemNumber: 2670,
    id: "black-cat-jr-pyro-backpack-safe-and-sane",
    name: "BLACK CAT JR PYRO BACKPACK - SAFE & SANE",
    price: 25.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Daytime Fun"]
  },
  {
    itemNumber: 2675,
    id: "wacky-pack-boys-safe-and-sane",
    name: "WACKY PACK - BOYS - SAFE & SANE",
    price: 25.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages", "Daytime Fun"]
  },
  {
    itemNumber: 2680,
    id: "wacky-pack-girls-safe-and-sane",
    name: "WACKY PACK - GIRLS - SAFE & SANE",
    price: 25.00,
    unitLabel: "1 PACK",
    category: "Assortments",
    shopTypes: ["Assortments", "Bundle Packages", "Daytime Fun"]
  },
  {
    itemNumber: 2685,
    id: "frisbee-assortment",
    name: "FRISBEE ASSORTMENT",
    price: 10.00,
    unitLabel: "1 PACK",
    category: "Bundle Packages",
    shopTypes: ["Bundle Packages", "Assortments", "Daytime Fun"]
  },

  {
  itemNumber: 9999,
  id: "the-godfather",
  name: "THE GODFATHER",
  price: 1000.00,
  unitLabel: "1 BUNDLE",
  category: "Bundle Packages",
  shopTypes: ["Bundle Packages", "Assortments", "Big Show Finale"]
},

  {
    itemNumber: 2786,
    id: "bring-the-rain-rockets",
    name: "BRING THE RAIN ROCKET",
    price: 25.00,
    unitLabel: "EACH",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 2787,
    id: "starshot-rockets",
    name: "STARSHOT ROCKET",
    price: 15.00,
    unitLabel: "EACH",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 2788,
    id: "silver-hawk",
    name: "SILVER HAWK",
    price: 12.50,
    unitLabel: "1 PACK",
    category: "Misc Tag Additions",
    shopTypes: ["Misc Tag Additions", "Flying Items"]
  },
  {
    itemNumber: 2789,
    id: "brothers-corona-rockets",
    name: "BROTHERS CORONA ROCKET",
    price: 15.00,
    unitLabel: "EACH",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 2790,
    id: "screaming-banshee-rockets",
    name: "SCREAMING BANSHEE ROCKET",
    price: 20.00,
    unitLabel: "EACH",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 2791,
    id: "lightning-strobe-regular",
    name: "LIGHTNING STROBE - REGULAR",
    price: 30.00,
    unitLabel: "1 BOX",
    category: "Misc Tag Additions",
    shopTypes: ["Misc Tag Additions", "Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 2792,
    id: "strobe-light-g-and-a",
    name: "STROBE LIGHT",
    price: 35.00,
    unitLabel: "1 BOX",
    category: "Misc Tag Additions",
    shopTypes: ["Misc Tag Additions", "Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 2793,
    id: "black-cat-big-n-bad-rocket",
    name: "BLACK CAT BIG N' BAD ROCKET",
    price: 30.00,
    unitLabel: "1 PACK",
    category: "Rockets",
    shopTypes: ["Rockets", "Flying Items"]
  },
  {
    itemNumber: 2794,
    id: "black-cat-cowboy-rocket",
    name: "BLACK CAT COWBOY ROCKET",
    price: 40.00,
    unitLabel: "1 PACK",
    category: "Rockets",
    shopTypes: ["Rockets", "Flying Items"]
  },
  {
    itemNumber: 2796,
    id: "strobe-rocket-g-and-a",
    name: "STROBE ROCKET",
    price: 35.00,
    unitLabel: "1 PACK",
    category: "Rockets",
    shopTypes: ["Rockets", "Flying Items"]
  },
  {
    itemNumber: 2797,
    id: "black-cat-bottle-rockets",
    name: "BLACK CAT BOTTLE ROCKET GROSS PACK",
    price: 17.50,
    unitLabel: "1 PACK",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 2798,
    id: "black-cat-whistling-bottle-rockets-with-report",
    name: "BLACK CAT WHISTLING BOTTLE ROCKETS WITH REPORT",
    price: 20.00,
    unitLabel: "1 BOX",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 2799,
    id: "butterfly-rockets",
    name: "BUTTERFLY ROCKETS",
    price: 2.50,
    unitLabel: "1 PACK",
    category: "Rockets",
    shopTypes: ["Rockets", "Flying Items"]
  },
  {
    itemNumber: 10147,
    id: "premium-whistle-moon-rockets",
    name: "PREMIUM WHISTLE MOON ROCKETS",
    price: 15.00,
    unitLabel: "1 BOX",
    category: "Rockets",
    shopTypes: ["Rockets", "Flying Items"]
  }
];

// Catalog price correction block starts here.
// These prices were corrected to match the catalog Unit Price / Bundle Price check.
// This lets us patch launch-night price mismatches without manually editing 48 separate catalog entries.

const catalogOptionPriceCorrections = {
  "x-wing-missile-4-inch-piece": 3.50,
  "x-wing-missile-6-inch-piece": 3.75,
  "assorted-missile-10-inch-piece": 8.50,
  "assorted-missile-12-inch-piece": 9.00,
  "strike-eagle-missile-piece": 9.00,

  "single-night-parachute-piece": 2.50,
  "giant-parachute-40-inch-piece": 7.50,
  "oh-chute-parachute-piece": 10.00,
  "princess-parachute-piece": 20.00,
  "base-jump-parachute-5-shot-piece": 20.00,

  "colored-sparklers-8-inch-box": 2.00,
  "gold-sparklers-8-inch-box": 2.00,
  "colored-sparklers-10-inch-box": 2.50,
  "gold-sparklers-10-inch-box": 2.50,
  "gold-magic-sparklers-20-inch-piece": 7.50,
  "black-cat-morning-glory-sparklers-bundle": 1.25,
  "morning-glory-sparklers-bundle": 1.25,
  "morning-glory-sparklers-36-count-piece": 5.00,
  "black-cat-neon-sparklers-piece": 3.50,

  "roman-candle-5-ball-piece": 4.50,
  "americas-candle-5-ball-piece": 12.00,
  "brothers-blackjack-candle-5-ball-piece": 12.00,
  "contraband-candle-5-ball-piece": 12.00,
  "brothers-crazy-aces-candle-5-ball-piece": 12.00,
  "dragon-tails-candle-5-ball-piece": 15.00,
  "black-cat-gatlin-pack-5-ball-candle": 28.00,
  "black-cat-premium-candle-5-ball-piece": 12.00,
  "thundermania-candle-8-ball-piece": 8.00,

  "roman-candle-10-ball-piece": 7.50,
  "boombomb-candle-10-ball-piece": 9.00,
  "camo-pack-candle-10-ball-piece": 18.00,
  "brothers-cherry-on-top-candle-10-ball-piece": 6.00,
  "crackling-candle-10-ball-piece": 9.00,
  "exploding-candle-10-ball-piece": 6.00,
  "black-cat-handful-candle-10-ball-piece": 7.50,
  "wild-side-candle-10-ball-piece": 12.00,

  "color-spaceship-2-pack-piece": 4.50,
  "two-stage-turbo-phantom-piece": 3.00,
  "brothers-lady-bugs-piece": 7.50,
  "brothers-magic-crystal-piece": 10.00,
  "pigs-can-fly-piece": 12.00,
  "sky-smoke-piece": 9.00,
  "tiger-tails-piece": 9.00,
  "black-cat-uav-piece": 6.00
};

const catalogItemPriceCorrections = {
  "young-man": 16.00,
  "black-cat-terminator-cakes-15-shot": 120.00,
  "hardcore-cycles-16-shot": 200.00,
  "royal-assorted-cakes-16-shot": 200.00
};

function applyCatalogPriceCorrections() {
  fireworks.forEach(function (firework) {
    if (catalogItemPriceCorrections[firework.id] !== undefined) {
      firework.price = catalogItemPriceCorrections[firework.id];
    }

    if (firework.options !== undefined) {
      firework.options.forEach(function (option) {
        if (catalogOptionPriceCorrections[option.id] !== undefined) {
          option.price = catalogOptionPriceCorrections[option.id];
        }
      });
    }
  });
}

applyCatalogPriceCorrections();

// Catalog option cleanup block starts here.
// This cleans up items where the catalog price is for a pack/box/bag,
// not for one individual sparkler/candle/piece.

function setCatalogItemAsSingleOption(fireworkId, unitLabel, price) {
  const firework = fireworks.find(function (catalogItem) {
    return catalogItem.id === fireworkId;
  });

  if (firework === undefined) {
    return;
  }

  firework.unitLabel = unitLabel;
  firework.price = price;
  delete firework.options;
}

// Gold Sparklers - 20 inch:
// Remove the $30 bundle option and leave only 1 pack of 4 for $5.
setCatalogItemAsSingleOption(
  "gold-sparklers-20-inch",
  "1 PACK OF 4 SPARKLERS",
  5.00
);

// Gold Magic Sparklers - 20 inch:
// This should be sold as 1 pack of 6, not 1 individual sparkler.
setCatalogItemAsSingleOption(
  "gold-magic-sparklers-20-inch",
  "1 PACK OF 6",
  7.50
);

// Sparkler pack/bag cleanup.
setCatalogItemAsSingleOption(
  "morning-glory-sparklers-36-count",
  "1 BAG OF 36",
  5.00
);

setCatalogItemAsSingleOption(
  "black-cat-neon-sparklers",
  "1 PACK OF 5",
  3.50
);

// Parachute pack/box cleanup.
setCatalogItemAsSingleOption(
  "princess-parachute",
  "1 BOX OF 2",
  20.00
);

setCatalogItemAsSingleOption(
  "base-jump-parachute-5-shot",
  "1 PACK OF 4",
  20.00
);

// Roman candle pack cleanup.
setCatalogItemAsSingleOption(
  "roman-candle-5-ball",
  "1 PACK OF 6",
  4.50
);

setCatalogItemAsSingleOption(
  "americas-candle-5-ball",
  "1 PACK OF 4",
  12.00
);

setCatalogItemAsSingleOption(
  "brothers-blackjack-candle-5-ball",
  "1 PACK OF 4",
  12.00
);

setCatalogItemAsSingleOption(
  "contraband-candle-5-ball",
  "1 PACK OF 4",
  12.00
);

setCatalogItemAsSingleOption(
  "brothers-crazy-aces-candle-5-ball",
  "1 PACK OF 4",
  12.00
);

setCatalogItemAsSingleOption(
  "dragon-tails-candle-5-ball",
  "1 PACK OF 5",
  15.00
);

setCatalogItemAsSingleOption(
  "black-cat-gatlin-pack-5-ball",
  "1 PACK OF 8",
  28.00
);

setCatalogItemAsSingleOption(
  "black-cat-premium-candle-5-ball",
  "1 PACK OF 4",
  12.00
);

setCatalogItemAsSingleOption(
  "thundermania-candle-8-ball",
  "1 PACK OF 4",
  8.00
);

setCatalogItemAsSingleOption(
  "roman-candle-10-ball",
  "1 PACK OF 6",
  7.50
);

setCatalogItemAsSingleOption(
  "boombomb-candle-10-ball",
  "1 PACK OF 6",
  9.00
);

setCatalogItemAsSingleOption(
  "camo-pack-candle-10-ball",
  "1 PACK OF 12",
  18.00
);

setCatalogItemAsSingleOption(
  "brothers-cherry-on-top-candle-10-ball",
  "1 PACK OF 4",
  6.00
);

setCatalogItemAsSingleOption(
  "crackling-candle-10-ball",
  "1 PACK OF 6",
  9.00
);

setCatalogItemAsSingleOption(
  "exploding-candle-10-ball",
  "1 PACK OF 4",
  6.00
);

setCatalogItemAsSingleOption(
  "black-cat-handful-candle-10-ball",
  "1 PACK OF 5",
  7.50
);

setCatalogItemAsSingleOption(
  "wild-side-candle-10-ball",
  "1 PACK OF 8",
  12.00
);

// Flying item pack/box cleanup.
setCatalogItemAsSingleOption(
  "color-spaceship-2-pack",
  "1 PACKAGE OF 3",
  4.50
);

setCatalogItemAsSingleOption(
  "brothers-lady-bugs",
  "1 PACK OF 3",
  7.50
);

setCatalogItemAsSingleOption(
  "brothers-magic-crystal",
  "1 BOX OF 4",
  10.00
);

setCatalogItemAsSingleOption(
  "pigs-can-fly",
  "1 BOX OF 4",
  12.00
);

setCatalogItemAsSingleOption(
  "sky-smoke",
  "1 BOX OF 4",
  9.00
);

setCatalogItemAsSingleOption(
  "tiger-tails",
  "1 BOX OF 6",
  9.00
);

setCatalogItemAsSingleOption(
  "black-cat-uav",
  "1 PACK OF 3",
  6.00
);

// Catalog option cleanup block ends here.

// Catalog price correction block ends here.

// Day two catalog hotfix block starts here.
// This fixes one wording issue and adds newly confirmed stand items.

function updateCatalogItemText(fireworkId, newName, newUnitLabel) {
  const firework = fireworks.find(function (catalogItem) {
    return catalogItem.id === fireworkId;
  });

  if (firework === undefined) {
    return;
  }

  firework.name = newName;
  firework.unitLabel = newUnitLabel;
}

// Morning Glory Sparklers:
// This is a pack of 36 inch sparklers, not a 36-count bag.
updateCatalogItemText(
  "morning-glory-sparklers-36-count",
  "MORNING GLORY SPARKLERS - 36 INCH",
  "1 PACK OF 36 INCH SPARKLERS"
);

fireworks.push(
  {
    itemNumber: 9998,
    id: "icee-fountain",
    name: "ICEE FOUNTAIN",
    price: 20.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 9997,
    id: "hyper-chill",
    name: "HYPER CHILL",
    price: 15.00,
    unitLabel: "EACH",
    category: "Fountains",
    shopTypes: ["Fountains"]
  },
  {
    itemNumber: 9992,
    id: "super-strobe-pop-bottle-rockets",
    name: "SUPER STROBE",
    price: 30.00,
    unitLabel: "1 PACK OF 2 POP BOTTLE ROCKETS",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 9991,
    id: "street-strobe-pop-bottle-rockets",
    name: "STREET STROBE",
    price: 30.00,
    unitLabel: "1 PACK OF 2 POP BOTTLE ROCKETS",
    category: "Pop Bottle Rockets",
    shopTypes: ["Pop Bottle Rockets", "Flying Items"]
  },
  {
    itemNumber: 9996,
    id: "earth-explorer-series-4-cake-set",
    name: "EARTH EXPLORER SERIES - 4 CAKE SET",
    price: 200.00,
    unitLabel: "1 SET OF 4 CAKES",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 9995,
    id: "backyard-bully",
    name: "BACKYARD BULLY",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 9994,
    id: "bulldog-bash",
    name: "BULLDOG BASH",
    price: 70.00,
    unitLabel: "EACH",
    category: "Cakes",
    shopTypes: ["Cakes", "Big Show Finale"]
  },
  {
    itemNumber: 9993,
    id: "uss-hornet",
    name: "USS HORNET",
    price: 75.00,
    unitLabel: "EACH",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Novelties"]
  }
);

// Day two catalog hotfix block ends here.

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

// These lines make sure the staff checkout page can use the shared catalog data.
window.taxRate = taxRate;
window.fireworks = fireworks;
window.findFireworkById = findFireworkById;