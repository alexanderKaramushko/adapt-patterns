export interface FilterStrategy {
  execute(value: string, items: string[]): string[];
}
