export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Handler<T> {
  setNext(nextHandler: Handler<T>): Handler<T>;
  handle(user: Post): unknown | null;
}
