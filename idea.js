class Idea {
  constructor(title, body, star, id) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.star = star;
  }

  saveToStorage(array) {
    localStorage.setItem("ideaCard", JSON.stringify(array))
  }

  updateIdea() {
    this.star = !this.star;
  }
}
