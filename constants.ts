import { OceanZone, SeaCreature } from './types';

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
    imageUrl: "/images/Blenny.png",
    sizeCategory: "Small"
  },
  {
    id: '2',
    name: "Gobies",
    depth: 8,
    description: "Share burrows with shrimp.",
    imageUrl: "/images/Gobies.png",
    sizeCategory: "Small"
  },
  {
    id: '3',
    name: "Pipefish",
    depth: 13,
    description: "Males carry the eggs.",
    imageUrl: "/images/Pipefish.png",
    sizeCategory: "Small"
  },
  {
    id: '4',
    name: "Flying fish",
    depth: 17,
    description: "Also known as the Killer Whale, an apex predator.",
    imageUrl: "/images/FlyingFish.png",
    sizeCategory: "Small"
  },
  {
    id: '5',
    name: "Barramundi",
    depth: 22,
    description: "Changes sex as adultn.",
    imageUrl: "/images/Barramundi.png",
    sizeCategory: "Big"
  },
  {
    id: '6',
    name: "Damselfish",
    depth: 26,
    description: "Farms its own algae.",
    imageUrl: "/images/Damselfish.png",
    sizeCategory: "Small"
  },
  {
    id: '7',
    name: "Dolphinfish (Mahi-mahi)",
    depth: 30,
    description: "Colors fade after death.",
    imageUrl: "/images/Dolphinfish.png",
    sizeCategory: "Big"
  },
  {
    id: '8',
    name: "Blue Tang",
    depth: 35,
    description: "Sharp tail-spine like scalpels.",
    imageUrl: "/images/BlueTang.png",
    sizeCategory: "Small"
  },
  {
    id: '9',
    name: "Seahorse",
    depth: 39,
    description: "Lacks stomach and teeth.",
    imageUrl: "/images/Seahorse.png",
    sizeCategory: "Small"
  },
  {
    id: '10',
    name: "Parrotfish",
    depth: 44,
    description: "Sleeps in mucus bubble.",
    imageUrl: "/images/Parrotfish.png",
    sizeCategory: "Small"
  },
  {
    id: '11',
    name: "Striped Bass",
    depth: 48,
    description: "Can live thirty years.",
    imageUrl: "/images/StripedBass.png",
    sizeCategory: "Big"
  },
  {
    id: '12',
    name: "Salmon",
    depth: 52,
    description: "Navigates using Earth's magnetic-field.",
    imageUrl: "/images/Salmon.png",
    sizeCategory: "Big"
  },
  {
    id: '13',
    name: "Clownfish",
    depth: 57,
    description: "Immune to anemone stings.",
    imageUrl: "/images/Clownfish.png",
    sizeCategory: "Small"
  },
  {
    id: '14',
    name: "Leafy Sea Dragon",
    depth: 61,
    description: "Mimics floating sea kelp.",
    imageUrl: "/images/Leafy Sea Dragon.png",
    sizeCategory: "Small"
  },
  {
    id: '15',
    name: "Surgeonfish",
    depth: 66,
    description: "Eats algae off turtles.",
    imageUrl: "/images/Surgeonfish.png",
    sizeCategory: "Small"
  },
  {
    id: '16',
    name: "Black Drum",
    depth: 70,
    description: "Makes loud drumming sounds.",
    imageUrl: "/images/BlackDrum.png",
    sizeCategory: "Big"
  },
  {
    id: '17',
    name: "Wrasse",
    depth: 75,
    description: "Some act as cleaners.",
    imageUrl: "/images/Wrasse1.3.png",
    sizeCategory: "Small"
  },
  {
    id: '18',
    name: "Green Sea Turtle",
    depth: 79,
    description: "Holds breath five hours.",
    imageUrl: "/images/GreenSeaTurtle1.3.png",
    sizeCategory: "Big"
  },
  {
    id: '19',
    name: "Bluefish",
    depth: 83,
    description: "Snaps at everything nearby.",
    imageUrl: "/images/Bluefish.png",
    sizeCategory: "Small"
  },
  {
    id: '20',
    name: "Butterflyfish",
    depth: 88,
    description: "Mates for entire life.",
    imageUrl: "/images/ButterflyFish.png",
    sizeCategory: "Small"
  },
  {
    id: '21',
    name: "Reef Shark",
    depth: 92,
    description: "Must swim to breathe.",
    imageUrl: "/images/ReefShark1.3.png",
    sizeCategory: "Big"
  },
  {
    id: '22',
    name: "Boxfish",
    depth: 97,
    description: "Secretes deadly skin toxins.",
    imageUrl: "/images/Boxfish1.0.png",
    sizeCategory: "Small"
  },
  {
    id: '23',
    name: "Stingray",
    depth: 101,
    description: "Closely related to sharks.",
    imageUrl: "/images/Stingray.png",
    sizeCategory: "Big"
  },
  {
    id: '24',
    name: "Sea Turtle",
    depth: 105,
    description: "Returns to birth beach.",
    imageUrl: "/images/SeaTurtle1.3.png",
    sizeCategory: "Big"
  },
  {
    id: '25',
    name: "Angelfish",
    depth: 110,
    description: "Feeds mostly on sponges.",
    imageUrl: "/images/AngelFish.png",
    sizeCategory: "Small"
  },
  {
    id: '26',
    name: "Barracuda",
    depth: 114,
    description: "Attracted to shiny objects.",
    imageUrl: "/images/Barracuda.png",
    sizeCategory: "Big"
  },
  {
    id: '27',
    name: "Velvet Crab",
    depth: 119,
    description: "Known as \"Fiddler\" crab.",
    imageUrl: "/images/VelvetCrab.png",
    sizeCategory: "Small"
  },
  {
    id: '28',
    name: "Bull Shark",
    depth: 123,
    description: "Swims in fresh water.",
    imageUrl: "/images/BullShark.png",
    sizeCategory: "Large"
  },
  {
    id: '29',
    name: "Moray Eel",
    depth: 127,
    description: "Has second set of jaws.",
    imageUrl: "/images/MorayEel1.0.png",
    sizeCategory: "Big"
  },
  {
    id: '30',
    name: "Sardine",
    depth: 132,
    description: "Massive schools called bait-balls.",
    imageUrl: "/images/Sardine.png",
    sizeCategory: "Small"
  },
  {
    id: '31',
    name: "Anchovy",
    depth: 136,
    description: "Breathes with mouth open.",
    imageUrl: "/images/Anchovy1.0.png",
    sizeCategory: "Small"
  },
  {
    id: '32',
    name: "Triggerfish",
    depth: 141,
    description: "Rotates eyes independently.",
    imageUrl: "/images/Triggerfish.png",
    sizeCategory: "Small"
  },
  {
    id: '33',
    name: "Atlantic Mackerel",
    depth: 145,
    description: "Lacks a swim bladder.",
    imageUrl: "/images/AtlanticMackerel.png",
    sizeCategory: "Small"
  },
  {
    id: '34',
    name: "Manta Ray",
    depth: 150,
    description: "Largest brain of fish.",
    imageUrl: "/images/Manta Ray.png",
    sizeCategory: "Large"
  },
  {
    id: '35',
    name: "Lionfish",
    depth: 154,
    description: "Can expand stomach thirty-fold.",
    imageUrl: "/images/Lionfish.png",
    sizeCategory: "Small"
  },
  {
    id: '36',
    name: "Mackerel",
    depth: 158,
    description: "Highly migratory silver schools.",
    imageUrl: "/images/Mackerel.png",
    sizeCategory: "Small"
  },
  {
    id: '37',
    name: "Herring",
    depth: 163,
    description: "Communicates via gas bubbles.",
    imageUrl: "/images/Herring.png",
    sizeCategory: "Small"
  },
  {
    id: '38',
    name: "Killer Whale (Orca)",
    depth: 167,
    description: "Actually a large dolphin.",
    imageUrl: "/images/Killer Whale (Orca)1.0.png",
    sizeCategory: "Large"
  },
  {
    id: '39',
    name: "Wolf Eel",
    depth: 172,
    description: "Crushes hard sea urchins.",
    imageUrl: "/images/WolfEel.png",
    sizeCategory: "Big"
  },
  {
    id: '40',
    name: "Marlin",
    depth: 176,
    description: "Fastest fish in ocean.",
    imageUrl: "/images/Marlin1.png",
    sizeCategory: "Large"
  },
  {
    id: '41',
    name: "Blue Whale",
    depth: 180,
    description: "Heart size of car.",
    imageUrl: "/images/BlueWhale.png",
    sizeCategory: "Large"
  },
  {
    id: '42',
    name: "Pelagic Stingray",
    depth: 185,
    description: "Only ray in open-ocean.",
    imageUrl: "/images/PelagicStingray.png",
    sizeCategory: "Big"
  },
  {
    id: '43',
    name: "Lizardfish",
    depth: 189,
    description: "Teeth on its tongue.",
    imageUrl: "/images/Lizardfish.png",
    sizeCategory: "Small"
  },
  {
    id: '44',
    name: "Atlantic Cod",
    depth: 194,
    description: "Thrives in freezing water.",
    imageUrl: "/images/AtlanticCod1.png",
    sizeCategory: "Big"
  },
  {
    id: '45',
    name: "Haddock",
    depth: 198,
    description: "Black \"Devil's thumbprint\" mark.",
    imageUrl: "/images/Haddock1.1.png",
    sizeCategory: "Small"
  },
  {
    id: '46',
    name: "Blue Shark",
    depth: 230,
    description: "Known as ocean wolves.",
    imageUrl: "/images/BlueShark.png",
    sizeCategory: "Big"
  },
  {
    id: '47',
    name: "Pacific Cod",
    depth: 264,
    description: "Has a chin whisker.",
    imageUrl: "/images/PacificCod1.png",
    sizeCategory: "Big"
  },
  {
    id: '48',
    name: "Bottlenose Dolphin",
    depth: 298,
    description: "Names itself with whistles.",
    imageUrl: "/images/BottlenoseDolphin.png",
    sizeCategory: "Big"
  },
  {
    id: '49',
    name: "Gummy Shark",
    depth: 332,
    description: "Has no sharp teeth.",
    imageUrl: "/images/GummyShark.png",
    sizeCategory: "Big"
  },
  {
    id: '50',
    name: "Queen Snapper",
    depth: 366,
    description: "Lives near rocky ledges.",
    imageUrl: "/images/QueenSnapper.png",
    sizeCategory: "Big"
  },
  {
    id: '51',
    name: "Terrible Claw Lobster",
    depth: 400,
    description: "One claw vastly larger.",
    imageUrl: "/images/terribleclawlobster.png",
    sizeCategory: "Small"
  },
  {
    id: '52',
    name: "Firefly Squid",
    depth: 435,
    description: "Lights up entire bays.",
    imageUrl: "/images/FireflySquid.png",
    sizeCategory: "Small"
  },
  {
    id: '53',
    name: "Japanese Spider Crab",
    depth: 469,
    description: "Leg span twelve feet.",
    imageUrl: "/images/JapaneseSpiderCrab1.png",
    sizeCategory: "Big"
  },
  {
    id: '54',
    name: "Tuna",
    depth: 503,
    description: "Never stops swimming fast.",
    imageUrl: "/images/Tuna.png",
    sizeCategory: "Big"
  },
  {
    id: '55',
    name: "Emperor Penguin",
    depth: 537,
    description: "Endures extreme Antarctic cold.",
    imageUrl: "/images/EmperorPenguin.png",
    sizeCategory: "Big"
  },
  {
    id: '56',
    name: "Sunfish (Mola mola)",
    depth: 571,
    description: "Heaviest bony fish known.",
    imageUrl: "/images/SunfishMolamola.png",
    sizeCategory: "Large"
  },
  {
    id: '57',
    name: "Jellyfish",
    depth: 605,
    description: "Made 95% of water.",
    imageUrl: "/images/Jellyfish1.3.png",
    sizeCategory: "Big"
  },
  {
    id: '58',
    name: "Sea Angel",
    depth: 639,
    description: "Swimming predatory sea snail.",
    imageUrl: "/images/SeaAngel.png",
    sizeCategory: "Small"
  },
  {
    id: '59',
    name: "Swordfish",
    depth: 673,
    description: "Heats eyes for hunting.",
    imageUrl: "/images/Swordfish.png",
    sizeCategory: "Large"
  },
  {
    id: '60',
    name: "Chain Catshark",
    depth: 707,
    description: "Glows bright neon green.",
    imageUrl: "/images/ChainCatshark1.png",
    sizeCategory: "Small"
  },
  {
    id: '61',
    name: "Megamouth Shark",
    depth: 741,
    description: "Only 100 ever seen.",
    imageUrl: "/images/Megamouth Shark.png",
    sizeCategory: "Large"
  },
  {
    id: '62',
    name: "Beluga Whale",
    depth: 775,
    description: "Can mimic human speech.",
    imageUrl: "/images/BelugaWhale.png",
    sizeCategory: "Large"
  },
  {
    id: '63',
    name: "Monkfish",
    depth: 809,
    description: "Lures prey with \"fishing-pole\".",
    imageUrl: "/images/Monkfish.png",
    sizeCategory: "Big"
  },
  {
    id: '64',
    name: "Barreleye Fish",
    depth: 844,
    description: "Upward looking green eyes.",
    imageUrl: "/images/BarreleyeFish1.png",
    sizeCategory: "Small"
  },
  {
    id: '65',
    name: "Spiny Dogfish",
    depth: 878,
    description: "Lives nearly 100 years.",
    imageUrl: "/images/Spiny Dogfish.png",
    sizeCategory: "Small"
  },
  {
    id: '66',
    name: "Orange Roughy",
    depth: 912,
    description: "Lives over 150 years.",
    imageUrl: "/images/OrangeRoughy.png",
    sizeCategory: "Small"
  },
  {
    id: '67',
    name: "Vampire Squid",
    depth: 946,
    description: "Neither squid nor octopus.",
    imageUrl: "/images/vampiresquid.png",
    sizeCategory: "Small"
  },
  {
    id: '68',
    name: "Hatchetfish",
    depth: 980,
    description: "Ultra thin silver body.",
    imageUrl: "/images/Hatchetfish.png",
    sizeCategory: "Small"
  },
  {
    id: '69',
    name: "Leatherback Turtle",
    depth: 1050,
    description: "Dives into midnight zone.",
    imageUrl: "/images/LeatherbackTurtle1.png",
    sizeCategory: "Large"
  },
  {
    id: '70',
    name: "Blobfish",
    depth: 1116,
    description: "Melts at sea level.",
    imageUrl: "/images/blobfish.png",
    sizeCategory: "Small"
  },
  {
    id: '71',
    name: "Lanternfish",
    depth: 1182,
    description: "Most common deep-sea fish.",
    imageUrl: "/images/Lanternfish.png",
    sizeCategory: "Small"
  },
  {
    id: '72',
    name: "Whale Shark",
    depth: 1248,
    description: "Skin six inches thick.",
    imageUrl: "/images/Whale Shark.png",
    sizeCategory: "Large"
  },
  {
    id: '73',
    name: "Deep-sea Batfish",
    depth: 1314,
    description: "Walks on ocean floor.",
    imageUrl: "/images/Deep-seaBatfish1.png",
    sizeCategory: "Small"
  },
  {
    id: '74',
    name: "Goblin Shark",
    depth: 1380,
    description: "Shoots jaw forward fast.",
    imageUrl: "/images/GoblinShark.png",
    sizeCategory: "Big"
  },
  {
    id: '75',
    name: "Marrus orthocanna",
    depth: 1445,
    description: "Long colonial rocket-ship body.",
    imageUrl: "/images/Marrusorthocanna.png",
    sizeCategory: "Big"
  },
  {
    id: '76',
    name: "Cosmic Jellyfish",
    depth: 1511,
    description: "Looks like alien spacecraft.",
    imageUrl: "/images/CosmicJellyfish.png",
    sizeCategory: "Small"
  },
  {
    id: '77',
    name: "Pearleye",
    depth: 1577,
    description: "Sees light from below.",
    imageUrl: "/images/PearleyeFish.png",
    sizeCategory: "Small"
  },
  {
    id: '78',
    name: "Vigtorniella Worm",
    depth: 1643,
    description: "Feeds on whale bones.",
    imageUrl: "/images/VigtorniellaWorm.png",
    sizeCategory: "Small"
  },
  {
    id: '79',
    name: "Frilled Shark",
    depth: 1709,
    description: "Has 300 needle-like teeth.",
    imageUrl: "/images/FrilledShark.png",
    sizeCategory: "Big"
  },
  {
    id: '80',
    name: "Chimaera (Ghost Shark)",
    depth: 1775,
    description: "Older than the dinosaurs.",
    imageUrl: "/images/ChimaeraGhostShark1.png",
    sizeCategory: "Big"
  },
  {
    id: '81',
    name: "Jewel Squid",
    depth: 1841,
    description: "Dotted with colorful lights.",
    imageUrl: "/images/JewelSquid.png",
    sizeCategory: "Small"
  },
  {
    id: '82',
    name: "Lightfish",
    depth: 1907,
    description: "Lights on its belly.",
    imageUrl: "/images/Lightfish.png",
    sizeCategory: "Small"
  },
  {
    id: '83',
    name: "Dragonfish",
    depth: 1973,
    description: "Teeth are crystal clear.",
    imageUrl: "/images/Dragonfish1.png",
    sizeCategory: "Small"
  },
  {
    id: '84',
    name: "Big Red Jellyfish",
    depth: 2039,
    description: "Lacks long stinging tentacles.",
    imageUrl: "/images/bigredjellyfish.png",
    sizeCategory: "Big"
  },
  {
    id: '85',
    name: "Stoplight Loosejaw",
    depth: 2105,
    description: "Sees red \"invisible\" light.",
    imageUrl: "/images/StoplightLoosejaw.png",
    sizeCategory: "Small"
  },
  {
    id: '86',
    name: "Sabertooth Fish",
    depth: 2170,
    description: "Cannot close its mouth.",
    imageUrl: "/images/SabertoothFish2.png",
    sizeCategory: "Small"
  },
  {
    id: '87',
    name: "Giant Isopod",
    depth: 2236,
    description: "Giant deep-sea pill bug.",
    imageUrl: "/images/giantisopod.png",
    sizeCategory: "Small"
  },
  {
    id: '88',
    name: "Venus Flytrap Anemone",
    depth: 2302,
    description: "Closes like land plant.",
    imageUrl: "/images/VenusFlytrapAnemone.png",
    sizeCategory: "Small"
  },
  {
    id: '89',
    name: "Cockatoo Squid",
    depth: 2368,
    description: "Floats like a balloon.",
    imageUrl: "/images/CockatooSquid1.png",
    sizeCategory: "Small"
  },
  {
    id: '90',
    name: "Viperfish",
    depth: 2434,
    description: "Teeth too big for mouth.",
    imageUrl: "/images/Viperfish.png",
    sizeCategory: "Small"
  },
  {
    id: '91',
    name: "Glass Squid",
    depth: 2500,
    description: "Almost completely see-through body.",
    imageUrl: "/images/GlassSquid.png",
    sizeCategory: "Small"
  },
  {
    id: '92',
    name: "Elephant Seal",
    depth: 2566,
    description: "Dives for two hours.",
    imageUrl: "/images/ElephantSeal.png",
    sizeCategory: "Large"
  },
  {
    id: '93',
    name: "Patagonian Toothfish",
    depth: 2632,
    description: "Sold as \"Chilean Seabass\".",
    imageUrl: "/images/PatagonianToothfish.png",
    sizeCategory: "Big"
  },
  {
    id: '94',
    name: "Telescope Octopus",
    depth: 2698,
    description: "Moves like a ghost.",
    imageUrl: "/images/TelescopeOctopus.png",
    sizeCategory: "Small"
  },
  {
    id: '95',
    name: "Greenland Shark",
    depth: 2764,
    description: "Oldest living vertebrate animal.",
    imageUrl: "/images/GreenlandShark.png",
    sizeCategory: "Large"
  },
  {
    id: '96',
    name: "Black Dragonfish",
    depth: 2830,
    description: "Females are much larger.",
    imageUrl: "/images/BlackDragonfish.png",
    sizeCategory: "Small"
  },
  {
    id: '97',
    name: "Anglerfish",
    depth: 2895,
    description: "Male fuses to female.",
    imageUrl: "/images/Anglerfish.png",
    sizeCategory: "Small"
  },
  {
    id: '98',
    name: "Yeti Crab",
    depth: 2961,
    description: "Grows food on arms.",
    imageUrl: "/images/YetiCrab1.png",
    sizeCategory: "Small"
  },
  {
    id: '99',
    name: "Sperm Whale",
    depth: 3027,
    description: "Fights giant squid deep.",
    imageUrl: "/images/SpermWhale.png",
    sizeCategory: "Large"
  },
  {
    id: '100',
    name: "Brotula",
    depth: 3093,
    description: "Related to the cusk-eel.",
    imageUrl: "/images/Brotula.png",
    sizeCategory: "Small"
  },
  {
    id: '101',
    name: "Gulper Eel",
    depth: 3159,
    description: "Mostly mouth and tail.",
    imageUrl: "/images/GulperEel.png",
    sizeCategory: "Big"
  },
  {
    id: '102',
    name: "Giant Tube Worm",
    depth: 3225,
    description: "No mouth or stomach.",
    imageUrl: "/images/GiantTubeWorm.png",
    sizeCategory: "Big"
  },
  {
    id: '103',
    name: "Scaly-foot Snail",
    depth: 3291,
    description: "Has an iron shell.",
    imageUrl: "/images/Scaly-footSnail.png",
    sizeCategory: "Small"
  },
  {
    id: '104',
    name: "Cuvier's Beaked Whale",
    depth: 3357,
    description: "Deepest diving mammal known.",
    imageUrl: "/images/Cuviersbeakedwhale.png",
    sizeCategory: "Large"
  },
  {
    id: '105',
    name: "Headless Chicken Fish",
    depth: 3423,
    description: "Swimming deep-sea cucumber.",
    imageUrl: "/images/HeadlessChickenFish.png",
    sizeCategory: "Small"
  },
  {
    id: '106',
    name: "Fangtooth",
    depth: 3489,
    description: "Toughest fish in abyss.",
    imageUrl: "/images/fangtooth.png",
    sizeCategory: "Small"
  },
  {
    id: '107',
    name: "Zombie Worm",
    depth: 3555,
    description: "Dissolves bone with acid.",
    imageUrl: "/images/ZombieWorm.png",
    sizeCategory: "Micro"
  },
  {
    id: '108',
    name: "Gigantactis",
    depth: 3620,
    description: "Extremely long glowing lure.",
    imageUrl: "/images/Gigantactis.png",
    sizeCategory: "Small"
  },
  {
    id: '109',
    name: "Cookiecutter Shark",
    depth: 3686,
    description: "Takes round bites out-of-prey.",
    imageUrl: "/images/cookiecuttershark.png",
    sizeCategory: "Small"
  },
  {
    id: '110',
    name: "Pelican Eel",
    depth: 3752,
    description: "Swallows prey whole easily.",
    imageUrl: "/images/PelicanEel.png",
    sizeCategory: "Big"
  },
  {
    id: '111',
    name: "Sea Pen",
    depth: 3818,
    description: "Glows when it's touched.",
    imageUrl: "/images/SeaPen.png",
    sizeCategory: "Small"
  },
  {
    id: '112',
    name: "Harp Sponge",
    depth: 3884,
    description: "Traps prey with Velcro-hooks.",
    imageUrl: "/images/HarpSponge.png",
    sizeCategory: "Small"
  },
  {
    id: '113',
    name: "Bubblegum Coral",
    depth: 3950,
    description: "Colonies grow very slowly.",
    imageUrl: "/images/bubblegumcoral.png",
    sizeCategory: "Big"
  },
  {
    id: '114',
    name: "Atolla Jellyfish",
    depth: 4200,
    description: "\"Burglar alarm\" light flashes.",
    imageUrl: "/images/AtollaJellyfish.png",
    sizeCategory: "Small"
  },
  {
    id: '115',
    name: "Dumbo Octopus",
    depth: 4443,
    description: "Deepest living octopus species.",
    imageUrl: "/images/DumboOctopus.png",
    sizeCategory: "Small"
  },
  {
    id: '116',
    name: "Faceless Fish",
    depth: 4686,
    description: "Head has no face.",
    imageUrl: "/images/FacelessFish.png",
    sizeCategory: "Small"
  },
  {
    id: '117',
    name: "Tripod Fish",
    depth: 4929,
    description: "Stands on three fins.",
    imageUrl: "/images/TripodFish.png",
    sizeCategory: "Small"
  },
  {
    id: '118',
    name: "Abyssal Grenadier",
    depth: 5171,
    description: "Smells food miles away.",
    imageUrl: "/images/AbyssalGrenadier.png",
    sizeCategory: "Big"
  },
  {
    id: '119',
    name: "Abyssal Spiderfish",
    depth: 5414,
    description: "Feels vibrations through fins.",
    imageUrl: "/images/AbyssalSpiderfish.png",
    sizeCategory: "Small"
  },
  {
    id: '120',
    name: "Sea Pig",
    depth: 5657,
    description: "Walks on water-filled tubes.",
    imageUrl: "/images/SeaPig.png",
    sizeCategory: "Small"
  },
  {
    id: '121',
    name: "Deep-sea Anemone",
    depth: 5900,
    description: "Lives on trench walls.",
    imageUrl: "/images/Deep-seaAnemone.png",
    sizeCategory: "Small"
  },
  {
    id: '122',
    name: "Giant Amphipod",
    depth: 6500,
    description: "Giant shrimp-like scavenger.",
    imageUrl: "/images/GiantAmphipod.png",
    sizeCategory: "Small"
  },
  {
    id: '123',
    name: "Comb Jelly",
    depth: 6895,
    description: "Largest animal using cilia.",
    imageUrl: "/images/CombJelly.png",
    sizeCategory: "Small"
  },
  {
    id: '124',
    name: "Notoliparis kermadecensis",
    depth: 7291,
    description: "Endures extreme trench pressure.",
    imageUrl: "/images/Notolipariskermadecensis.png",
    sizeCategory: "Small"
  },
  {
    id: '125',
    name: "Pseudoliparis amblystomopsis",
    depth: 7686,
    description: "Found in Japan Trench.",
    imageUrl: "/images/Pseudoliparisamblystomopsis.png",
    sizeCategory: "Small"
  },
  {
    id: '126',
    name: "Hadal Sea Cucumber",
    depth: 8082,
    description: "Dominates the trench floor.",
    imageUrl: "/images/HadalSeaCucumber.png",
    sizeCategory: "Small"
  },
  {
    id: '127',
    name: "Hadal Snailfish",
    depth: 8477,
    description: "Has partially transparent skin.",
    imageUrl: "/images/HadalSnailfish1.png",
    sizeCategory: "Small"
  },
  {
    id: '128',
    name: "Pseudoliparis swirei",
    depth: 8873,
    description: "Named after HMS Challenger.",
    imageUrl: "/images/Pseudoliparisswirei.png",
    sizeCategory: "Small"
  },
  {
    id: '129',
    name: "Deep Trench Snailfish",
    depth: 9268,
    description: "Lives in total darkness.",
    imageUrl: "/images/DeepTrenchSnailfish.png",
    sizeCategory: "Small"
  },
  {
    id: '130',
    name: "Cusk Eel",
    depth: 9664,
    description: "Deepest recorded fish ever.",
    imageUrl: "/images/CuskEel.png",
    sizeCategory: "Small"
  },
  {
    id: '131',
    name: "Archaea",
    depth: 10059,
    description: "Not bacteria but similar.",
    imageUrl: "/images/Archaea.png",
    sizeCategory: "Micro"
  },
  {
    id: '132',
    name: "Foraminifera",
    depth: 10455,
    description: "Builds tiny ornate shells.",
    imageUrl: "/images/Foraminifera.png",
    sizeCategory: "Micro"
  },
  {
    id: '133',
    name: "Polychaete Worms",
    depth: 10850,
    description: "Survives where others cannot.",
    imageUrl: "/images/PolychaeteWorms.png",
    sizeCategory: "Small"
  }
];