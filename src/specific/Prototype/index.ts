/**
 * @description Паттерн прототип позволяет создавать клоны инстансов,
 * если, например, нужно работать со внешним классом через интерфейс
 * @example Создание сегментов в игре змейка, имплементация класса вынесена за рамки Snake
 */

import { Segment, Snake } from './implementations';

const segment = new Segment();
segment.x = 10;
segment.y = 10;

const snake = new Snake(segment);

snake.spawnSegments(10);
