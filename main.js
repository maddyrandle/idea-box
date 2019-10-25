var formParent = document.querySelector(".idea-form");
var cardContainerParent = document.querySelector(".empty-section-container");
var titleInput = document.querySelector(".title-input");
var ideaInput = document.querySelector(".body-textarea");
var saveButton =  document.querySelector(".save-btn");

formParent.addEventListener("click", createCard);
cardContainerParent.addEventListener("click", cardActions);

function createCard(event) {
    if (event.target.className === "save-btn" && titleInput.value && ideaInput.value) {
      var cardHtml = `
      <div class="card-container">
        <header class="card-header">
          <img class="star-fav-btn" src="./images/star.svg" alt="star favorite button">
          <img class="delete-card-btn" src="./images/delete.svg" alt="delete button">
        </header>
        <h2 class="idea-title-heading">${titleInput.value}</h2>
        <p class="card-idea-paragraph">${ideaInput.value}</p>
        <footer class="card-footer">
          <img src="./images/comment.svg" alt="comment button">
          <p class="card-comment">Comment</p>
        </footer>
      </div>
      `;
      cardContainerParent.insertAdjacentHTML("afterbegin", cardHtml);
      formParent.reset();
    }
}

function cardActions(event) {
  if (event.target.className === "delete-card-btn") {
    deleteCard(event);
  } else if (event.target.src.includes("star")) {
    toggleFavStar(event);
  }
}

function deleteCard(event) {
  if (event.target.className === "delete-card-btn") {
    var cardHeader = event.target.parentElement;
    cardHeader.parentElement.remove();
  }
}

function toggleFavStar(event) {
  if (event.target.src.includes("/images/star.svg")) {
    event.target.src = "./images/star-active.svg";
  } else {
    event.target.src = "./images/star.svg";
  }
}
