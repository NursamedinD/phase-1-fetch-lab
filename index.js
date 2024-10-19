function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch ('https://anapioficeandfire.com/api/books')
  .then (response => {
    if (!response.ok) {
      throw new Error('Something went wrong with the request');
    }
    return response.json();
  })
  .then(function(data) {
    renderBooks(data);
  })
  .catch(function(error) {
    console.error('There was a problem with the fetch:', error);
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
