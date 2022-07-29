/* eslint-disable class-methods-use-this */
import { ApiAdapter } from './interfaces';

export interface PostModel {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ClientPostModel {
  heading: string;
  description: string;
}

export interface RequestModel {
  title: string;
  body: string;
  userId: number;
}

export class CreatePostAdapter implements ApiAdapter {

  getClientModel(serverModel: PostModel): ClientPostModel {
    return {
      description: serverModel.body,
      heading: serverModel.title,
    };
  }

  getServerModel(clientModel: ClientPostModel): RequestModel {
    const userId = 1; // предположим, здесь происходит получение нужного пользователя

    return {
      body: clientModel.description,
      title: clientModel.heading,
      userId,
    };
  }

}
