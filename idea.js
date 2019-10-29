class Idea {
  constructor(title, body, star, id) {
    this.id = id || Date.now();
    this.title = title;
    this.body = body;
    this.star = starg;
  }

  saveToStorage(array) {
    localStorage.setItem("ideaCard", JSON.stringify(array))
  }

  deleteFromStorage(key) {
    localStorage.removeItem(key);
  }

  updateIdea() {
    this.star = !this.star;
  }
}
