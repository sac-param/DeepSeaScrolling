import { OceanZone, SeaCreature } from './types';
const asset = (fileName: string) =>
  `${import.meta.env.BASE_URL}images/${fileName}`;
export const MAX_DEPTH = 11000;

// default scale for most of the ocean
export const PIXELS_PER_METER = 10;

// extra stretch only for the first zone
export const FIRST_ZONE_END_DEPTH = 200;
export const FIRST_ZONE_PIXELS_PER_METER = 18; // change to 20 if you want even more space

export const OCEAN_ZONES: OceanZone[] = [
  {
    name: "Epipelagic Zone (Sunlight Zone)",
    startDepth: 0,
    endDepth: 200,
    color: "#4facfe",
    description: "The Sunlight Zone. Where most visible light exists."
  },
  {
    name: "Mesopelagic Zone (Twilight Zone)",
    startDepth: 200,
    endDepth: 1000,
    color: "#005bea",
    description: "The Twilight Zone. Light is very faint here."
  },
  {
    name: "Bathypelagic Zone",
    startDepth: 1000,
    endDepth: 4000,
    color: "#00234a",
    description: "The Midnight Zone. The only light comes from bioluminescence."
  },
  {
    name: "Abyssopelagic Zone",
    startDepth: 4000,
    endDepth: 6000,
    color: "#000814",
    description: "The Abyss. Water temperature is near freezing."
  },
  {
    name: "Hadalpelagic Zone",
    startDepth: 6000,
    endDepth: 11000,
    color: "#000000",
    description: "The Trenches. The deepest parts of the ocean."
  }
];

// piecewise conversion: depth -> pixels
export const getDepthOffsetPx = (depth: number) => {
  if (depth <= FIRST_ZONE_END_DEPTH) {
    return depth * FIRST_ZONE_PIXELS_PER_METER;
  }

  const firstZoneHeight = FIRST_ZONE_END_DEPTH * FIRST_ZONE_PIXELS_PER_METER;
  return firstZoneHeight + (depth - FIRST_ZONE_END_DEPTH) * PIXELS_PER_METER;
};

// inverse conversion: pixels -> depth
export const getDepthFromOffsetPx = (offsetPx: number) => {
  const firstZoneHeight = FIRST_ZONE_END_DEPTH * FIRST_ZONE_PIXELS_PER_METER;

  if (offsetPx <= firstZoneHeight) {
    return offsetPx / FIRST_ZONE_PIXELS_PER_METER;
  }

  return FIRST_ZONE_END_DEPTH + (offsetPx - firstZoneHeight) / PIXELS_PER_METER;
};


