/* eslint-disable max-classes-per-file */
import { FilterBuilder, DirectorFilterBuilder, Employee } from './interfaces';

export class SimpleFilterBuilder implements FilterBuilder {

  private filter = {};

  addName(name: string): void {
    this.filter = {
      ...this.filter,
      name,
    };
  }

  addAge(age: number): void {
    this.filter = {
      ...this.filter,
      age,
    };
  }

  addPermissions(): this {
    return this;
  }

  addRating(): this {
    return this;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getResult() {
    return this.filter;
  }

}

export class EnhancedFilterBuilder implements FilterBuilder {

  private filter = {};

  addName(name: string): void {
    this.filter = {
      ...this.filter,
      name,
    };
  }

  addAge(age: number): void {
    this.filter = {
      ...this.filter,
      age,
    };
  }

  addPermissions(permissions: string[]): void {
    this.filter = {
      ...this.filter,
      permissions,
    };
  }

  addRating(rating: number): void {
    this.filter = {
      ...this.filter,
      rating,
    };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  getResult() {
    return this.filter;
  }

}

export class DirectorBuilder implements DirectorFilterBuilder {

  private employee!: Employee;

  constructor(employee: Employee) {
    this.employee = employee;
  }

  constructSimpleFilter(filterBuilder: FilterBuilder): unknown {
    filterBuilder.addName(this.employee.name);
    filterBuilder.addAge(this.employee.age);

    return filterBuilder.getResult();
  }

  constructEnhancedFilter(filterBuilder: FilterBuilder): unknown {
    filterBuilder.addName(this.employee.name);
    filterBuilder.addAge(this.employee.age);
    filterBuilder.addPermissions(this.employee.permissions);
    filterBuilder.addRating(this.employee.rating);

    return filterBuilder.getResult();
  }

}
