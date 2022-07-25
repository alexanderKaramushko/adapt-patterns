export interface FilterBuilder {
  addName(name: string): void;
  addAge(age: number): void;
  addPermissions(permissions: string[]): void;
  addRating(rating: number): void;
  getResult(): unknown;
}

export interface DirectorFilterBuilder {
  constructSimpleFilter(filterBuilder: FilterBuilder): void;
  constructEnhancedFilter(filterBuilder: FilterBuilder): void;
}

export interface Employee {
  name: string;
  age: number;
  permissions: string[];
  rating: number;
}