export const SEA_CREATURES: SeaCreature[] = [
  {
    id: '1',
    name: "Blenny",
    depth: 4,
    description: "Can hop on land.",
    imageUrl: asset('Blenny.png'),
    sizeCategory: "Big"
  },
  {
    id: '2',
    name: "Gobies",
    depth: 8,
    description: "Share burrows with shrimp.",
    imageUrl: asset('Gobies.png'),
    sizeCategory: "Big"
  },
  {
    id: '3',
    name: "Pipefish",
    depth: 13,
    description: "Males carry the eggs.",
    imageUrl: asset('Pipefish.png'),
    sizeCategory: "Big"
  },
  {
    id: '4',
    name: "Flying fish",
    depth: 17,
    description: "Also known as the Killer Whale, an apex predator.",
    imageUrl: asset('FlyingFish.png'),
    sizeCategory: "Small"
  },
  {
    id: '5',
    name: "Barramundi",
    depth: 22,
    description: "Changes sex as adultn.",
    imageUrl: asset('Barramundi.png'),
    sizeCategory: "Big"
  },
  {
    id: '6',
    name: "Damselfish",
    depth: 26,
    description: "Farms its own algae.",
    imageUrl: asset('Damselfish.png'),
    sizeCategory: "Small"
  },
  {
    id: '7',
    name: "Dolphinfish (Mahi-mahi)",
    depth: 30,
    description: "Colors fade after death.",
    imageUrl: asset('Dolphinfish.png'),
    sizeCategory: "Big"
  },
  {
    id: '8',
    name: "Blue Tang",
    depth: 35,
    description: "Sharp tail-spine like scalpels.",
    imageUrl: asset('BlueTang.png'),
    sizeCategory: "Small"
  },
  {
    id: '9',
    name: "Seahorse",
    depth: 39,
    description: "Lacks stomach and teeth.",
    imageUrl: asset('Seahorse.png'),
    sizeCategory: "Big"
  },
  {
    id: '10',
    name: "Parrotfish",
    depth: 44,
    description: "Sleeps in mucus bubble.",
    imageUrl: asset('Parrotfish.png'),
    sizeCategory: "Big"
  },
  {
    id: '11',
    name: "Striped Bass",
    depth: 48,
    description: "Can live thirty years.",
    imageUrl: asset('StripedBass.png'),
    sizeCategory: "Big"
  },
  {
    id: '12',
    name: "Salmon",
    depth: 52,
    description: "Navigates using Earth's magnetic-field.",
    imageUrl: asset('Salmon.png'),
    sizeCategory: "Big"
  },
  {
    id: '13',
    name: "Clownfish",
    depth: 57,
    description: "Immune to anemone stings.",
    imageUrl: asset('Clownfish.png'),
    sizeCategory: "Small"
  },
  {
    id: '14',
    name: "Leafy Sea Dragon",
    depth: 61,
    description: "Mimics floating sea kelp.",
    imageUrl: asset('Leafy Sea Dragon.png'),
    sizeCategory: "Big"
  },
  {
    id: '15',
    name: "Surgeonfish",
    depth: 66,
    description: "Eats algae off turtles.",
    imageUrl: asset('Surgeonfish.png'),
    sizeCategory: "Small"
  },
  {
    id: '16',
    name: "Black Drum",
    depth: 70,
    description: "Makes loud drumming sounds.",
    imageUrl: asset('BlackDrum.png'),
    sizeCategory: "Big"
  },
  {
    id: '17',
    name: "Wrasse",
    depth: 75,
    description: "Some act as cleaners.",
    imageUrl: asset('Wrasse1.3.png'),
    sizeCategory: "Big"
  },
  {
    id: '18',
    name: "Green Sea Turtle",
    depth: 88,
    description: "Holds breath five hours.",
    imageUrl: asset('GreenSeaTurtle1.3.png'),
    sizeCategory: "Big"
  },
  {
    id: '19',
    name: "Bluefish",
    depth: 83,
    description: "Snaps at everything nearby.",
    imageUrl: asset('Bluefish.png'),
    sizeCategory: "Big"
  },
  {
    id: '20',
    name: "Butterflyfish",
    depth: 88,
    description: "Mates for entire life.",
    imageUrl: asset('ButterflyFish.png'),
    sizeCategory: "Small"
  },
  {
    id: '21',
    name: "Reef Shark",
    depth: 92,
    description: "Must swim to breathe.",
    imageUrl: asset('ReefShark1.3.png'),
    sizeCategory: "Big"
  },
  {
    id: '22',
    name: "Boxfish",
    depth: 97,
    description: "Secretes deadly skin toxins.",
    imageUrl: asset('Boxfish1.0.png'),
    sizeCategory: "Small"
  },
  {
    id: '23',
    name: "Stingray",
    depth: 101,
    description: "Closely related to sharks.",
    imageUrl: asset('Stingray.png'),
    sizeCategory: "Big"
  },
  {
    id: '24',
    name: "Sea Turtle",
    depth: 110,
    description: "Returns to birth beach.",
    imageUrl: asset('SeaTurtle1.3.png'),
    sizeCategory: "Big"
  },
  {
    id: '25',
    name: "Angelfish",
    depth: 110,
    description: "Feeds mostly on sponges.",
    imageUrl: asset('AngelFish.png'),
    sizeCategory: "Big"
  },
  {
    id: '26',
    name: "Barracuda",
    depth: 114,
    description: "Attracted to shiny objects.",
    imageUrl: asset('Barracuda.png'),
    sizeCategory: "Big"
  },
  {
    id: '27',
    name: "Velvet Crab",
    depth: 119,
    description: "Known as \"Fiddler\" crab.",
    imageUrl: asset('VelvetCrab.png'),
    sizeCategory: "Small"
  },
  {
    id: '28',
    name: "Bull Shark",
    depth: 123,
    description: "Swims in fresh water.",
    imageUrl: asset('BullShark.png'),
    sizeCategory: "Large"
  },
  {
    id: '29',
    name: "Moray Eel",
    depth: 127,
    description: "Has second set of jaws.",
    imageUrl: asset('MorayEel1.0.png'),
    sizeCategory: "Big"
  },
  {
    id: '30',
    name: "Sardine",
    depth: 132,
    description: "Massive schools called bait-balls.",
    imageUrl: asset('Sardine.png'),
    sizeCategory: "Big"
  },
  {
    id: '31',
    name: "Anchovy",
    depth: 136,
    description: "Breathes with mouth open.",
    imageUrl: asset('Anchovy1.0.png'),
    sizeCategory: "Big"
  },
  {
    id: '32',
    name: "Triggerfish",
    depth: 141,
    description: "Rotates eyes independently.",
    imageUrl: asset('Triggerfish.png'),
    sizeCategory: "Small"
  },
  {
    id: '33',
    name: "Atlantic Mackerel",
    depth: 145,
    description: "Lacks a swim bladder.",
    imageUrl: asset('AtlanticMackerel.png'),
    sizeCategory: "Small"
  },
  {
    id: '34',
    name: "Manta Ray",
    depth: 150,
    description: "Largest brain of fish.",
    imageUrl: asset('Manta Ray.png'),
    sizeCategory: "Large"
  },
  {
    id: '35',
    name: "Lionfish",
    depth: 154,
    description: "Can expand stomach thirty-fold.",
    imageUrl: asset('Lionfish.png'),
    sizeCategory: "Small"
  },
  {
    id: '36',
    name: "Mackerel",
    depth: 158,
    description: "Highly migratory silver schools.",
    imageUrl: asset('Mackerel.png'),
    sizeCategory: "Small"
  },
  {
    id: '37',
    name: "Herring",
    depth: 163,
    description: "Communicates via gas bubbles.",
    imageUrl: asset('Herring.png'),
    sizeCategory: "Big"
  },
  {
    id: '38',
    name: "Killer Whale (Orca)",
    depth: 167,
    description: "Actually a large dolphin.",
    imageUrl: asset('Killer Whale (Orca)1.0.png'),
    sizeCategory: "Large"
  },
  {
    id: '39',
    name: "Wolf Eel",
    depth: 172,
    description: "Crushes hard sea urchins.",
    imageUrl: asset('WolfEel.png'),
    sizeCategory: "Big"
  },
  {
    id: '40',
    name: "Marlin",
    depth: 176,
    description: "Fastest fish in ocean.",
    imageUrl: asset('Marlin1.png'),
    sizeCategory: "Large"
  },
  {
    id: '41',
    name: "Blue Whale",
    depth: 180,
    description: "Heart size of car.",
    imageUrl: asset('BlueWhale.png'),
    sizeCategory: "Large"
  },
  {
    id: '42',
    name: "Pelagic Stingray",
    depth: 170,
    description: "Only ray in open-ocean.",
    imageUrl: asset('PelagicStingray.png'),
    sizeCategory: "Big"
  },
  {
    id: '43',
    name: "Lizardfish",
    depth: 189,
    description: "Teeth on its tongue.",
    imageUrl: asset('Lizardfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '44',
    name: "Atlantic Cod",
    depth: 194,
    description: "Thrives in freezing water.",
    imageUrl: asset('AtlanticCod1.png'),
    sizeCategory: "Big"
  },
  {
    id: '45',
    name: "Haddock",
    depth: 200,
    description: "Black \"Devil's thumbprint\" mark.",
    imageUrl: asset('Haddock1.1.png'),
    sizeCategory: "Big"
  },
  {
    id: '46',
    name: "Blue Shark",
    depth: 230,
    description: "Known as ocean wolves.",
    imageUrl: asset('BlueShark.png'),
    sizeCategory: "Big"
  },
  {
    id: '47',
    name: "Pacific Cod",
    depth: 264,
    description: "Has a chin whisker.",
    imageUrl: asset('PacificCod1.png'),
    sizeCategory: "Big"
  },
  {
    id: '48',
    name: "Bottlenose Dolphin",
    depth: 298,
    description: "Names itself with whistles.",
    imageUrl: asset('BottlenoseDolphin.png'),
    sizeCategory: "Big"
  },
  {
    id: '49',
    name: "Gummy Shark",
    depth: 332,
    description: "Has no sharp teeth.",
    imageUrl: asset('GummyShark.png'),
    sizeCategory: "Big"
  },
  {
    id: '50',
    name: "Queen Snapper",
    depth: 366,
    description: "Lives near rocky ledges.",
    imageUrl: asset('QueenSnapper.png'),
    sizeCategory: "Big"
  },
  {
    id: '51',
    name: "Terrible Claw Lobster",
    depth: 400,
    description: "One claw vastly larger.",
    imageUrl: asset('terribleclawlobster.png'),
    sizeCategory: "Small"
  },
  {
    id: '52',
    name: "Firefly Squid",
    depth: 435,
    description: "Lights up entire bays.",
    imageUrl: asset('FireflySquid.png'),
    sizeCategory: "Big"
  },
  {
    id: '53',
    name: "Japanese Spider Crab",
    depth: 469,
    description: "Leg span twelve feet.",
    imageUrl: asset('JapaneseSpiderCrab1.png'),
    sizeCategory: "Big"
  },
  {
    id: '54',
    name: "Tuna",
    depth: 503,
    description: "Never stops swimming fast.",
    imageUrl: asset('Tuna.png'),
    sizeCategory: "Big"
  },
  {
    id: '55',
    name: "Emperor Penguin",
    depth: 537,
    description: "Endures extreme Antarctic cold.",
    imageUrl: asset('EmperorPenguin.png'),
    sizeCategory: "Large"
  },
  {
    id: '56',
    name: "Sunfish (Mola mola)",
    depth: 571,
    description: "Heaviest bony fish known.",
    imageUrl: asset('SunfishMolamola.png'),
    sizeCategory: "Large"
  },
  {
    id: '57',
    name: "Jellyfish",
    depth: 605,
    description: "Made 95% of water.",
    imageUrl: asset('Jellyfish1.3.png'),
    sizeCategory: "Big"
  },
  {
    id: '58',
    name: "Sea Angel",
    depth: 639,
    description: "Swimming predatory sea snail.",
    imageUrl: asset('SeaAngel.png'),
    sizeCategory: "Big"
  },
  {
    id: '59',
    name: "Swordfish",
    depth: 673,
    description: "Heats eyes for hunting.",
    imageUrl: asset('Swordfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '60',
    name: "Chain Catshark",
    depth: 707,
    description: "Glows bright neon green.",
    imageUrl: asset('ChainCatshark1.png'),
    sizeCategory: "Large"
  },
  {
    id: '61',
    name: "Megamouth Shark",
    depth: 741,
    description: "Only 100 ever seen.",
    imageUrl: asset('Megamouth Shark.png'),
    sizeCategory: "Large"
  },
  {
    id: '62',
    name: "Beluga Whale",
    depth: 775,
    description: "Can mimic human speech.",
    imageUrl: asset('BelugaWhale.png'),
    sizeCategory: "Large"
  },
  {
    id: '63',
    name: "Monkfish",
    depth: 809,
    description: "Lures prey with \"fishing-pole\".",
    imageUrl: asset('Monkfish.png'),
    sizeCategory: "Big"
  },
  {
    id: '64',
    name: "Barreleye Fish",
    depth: 844,
    description: "Upward looking green eyes.",
    imageUrl: asset('BarreleyeFish1.png'),
    sizeCategory: "Large"
  },
  {
    id: '65',
    name: "Spiny Dogfish",
    depth: 878,
    description: "Lives nearly 100 years.",
    imageUrl: asset('Spiny Dogfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '66',
    name: "Orange Roughy",
    depth: 912,
    description: "Lives over 150 years.",
    imageUrl: asset('OrangeRoughy.png'),
    sizeCategory: "Large"
  },
  {
    id: '67',
    name: "Vampire Squid",
    depth: 946,
    description: "Neither squid nor octopus.",
    imageUrl: asset('vampiresquid.png'),
    sizeCategory: "Large"
  },
  {
    id: '68',
    name: "Hatchetfish",
    depth: 965,
    description: "Ultra thin silver body.",
    imageUrl: asset('Hatchetfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '69',
    name: "Leatherback Turtle",
    depth: 1050,
    description: "Dives into midnight zone.",
    imageUrl: asset('LeatherbackTurtle1.png'),
    sizeCategory: "Custom"
  },
  {
    id: '70',
    name: "Blobfish",
    depth: 1116,
    description: "Melts at sea level.",
    imageUrl: asset('blobfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '71',
    name: "Lanternfish",
    depth: 1182,
    description: "Most common deep-sea fish.",
    imageUrl: asset('Lanternfish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '72',
    name: "Whale Shark",
    depth: 1248,
    description: "Skin six inches thick.",
    imageUrl: asset('Whale Shark.png'),
    sizeCategory: "Large"
  },
  {
    id: '73',
    name: "Deep-sea Batfish",
    depth: 1314,
    description: "Walks on ocean floor.",
    imageUrl: asset('Deep-seaBatfish1.png'),
    sizeCategory: "Large"
  },
  {
    id: '74',
    name: "Goblin Shark",
    depth: 1380,
    description: "Shoots jaw forward fast.",
    imageUrl: asset('GoblinShark.png'),
    sizeCategory: "Large"
  },
  {
    id: '75',
    name: "Marrus orthocanna",
    depth: 1445,
    description: "Long colonial rocket-ship body.",
    imageUrl: asset('Marrusorthocanna.png'),
    sizeCategory: "Large"
  },
  {
    id: '76',
    name: "Cosmic Jellyfish",
    depth: 1511,
    description: "Looks like alien spacecraft.",
    imageUrl: asset('CosmicJellyfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '77',
    name: "Pearleye",
    depth: 1577,
    description: "Sees light from below.",
    imageUrl: asset('PearleyeFish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '78',
    name: "Vigtorniella Worm",
    depth: 1643,
    description: "Feeds on whale bones.",
    imageUrl: asset('VigtorniellaWorm.png'),
    sizeCategory: "Large"
  },
  {
    id: '79',
    name: "Frilled Shark",
    depth: 1709,
    description: "Has 300 needle-like teeth.",
    imageUrl: asset('FrilledShark.png'),
    sizeCategory: "Custom"
  },
  {
    id: '80',
    name: "Chimaera (Ghost Shark)",
    depth: 1775,
    description: "Older than the dinosaurs.",
    imageUrl: asset('ChimaeraGhostShark1.png'),
    sizeCategory: "Custom"
  },
  {
    id: '81',
    name: "Jewel Squid",
    depth: 1841,
    description: "Dotted with colorful lights.",
    imageUrl: asset('JewelSquid.png'),
    sizeCategory: "Big"
  },
  {
    id: '82',
    name: "Lightfish",
    depth: 1907,
    description: "Lights on its belly.",
    imageUrl: asset('Lightfish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '83',
    name: "Dragonfish",
    depth: 1973,
    description: "Teeth are crystal clear.",
    imageUrl: asset('Dragonfish1.png'),
    sizeCategory: "Custom"
  },
  {
    id: '84',
    name: "Big Red Jellyfish",
    depth: 2039,
    description: "Lacks long stinging tentacles.",
    imageUrl: asset('bigredjellyfish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '85',
    name: "Stoplight Loosejaw",
    depth: 2105,
    description: "Sees red \"invisible\" light.",
    imageUrl: asset('StoplightLoosejaw.png'),
    sizeCategory: "Custom"
  },
  {
    id: '86',
    name: "Sabertooth Fish",
    depth: 2170,
    description: "Cannot close its mouth.",
    imageUrl: asset('SabertoothFish2.png'),
    sizeCategory: "Large"
  },
  {
    id: '87',
    name: "Giant Isopod",
    depth: 2236,
    description: "Giant deep-sea pill bug.",
    imageUrl: asset('giantisopod.png'),
    sizeCategory: "Large"
  },
  {
    id: '88',
    name: "Venus Flytrap Anemone",
    depth: 2302,
    description: "Closes like land plant.",
    imageUrl: asset('VenusFlytrapAnemone.png'),
    sizeCategory: "Large"
  },
  {
    id: '89',
    name: "Cockatoo Squid",
    depth: 2368,
    description: "Floats like a balloon.",
    imageUrl: asset('CockatooSquid1.png'),
    sizeCategory: "Large"
  },
  {
    id: '90',
    name: "Viperfish",
    depth: 2434,
    description: "Teeth too big for mouth.",
    imageUrl: asset('Viperfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '91',
    name: "Glass Squid",
    depth: 2500,
    description: "Almost completely see-through body.",
    imageUrl: asset('GlassSquid.png'),
    sizeCategory: "Large"
  },
  {
    id: '92',
    name: "Elephant Seal",
    depth: 2566,
    description: "Dives for two hours.",
    imageUrl: asset('ElephantSeal.png'),
    sizeCategory: "Large"
  },
  {
    id: '93',
    name: "Patagonian Toothfish",
    depth: 2632,
    description: "Sold as \"Chilean Seabass\".",
    imageUrl: asset('PatagonianToothfish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '94',
    name: "Telescope Octopus",
    depth: 2698,
    description: "Moves like a ghost.",
    imageUrl: asset('TelescopeOctopus.png'),
    sizeCategory: "Custom"
  },
  {
    id: '95',
    name: "Greenland Shark",
    depth: 2764,
    description: "Oldest living vertebrate animal.",
    imageUrl: asset('GreenlandShark.png'),
    sizeCategory: "Custom"
  },
  {
    id: '96',
    name: "Black Dragonfish",
    depth: 2830,
    description: "Females are much larger.",
    imageUrl: asset('BlackDragonfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '97',
    name: "Anglerfish",
    depth: 2895,
    description: "Male fuses to female.",
    imageUrl: asset('Anglerfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '98',
    name: "Yeti Crab",
    depth: 2961,
    description: "Grows food on arms.",
    imageUrl: asset('YetiCrab1.png'),
    sizeCategory: "Large"
  },
  {
    id: '99',
    name: "Sperm Whale",
    depth: 3027,
    description: "Fights giant squid deep.",
    imageUrl: asset('SpermWhale.png'),
    sizeCategory: "Large"
  },
  {
    id: '100',
    name: "Brotula",
    depth: 3093,
    description: "Related to the cusk-eel.",
    imageUrl: asset('Brotula.png'),
    sizeCategory: "Large"
  },
  {
    id: '101',
    name: "Gulper Eel",
    depth: 3159,
    description: "Mostly mouth and tail.",
    imageUrl: asset('GulperEel.png'),
    sizeCategory: "Custom"
  },
  {
    id: '102',
    name: "Giant Tube Worm",
    depth: 3225,
    description: "No mouth or stomach.",
    imageUrl: asset('GiantTubeWorm.png'),
    sizeCategory: "Large"
  },
  {
    id: '103',
    name: "Scaly-foot Snail",
    depth: 3291,
    description: "Has an iron shell.",
    imageUrl: asset('Scaly-footSnail.png'),
    sizeCategory: "Large"
  },
  {
    id: '104',
    name: "Cuvier's Beaked Whale",
    depth: 3357,
    description: "Deepest diving mammal known.",
    imageUrl: asset('Cuviersbeakedwhale.png'),
    sizeCategory: "Large"
  },
  {
    id: '105',
    name: "Headless Chicken Fish",
    depth: 3423,
    description: "Swimming deep-sea cucumber.",
    imageUrl: asset('HeadlessChickenFish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '106',
    name: "Fangtooth",
    depth: 3469,
    description: "Toughest fish in abyss.",
    imageUrl: asset('fangtooth.png'),
    sizeCategory: "Large"
  },
  {
    id: '107',
    name: "Zombie Worm",
    depth: 3555,
    description: "Dissolves bone with acid.",
    imageUrl: asset('ZombieWorm.png'),
    sizeCategory: "Large"
  },
  {
    id: '108',
    name: "Gigantactis",
    depth: 3620,
    description: "Extremely long glowing lure.",
    imageUrl: asset('Gigantactis.png'),
    sizeCategory: "Large"
  },
  {
    id: '109',
    name: "Cookiecutter Shark",
    depth: 3686,
    description: "Takes round bites out-of-prey.",
    imageUrl: asset('cookiecuttershark.png'),
    sizeCategory: "Large"
  },
  {
    id: '110',
    name: "Pelican Eel",
    depth: 3762,
    description: "Swallows prey whole easily.",
    imageUrl: asset('PelicanEel.png'),
    sizeCategory: "Large"
  },
  {
    id: '111',
    name: "Sea Pen",
    depth: 3818,
    description: "Glows when it's touched.",
    imageUrl: asset('SeaPen.png'),
    sizeCategory: "Big"
  },
  {
    id: '112',
    name: "Harp Sponge",
    depth: 3884,
    description: "Traps prey with Velcro-hooks.",
    imageUrl: asset('HarpSponge.png'),
    sizeCategory: "Large"
  },
  {
    id: '113',
    name: "Bubblegum Coral",
    depth: 3950,
    description: "Colonies grow very slowly.",
    imageUrl: asset('bubblegumcoral.png'),
    sizeCategory: "Large"
  },
  {
    id: '114',
    name: "Atolla Jellyfish",
    depth: 4200,
    description: "\"Burglar alarm\" light flashes.",
    imageUrl: asset('AtollaJellyfish.png'),
    sizeCategory: "Big"
  },
  {
    id: '115',
    name: "Dumbo Octopus",
    depth: 4443,
    description: "Deepest living octopus species.",
    imageUrl: asset('DumboOctopus.png'),
    sizeCategory: "Large"
  },
  {
    id: '116',
    name: "Faceless Fish",
    depth: 4686,
    description: "Head has no face.",
    imageUrl: asset('FacelessFish.png'),
    sizeCategory: "Large"
  },
  {
    id: '117',
    name: "Tripod Fish",
    depth: 4929,
    description: "Stands on three fins.",
    imageUrl: asset('TripodFish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '118',
    name: "Abyssal Grenadier",
    depth: 5171,
    description: "Smells food miles away.",
    imageUrl: asset('AbyssalGrenadier.png'),
    sizeCategory: "Large"
  },
  {
    id: '119',
    name: "Abyssal Spiderfish",
    depth: 5414,
    description: "Feels vibrations through fins.",
    imageUrl: asset('AbyssalSpiderfish.png'),
    sizeCategory: "Custom"
  },
  {
    id: '120',
    name: "Sea Pig",
    depth: 5657,
    description: "Walks on water-filled tubes.",
    imageUrl: asset('SeaPig.png'),
    sizeCategory: "Large"
  },
  {
    id: '121',
    name: "Deep-sea Anemone",
    depth: 5900,
    description: "Lives on trench walls.",
    imageUrl: asset('Deep-seaAnemone.png'),
    sizeCategory: "Big"
  },
  {
    id: '122',
    name: "Giant Amphipod",
    depth: 7010,
    description: "Giant shrimp-like scavenger.",
    imageUrl: asset('GiantAmphipod.png'),
    sizeCategory: "Big"
  },
  {
    id: '123',
    name: "Comb Jelly",
    depth: 6895,
    description: "Largest animal using cilia.",
    imageUrl: asset('CombJelly.png'),
    sizeCategory: "Big"
  },
  {
    id: '124',
    name: "Notoliparis kermadecensis",
    depth: 7291,
    description: "Endures extreme trench pressure.",
    imageUrl: asset('Notolipariskermadecensis.png'),
    sizeCategory: "Large"
  },
  {
    id: '125',
    name: "Pseudoliparis amblystomopsis",
    depth: 7686,
    description: "Found in Japan Trench.",
    imageUrl: asset('Pseudoliparisamblystomopsis.png'),
    sizeCategory: "Large"
  },
  {
    id: '126',
    name: "Hadal Sea Cucumber",
    depth: 8082,
    description: "Dominates the trench floor.",
    imageUrl: asset('HadalSeaCucumber.png'),
    sizeCategory: "Big"
  },
  {
    id: '127',
    name: "Hadal Snailfish",
    depth: 8477,
    description: "Has partially transparent skin.",
    imageUrl: asset('HadalSnailfish1.png'),
    sizeCategory: "Big"
  },
  {
    id: '128',
    name: "Pseudoliparis swirei",
    depth: 8873,
    description: "Named after HMS Challenger.",
    imageUrl: asset('Pseudoliparisswirei.png'),
    sizeCategory: "Large"
  },
  {
    id: '129',
    name: "Deep Trench Snailfish",
    depth: 9268,
    description: "Lives in total darkness.",
    imageUrl: asset('DeepTrenchSnailfish.png'),
    sizeCategory: "Large"
  },
  {
    id: '130',
    name: "Cusk Eel",
    depth: 9664,
    description: "Deepest recorded fish ever.",
    imageUrl: asset('CuskEel.png'),
    sizeCategory: "Custom"
  },
  {
    id: '131',
    name: "Archaea",
    depth: 10059,
    description: "Not bacteria but similar.",
    imageUrl: asset('Archaea.png'),
    sizeCategory: "Large"
  },
  {
    id: '132',
    name: "Foraminifera",
    depth: 10455,
    description: "Builds tiny ornate shells.",
    imageUrl: asset('Foraminifera.png'),
    sizeCategory: "Big"
  },
  {
    id: '133',
    name: "Polychaete Worms",
    depth: 10850,
    description: "Survives where others cannot.",
    imageUrl: asset('PolychaeteWorms.png'),
    sizeCategory: "Large"
  }
];