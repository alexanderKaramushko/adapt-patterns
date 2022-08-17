import { StarType } from './interfaces';

export const starTypes: StarType[] = ['Luminous giant', 'Giant', 'Subgiant'];
export const starColors = ['red', 'white', 'orange'];
export const sizeByStarType: { [K in StarType]: number } = {
  Giant: 5,
  'Luminous giant': 10,
  Subgiant: 2,
};
