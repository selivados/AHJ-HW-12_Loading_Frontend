export default class CommunicationServer {
  constructor(port) {
    this.port = port;
  }

  async getLastNews() {
    const result = await fetch(`${this.port}/news`);

    return result;
  }
}
