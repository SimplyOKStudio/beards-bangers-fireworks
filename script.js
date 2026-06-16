// This is the tax rate used for the estimated total.
// Example: 0.0825 means 8.25% tax.
// Later, change this to your real local tax rate.
const taxRate = 0.0825;

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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
    id: "punks-100-count-bundle",
    name: "PUNKS - 100 COUNT BUNDLE",
    price: 1.50,
    unitLabel: "1 BUNDLE OF 100",
    category: "Punks",
    shopTypes: ["Punks", "Accessories"]
  },
  {
    itemNumber: 95,
    id: "jumbo-punks-50-count-bundle",
    name: "JUMBO PUNKS - 50 COUNT BUNDLE",
    price: 6.00,
    unitLabel: "1 BUNDLE OF 50",
    category: "Punks",
    shopTypes: ["Punks", "Accessories"]
  },
  {
    itemNumber: 100,
    id: "extra-large-punks-50-count-bundle",
    name: "EXTRA LARGE PUNKS - 50 COUNT BUNDLE",
    price: 7.50,
    unitLabel: "1 BUNDLE OF 50",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 315,
    id: "gangster-gun-196-ball",
    name: "GANGSTER GUN - 196 BALL",
    price: 20.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 320,
    id: "brothers-gatling-gun-240-ball",
    name: "BROTHERS GATLING GUN - 240 BALL",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 325,
    id: "mini-blaster-280-ball",
    name: "MINI BLASTER - 280 BALL",
    price: 15.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 330,
    id: "brothers-heavy-gear-380-ball",
    name: "BROTHERS HEAVY GEAR - 380 BALL",
    price: 50.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },
  {
    itemNumber: 335,
    id: "steel-titan-mortar-384-ball",
    name: "STEEL TITAN MORTAR - 384 BALL",
    price: 40.00,
    unitLabel: "1 PIECE",
    category: "Roman Candles",
    shopTypes: ["Roman Candles"]
  },

  {
    itemNumber: 340,
    id: "rotating-machine-gun-352-shot",
    name: "ROTATING MACHINE GUN - 352 SHOT",
    price: 140.00,
    unitLabel: "1 PIECE",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles", "Rotating Roman Candles"]
  },
  {
    itemNumber: 345,
    id: "cartridge-rotating-machine-gun-352-shot",
    name: "CARTRIDGE ROTATING MACHINE GUN - 352 SHOT",
    price: 30.00,
    unitLabel: "1 PIECE",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles", "Rotating Roman Candles"]
  },
  {
    itemNumber: 350,
    id: "machine-gun-kelly-388-shot",
    name: "MACHINE GUN KELLY - 388 SHOT",
    price: 150.00,
    unitLabel: "1 PIECE",
    category: "Rotating Roman Candles",
    shopTypes: ["Roman Candles", "Rotating Roman Candles"]
  }
  ,
  {
    itemNumber: 355,
    id: "5-minute-smoke",
    name: "5 MINUTE SMOKE",
    price: 3.00,
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 375,
    id: "color-grenade-with-pull-string",
    name: "COLOR GRENADE WITH PULL STRING",
    price: 3.00,
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 405,
    id: "never-ending-smoke",
    name: "NEVER-ENDING SMOKE",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 410,
    id: "reaper-smoke-black",
    name: "REAPER SMOKE - BLACK",
    price: 4.00,
    unitLabel: "1 PIECE",
    category: "Smoke",
    shopTypes: ["Smoke", "Daytime Fun"]
  },
  {
    itemNumber: 415,
    id: "usa-smoke",
    name: "USA SMOKE",
    price: 6.00,
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
    category: "Flying Items",
    shopTypes: ["Flying Items", "Daytime Fun"]
  },
  {
    itemNumber: 485,
    id: "fanta-sea",
    name: "FANTA SEA",
    price: 10.00,
    unitLabel: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
        label: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 595,
    id: "poopy-puppy-12-count",
    name: "POOPY PUPPY - 12 COUNT",
    price: 1.75,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 600,
    id: "poopy-puppy-144-count",
    name: "POOPY PUPPY - 144 COUNT",
    price: 1.75,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 605,
    id: "red-dirt-rampage",
    name: "RED DIRT RAMPAGE",
    price: 5.00,
    unitLabel: "1 PIECE",
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
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 635,
    id: "spirospark",
    name: "SPIROSPARK",
    price: 25.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 640,
    id: "toy-tanks",
    name: "TOY TANKS",
    price: 1.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 645,
    id: "brothers-terrific-tyrant",
    name: "BROTHERS TERRIFIC TYRANT",
    price: 10.00,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  },
  {
    itemNumber: 650,
    id: "torpedo-thunder-snaps",
    name: "TORPEDO / THUNDER SNAPS",
    price: 1.50,
    unitLabel: "1 PIECE",
    category: "Novelties",
    shopTypes: ["Novelties", "Daytime Fun"]
  }
];

// This stores the customer's selected quantities.
// It starts empty because the customer has not picked anything yet.
const selectedFireworks = {};

// This keeps track of the currently selected inventory category.
let activeCategory = "Popular Picks";

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

      // This chooses which fireworks should be shown before search is applied.
  let fireworksToShow = fireworks;

  // This shows only Popular Picks when the Popular Picks button is selected.
  if (activeCategory === "Popular Picks") {
    fireworksToShow = popularPickIds
      .map(function (fireworkId) {
        return fireworks.find(function (firework) {
          return firework.id === fireworkId;
        });
      })
      .filter(function (firework) {
        return firework !== undefined;
      });
  }

  // This keeps only fireworks that match the search text and selected category.
  const filteredFireworks = fireworksToShow.filter(function (firework) {
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
      activeCategory === "Popular Picks" ||
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

    // This closes the phone keyboard after choosing a category.
  inventorySearch.blur();

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

// This hides the My List bar while the customer is typing in the search box.
inventorySearch.addEventListener("focus", function () {
  // This adds a class to the page body.
  document.body.classList.add("search-is-active");
});

// This brings the My List bar back when the customer leaves the search box.
inventorySearch.addEventListener("blur", function () {
  // This removes the class from the page body.
  document.body.classList.remove("search-is-active");
});

// This closes the phone keyboard when the customer presses Enter/Search.
inventorySearch.addEventListener("keydown", function (event) {
  // This checks if the customer pressed the Enter key.
  if (event.key === "Enter") {
    // This tells the search box to stop being active.
    inventorySearch.blur();
  }
});

// This closes the phone keyboard when the customer scrolls down the page.
window.addEventListener("scroll", function () {
  // This checks if the search box is currently active.
  if (document.activeElement === inventorySearch) {
    // This tells the search box to stop being active.
    inventorySearch.blur();
  }
});

// This runs the displayFireworks function when the page loads.
displayFireworks();

// This runs the displayTopSections function when the page loads.
displayTopSections();



