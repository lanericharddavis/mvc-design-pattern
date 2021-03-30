//NOTE an object that holds all information for the data needed per object
export default class Post {
  constructor(body) {
    this.body = body;
    this.date = new Date().toLocaleDateString("en-Us"); //  returns local date ex. 3/30/21
  }


  get Template() {
    return `
      <div class="post">
        <h4>${this.date}</h4>
        <p>
        ${this.body}
        </p>
      </div>
    `;
  }
}