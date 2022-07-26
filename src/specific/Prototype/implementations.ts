/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
import { AbstractSegment } from './interfaces';

export class Segment extends AbstractSegment {

  // eslint-disable-next-line no-useless-constructor
  constructor(segment?: Segment) {
    // eslint-disable-next-line constructor-super
    super(segment);
  }

  clone(): Segment {
    return new Segment(this);
  }

}

export class Snake {

  private segment!: Segment;
  private _segments: Segment[] = [];

  constructor(segment: Segment) {
    this.segment = segment;
  }

  get segments(): Segment[] {
    return this._segments;
  }

  spawnSegments(count: number): void {
    for (let i = 0; i < count; i += 1) {
      this._segments.push(this.segment.clone());
    }
  }

}
