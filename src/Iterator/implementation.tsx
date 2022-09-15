/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import React, { ReactNode } from 'react';
import { Iterator, ListItem, AuthorizedIterators } from './interfaces';

export class ListItemsIterator implements Iterator<ReactNode | null> {

  private items: ListItem[] = [];
  private currentPosition = 0;

  constructor(items: ListItem[]) {
    this.items = items;
  }

  next(permission: 'admin' | 'user'): ReactNode | null {
    const item = this.items[this.currentPosition];

    this.currentPosition += 1;

    if (item.permission === permission) {
      if (item.isLink) {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <a href="#">{item.text}</a>;
      }

      return <div>{item.text}</div>;
    }

    return null;
  }

  hasNext(): boolean {
    return this.items.length > 0 && !!this.items[this.currentPosition];
  }

}

export class AuthorizedIteratorsFactory implements AuthorizedIterators {

  createListItemsIterator(items: ListItem[]): Iterator<React.ReactNode> {
    return new ListItemsIterator(items);
  }

}
