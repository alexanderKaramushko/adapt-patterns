export interface ApiAdapter {
  getClientModel(serverModel: unknown): unknown;
  getServerModel(clientModel: unknown): unknown;
}
