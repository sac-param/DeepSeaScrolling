import { OceanZone, SeaCreature } from './types';

export const MAX_DEPTH = 11000; // Mariana Trench depth approx
export const PIXELS_PER_METER = 10; // 10 pixels per meter

export const OCEAN_ZONES: OceanZone[] = [
  {
    name: "Epipelagic Zone",
    startDepth: 0,
    endDepth: 200,
    color: "#4facfe", // Light blue
    description: "The Sunlight Zone. Where most visible light exists."
  },
  {
    name: "Mesopelagic Zone",
    startDepth: 200,
    endDepth: 1000,
    color: "#005bea", // Medium blue
    description: "The Twilight Zone. Light is very faint here."
  },
  {
    name: "Bathypelagic Zone",
    startDepth: 1000,
    endDepth: 4000,
    color: "#00234a", // Dark blue
    description: "The Midnight Zone. The only light comes from bioluminescence."
  },
  {
    name: "Abyssopelagic Zone",
    startDepth: 4000,
    endDepth: 6000,
    color: "#000814", // Very dark
    description: "The Abyss. Water temperature is near freezing."
  },
  {
    name: "Hadalpelagic Zone",
    startDepth: 6000,
    endDepth: 11000,
    color: "#000000", // Pitch black
    description: "The Trenches. The deepest parts of the ocean."
  }
];

