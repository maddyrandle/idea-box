var formParent = document.querySelector(".idea-form");
var cardContainerParent = document.querySelector(".empty-section-container");
var titleInput = document.querySelector(".title-input");
var ideaInput = document.querySelector(".body-textarea");
var saveBtn = document.querySelector(".save-btn");
var ideaArray = [];

formParent.addEventListener("click", onFormParentClick);
cardContainerParent.addEventListener("click", onCardParentClick);
titleInput.addEventListener("keyup", checkUserInput);
ideaInput.addEventListener('keyup', checkUserInput);
saveBtn.addEventListener("click", checkUserInput);
window.addEventListener("load", pageLoad);

function onCardParentClick() {
  deleteCard(event)
  if (event.target.classList.contains("star-icon")) {
     styleStarIcon(event);
  }
}

function onFormParentClick() {
  if (event.target.className === "save-btn") {
  instantiateIdea(titleInput.value, ideaInput.value, false);
  }
}

function checkUserInput() {
  if (titleInput.value && ideaInput.value != "") {
    saveBtn.disabled = false;
    saveBtn.classList.remove("disable-save-btn");
  } else {
    saveBtn.disabled = true;
    saveBtn.classList.add("disable-save-btn");
  }
}

function pageLoad() {
  if ("ideaCard" in localStorage) {
     checkLocalStorage()
  }
}

function parseLocalStorage() {
  var getItem = localStorage.getItem("ideaCard");
  var storageArray = JSON.parse(getItem);
  return storageArray;
}

function checkLocalStorage() {
  var storageArray = parseLocalStorage();
    for (var i = 0; i < storageArray.length; i++) {
      instantiateIdea(storageArray[i].title, storageArray[i].body, storageArray[i].star);
    }
}

function createCard(newIdea) {
  var cardHtml = `
    <div id="${newIdea.id}" class="card-container">
    <header class="card-header">
      <img class="star-icon" src="${checkStar(newIdea)}" alt="star favorite button">
      <img class="delete-card-btn" src="./images/delete.svg" alt="delete button">
    </header>
    <h2 class="idea-title-heading">${newIdea.title}</h2>
    <p class="card-idea-paragraph">${newIdea.body}</p>
    <footer class="card-footer">
      <img src="./images/comment.svg" alt=“comment button”>
      <p class="card-comment">Comment</p>
    </footer>
    </div>
     `;
      cardContainerParent.insertAdjacentHTML("afterbegin", cardHtml);
        formParent.reset();
        checkUserInput();
}

function instantiateIdea(title, body, star) {
  var idea = new Idea(title, body, star);
  ideaArray.push(idea);
  createCard(idea);
  idea.saveToStorage(ideaArray);
}

function deleteCard(event) {
  if (event.target.className === "delete-card-btn") {
    var hiddenObj = findIndexOfIdea(event);
    var i = ideaArray.indexOf(hiddenObj)
    ideaArray.splice(i, 1);
    hiddenObj.saveToStorage(ideaArray);
    event.target.closest(".card-container").remove();
  }
}

function findIndexOfIdea(event) {
  var ideaId = parseInt(event.target.closest(".card-container").id);
    for (var i = 0; i < ideaArray.length; i++) {
      if (ideaArray[i].id === ideaId) {
        return ideaArray[i];
      }
    }
}

function styleStarIcon(event) {
  var hiddenObj = findIndexOfIdea(event);
  hiddenObj.updateIdea();
  if (hiddenObj.star) {
    event.target.src = "./images/star-active.svg";
  } else {
    event.target.src = "./images/star.svg";
  }
    hiddenObj.saveToStorage(ideaArray);
}

function checkStar(newIdea) {
  if (newIdea.star) {
    return "./images/star-active.svg";
  } else {
    return "./images/star.svg";
  }
}
