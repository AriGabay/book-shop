'use strict';

function onInit() {
  renderBooks();
}

function renderBooks() {
  var book = getBook();
  var strHTMLs = book.map(function (book) {
    return `<tr>
        <td >${book.id}</td>
        <td>${book.name}</td>
        <td>${getPrice(book.price)}</td>
        <td data-trans='butt-read' class="green butt" onclick="onReadBook('${
          book.name
        }','${book.img}')">Read</td><td data-trans='butt-update' class="orange butt" onclick="onUpdateModal(${book.id})">Update</td><td data-trans='butt-delete' class="red butt" onclick="onRemoveBook('${book.id}')">Delete</td>
        </tr>`;
  });
  document.querySelector('tbody').innerHTML = strHTMLs.join('');
}

function onAddBook() {
  var name = prompt('book name');
  var price = +prompt('price');
  addBook(name, price);
  renderBooks();
}

function onRemoveBook(bookId) {
  removeBook(bookId);
  renderBooks();
}
function onUpdateBook(bookId) {
  var newPrice = document.querySelector('.book-new-price').value;
  updateBook(bookId, newPrice);
  toggleModal();
  renderBooks();
}

function onUpdateModal(id) {
  var strHtml = `<form>
    <h3>Update price</h3>
    <input data-trans="input-new-price-placeholder" class="book-new-price"
    placeholder="Update price" type="number" min="0.00" max="10000.00" step="0.1"
    required />
    <button class="submit-new-price" onclick="onUpdateBook(${id})">Update</button>
    </form>`;
  var elModal = document.querySelector('.modal-update');
  elModal.innerHTML = strHtml;
  toggleModal();
}

function onReadBook(name, image) {
  var strHTML = `
    <button class="modal-butt" onclick="closeModal()">x</button>
    <h2>${name}</h2>
    <p>
        Description:${makeLorem()}
    </p>
    <div class="modal-image">
        <img src="${image}">
        <div class="rate">
        <div class="decrease" onclick="decreaseRate('${name}')">-</div>
        <div class="display-rate">0</div>
        <div class="decrease" onclick="increaseRate('${name}')">+</div>
        </div>
    </div>`;
  var elModal = document.querySelector('.modal-read');
  elModal.classList.remove('hide');
  elModal.innerHTML = strHTML;
}

function closeModal() {
  var elModal = document.querySelector('.modal-read');
  elModal.classList.add('hide');
}
function decreaseRate(name) {
  var obj = gBooks.find(function (book) {
    return book.name === name;
  });
  var num = decrease(obj);
  document.querySelector('.display-rate').innerText = num;
}

function increaseRate(name) {
  var obj = gBooks.find(function (book) {
    return book.name === name;
  });
  var num = increase(obj);
  document.querySelector('.display-rate').innerText = num;
}

function onAddBook() {
  var name = document.querySelector('.book-name').value;
  var price = document.querySelector('.book-price').value;
  if (!price) return;
  submitForm();
  addBook(name, price);
  renderBooks();
}

function submitForm() {
  var frm = document.querySelector('form');
  frm.submit(); // Submit the form
  frm.reset(); // Reset all form data
  return false; // Prevent page refresh
}

function onSetLang(lang) {
  console.log('lang:', lang);
  setLang(lang);
  renderBooks();
  doTrans();
}

function toggleModal() {
  var x = document.querySelector('.book-new-price');
  var elModal = document.querySelector('.hideing-modal');
  elModal.classList.toggle('hide');
}
function onSetSort(val) {
  sortBy(val);
  renderBooks();
}

function onNextPage() {
  nextPage();
  onSetLang('en')
  renderBooks();
}

function onPrevPage() {
    prevPage();
    onSetLang('en')
  renderBooks();
}
