/* eslint-disable max-classes-per-file */
import { Handler, Post } from './interfaces';

export abstract class PostHandler implements Handler<Post> {

  private nextHandler: Handler<Post> | null = null;

  setNext(nextHandler: Handler<Post>): Handler<Post> {
    this.nextHandler = nextHandler;

    return nextHandler;
  }

  handle(post: Post): unknown | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(post);
    }

    return null;
  }

}

export class PostCensorship extends PostHandler {

  handle(post: Post): unknown {
    if (post.body.includes('fuck')) {
      return null;
    }

    return super.handle(post);
  }

}

export class PostValidation extends PostHandler {

  handle(post: Post): unknown {
    if (!post.title || post.body.length < 10) {
      return null;
    }

    return super.handle(post);
  }

}

export class PostSender extends PostHandler {

  // eslint-disable-next-line class-methods-use-this
  handle(post: Post): unknown {
    return window.fetch('https://jsonplaceholder.typicode.com/posts', {
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  }

}
