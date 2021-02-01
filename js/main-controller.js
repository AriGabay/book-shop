'use strict';
function onInit() {
    renderBooks()
}

function renderBooks() {
    var strHTMLs = gBooks.map(function (book) {
        return `<tr>
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.price}$</td>
        <td class="green btn" onclick="onReadBook('${book.name}','${book.img}')">Read</td><td class="orange btn" onclick="onUpdateBook('${book.id}')">Update</td><td class="red btn" onclick="onRemoveBook('${book.id}')">Delete</td>
        </tr>`
    })
    document.querySelector('tbody').innerHTML = strHTMLs.join('')
}

function onAddBook() {
    var name = prompt('book name')
    var price = +prompt('price')
    addBook(name, price)
    renderBooks()
}

function onRemoveBook(bookId) {
    removeBook(bookId)
    renderBooks()
}
function onUpdateBook(bookId) {
    updateBook(bookId)
    renderBooks()
}

function onReadBook(name, image) {
    var strHTML = `
    <button class="modal-btn" onclick="closeModal()">x</button>
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
    </div>`
    var elModal = document.querySelector('.modal')
    elModal.classList.remove('hide')
    elModal.innerHTML = strHTML
}

function closeModal() {
    var elModal = document.querySelector('.modal')
    elModal.classList.add('hide')

}
function decreaseRate(name) {

    var obj = gBooks.find(function (book) {
        return book.name === name
    })
    var num = decrease(obj)
    document.querySelector('.display-rate').innerText = num
}

function increaseRate(name) {
    var obj = gBooks.find(function (book) {
        return book.name === name
    })
    var num = increase(obj)
    document.querySelector('.display-rate').innerText = num
}
