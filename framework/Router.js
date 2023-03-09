module.exports = class Router {
  constructor() {
    this.endpoints = {};
  }

  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }

    const endpoint = this.endpoints[path];

    // /users [GET, POST, PUT, DELETE] /posts [GET, POST, PUT, DELETE]

    if (endpoint[method]) {
      throw new Error(`${method} ${path} already exists`);
    }

    endpoint[method] = handler;
  }

  get(path, handler) {
    this.request("GET", path, handler);
  }

  post(path, handler) {
    this.request("POST", path, handler);
  }

  put(path, handler) {
    this.request("PUT", path, handler);
  }

  delete(path, handler) {
    this.request("DELETE", path, handler);
  }
};
