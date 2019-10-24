var formParent = document.querySelector(".idea-form");
var cardContainerParent = document.querySelector(".empty-section-container");
var titleInput = document.querySelector(".title-input");
var ideaInput = document.querySelector(".body-textarea");
var saveButton =  document.querySelector(".save-btn");

formParent.addEventListener("click", createCard);

function createCard(event) {
  if (event.target.className === "save-btn" && titleInput.value && ideaInput.value) {
    var cardHtml = `
    <div class="card-container">
      <header class="card-header">
        <img src="./images/star.svg" alt="star favorite button">
        <img src="./images/delete.svg" alt="delete button">
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
