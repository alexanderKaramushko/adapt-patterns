import { PostModel, RequestModel } from './implementation';

export async function createPost(payload: RequestModel): Promise<PostModel> {
  const post = await window.fetch('https://jsonplaceholder.typicode.com/posts', {
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    method: 'POST',
  });

  return post.json();
}
