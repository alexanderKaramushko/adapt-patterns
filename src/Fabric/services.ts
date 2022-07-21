import { VersionedService } from './abstract';

export class UsersServiceV1 implements VersionedService {

  private serviceUrl!: string;

  constructor(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  version = 'v1';

  getData(): Promise<unknown> {
    return window.fetch(`${this.serviceUrl}/api/${this.version}/users`);
  }

}
