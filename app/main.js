//NOTE This file spins up an app and loads all the controllers

import PostController from "./Controllers/PostController.js";

class App {

  postController = new PostController();
}

window["app"] = new App();