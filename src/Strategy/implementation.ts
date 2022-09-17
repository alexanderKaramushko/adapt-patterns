/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import { FilterStrategy } from './interfaces';

export class Filter {

  private filterStrategy!: FilterStrategy;

  setFilterStrategy(filterStrategy: FilterStrategy): void {
    this.filterStrategy = filterStrategy;
  }

  filterItems(value: string, items: Array<string | null>): string[] {
    if (!this.filterStrategy) {
      throw new Error('No filter strategy set!');
    }

    const normalizedItems = items.filter(Boolean) as string[];

    return this.filterStrategy.execute(value, normalizedItems);
  }

}

export class FullMatchStrategy implements FilterStrategy {

  execute(value: string, items: string[]): string[] {
    return items.filter((item) => {
      const regexp = new RegExp(item, 'i');

      return regexp.test(value);
    });
  }

}

export class CaseSensitiveStrategy implements FilterStrategy {

  execute(value: string, items: string[]): string[] {
    return items.filter((item) => item.includes(value));
  }

}
