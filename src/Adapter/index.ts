/* eslint-disable no-console */
/**
 * @description Паттерн адаптер позволяет создать доп. прослойку,
 * которая будет обеспечит совместимость двух интерфейсов
 * @example Перевод клиентского интерфейса поста в интерфейс payload запроса на сервер
 */

import { createPost } from './api';
import { CreatePostAdapter } from './implementation';

const createPostAdapter = new CreatePostAdapter();

async function SomeComponent(): Promise<void> {
  const serverPost = await createPost(createPostAdapter.getServerModel({
    description: 'Description',
    heading: 'Title',
  }));

  console.log(createPostAdapter.getClientModel(serverPost));
}

SomeComponent();
