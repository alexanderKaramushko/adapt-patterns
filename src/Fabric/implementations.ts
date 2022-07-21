import { UsersServiceCreator, VersionedService } from './abstract';
import { UsersServiceV1 } from './services';

export class UsersV1ServiceCreator extends UsersServiceCreator {

  protected createUsersVersionedService(): VersionedService {
    return new UsersServiceV1(this.serviceUrl);
  }

}
