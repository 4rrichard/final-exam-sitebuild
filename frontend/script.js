const headerComponent = function () {
  return `
    <header>
      <h1 class="title">NEW YORK TIMES BEST SELLERS</h1>
      <span class="material-icons menu-icon"> menu </span>
    </header>
    `;
};

const sectionComponent = function () {
  return `
    <section></section>
    `;
};

const bookCardComponent = function (title, sub, text, id) {
  return `
         <div class="card-container">   
          <div class="card">
            <div class="card--number">${id}</div>
            <h3 class="card--book-author">${sub}</h3>
            <h2 class="card--book-title">${title}</h2>
            <h3 class="card--book-text">${text}</h3>
          </div>
            <button class="read-more-button">
              read more
              <span class="material-icons arrow-icon"> arrow_forward </span>
            </button>
         </div>   
        `;
};

const loadEvent = function () {
  const rootElement = document.getElementById("root");

  rootElement.insertAdjacentHTML("beforeend", headerComponent());
  rootElement.insertAdjacentHTML("beforeend", sectionComponent());

  const sectionElement = document.querySelector("section");

  let index = 1;

  for (const book of books.cards) {
    sectionElement.insertAdjacentHTML(
      "beforeend",
      bookCardComponent(book.title, book.sub, book.text, index)
    );
    index++;
  }
};
window.addEventListener("load", loadEvent);
