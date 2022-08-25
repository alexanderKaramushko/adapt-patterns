export type Fetcher = {
  fetch(url: string, options: {
    method: 'GET';
  }): unknown;
}

export interface BaseAPI {
  fetcher?: Fetcher;
  requestGet(url: string): Promise<unknown | never>;
}
