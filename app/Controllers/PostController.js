//NOTE The controller takes user input and calls to the service the attempt change data
import PostService from "../Services/PostService.js"
export default class PostController {

  constructor() {
    console.log("Building Controller")
  }

  createPost() {
    console.log("creating the post");
    PostService.createPost();
  }
}