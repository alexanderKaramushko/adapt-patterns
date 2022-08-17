/* eslint-disable max-classes-per-file */

import { sizeByStarType } from './constants';
import { StarType as StarTypeUnion } from './interfaces';

export class StarType {

  private type!: StarTypeUnion;
  private color!: string;

  constructor(type: StarTypeUnion, color: string) {
    this.type = type;
    this.color = color;
  }

  draw(canvas: any, x: number, y: number) {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.beginPath();
    ctx.arc(x, y, sizeByStarType[this.type], 0, Math.PI * 2, true);

    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }

}

function getHashKey(...args: string[]): string {
  return args.join('_');
}

export class StarFactory {

  static starTypes: any = {};

  static getStarType(type: StarTypeUnion, color: string): StarType {
    const hashKey = getHashKey(type, color);

    if (!StarFactory.starTypes[hashKey]) {
      StarFactory.starTypes[hashKey] = new StarType(type, color);
    }

    return StarFactory.starTypes[hashKey];
  }

}

export class Star {

  private x!: number;
  private y!: number;
  private type!: StarType;

  constructor(x: number, y: number, type: StarType) {
    this.type = type;
    this.x = x;
    this.y = y;
  }

  draw(canvas: any) {
    this.type.draw(canvas, this.x, this.y);
  }

}
