/**
 * @description Паттерн цепочка обязанностей позволяет предоставить набор обработчиков
 * для целевого объекта, тем самым позволяя избегать сложной логики уловных операторов,
 * а также реализуя динамическую замену шагов
 * @example цепочка обработки поста перед отправкой
 */

import { PostCensorship, PostSender, PostValidation } from './implementations';

const posts = [
  {
    body: 'Lorem ipsum dolor, fuck, fuck!',
    id: 1,
    title: 'Title',
    userId: 1,
  },
  {
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptatem!',
    id: 1,
    title: 'Title',
    userId: 1,
  },
  {
    body: 'Lorem ipsum dolor.',
    id: 1,
    title: '',
    userId: 1,
  },
];

const postCensorship = new PostCensorship();
const postValidation = new PostValidation();
const postSender = new PostSender();

postCensorship.setNext(postValidation).setNext(postSender);

// eslint-disable-next-line no-restricted-syntax
for (const post of posts) {
  postCensorship.handle(post);
}
