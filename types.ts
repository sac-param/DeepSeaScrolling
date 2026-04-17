// export interface SeaCreature {
//   id: string;
//   name: string;
//   depth: number; // in meters
//   description: string;
//   imageUrl?: string;
// }
// types.ts
export type CreatureSizeCategory = 'Micro' | 'Small' | 'Big' | 'Large'| 'Custom';

export interface SeaCreature {
  id: string;
  name: string;
  depth: number;
  description: string;
  imageUrl: string;
  sizeCategory: CreatureSizeCategory;
}

export interface OceanZone {
  name: string;
  startDepth: number;
  endDepth: number;
  color: string;
  description: string;
}

export enum ScrollState {
  IDLE,
  SCROLLING,
}

export interface ScanResult {
  depth: number;
  content: string;
}


