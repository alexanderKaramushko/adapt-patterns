/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * @description Паттерн легковес выносит переиспользуемое состояние класса в отдельный класс
 * для того, чтобы сократить потребление памяти при создании одотипных объектов
 */

import { starColors, starTypes } from './constants';
import { Star, StarFactory } from './implementations';
import { StarType } from './interfaces';

class Galaxy {

  private stars: Star[] = [];

  createStar(type: StarType, color: string, x: number, y: number) {
    const starType = StarFactory.getStarType(type, color);
    const star = new Star(x, y, starType);

    this.stars.push(star);
  }

  draw(canvas: any) {
    for (let index = 0; index < 1000000; index += 1) {
      const randomType = starTypes[Math.round(Math.random() * 3)];
      const randomColor = starColors[Math.round(Math.random() * 3)];
      const randomX = Math.round(Math.random() * 200);
      const randomY = Math.round(Math.random() * 200);

      this.createStar(randomType, randomColor, randomX, randomY);
    }

    this.stars.forEach((star) => star.draw(canvas));
  }

}

const btn = document.getElementById('btn') as HTMLButtonElement;

btn.addEventListener('click', () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  canvas.style.background = 'black';

  const farFarGalaxy = new Galaxy();

  farFarGalaxy.draw(canvas);
});
