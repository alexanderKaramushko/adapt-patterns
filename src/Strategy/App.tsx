/**
 * @description Паттерн стратегия предоставляет динамическую замену схожих по структуре классов,
 * инкапсулируя вызовы их методов
 * @example Динамическое подлючение стратегий фильтрации
 */

import React, { ReactElement, useState } from 'react';
import { CaseSensitiveStrategy, Filter, FullMatchStrategy } from './implementation';

const filterStrategy = new Filter();

const items = ['Item 1', 'Item 2', 'Item 3'];

export const App = (): ReactElement => {
  const [filteredItems, setFilteredItems] = useState(items);

  return (
    <div>
      <div>
        <input
          type="text"
          onInput={(event: any): void => {
            setFilteredItems(filterStrategy.filterItems(event.target.value, items));
          }}
        />
        <button
          type="button"
          onClick={(): void => filterStrategy.setFilterStrategy(new CaseSensitiveStrategy())}
        >
          Case sensitive
        </button>
        <button
          type="button"
          onClick={(): void => filterStrategy.setFilterStrategy(new FullMatchStrategy())}
        >
          Full match
        </button>
      </div>
      <ul>
        {filteredItems.map((filteredItem) => <li key={filteredItem}>{filteredItem}</li>)}
      </ul>
    </div>
  );
};
