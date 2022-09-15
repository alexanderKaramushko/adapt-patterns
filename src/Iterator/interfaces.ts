import { ReactNode } from 'react';

export interface Iterator<T> {
  next(...args: unknown[]): T;
  hasNext(): boolean;
}

export interface ListItem {
  isLink?: boolean;
  text: string;
  permission: 'admin' | 'user';
}

export interface AuthorizedIterators {
  createListItemsIterator(items: ListItem[]): Iterator<ReactNode | null>;
}
