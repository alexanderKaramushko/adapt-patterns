/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
class Store {

  public static instance: Store | null = null;
  public someData = []

  private constructor() {
    this.initStore();
  }

  initStore(): void {
    console.log('трудозаратная операция подключения хранилищ');
  }

  static getInstance(): Store {
    if (Store.instance === null) {
      Store.instance = new Store();
    }
    return Store.instance;
  }

}

export default Store;
