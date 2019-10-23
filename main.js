var formParent = document.querySelector(".idea-form");
var cardContainerParent = document.querySelector(".empty-section-container");

formParent.addEventListener("click", createCard);



function createCard(event) {
  console.log(event)

  if (event.target.className === "save-btn") {
    // var titleInput = event.target.classList.contains("title-input").value
    var cardHtml = `
    <div class="card-container">
      <header class="card-header">
        <img src="./images/star.svg" alt="star favorite button">
        <img src="./images/delete.svg" alt="delete button">
      </header>
      <h2 class="idea-title-heading">${getTitleInput()}</h2>
      <p class="card-idea-paragraph">${getIdeaInput()}</p>
      <footer class="card-footer">
        <img src="./images/comment.svg" alt="comment button">
        <p class="card-comment">Comment</p>
      </footer>
    </div>
    `;
    cardContainerParent.insertAdjacentHTML("afterbegin", cardHtml);
  }
}

function getTitleInput() {
  var titleInput = document.querySelector(".title-input");
  return titleInput.value;
}

function getIdeaInput() {
  var ideaInput = document.querySelector(".body-textarea");
  return ideaInput.value;
}
