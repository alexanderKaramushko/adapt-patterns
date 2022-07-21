/* eslint-disable max-classes-per-file */
abstract class Service {

  protected abstract serviceUrl: string;

}

export abstract class VersionedService {

  abstract version: string;

  abstract getData(): Promise<unknown>;

}

export abstract class UsersServiceCreator extends Service {

  protected serviceUrl = 'localhost';

  // eslint-disable-next-line class-methods-use-this
  async getUsers(): Promise<unknown> {
    const usersService: VersionedService = this.createUsersVersionedService();

    return usersService.getData();
  }

  protected abstract createUsersVersionedService(): VersionedService

}
