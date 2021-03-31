//NOTE gets information/requests from the controller applies all business logic and based on that returns certain data from the store.
import Post from "../Models/Post.js";
import Store from "../store.js";


class PostService {

  delete(id) {
    let postIndex = Store.State.posts.findIndex(post => post.id == id)
    Store.State.posts.splice(postIndex, 1);
  }

  createPost(rawData) {
    console.log("creating post from the service")
    let newPost = new Post(rawData)
    // Could put      Store.State.posts.push(post); 
    //But this is Bad Habit to directly push or directly change the state
    // Insteat do this
    let posts = [...Store.State.posts, newPost];
    Store.commit('posts', posts);
  }
}


const service = new PostService();
export default service;