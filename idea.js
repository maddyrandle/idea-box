class Idea {
  constructor(title, body, star) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage(array) {
    localStorage.setItem("ideaCard", JSON.stringify(array))
  }

  deleteFromStorage() {

  }

  updateIdea() {

  }

  toggleStar() {
    this.star = !this.star;
  }
}
