/* eslint-disable no-console */
/**
 * @description Паттерн строитель позволяет избежать `телескопического` конструктора
 * а также инкапсулировать сборку сложных классов.
 * @example Сборка сожных фильтров.
 */

import { SimpleFilterBuilder, DirectorBuilder, EnhancedFilterBuilder } from './implementations';

const directorSimpleBuilder = new DirectorBuilder({
  age: 18,
  name: 'Alex',
  permissions: [],
  rating: 5,
});

const simpleFilter = directorSimpleBuilder.constructSimpleFilter(new SimpleFilterBuilder());
console.log(simpleFilter);

const directorEnhancedBuilder = new DirectorBuilder({
  age: 18,
  name: 'Alex',
  permissions: ['full'],
  rating: 5,
});

const enhancedFilter = directorEnhancedBuilder.constructEnhancedFilter(new EnhancedFilterBuilder());
console.log(enhancedFilter);
