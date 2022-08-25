/* eslint-disable max-classes-per-file */
import { getMountNode } from '../constants/mounting';
import { BaseAPI as BaseAPIModel, Fetcher } from './interfaces';

export class BaseAPI implements BaseAPIModel {

  fetcher!: Fetcher;

  constructor(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }

  async requestGet(url: string): Promise<unknown | never> {
    const response = await this.fetcher.fetch(url, {
      method: 'GET',
    });

    return response;
  }

}

export class BaseAPIWithNotifiers implements BaseAPIModel {

  baseAPI!: BaseAPI;

  constructor(baseAPI: BaseAPI) {
    this.baseAPI = baseAPI;
  }

  async requestGet(url: string): Promise<unknown | never> {
    try {
      const response = await this.baseAPI.requestGet(url);

      getMountNode()?.insertAdjacentHTML('beforeend', 'Got result, everything\'s ok!');

      return response;
    } catch (error) {
      getMountNode()?.insertAdjacentHTML('beforeend', `Error occured: ${(error as Error).message}`);

      return error;
    }
  }

}
