//NOTE The controller takes user input and calls to the service the attempt change data
import PostService from "../Services/PostService.js"
import store from "../store.js";
//Private

function _draw() {
  let posts = store.State.posts;
  let templates = ''
  posts.forEach(post => {
    templates += post.Template;
  });
  document.getElementById('posts').innerHTML = templates;
}



//Public
export default class PostController {

  constructor() {
    console.log("Building Controller");
    _draw();
  }

  createPost(event) {
    event.preventDefault();
    let formData = event.target;
    let rawPost = {
      body: formData.body.value
    }
    PostService.createPost(rawPost);
    _draw();
  }
}