export const SEA_CREATURES: SeaCreature[] = [
  { 
    id: '1', 
    name: "Atlantic Salmon", 
    depth: 10, 
    description: "A common ray-finned fish known for its intense migrations.",
    imageUrl: "https://pngimg.com/uploads/salmon/salmon_PNG32.png"
  },
  { 
    id: '2', 
    name: "Polar Bear", 
    depth: 20, 
    description: "Excellent swimmers, often diving for food in icy waters.",
    imageUrl: "https://pngimg.com/uploads/polar_bear/polar_bear_PNG13.png"
  },
  { 
    id: '3', 
    name: "Clownfish", 
    depth: 40, 
    description: "Famous for living among anemones in coral reefs.",
    imageUrl: "https://pngimg.com/uploads/clownfish/clownfish_PNG14.png"
  },
  {
    id: '20',
    name: "Orca",
    depth: 60,
    description: "Also known as the Killer Whale, an apex predator.",
    imageUrl: "https://pngimg.com/uploads/orca/orca_PNG7.png"
  },
  {
    id: '21',
    name: "Manta Ray",
    depth: 90,
    description: "Large rays that filter feed on plankton.",
    imageUrl: "https://pngimg.com/uploads/stingray/stingray_PNG20.png"
  },
  {
    id: '22',
    name: "Green Sea Turtle",
    depth: 120,
    description: "Can migrate long distances across oceans.",
    imageUrl: "https://pngimg.com/uploads/turtle/turtle_PNG32.png"
  },
  {
    id: '23',
    name: "Great White Shark",
    depth: 150,
    description: "Known for their size and predatory prowess.",
    imageUrl: "https://pngimg.com/uploads/shark/shark_PNG15.png"
  },
  { 
    id: '4', 
    name: "Emperor Penguin", 
    depth: 250, 
    description: "Can dive deeper than any other bird to hunt fish.",
    imageUrl: "https://pngimg.com/uploads/penguin/penguin_PNG9.png"
  },
  { 
    id: '5', 
    name: "Bottlenose Dolphin", 
    depth: 300, 
    description: "Highly intelligent marine mammals found in warm seas.",
    imageUrl: "https://pngimg.com/uploads/dolphin/dolphin_PNG7137.png"
  },
  { 
    id: '6', 
    name: "Giant Pacific Octopus", 
    depth: 500, 
    description: "Masters of camouflage with arm spans up to 9 meters.",
    imageUrl: "https://pngimg.com/uploads/octopus/octopus_PNG26.png"
  },
  { 
    id: '7', 
    name: "Japanese Spider Crab", 
    depth: 600, 
    description: "Has the largest leg span of any arthropod, up to 3.7 meters.",
    imageUrl: "https://pngimg.com/uploads/crab/crab_PNG28.png"
  },
  {
    id: '24',
    name: "Swordfish",
    depth: 700,
    description: "Capable of swimming at very high speeds.",
    imageUrl: "https://pngimg.com/uploads/swordfish/swordfish_PNG2.png"
  },
  { 
    id: '8', 
    name: "Giant Squid", 
    depth: 900, 
    description: "The legendary Kraken likely referred to these massive cephalopods.",
    imageUrl: "https://pngimg.com/uploads/squid/squid_PNG15.png"
  },
  {
    id: '25',
    name: "Sperm Whale",
    depth: 1000,
    description: "Known to dive deep in search of giant squid.",
    imageUrl: "https://pngimg.com/uploads/sperm_whale/sperm_whale_PNG10.png"
  },
  { 
    id: '9', 
    name: "Anglerfish", 
    depth: 1500, 
    description: "Uses a bioluminescent lure to catch prey in the dark.",
    imageUrl: "https://pngimg.com/uploads/anglerfish/anglerfish_PNG20.png"
  },
  { 
    id: '10', 
    name: "Narwhal", 
    depth: 1800, 
    description: "Known as the unicorn of the sea due to its large tusk.",
    imageUrl: "https://pngimg.com/uploads/narwhal/narwhal_PNG10.png"
  },
  { 
    id: '11', 
    name: "Colossal Squid", 
    depth: 2200, 
    description: "Heavier than the Giant Squid, with rotating hooks on its tentacles.",
    imageUrl: "https://pngimg.com/uploads/squid/squid_PNG18.png"
  },
  { 
    id: '12', 
    name: "Cosmic Jellyfish", 
    depth: 2500, 
    description: "Found deep in the Monterey Bay, looks like a firework.",
    imageUrl: "https://pngimg.com/uploads/jellyfish/jellyfish_PNG23.png"
  },
  { 
    id: '13', 
    name: "Cuvier's Beaked Whale", 
    depth: 2992, 
    description: "Holds the record for deepest diving mammal.",
    imageUrl: "https://pngimg.com/uploads/whale/whale_PNG14.png"
  },
  { 
    id: '14', 
    name: "Vampire Squid", 
    depth: 3000, 
    description: "Does not drink blood; eats 'marine snow' detritus.",
    imageUrl: "https://pngimg.com/uploads/squid/squid_PNG12.png"
  },
  {
    id: '26',
    name: "Goblin Shark",
    depth: 3300,
    description: "A rare species of deep-sea shark with a distinct shape.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mitsukurina_owstoni_2.png/640px-Mitsukurina_owstoni_2.png"
  },
  { 
    id: '15', 
    name: "Titanic Wreck", 
    depth: 3800, 
    description: "The final resting place of the RMS Titanic.",
    imageUrl: "https://pngimg.com/uploads/titanic/titanic_PNG18.png"
  },
  { 
    id: '16', 
    name: "Dumbo Octopus", 
    depth: 4000, 
    description: "Named for its ear-like fins that resemble Disney's Dumbo.",
    imageUrl: "https://pngimg.com/uploads/octopus/octopus_PNG11.png"
  },
  { 
    id: '17', 
    name: "Faceless Fish", 
    depth: 4500, 
    description: "Rediscovered in 2017 after 100 years unseen.",
    imageUrl: "https://pngimg.com/uploads/fish/fish_PNG25.png"
  },
  { 
    id: '18', 
    name: "Mariana Snailfish", 
    depth: 8000, 
    description: "The deepest living fish ever collected.",
    imageUrl: "https://pngimg.com/uploads/fish/fish_PNG14.png"
  },
  { 
    id: '19', 
    name: "Challenger Deep", 
    depth: 10935, 
    description: "The deepest known point in Earth's seabed.",
    imageUrl: "https://pngimg.com/uploads/submarine/submarine_PNG12.png"
  }
];