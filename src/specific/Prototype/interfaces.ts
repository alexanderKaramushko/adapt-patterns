export abstract class AbstractSegment {

  public x!: number | undefined;
  public y!: number | undefined;

  constructor(segment?: AbstractSegment) {
    this.x = segment?.x;
    this.y = segment?.y;
  }

  abstract clone(): AbstractSegment

}
