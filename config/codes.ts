export interface Code {
  code: string;
  rewards: string;
  status: 'NEW' | 'Working' | 'Expired';
}

export const codes: Code[] = [

  {
    code: "1MMembers",
    rewards: "Redeem code for 10,000 Red Tickets, 15 Trait Rerolls, 10 Potential Keys, and 10 Frost Keys",
    status: "NEW"
  },
  {
    code: "Freetickets",
    rewards: "Redeem code for 5,000 Red Tickets",
    status: "NEW"
  },
  {
    code: "Iboughtbundles!!",
    rewards: "Redeem code for 50,000 Red Tickets",
    status: "NEW"
  },
  {
    code: "!Update",
    rewards: "1250 Red Tickets, x5 Trait Crystals, 5 Frost Keys (level 5+)",
    status: "Working"
  },
  {
    code: "Release",
    rewards: "500 gems and two trait crystals",
    status: "Working"
  },
  {
    code: "!Gohun",
    rewards: "1250 Red Tickets, x5 Trait Crystals (level 5+)",
    status: "Working"
  },
  {
    code: "UpdateSoon!",
    rewards: "1000 Gems + 10 Rerolls + 5 Frost Keys",
    status: "Working"
  },
  {
    code: "100kLikes",
    rewards: "1000 Gems, x10 Trait Crystals",
    status: "Working"
  },
  {
    code: "50KLikes",
    rewards: "1000 Gems",
    status: "Working"
  },
  {
    code: "200kMembers",
    rewards: "500 gems, two potential keys, and two trait crystals ",
    status: "Working"
  },
  {
    code: "MozKing",
    rewards: " 250 Gems, x1 Trait Crystal",
    status: "Working"
  },
  {
    code: "1MVisits",
    rewards: "1k gems, two potential keys, and five trait crystals",
    status: "Working"
  },
  {
    code: "2MVisits",
    rewards: "500 gems, two potential keys, and two trait crystals",
    status: "Working"
  },
  {
    code: "SubtoRlxsage",
    rewards: "250 gems and one trait crystal",
    status: "Working"
  },
  {
    code: "SubtoZillas",
    rewards: "250 gems and one trait crystal",
    status: "Working"
  },
  // Working Codes
  {
    code: "20Mvisits",
    rewards: "1,000 Gems, 5 Rerolls, 3 Frost Keys, 3 Potential Keys and Basic Luck Potion",
    status: "Working"
  },
  {
    code: "XMEGACODE",
    rewards: "2k Gems + 15 rerolls + 10 Frost Keys + 10 Potential Keys + Legends Potion",
    status: "Working"
  },
  {
    code: "10MVisits",
    rewards: "1000 Gems, x2 Trait Crystals, x5 Potential Keys",
    status: "Working"
  },
  {
    code: "SorryForFoodBug!",
    rewards: "100 Meat [level 25 req]",
    status: "Working"
  },
  {
    code: "MegaZillas",
    rewards: "750 gems + 2 Trait Crystal",
    status: "Working"
  },
  {
    code: "MegaMozKing",
    rewards: "750 Gems, 2 Trait Crystals",
    status: "Working"
  },
  {
    code: "MegaRlxSage",
    rewards: "750 Gems, 2 Trait Crystals",
    status: "Working"
  },
  {
    code: "5mVisits",
    rewards: "500 Gems, 5 Frost Keys, 2 Potential Keys, 2 Trait Crystals",
    status: "Working"
  },
  {
    code: "sorry4shutdown",
    rewards: "500 Gems, 5 Frost Keys, 2 Potential Keys, 2 Trait Crystals",
    status: "Expired"
  }
];
