import React, { ReactElement, ReactNode } from 'react';
import { AuthorizedIteratorsFactory } from './implementation';
import { ListItem } from './interfaces';

const listItems: ListItem[] = [
  {
    isLink: true,
    permission: 'user',
    text: 'Link 1',
  },
  {
    isLink: true,
    permission: 'admin',
    text: 'Link 2',
  },
  {
    isLink: false,
    permission: 'user',
    text: 'Open cart',
  },
];

const authorizedIterators = new AuthorizedIteratorsFactory();

export const App = (): ReactElement => {
  /** Абстрагироваться от конкретного итератора путем вызова фабричного метода */
  const listItemsIterator = authorizedIterators.createListItemsIterator(listItems);

  function getList(): ReactNode[] {
    const items: ReactNode[] = [];

    while (listItemsIterator.hasNext()) {
      items.push(listItemsIterator.next('user'));
    }

    return items;
  }

  return (
    <>
      {getList()}
    </>
  );
};
